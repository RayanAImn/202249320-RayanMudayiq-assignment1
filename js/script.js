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
  const navLinks = document.querySelectorAll(".navbar__link");
  const contactEl = document.getElementById("contact");
  const themeToggleBtn = document.getElementById("theme-toggle");
  const visitTimerEl = document.getElementById("visit-timer");
  const projectsGrid = document.getElementById("projects-grid");
  const projectSortSelect = document.getElementById("project-sort");
  const projectLevelSelect = document.getElementById("project-level");
  const projectsLevelMessageEl = document.getElementById("projects-level-message");
  const githubReposEl = document.getElementById("github-repos");
  const quickActionsTrigger = document.getElementById("quick-actions-trigger");
  const commandPaletteEl = document.getElementById("command-palette");
  const commandPaletteCloseBtn = document.getElementById("command-palette-close");
  const commandPaletteInput = document.getElementById("command-palette-input");
  const commandPaletteList = document.getElementById("command-palette-list");

  // ══════════════════════════════════════════
  //  1. TYPING TEXT — Hero name
  // ══════════════════════════════════════════
  const heroName = "Rayan Mudhayiq";
  const heroDescription = "Software engineer excelling in full stack app development, software design, and UI/UX";

  let nameIndex = 0;
  let descIndex = 0;

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
  const codeTypingInterval = setInterval(() => {
    const target = getCodeTarget();
    if (codeDisplayedLen < target && codeDisplayedLen < dartCodeSnippet.length) {
      codeDisplayedLen = Math.min(codeDisplayedLen + 2, dartCodeSnippet.length);
      const visible = dartCodeSnippet.slice(0, codeDisplayedLen);
      bgCodeContent.innerHTML = syntaxHighlight(visible);
    }

    if (codeDisplayedLen >= dartCodeSnippet.length) {
      clearInterval(codeTypingInterval);
    }
  }, 30);

  // ══════════════════════════════════════════
  //  3. SCROLL HANDLER — drives multiple effects
  // ══════════════════════════════════════════
  let activeLink = "Home";
  let isScrolling = false;

  function onScroll() {
    if (!isScrolling) {
      window.requestAnimationFrame(() => {
        handleScrollLogic();
        isScrolling = false;
      });
      isScrolling = true;
    }
  }

  function handleScrollLogic() {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const isMobileLayout = window.innerWidth <= 768;

    // ── Hero parallax fade-out ──
    const heroProgress = Math.min(scrollY / (windowHeight * 0.5), 1);
    const heroVerticalOffset = isMobileLayout ? " translateY(-50%)" : "";
    heroEl.style.transform = `translateX(-${heroProgress * 150}%)${heroVerticalOffset}`;
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
    const contactTop = contactEl.offsetTop;
    if (scrollY >= contactTop - windowHeight * 0.5) {
      contactEl.classList.add("contact--visible");
    }

    // ── Navbar active link tracking ──
    let newActive = "Home";
    if (scrollY < windowHeight * 0.5) {
      newActive = "Home";
    } else {
      const aboutTop = aboutEl.offsetTop;
      if (scrollY >= contactTop - 200) {
        newActive = "Contact";
      } else if (scrollY >= workTop - 100) {
        newActive = "Projects";
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
        
        // Re-trigger animation using requestAnimationFrame instead of forced reflow
        bracketL.style.animation = "none";
        bracketR.style.animation = "none";
        
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            bracketL.style.animation = "";
            bracketR.style.animation = "";
          });
        });

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
  //  4. ASSIGNMENT 3: STATE + TIMER
  // ══════════════════════════════════════════
  function applyTheme(theme) {
    document.body.classList.toggle("theme-light", theme === "light");
    themeToggleBtn.textContent = `Theme: ${theme === "light" ? "Light" : "Dark"}`;
  }

  const savedTheme = localStorage.getItem("portfolioTheme") || "dark";
  applyTheme(savedTheme);

  themeToggleBtn.addEventListener("click", () => {
    const nextTheme = document.body.classList.contains("theme-light") ? "dark" : "light";
    applyTheme(nextTheme);
    localStorage.setItem("portfolioTheme", nextTheme);
    themeToggleBtn.blur();
  });
  
  // ══════════════════════════════════════════
  //  4.1 ASSIGNMENT 4 INNOVATION: QUICK ACTIONS
  // ══════════════════════════════════════════
  function getQuickActions() {
    const nextTheme = document.body.classList.contains("theme-light") ? "dark" : "light";

    return [
      {
        id: "go-home",
        label: "Go to Home",
        keywords: "home top start hero",
        run: () => window.scrollTo({ top: 0, behavior: "smooth" })
      },
      {
        id: "go-about",
        label: "Go to About",
        keywords: "about profile bio",
        run: () => aboutEl.scrollIntoView({ behavior: "smooth", block: "start" })
      },
      {
        id: "go-projects",
        label: "Go to Projects",
        keywords: "projects work portfolio",
        run: () => workEl.scrollIntoView({ behavior: "smooth", block: "start" })
      },
      {
        id: "go-contact",
        label: "Go to Contact",
        keywords: "contact email message",
        run: () => contactEl.scrollIntoView({ behavior: "smooth", block: "start" })
      },
      {
        id: "toggle-theme",
        label: `Switch to ${nextTheme} theme`,
        keywords: `theme mode ${nextTheme}`,
        run: () => {
          applyTheme(nextTheme);
          localStorage.setItem("portfolioTheme", nextTheme);
        }
      }
    ];
  }

  function renderQuickActions(filterText = "") {
    const normalized = filterText.trim().toLowerCase();
    const actions = getQuickActions().filter((action) => {
      if (!normalized) return true;
      return `${action.label} ${action.keywords}`.toLowerCase().includes(normalized);
    });

    commandPaletteList.innerHTML = "";

    if (actions.length === 0) {
      commandPaletteList.innerHTML = '<p class="command-palette__empty">No actions match your search.</p>';
      return;
    }

    actions.forEach((action) => {
      const actionButton = document.createElement("button");
      actionButton.type = "button";
      actionButton.className = "command-palette__action";
      actionButton.textContent = action.label;
      actionButton.addEventListener("click", () => {
        closeCommandPalette();
        action.run();
      });
      commandPaletteList.appendChild(actionButton);
    });
  }

  function openCommandPalette() {
    commandPaletteEl.hidden = false;
    document.body.style.overflow = "hidden";
    commandPaletteInput.value = "";
    renderQuickActions("");
    commandPaletteInput.focus();
  }

  function closeCommandPalette() {
    commandPaletteEl.hidden = true;
    document.body.style.overflow = "";
  }

  if (quickActionsTrigger && commandPaletteEl && commandPaletteCloseBtn && commandPaletteInput && commandPaletteList) {
    quickActionsTrigger.addEventListener("click", openCommandPalette);
    commandPaletteCloseBtn.addEventListener("click", closeCommandPalette);

    commandPaletteInput.addEventListener("input", (event) => {
      renderQuickActions(event.target.value);
    });

    commandPaletteInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        const firstAction = commandPaletteList.querySelector(".command-palette__action");
        if (firstAction) firstAction.click();
      }
    });
  }

  document.addEventListener("keydown", (event) => {
    const isShortcut = (event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k";
    if (isShortcut) {
      event.preventDefault();
      if (commandPaletteEl.hidden) {
        openCommandPalette();
      } else {
        closeCommandPalette();
      }
    }

    if (event.key === "Escape" && !commandPaletteEl.hidden) {
      closeCommandPalette();
    }
  });

  const visitStart = Date.now();
  setInterval(() => {
    const elapsedMs = Date.now() - visitStart;
    const totalSeconds = Math.floor(elapsedMs / 1000);
    const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
    const seconds = String(totalSeconds % 60).padStart(2, "0");
    visitTimerEl.textContent = `On site: ${minutes}:${seconds}`;
  }, 1000);

  // ══════════════════════════════════════════
  //  5. ASSIGNMENT 2: INTERACTIVE FEATURES
  // ══════════════════════════════════════════
  
  // -- A. Toast Notifications --
  function showToast(message, type = "success") {
    const container = document.getElementById("toast-container");
    const toast = document.createElement("div");
    toast.className = `toast toast--${type}`;
    toast.innerHTML = `<div class="toast__content">
      <span style="font-size: 18px;">${type === "success" ? "✓" : "⚠"}</span>
      <span>${message}</span>
    </div>`;
    
    container.appendChild(toast);
    
    setTimeout(() => toast.classList.add("show"), 10);
    
    setTimeout(() => {
      toast.classList.remove("show");
      setTimeout(() => toast.remove(), 400);
    }, 4000);
  }

  // -- B. Project Filtering + Sorting + Level Rules --
  const filterTabs = document.querySelectorAll(".filter-tab");
  const projectCards = document.querySelectorAll(".project-card");

  function applyProjectFiltersAndSort() {
    const activeFilterTab = document.querySelector(".filter-tab--active");
    const filter = activeFilterTab ? activeFilterTab.dataset.filter : "all";
    const selectedLevel = projectLevelSelect.value;
    const selectedSort = projectSortSelect.value;

    projectCards.forEach((card) => {
      const matchesFilter = filter === "all" || card.dataset.category === filter;
      const matchesLevel = selectedLevel === "all" || card.dataset.level === selectedLevel;

      if (matchesFilter && matchesLevel) {
        card.classList.remove("hide");
        card.classList.add("show");
        card.style.position = "relative";
      } else {
        card.classList.remove("show");
        card.classList.add("hide");
        setTimeout(() => {
          if (card.classList.contains("hide")) {
            card.style.position = "absolute";
          }
        }, 400);
      }
    });

    const visibleCards = Array.from(projectCards).filter((card) => card.classList.contains("show"));
    visibleCards.sort((a, b) => {
      const yearA = Number(a.dataset.year || 0);
      const yearB = Number(b.dataset.year || 0);
      return selectedSort === "newest" ? yearB - yearA : yearA - yearB;
    });

    visibleCards.forEach((card) => projectsGrid.appendChild(card));

    if (selectedLevel === "beginner") {
      projectsLevelMessageEl.textContent = "Beginner mode: showing foundational projects.";
    } else if (selectedLevel === "advanced") {
      projectsLevelMessageEl.textContent = "Advanced mode: showing complex and high-impact projects.";
    } else {
      projectsLevelMessageEl.textContent = "Showing all projects.";
    }
  }

  filterTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      filterTabs.forEach((t) => t.classList.remove("filter-tab--active"));
      tab.classList.add("filter-tab--active");
      applyProjectFiltersAndSort();
    });
  });

  projectSortSelect.addEventListener("change", applyProjectFiltersAndSort);
  projectLevelSelect.addEventListener("change", applyProjectFiltersAndSort);
  applyProjectFiltersAndSort();
  
  async function fetchJsonWithTimeout(url, timeoutMs = 8000) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

    try {
      const response = await fetch(url, { signal: controller.signal });
      if (!response.ok) throw new Error(`Request failed: ${response.status}`);
      return await response.json();
    } finally {
      clearTimeout(timeoutId);
    }
  }

  // -- C. Public API (Fun Fact / Quote) --
  async function fetchRandomQuote() {
    const quoteText = document.getElementById("api-quote-text");
    try {
      const data = await fetchJsonWithTimeout("https://api.adviceslip.com/advice");
      quoteText.textContent = `"${data.slip.advice}"`;
    } catch (error) {
      quoteText.textContent = `"The only way to do great work is to love what you do." - Fallback Quote`;
      console.error("Failed to fetch API quote:", error);
    }
  }
  fetchRandomQuote();

  // -- D. External API: Live GitHub Repositories --
  async function fetchGithubRepositories() {
    try {
      const repos = await fetchJsonWithTimeout("https://api.github.com/users/RayanAImn/repos?sort=updated&per_page=4");
      if (!Array.isArray(repos) || repos.length === 0) {
        throw new Error("No repositories returned");
      }

      githubReposEl.innerHTML = "";
      repos.slice(0, 4).forEach((repo) => {
        const repoCard = document.createElement("article");
        repoCard.className = "github-repo";

        const title = document.createElement("h4");
        title.className = "github-repo__title";
        const link = document.createElement("a");
        link.href = repo.html_url;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.textContent = repo.name;
        title.appendChild(link);

        const description = document.createElement("p");
        description.className = "github-repo__description";
        description.textContent = repo.description || "No description available.";

        repoCard.appendChild(title);
        repoCard.appendChild(description);
        githubReposEl.appendChild(repoCard);
      });
    } catch (error) {
      githubReposEl.innerHTML = '<p class="github-repos__status">Could not load GitHub repositories right now. Please try again later.</p>';
      console.error("Failed to fetch GitHub repositories:", error);
    }
  }
  fetchGithubRepositories();

  // -- E. Contact Form Auto-Save & Validation --
  const contactForm = document.getElementById("contact-form");
  const nameInput = document.getElementById("contact-name");
  const emailInput = document.getElementById("contact-email");
  const msgInput = document.getElementById("contact-message");
  
  if (localStorage.getItem("contactDraft_name")) nameInput.value = localStorage.getItem("contactDraft_name");
  if (localStorage.getItem("contactDraft_email")) emailInput.value = localStorage.getItem("contactDraft_email");
  if (localStorage.getItem("contactDraft_msg")) msgInput.value = localStorage.getItem("contactDraft_msg");
  
  [nameInput, emailInput, msgInput].forEach(input => {
    input.addEventListener("input", (e) => {
      if(e.target.id === "contact-name") localStorage.setItem("contactDraft_name", e.target.value);
      if(e.target.id === "contact-email") localStorage.setItem("contactDraft_email", e.target.value);
      if(e.target.id === "contact-message") localStorage.setItem("contactDraft_msg", e.target.value);
    });
  });
  
  function showError(input, errorId, message) {
    const errorSpan = document.getElementById(errorId);
    if(errorSpan) {
      errorSpan.textContent = message;
      errorSpan.classList.add("visible");
    }
    input.style.borderColor = "#ef4444";
  }
  
  function clearError(input, errorId) {
    const errorSpan = document.getElementById(errorId);
    if(errorSpan) {
      errorSpan.classList.remove("visible");
    }
    input.style.borderColor = "var(--border-primary)";
  }
  
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault(); 
    let isValid = true;
    
    clearError(nameInput, "error-name");
    clearError(emailInput, "error-email");
    clearError(msgInput, "error-message");
    
    if (nameInput.value.trim().length < 2) {
      showError(nameInput, "error-name", "Name must be at least 2 characters.");
      isValid = false;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
      showError(emailInput, "error-email", "Please enter a valid email address.");
      isValid = false;
    }
    
    if (msgInput.value.trim().length < 10) {
      showError(msgInput, "error-message", "Message must be at least 10 characters.");
      isValid = false;
    }

    if (isValid) {
      showToast("Message sent successfully!", "success");
      contactForm.reset();
      
      localStorage.removeItem("contactDraft_name");
      localStorage.removeItem("contactDraft_email");
      localStorage.removeItem("contactDraft_msg");
    } else {
      showToast("Please fix the errors in the form.", "error");
    }
  });
});
