/* =============================================
   Rayan Mudhayiq — Personal Portfolio Script
   ============================================= */

// ── Dart Code Snippet (background code panel) ──
const dartCodeSnippet = `import 'package:flutter/material.dart';
import '../../core/constants/colors.dart';
import '../../utils/date_formatter.dart';
import 'widgets/user_avatar_stack.dart';

class ProjectSummaryCard extends StatelessWidget {
  final String projectId;
  final String projectName;
  final String category;
  final double progress;
  final List<String> teamAvatarUrls;
  final DateTime deadline;
  final bool isPriority;
  final VoidCallback? onPressed;

  const ProjectSummaryCard({
    super.key,
    required this.projectId,
    required this.projectName,
    required this.category,
    required this.progress,
    this.teamAvatarUrls = const [],
    required this.deadline,
    this.isPriority = false,
    this.onPressed,
  });

  bool get isOverdue => DateTime.now().isAfter(deadline) && progress < 1.0;

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);
    final colorScheme = theme.colorScheme;

    return GestureDetector(
      onTap: onPressed,
      child: Container(
        margin: const EdgeInsets.symmetric(vertical: 8, horizontal: 16),
        decoration: BoxDecoration(
          color: colorScheme.surface,
          borderRadius: BorderRadius.circular(16),
          border: isPriority
              ? Border.all(color: colorScheme.primary.withOpacity(0.5), width: 1.5)
              : Border.all(color: Colors.transparent),
          boxShadow: [
            BoxShadow(
              color: const Color(0xFF1A1F38).withOpacity(0.08),
              blurRadius: 12,
              offset: const Offset(0, 4),
              spreadRadius: 2,
            ),
          ],
        ),
        child: ClipRRect(
          borderRadius: BorderRadius.circular(16),
          child: Stack(
            children: [
              // Background decorative gradient for high priority items
              if (isPriority)
                Positioned(
                  top: -20,
                  right: -20,
                  child: Container(
                    width: 100,
                    height: 100,
                    decoration: BoxDecoration(
                      shape: BoxShape.circle,
                      gradient: RadialGradient(
                        colors: [
                          colorScheme.primary.withOpacity(0.2),
                          Colors.transparent,
                        ],
                      ),
                    ),
                  ),
                ),

              Padding(
                padding: const EdgeInsets.all(20),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    _buildHeader(context),
                    const SizedBox(height: 16),
                    _buildProjectTitle(theme),
                    const SizedBox(height: 8),
                    _buildDeadlineInfo(theme),
                    const SizedBox(height: 24),
                    _buildFooter(context),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildHeader(BuildContext context) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: [
        Container(
          padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 6),
          decoration: BoxDecoration(
            color: Theme.of(context).colorScheme.primaryContainer.withOpacity(0.4),
            borderRadius: BorderRadius.circular(8),
          ),
          child: Text(
            category.toUpperCase(),
            style: TextStyle(
              fontSize: 10,
              fontWeight: FontWeight.bold,
              letterSpacing: 1.2,
              color: Theme.of(context).colorScheme.primary,
            ),
          ),
        ),
        if (isPriority)
          const Icon(
            Icons.flag_rounded,
            color: Colors.orangeAccent,
            size: 20,
          ),
      ],
    );
  }

  Widget _buildProjectTitle(ThemeData theme) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          projectName,
          style: theme.textTheme.titleLarge?.copyWith(
            fontWeight: FontWeight.w700,
            fontSize: 18,
            height: 1.2,
          ),
          maxLines: 2,
          overflow: TextOverflow.ellipsis,
        ),
      ],
    );
  }

  Widget _buildDeadlineInfo(ThemeData theme) {
    return Row(
      children: [
        Icon(
          Icons.calendar_today_rounded,
          size: 14,
          color: isOverdue ? theme.colorScheme.error : theme.colorScheme.outline,
        ),
        const SizedBox(width: 6),
        Text(
          "Due \${DateFormatter.formatMedium(deadline)}",
          style: theme.textTheme.bodySmall?.copyWith(
            color: isOverdue ? theme.colorScheme.error : theme.colorScheme.outline,
            fontWeight: FontWeight.w500,
          ),
        ),
      ],
    );
  }

  Widget _buildFooter(BuildContext context) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: [
        // Team Avatars
        UserAvatarStack(
          imageUrls: teamAvatarUrls,
          limit: 3,
          borderColor: Theme.of(context).colorScheme.surface,
        ),

        // Progress Indicator
        Expanded(
          child: Padding(
            padding: const EdgeInsets.only(left: 16),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.end,
              children: [
                Row(
                  mainAxisAlignment: MainAxisAlignment.end,
                  children: [
                    Text(
                      "\${(progress * 100).toInt()}%",
                      style: const TextStyle(
                        fontWeight: FontWeight.bold,
                        fontSize: 12,
                      ),
                    ),
                  ],
                ),
                const SizedBox(height: 6),
                ClipRRect(
                  borderRadius: BorderRadius.circular(4),
                  child: LinearProgressIndicator(
                    value: progress,
                    minHeight: 6,
                    backgroundColor: Theme.of(context).dividerColor.withOpacity(0.1),
                    valueColor: AlwaysStoppedAnimation<Color>(
                      _getProgressColor(context, progress),
                    ),
                  ),
                ),
              ],
            ),
          ),
        ),
      ],
    );
  }

  Color _getProgressColor(BuildContext context, double value) {
    if (value >= 1.0) return Colors.greenAccent.shade700;
    if (value < 0.3) return Theme.of(context).colorScheme.tertiary;
    return Theme.of(context).colorScheme.primary;
  }
}`;

// ──────────────────────────────────────────────
//  Syntax Highlighter  (ported from React component)
// ──────────────────────────────────────────────
function syntaxHighlight(text) {
  // 1. Escape HTML
  let clean = text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  // 2. Hide strings
  const strings = [];
  clean = clean.replace(/("[^"]*"|'[^']*')/g, (match) => {
    strings.push(match);
    return `__STR_${strings.length - 1}__`;
  });

  // 3. Hide comments
  const comments = [];
  clean = clean.replace(/(\/\/.*?)$/gm, (match) => {
    comments.push(match);
    return `__COMMENT_${comments.length - 1}__`;
  });

  // 4. Keywords (pink)
  clean = clean.replace(
    /\b(class|final|const|return|void|import|package|extends|super|required|this|true|false|if|else|get|new)\b/g,
    '<span style="color:#e879f9">$1</span>'
  );

  // Types (orange)
  clean = clean.replace(
    /\b(bool|double|String|int|List|VoidCallback|Widget|BuildContext|ThemeData|Color)\b/g,
    '<span style="color:#fb923c">$1</span>'
  );

  // Class names (blue)
  clean = clean.replace(
    /\b(StatelessWidget|ProjectSummaryCard|GestureDetector|Container|EdgeInsets|BoxDecoration|Border|BoxShadow|Offset|ClipRRect|Stack|Positioned|Padding|Column|Row|Text|Icon|UserAvatarStack|Expanded|SizedBox|LinearProgressIndicator|AlwaysStoppedAnimation|Theme|TextStyle|BorderRadius|RadialGradient|DateTime|DateFormatter|Icons|Colors|BoxShape)\b/g,
    '<span style="color:#60a5fa">$1</span>'
  );

  // Functions (green) — word followed by (
  clean = clean.replace(
    /\b([a-z][a-zA-Z0-9_]*)(?=\()/g,
    '<span style="color:#4ade80">$1</span>'
  );

  // Variables (purple)
  clean = clean.replace(
    /\b(projectId|projectName|category|progress|teamAvatarUrls|deadline|isPriority|onPressed|theme|colorScheme|context|imageUrls|limit|borderColor|value|isOverdue)\b/g,
    '<span style="color:#c084fc">$1</span>'
  );

  // Numbers (yellow)
  clean = clean.replace(
    /\b(\d+\.?\d*|0x[0-9A-Fa-f]+)\b/g,
    '<span style="color:#fbbf24">$1</span>'
  );

  // 5. Restore comments (gray)
  clean = clean.replace(/__COMMENT_(\d+)__/g, (_, index) => {
    return `<span style="color:#6b7280;font-style:italic">${comments[parseInt(index)]}</span>`;
  });

  // 6. Restore strings (yellow)
  clean = clean.replace(/__STR_(\d+)__/g, (_, index) => {
    return `<span style="color:#fbbf24">${strings[parseInt(index)]}</span>`;
  });

  return clean;
}

// ──────────────────────────────────────────────
//  DOM Ready
// ──────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  // ── Cache DOM elements ──
  const heroEl = document.getElementById("hero");
  const heroNameEl = document.getElementById("hero-name");
  const heroDescEl = document.getElementById("hero-description");
  const heroGlowEl = document.getElementById("hero-glow");
  const aboutEl = document.getElementById("about");
  const workEl = document.getElementById("work");
  const bgCodeEl = document.getElementById("bg-code");
  const bgCodeContent = document.getElementById("bg-code-content");
  const bgCodeCursor = document.getElementById("bg-code-cursor");
  const navLinks = document.querySelectorAll(".navbar__link");
  const contactEl = document.getElementById("contact");

  // ══════════════════════════════════════════
  //  1. TYPING TEXT — Hero name
  // ══════════════════════════════════════════
  const heroName = "Rayan Mudhayiq";
  const heroDescription = "Software engineer excelling in full stack app development, software design, and UI/UX";

  let nameIndex = 0;
  let descIndex = 0;
  let nameComplete = false;
  let descComplete = false;

  // Create cursor element for name
  const nameCursor = document.createElement("span");
  nameCursor.className = "typing-cursor";

  // Typing interval for the hero name
  const nameInterval = setInterval(() => {
    if (nameIndex < heroName.length) {
      heroNameEl.textContent = heroName.substring(0, nameIndex + 1);
      heroNameEl.appendChild(nameCursor);
      nameIndex++;
    } else {
      nameComplete = true;
      nameCursor.remove();
      clearInterval(nameInterval);
      // Start typing description
      heroDescEl.style.display = "block";
      startDescriptionTyping();
    }
  }, 100);

  function startDescriptionTyping() {
    const descCursor = document.createElement("span");
    descCursor.className = "typing-cursor";

    const descInterval = setInterval(() => {
      if (descIndex < heroDescription.length) {
        heroDescEl.textContent = heroDescription.substring(0, descIndex + 1);
        heroDescEl.appendChild(descCursor);
        descIndex++;
      } else {
        descComplete = true;
        descCursor.remove();
        clearInterval(descInterval);
        // Show glow after description is done
        heroGlowEl.classList.add("hero__glow--visible");
      }
    }, 50);
  }

  // ══════════════════════════════════════════
  //  2. BACKGROUND CODE — Scroll-driven typing
  // ══════════════════════════════════════════
  const initialLines = 80;
  let codeDisplayedLen = 0;

  function getCodeTarget() {
    const scrollY = window.scrollY;
    const baseChars = initialLines * 60;
    const scrollChars = scrollY * 5;
    return baseChars + scrollChars;
  }

  // Typing loop for background code (runs at 30 ms ticks)
  setInterval(() => {
    const target = getCodeTarget();
    if (codeDisplayedLen < target && codeDisplayedLen < dartCodeSnippet.length) {
      codeDisplayedLen = Math.min(codeDisplayedLen + 2, dartCodeSnippet.length);
      const visible = dartCodeSnippet.slice(0, codeDisplayedLen);
      bgCodeContent.innerHTML = syntaxHighlight(visible);
    }
  }, 30);

  // ══════════════════════════════════════════
  //  3. SCROLL HANDLER — drives multiple effects
  // ══════════════════════════════════════════
  let activeLink = "Home";

  function onScroll() {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;

    // ── Hero parallax fade-out ──
    const heroProgress = Math.min(scrollY / (windowHeight * 0.5), 1);
    heroEl.style.transform = `translateX(-${heroProgress * 150}%)`;
    heroEl.style.opacity = 1 - heroProgress;

    // ── Background code slide-out ──
    bgCodeEl.style.transform = `translateX(${heroProgress * 150}%)`;
    bgCodeEl.style.opacity = (1 - heroProgress) * 0.2;

    // ── About section fade-in ──
    if (scrollY > windowHeight * 0.6) {
      aboutEl.classList.add("about--visible");
    }

    // ── Work section fade-in ──
    const workTop = workEl.offsetTop;
    if (scrollY >= workTop - windowHeight * 0.4) {
      workEl.classList.add("work--visible");
    }

    // ── Contact section fade-in ──
    const contactTop2 = contactEl.offsetTop;
    if (scrollY >= contactTop2 - windowHeight * 0.5) {
      contactEl.classList.add("contact--visible");
    }

    // ── Navbar active link tracking ──
    let newActive = "Home";
    if (scrollY < windowHeight * 0.5) {
      newActive = "Home";
    } else {
      const aboutTop = aboutEl.offsetTop;
      const workTop2 = workEl.offsetTop;
      const contactTop = contactEl.offsetTop;
      if (scrollY >= contactTop - 200) {
        newActive = "Contact";
      } else if (scrollY >= workTop2 - 100) {
        newActive = "Work";
      } else if (scrollY >= aboutTop - 100) {
        newActive = "About";
      }
    }

    if (newActive !== activeLink) {
      activeLink = newActive;
      updateNavbar();
    }
  }

  // ── Navbar rendering ──
  function updateNavbar() {
    navLinks.forEach((link) => {
      const name = link.dataset.name;
      const bracketL = link.querySelector(".navbar__bracket--left");
      const bracketR = link.querySelector(".navbar__bracket--right");
      const label = link.querySelector(".navbar__label");

      if (name === activeLink) {
        bracketL.style.display = "inline";
        bracketR.style.display = "inline";
        // Re-trigger animation
        bracketL.style.animation = "none";
        bracketR.style.animation = "none";
        void bracketL.offsetWidth; // force reflow
        bracketL.style.animation = "";
        bracketR.style.animation = "";

        label.classList.add("navbar__label--active");
      } else {
        bracketL.style.display = "none";
        bracketR.style.display = "none";
        label.classList.remove("navbar__label--active");
      }
    });
  }

  // Click handler for nav links
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      activeLink = link.dataset.name;
      updateNavbar();
    });
  });

  // Initial navbar state
  updateNavbar();

  // ── Hamburger menu toggle (mobile) ──
  const hamburger = document.getElementById("hamburger");
  const navbarLinksEl = document.getElementById("navbar-links");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("is-open");
    navbarLinksEl.classList.toggle("is-open");
  });

  // Close menu when a link is clicked (on mobile)
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("is-open");
      navbarLinksEl.classList.remove("is-open");
    });
  });

  // Attach scroll listener
  window.addEventListener("scroll", onScroll);
  onScroll(); // run once on load

  // ══════════════════════════════════════════
  //  5. CONTACT FORM — submit handler
  // ══════════════════════════════════════════
  const contactForm = document.getElementById("contact-form");
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault(); // No backend — prevent page reload

    // Show success message
    const existingMsg = contactForm.querySelector(".contact__success");
    if (existingMsg) existingMsg.remove();

    const successMsg = document.createElement("div");
    successMsg.className = "contact__success";
    successMsg.textContent = "// Message sent successfully!";
    contactForm.appendChild(successMsg);

    // Reset form fields
    contactForm.reset();

    // Remove success message after 4 seconds
    setTimeout(() => successMsg.remove(), 4000);
  });
});
