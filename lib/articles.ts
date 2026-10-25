export type ArticleSection =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] };

export type Article = {
  slug: string;
  title: string;
  category: string;
  tag: string;
  minutes: number;
  summary: string;
  sections: ArticleSection[];
};

export const articles: Article[] = [
  {
    slug: "saas-dashboard-information-architecture",
    title: "How to Structure SaaS Dashboard Information Architecture",
    category: "SaaS Design",
    tag: "Dashboards",
    minutes: 9,
    summary: "A practical framework for navigation, hierarchy, metrics, and action density.",
    sections: [
      { type: "p", text: "A SaaS dashboard is usually the first screen a customer sees after login, and the screen they will spend most of their time in. Get the information architecture right and the product feels effortless. Get it wrong and every feature you ship lands in a menu nobody can find. Here is a practical framework for structuring it." },
      { type: "h2", text: "Start with the job, not the menu" },
      { type: "p", text: "Most dashboards are organized the way the database is organized — by data source. Revenue, customers, billing, settings. That is backwards. Start by listing the five to seven jobs a user actually comes to the dashboard to do: check if anything broke overnight, find a customer, approve a payout. The navigation should be a map of jobs, not a mirror of your tables." },
      { type: "p", text: "Write the jobs down as plain sentences. If you cannot describe a job in one sentence, it is not a job — it is a feature hiding inside a menu." },
      { type: "h2", text: "The four layers of dashboard IA" },
      { type: "p", text: "Think of dashboard structure as four nested layers. Fix them in order, because each one constrains the next." },
      { type: "h3", text: "1. Global navigation" },
      { type: "p", text: "Keep it to five to seven top-level items, ordered by frequency of use. Group the rest under a single More or Settings bucket. If you need more than seven items, your information architecture is a content problem, not a navigation problem." },
      { type: "h3", text: "2. Page layout" },
      { type: "p", text: "Every page should answer one question. The question goes in the top-left, the answer takes the majority of the screen, and everything else — filters, secondary stats, links — sits to the right or below. If a page answers two questions, split it." },
      { type: "h3", text: "3. Section hierarchy" },
      { type: "p", text: "Within a page, order sections by what the user needs to see first: urgent and actionable at the top, context in the middle, reference at the bottom. Use the same order across pages so users build a mental map." },
      { type: "h3", text: "4. Component density" },
      { type: "p", text: "Not every metric deserves a big card. Reserve large cards for the two or three numbers that drive decisions; render the rest as compact table rows or inline stats. Density is a signal — the bigger the visual weight, the more important the data." },
      { type: "h2", text: "The above-the-fold rule" },
      { type: "p", text: "The first screenful is prime real estate. Put the highest-value, most-requested information there: the metric the user checks daily, the action they take most often, or the alert they need to act on. Never waste the fold on a welcome message or a hero illustration." },
      { type: "h2", text: "Group by task, not by data source" },
      { type: "p", text: "A common mistake is mirroring your API. Invoices, subscriptions, and customers as separate nav items is how the backend thinks. The user thinks in tasks: get paid, grow revenue, keep customers. Group the data around those tasks. A customer view that pulls invoices, subscriptions, and support tickets together is worth more than three separate screens." },
      { type: "h2", text: "Naming and labels" },
      { type: "p", text: "Every nav item and section heading should be a concrete noun or verb-noun the user already says out loud. Analytics is vague; revenue versus last month is specific. Overview is a catch-all that usually means I did not decide what goes here. Name things so a brand-new user could guess what is behind each link." },
      { type: "h2", text: "Progressive disclosure" },
      { type: "p", text: "Do not show everything at once. Show the summary and let users click or expand for detail. A table row expands to show the full record; a metric card links to a drill-down view. The goal is to keep the top level calm and push complexity one level deeper, where only the people who need it will look." },
      { type: "h2", text: "Empty states, permissions, and edge cases" },
      { type: "ul", items: [
        "Design every empty state. No data yet, with a one-line next step, is a chance to teach rather than a dead end.",
        "Make permissions part of the IA. Users should see only what they are allowed to do — a hidden action is better than a visible-but-disabled one.",
        "Plan for the single-row case and the thousand-row case before you ship. Layouts break at the extremes."
      ] },
      { type: "h2", text: "A validation checklist" },
      { type: "p", text: "Before you ship, run these checks:" },
      { type: "ul", items: [
        "Can a new user describe what each nav item does without clicking it?",
        "Can a returning user complete their most common task in under three clicks?",
        "Is the most important metric visible without scrolling?",
        "Is every menu item named the way users name it, not the way the codebase names it?",
        "Does any page try to answer more than one question?"
      ] },
      { type: "p", text: "If the answer to any is no, the architecture needs work — not the visuals. Structure first, polish later." }
    ]
  },
  {
    slug: "figma-token-workflow",
    title: "A Lean Figma Token Workflow for Growing Teams",
    category: "Figma Tutorials",
    tag: "Design Systems",
    minutes: 7,
    summary: "How to make variables, modes, and component decisions that engineers can trust.",
    sections: [
      { type: "p", text: "Design tokens — colors, spacing, type, and radii stored as named values — are the fastest way to keep a growing design system consistent. But most teams over-engineer them and end up with a token library nobody understands. Here is a lean workflow that designers and engineers will both actually use." },
      { type: "h2", text: "Name tokens by role, not by value" },
      { type: "p", text: "Never name a token blue-500 or gray-light. Values change; roles do not. Name it what it is for: primary, muted, danger, border. When you later swap the blue for a different blue, the name stays true and nothing downstream breaks. Role-based names are the entire point of tokens." },
      { type: "h2", text: "Three tiers, not three hundred" },
      { type: "p", text: "A lean token system has exactly three layers:" },
      { type: "h3", text: "1. Primitives" },
      { type: "p", text: "The raw palette — actual hex values, font families, and base spacing numbers. These live in one place and are referenced by nothing except the next tier. Keep them boring and minimal; a twelve-color palette is usually enough." },
      { type: "h3", text: "2. Semantic" },
      { type: "p", text: "Primitives mapped to meaning: background, surface, text-primary, border-default. Components reference semantic tokens only. This is the layer that lets you ship light and dark mode by flipping a mode, not by restyling components." },
      { type: "h3", text: "3. Component tokens" },
      { type: "p", text: "Only create these when a component genuinely needs its own value — a button padding, a card radius. If a value is used in one place, it is a hard-coded style, not a token. Do not make a token for every property." },
      { type: "h2", text: "Use Figma variables and modes from day one" },
      { type: "p", text: "Figma variables, plus modes, are the mechanism that makes tokens work. Define primitives as variables, then create a semantic layer that references them, and add modes for light and dark. Components read the semantic variables, so switching themes is a mode toggle, not a redesign." },
      { type: "p", text: "One rule that keeps things sane: components never reference primitives directly. If a component points at a raw hex, you have leaked the abstraction and modes will break." },
      { type: "h2", text: "Keep the token list small enough to memorize" },
      { type: "p", text: "If a designer has to open a spreadsheet to know whether to use spacing-4 or gap-md, the system has failed. Aim for a palette you can hold in your head: roughly eight to sixteen colors, a four-to-six step spacing scale, two typefaces, and a handful of radii. Small systems get used; big systems get ignored." },
      { type: "h2", text: "Document decisions, not just values" },
      { type: "p", text: "A token name alone does not tell you why it exists. Next to each token, write one line: what it is for and when to use it. Spacing-lg is for space between card sections, not button padding. This is the difference between a token library and a naming convention with a UI." },
      { type: "h2", text: "Hand off to code" },
      { type: "p", text: "Keep token names identical to the codebase CSS variables or Tailwind config. If Figma calls it color/primary and the code calls it brand-500, engineers will translate it wrong every time. Align the naming at the start — ideally the same person owns both — and sync Figma tokens to code when they change." },
      { type: "p", text: "When you change a token, treat it like an API change: note it in the changelog, because every component that uses it just shifted under someone's feet." },
      { type: "h2", text: "A lean naming convention" },
      { type: "ul", items: [
        "Use slash-scoped names: color/primary, spacing/4, radius/md.",
        "Pluralize groups and singularize values: colors versus color.",
        "Avoid light and dark in the name — that is what modes are for.",
        "Skip the words token and variable in names. They add noise."
      ] }
    ]
  },
  {
    slug: "ux-research-for-pre-seed-startups",
    title: "UX Research for Pre-Seed Startups",
    category: "UX Design",
    tag: "Research",
    minutes: 6,
    summary: "A compact research plan that answers real product questions without slowing the team.",
    sections: [
      { type: "p", text: "At pre-seed, you are not doing research to build a research department — you are doing it to avoid building the wrong thing. The goal is not a forty-page report; it is enough signal to make a few sharp decisions fast. Here is the compact version that fits a pre-seed timeline." },
      { type: "h2", text: "You do not need a research team — you need five conversations" },
      { type: "p", text: "Five honest interviews will tell you more than a survey of a hundred strangers. Talk to people who have recently tried to solve the problem you are solving, or recently bought a competitor. Five is enough to hear the same pain points repeat — and repetition is the signal you are looking for." },
      { type: "h2", text: "Ask about the last time, not the future" },
      { type: "p", text: "People are bad at predicting what they would buy, but good at describing what actually happened. Ask, walk me through the last time you dealt with this — not, would you use a product that does X. The past is evidence; the future is a guess." },
      { type: "h2", text: "Interview customers, not friends" },
      { type: "p", text: "Friends and coworkers will be polite and optimistic. Strangers with skin in the game will be honest. Recruit from where your users already are — a subreddit, a Slack community, LinkedIn, a founder network. Offer a small incentive to show you value their time. Five to eight interviews is plenty." },
      { type: "h2", text: "Run a usability test on your own mockup" },
      { type: "p", text: "Before you write a line of code, put a clickable Figma prototype in front of three to five people and watch them try to complete one core task. You do not need a lab — a video call and screen share works. Look for the moment they hesitate, misinterpret a label, or ask what does this do. Those are the bugs that matter." },
      { type: "h2", text: "Do a competitive teardown in an afternoon" },
      { type: "p", text: "Sign up for the three to five products your target customers currently use. Map what they promise on the homepage, what actually happens in the first five minutes, and where they frustrate you. The gap between the marketing and the product is where you can win. Write one page of notes per competitor and stop." },
      { type: "h2", text: "Turn findings into a one-page brief" },
      { type: "p", text: "Everything you learn should compress into a single page:" },
      { type: "ul", items: [
        "The problem, in the customer's own words — quote them.",
        "The three pain points that came up most.",
        "What users currently do instead — the real competitor.",
        "The one task your MVP must nail.",
        "Three assumptions to validate next."
      ] },
      { type: "p", text: "If it does not fit on one page, you are collecting trivia, not insight." },
      { type: "h2", text: "Know when to stop" },
      { type: "p", text: "Pre-seed research is a flashlight, not a lighthouse. Stop when the same answers keep coming back and you can predict what the next interview will say. That is the signal you have learned enough to start building. Momentum matters more than another interview." }
    ]
  },
  {
    slug: "mobile-app-onboarding-patterns",
    title: "Mobile App Onboarding Patterns That Earn Trust",
    category: "UI Design",
    tag: "Mobile",
    minutes: 8,
    summary: "When to use progressive disclosure, permissions, personalization, and empty states.",
    sections: [
      { type: "p", text: "Onboarding is where trust is won or lost. Users decide in the first minute whether your app is worth the screen real estate — and whether they can trust you with their data. The patterns below are about one thing: earning permission to ask for more." },
      { type: "h2", text: "Show value before asking for anything" },
      { type: "p", text: "The single biggest onboarding mistake is asking for an email, a notification permission, and a sign-up before the user has seen what the app does. Flip it: let people experience the value first, then ask. A try-it-first flow or a preview of the core screen converts better than a wall of forms." },
      { type: "h2", text: "Ask for permissions in context, not upfront" },
      { type: "p", text: "Never fire every permission dialog on launch. Ask for a permission at the exact moment it is needed — the camera permission when they tap scan, the location permission when they search nearby. Contextual asks feel reasonable; upfront asks feel like a data grab. And always explain why: we use your location to find events near you." },
      { type: "h2", text: "Use progressive disclosure" },
      { type: "p", text: "Do not explain every feature on the first screen. Reveal complexity as the user needs it. The first session should be a narrow path through the core loop — do one meaningful thing successfully — with advanced features appearing later, in tooltips or in context. A new user should never see a settings page on day one." },
      { type: "h2", text: "The three onboarding patterns" },
      { type: "h3", text: "1. Benefits-first" },
      { type: "p", text: "Two or three screens that show what the app does, each with a short headline and a real screenshot. Best for products that need explaining — a new category or an unfamiliar workflow. Keep it under three slides and always add a skip option." },
      { type: "h3", text: "2. Progressive" },
      { type: "p", text: "No separate onboarding; the app teaches itself as you use it. Empty states explain the next step, and the first task is guided with a subtle prompt. Best for familiar patterns like email or to-do apps." },
      { type: "h3", text: "3. Do-it-live" },
      { type: "p", text: "Ask for one or two things upfront that personalize the experience — what do you use this for — and immediately show a tailored first screen. Best for apps where personalization meaningfully changes the first impression, like fitness or finance apps." },
      { type: "p", text: "Most apps should combine these: a one-screen benefits intro, then progressive disclosure, then a do-it-live personalization step." },
      { type: "h2", text: "Reduce friction everywhere you can" },
      { type: "ul", items: [
        "Offer Continue with Apple or Google — one tap beats a form.",
        "Default to sensible options so users do not have to configure anything.",
        "Cut every field you do not strictly need at signup. You can ask later, once they are invested.",
        "Make every step skippable or deferrable."
      ] },
      { type: "h2", text: "Let people skip and defer" },
      { type: "p", text: "Trust flows both ways. A skip-for-now on personalization and a not-now on notifications tells the user they are in control. They will often come back and enable it later, after you have proven the value. A forced flow that cannot be skipped is a dark pattern, and users remember it." },
      { type: "h2", text: "A quick onboarding checklist" },
      { type: "ul", items: [
        "Does the user see the core value before signing up?",
        "Is every permission asked at the moment it is needed?",
        "Is the first session a single guided task, not a tour of every feature?",
        "Can every step be skipped?",
        "Do empty states teach the next action?"
      ] }
    ]
  }
];
