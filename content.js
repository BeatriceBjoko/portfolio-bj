// ─────────────────────────────────────────────────────────────
// All editable content for the portfolio. Change text here — never in components.
// `cover` = main image (cube face, cards, case-study hero). `tone` = placeholder palette when no image.
// Chapter layouts:
//   'stats'     big numbers           · 'steps'  numbered grid of short blocks
//   'strip'     horizontal-scroll row · 'iter'   before → after
//   'trio'      3 screens             · 'wide'   1–2 large images
//   'annotated' screens with explanation next to each (alternating)
//   'grow'      small → full-bleed image
// Only the case-study hero image distorts; every other image is shown clean.
// ─────────────────────────────────────────────────────────────
(function () {
const L = 'assets/lume/', M = 'assets/muse/', V = 'assets/vrb/';
window.BB_CONTENT = window.BB_CONTENT || {};
window.BB_CONTENT.projects = [
  { id: 'lume', n: 1, title: 'Lume', type: 'Care app for informal carers · Final Work', tagline: 'Caring for someone you love shouldn’t be a solo job. Lume shares it with the whole circle.', role: 'UX/UI Design & Development', year: 2026, tone: 'verde',
    cover: L + 'key-visual.jpg',
    tools: ['Figma', 'Photoshop', 'InDesign', 'React Native'],
    description: 'Lume turns caring for a loved one from a lonely task into a shared responsibility. A bilingual NL/FR app that brings the whole care circle together: one live agenda, safe medication checks and room for the carer’s own wellbeing.',
    awards: ['Impact Award', 'Jury Award', 'Mastermind Award'],
    context: 'My bachelor’s Final Work 2025/26 · Multimedia & Creative Technology, Erasmushogeschool Brussel',
    status: 'Currently preparing the release on the App Store and Google Play.',
    magazine: L + 'Lume-magazine-Beatrice-Bjoko.pdf',
    features: [
      ['Care circle', 'A closed space around one person. Admins and members, joined with a 6-digit invite code.'],
      ['Shared agenda', 'Tasks, appointments and medication moments, synced live for the whole family.'],
      ['Medication scan', 'Scan the DataMatrix code, checked against the official Belgian FAGG database.'],
      ['Wellbeing', 'Breathing exercises, an energy battery and an SOS that quietly asks the circle for help.']
    ],
    chapters: [
      { layout: 'stats', title: 'Research',
        text: 'Literature study, market and competitor analysis. Belgium counts one to two million informal carers, yet existing platforms like MijnGezondheid and Helena focus on medical records, not on the daily chaos of planning, tasks, medication and the carer’s own wellbeing. Three personas and a MoSCoW analysis kept the scope sharp.',
        stats: [['1–2M', 'informal carers in Belgium'], ['42%', 'of Flemish adults gave informal care in 2025'], ['64k', 'students combine their studies with care']] },
      { layout: 'gallery', title: 'Wireframes',
        text: 'Structure first, colour later. Grayscale wireframes for the core flows (create or join a care circle, sign up, scan medication) with one goal: keep cognitive load to an absolute minimum. Every interaction had to fit in under 30 seconds, in a waiting room or between two appointments.',
        media: [
          { src: L + 'wf-signup.png', ratio: 393 / 852, cap: 'Wireframe · Create account' },
          { src: L + 'wf-scan-not-ok.png', ratio: 393 / 852, cap: 'Wireframe · Wrong medication' },
          { src: L + 'ui-onboarding.png', ratio: 443 / 896, cap: 'UI · Onboarding' },
          { src: L + 'ui-scan.png', ratio: 443 / 1089, cap: 'UI · Medication scan' }
        ] },
      { layout: 'iter', title: 'Testing & iterations',
        text: 'I tested wireframes and mockups with three experts in informal care: Freya Ponteur (HOGENT), Pieter Vanreybrouck (Steunpunt Mantelzorg) and Karel Hermans (VIVEL). Their feedback led to a privacy-first medication module, one-tap export to Apple or Google Calendar, breathing exercises and an SOS button, simpler wording for older users and haptic feedback.',
        before: { src: L + 'wf-zorgkring-hd.png', ratio: 1572 / 3408, cap: 'Wireframe' },
        after: { src: L + 'mockup-zorgkring.jpg', ratio: 896 / 1200, cap: 'Final' } },
      { layout: 'wide', title: 'Moodboard',
        text: 'A care app doesn’t have to feel clinical. The moodboard moved from energetic and chaotic to softer and more accessible: more white space, soft inner glows, subtle transparency and glass, with one bold lime accent.',
        media: [{ src: L + 'moodboard.jpg', ratio: 842 / 595, cap: 'Moodboard · glass, soft gradients, one lime accent' }] },
      { layout: 'trio', title: 'Final design',
        text: 'The final UI keeps every screen to one clear task, with large touch targets and plain language, so a carer can act in seconds, even with one hand free.',
        media: [
          { src: L + 'ui-onboarding.png', ratio: 443 / 896, cap: 'Onboarding' },
          { src: L + 'ui-scan.png', ratio: 443 / 1089, cap: 'Medication scan' },
          { src: L + 'ui-login.png', ratio: 443 / 896, cap: 'Log in' }
        ] },
      { layout: 'grow', title: 'Build',
        text: 'Designed in Figma and Photoshop, magazine in InDesign. Built with React Native + Expo (one codebase for iOS and Android), Reanimated and Skia for animation, and Firebase for login, real-time sync, cloud functions and push notifications. Every scan is verified against 10,516 registered Belgian medicines.',
        media: [{ src: L + 'mockup-zorgkring.jpg', cap: 'Start your care circle' }] }
    ] },

  { id: 'muse', n: 2, title: 'Muse', type: 'Emotion-driven museum ecosystem for WIELS', tagline: 'Your mood picks the tour. A museum visit that starts in the street and follows you inside.', role: 'UX/UI Design', year: 2025, tone: 'driftwave',
    cover: M + 'meta-glasses.jpg',
    tools: ['Figma', 'Kiosk', 'Smartphone', 'AR glasses'],
    description: 'Muse reads your mood and turns it into a personal museum tour, before you even walk into WIELS. A cross-device ecosystem: an emotion kiosk in the street, a smartphone guide inside, and optional AR glasses on top.',
    context: 'Design V · Erasmushogeschool Brussel, 2025/26 · Brief: a personalised, low-threshold cross-device tour for a Brussels museum',
    features: [
      ['EMO-Kiosk', 'A public screen at Brussel-Zuid that senses your mood (no identity recognition) and asks three quick questions.'],
      ['Matchmaking', 'Emotion + experience level + taste become three mini-exhibitions: “this fits you, pick one”.'],
      ['Muse app', 'Scan the QR and your profile, route and first-visit discount are waiting. Location-aware once you’re inside.'],
      ['AR layer', 'Artist background, hidden details and colour psychology over each work, hands-free on Meta glasses.']
    ],
    chapters: [
      { layout: 'steps', title: 'Two personas',
        text: 'I designed for two extremes. If it works for someone who thinks museums aren’t for them and for someone who has seen it all, it works for everyone in between.',
        steps: [
          ['Jamal, 21', 'Programming student from Molenbeek. Gaming, TikTok, streetwear. Passes Brussel-Zuid daily but finds museums “too high-class” and is afraid of not getting it. Needs: playful, short, nothing that feels like a lesson.'],
          ['Isabelle, 47', 'Architect, visits six to eight museums a year. Finds classic tours too general. Needs: depth, new angles, and works off the obvious tourist route.']
        ] },
      { layout: 'steps', title: 'Customer journey',
        text: 'I mapped every touchpoint from awareness to after the visit, each with its own device and context. The kiosk is the first experience; the phone is the follow-up.',
        steps: [
          ['Awareness', 'EMO-Kiosk in the station → QR scan → a mood-based reminder instead of a generic push: “Your curiosity deserves a place in WIELS.”'],
          ['Visit', 'Indoor check-in, a route sized to your time (short, medium or deep), AR on the works and soft emotion checkpoints.'],
          ['After', 'Your emotional art profile, favourite works, upcoming exhibitions and a moodboard you can share.']
        ] },
      { layout: 'iter', title: 'Wireframes',
        text: 'Interactive wireframes in Figma, built straight from the user stories: architecture and navigation first, styling later. Tested with users my own age thinking aloud, then simplified where they hesitated.',
        before: { src: M + 'wf-landing.png', ratio: 393 / 852, cap: 'Wireframe · Welcome' },
        after: { src: M + 'mockup-welkom.png', ratio: 1500 / 1125, cap: 'Final · Welcome' } },
      { layout: 'steps', title: 'Privacy by design',
        text: 'Emotion AI can feel invasive, so the visitor stays in control. No constant tracking: emotion is shared only when you choose to.',
        steps: [
          ['Opt-in scan', 'An optional selfie before the tour picks a matching thematic route.'],
          ['Ask, don’t watch', 'On quiet moments the app asks “How did this work move you?” and you answer with one emoji.'],
          ['Patterns, not live', 'Behaviour is analysed afterwards as themes: which styles, colours and works you return to.']
        ] },
      { layout: 'wide', title: 'Final design',
        text: 'My own branding, apart from WIELS’ house style: bold editorial type, chromatic offsets and soft coral circles. Expressive enough for Isabelle, playful enough for Jamal.',
        media: [
          { src: M + 'mockup-ticket.png', ratio: 1500 / 1125, cap: 'App · ticket & mood route' },
          { src: M + 'meta-glasses.jpg', ratio: 842 / 595, cap: 'Meta glasses · start screen' }
        ] }
    ] },

  { id: 'vrb', n: 3, title: 'VRB', type: 'LINE recycling-rewards app · Internship Bangkok', tagline: 'Recycle, earn coins, treat yourself, all without leaving the chat app everyone already uses.', role: 'UX/UI Design', year: 2026, tone: 'verde',
    cover: V + 'cover.jpg',
    tools: ['Figma', 'LINE OA Manager', 'Rich menu'],
    description: 'A recycling app that lives inside LINE, Thailand’s everyday messenger. Residents upload proof of recycling, earn coins and swap them for real rewards. One system, three roles: customer, admin and store.',
    context: 'Internship at LiveIn (TH) Co., Ltd. · Bangkok, 2025/26 · Designed in an international team, with my mentor and the developer',
    features: [
      ['LINE login', 'No new app to install: users enter from the LINE rich menu and log in with their LINE account.'],
      ['Proof of recycling', 'Photo upload per bag, with plastic, glass, metal and paper sorted and counted.'],
      ['Coins & rewards', 'Coins per material, swapped for vouchers from local partners and redeemed with a QR code.'],
      ['Admin verification', 'An evidence queue where admins check every submission before coins are paid out.']
    ],
    chapters: [
      { layout: 'steps', title: 'From spec to structure',
        text: 'The feature spec was long: three roles, each with its own flows, forms, reward logic, reports and push messages. Before drawing a single screen, I broke it down, summarised it in my own words and confirmed it with my mentor.',
        steps: [
          ['Analyse', 'Listed the must-haves: LINE login, proof submission, coin earning and withdrawal, QR rewards, ranking, maps, admin verification.'],
          ['Structure', 'Separated the roles and mapped how the LINE rich menu hands off to the mobile screens.'],
          ['Design', 'User flow first, visual choices after. Designing inside LINE meant rethinking a classic app structure.'],
          ['Refine', 'Iterated on feedback, research and technical constraints over several weeks.']
        ] },
      { layout: 'annotated', title: 'Customer screens',
        text: 'For residents the loop had to feel instant: recycle, see your coins grow, treat yourself.',
        items: [
          { src: V + 'rewards.png', ratio: 390 / 934, role: 'Customer', title: 'Exchange coins', text: 'Balance and ID on top, the project selector right under it, rewards as a simple two-column grid. Price and stock are the only info you need to decide.' },
          { src: V + 'item.png', ratio: 390 / 1032, role: 'Customer', title: 'Reward detail', text: 'One big image, coin price and remaining stock, then the conditions in plain bullets. A single fixed button to claim.' },
          { src: V + 'history.png', ratio: 390 / 938, role: 'Customer', title: 'Coin history', text: 'Earned and spent, filterable with three tabs and grouped by day. Pending items are marked in orange so nothing feels lost.' },
          { src: V + 'submission.png', ratio: 390 / 1008, role: 'Customer', title: 'Submission status', text: 'After uploading a bag, a clear “Pending approval” badge, the coins you’ll get per material and the verified photo.' }
        ] },
      { layout: 'annotated', title: 'Admin screens',
        text: 'Admins check a lot of submissions, so their tools are built for speed and fewer mistakes.',
        items: [
          { src: V + 'admin-review.png', ratio: 390 / 1328, role: 'Admin', title: 'Review submission', text: 'The photo next to steppers per material, each showing its coin value. The total updates live, there’s an optional note, and approve / reject sit at thumb height.' },
          { src: V + 'admin-rewards.png', ratio: 390 / 1247, role: 'Admin', title: 'Reward management', text: 'Every reward with quota, expiry and redemptions this month. Edit and delete sit on the card, add reward at the top. Six tabs cover evidence, users, rewards, dashboard, store and reports.' }
        ] },
      { layout: 'steps', title: 'Teamwork',
        text: 'Working in an international team taught me to show my reasoning, not just the result.',
        steps: [
          ['Mentor', 'Regular check-ins. I explained my choices, like the large rich-menu format and its clickable areas, which I tested in LINE Official Account Manager.'],
          ['Developer', 'Screens and flows handed over with role logic and states spelled out, so design and build stayed aligned.'],
          ['Usability test', 'Not required, but I walked another intern through the flow, watched where they got stuck and fixed those parts.'],
          ['Client', 'In a meeting with an external client from India, I argued for a more intuitive user flow using usability principles.']
        ] }
    ] },

  { id: 'firebird', n: 4, title: 'Firebird', type: 'Parallax fairytale website + class portal · Front-end', tagline: 'A Russian fairytale you don’t read, you scroll through, layer by layer.', role: 'Design & Front-end Development', year: 2025, tone: 'driftwave',
    cover: 'https://i.ytimg.com/vi/4f4stmTZrkY/maxresdefault.jpg',
    tools: ['Figma', 'Photoshop', 'Adobe Firefly', 'React'],
    description: 'The Russian fairytale of the Firebird, told as you scroll. A one-page parallax website in React, plus a portal site that links the fairytale sites of every classmate.',
    context: 'Front-end course · Erasmushogeschool Brussel, 2025 · Built in sprints, starting with design research and concept',
    links: [['Visit live site', 'https://ehb-mct.github.io/cp-frontend-BeatriceBjoko/sprookje', 'arrow-up-right'], ['Watch the explainer', 'https://www.youtube.com/watch?v=4f4stmTZrkY', 'arrow-up-right']],
    features: [
      ['Story in chapters', 'Each part of the tale is its own scene, so you walk through the story instead of reading it.'],
      ['Layered parallax', 'Background, middle and foreground move at different speeds to create depth.'],
      ['Easter egg', 'A hidden rollover animation, as the brief asked, for visitors who explore.'],
      ['Portal site', 'Home, all projects and a making-of page, with React Router navigation.']
    ],
    chapters: [
      { layout: 'steps', title: 'From tale to scenes',
        text: 'Prince Ivan finds a mysterious orchard, lets the Firebird go in exchange for a magic feather, and uses it to defeat the immortal giant Kashei. I translated every turn of the story into its own scroll moment.',
        steps: [
          ['The orchard', 'Zoom in on Ivan; the orchard moves slower than he does, so you step into the scene.'],
          ['The Firebird', 'The bird appears with flickering feathers and its wings move gently as you scroll.'],
          ['Stone garden', 'Eleven stone princes, with light and shadow shifting over them.'],
          ['Kashei & the dance', 'The scene darkens as tension builds, then turns bright and fast when the spell breaks.']
        ] },
      { layout: 'steps', title: 'Parallax research',
        text: 'Before designing, I collected an example of every parallax technique and decided where each one serves the story.',
        steps: [
          ['Standard', 'Forest slow, garden faster, Ivan fastest: depth while you scroll.'],
          ['Layered', 'Night sky, clouds and the bird on separate layers, so she seems to fly towards you.'],
          ['Multi-directional', 'Magic symbols drift sideways while Kashei comes in from the edge.'],
          ['Mouse', 'A golden feather floats with your cursor and the stone princes’ eyes follow it.']
        ] },
      { layout: 'wide', title: 'Storyboard',
        text: 'The whole site drawn as a comic first: every chapter on paper, with the interaction written next to it. Paper is the quickest way to test whether the flow tells the story.',
        media: [
          { src: 'assets/firebird/storyboard-1.jpg', ratio: .75, cap: 'Storyboard 01 · intro & orchard' },
          { src: 'assets/firebird/storyboard-2.jpg', ratio: .75, cap: 'Storyboard 02 · Firebird & Kashei' },
          { src: 'assets/firebird/storyboard-3.jpg', ratio: .75, cap: 'Storyboard 03 · the ending' }
        ] },
      { layout: 'palette', title: 'Style sheet',
        text: 'Warm fire colours against a deep teal night, a regal serif for titles and handwritten flourishes, as if the story comes from an old book.',
        colors: [['#E55568', 'Rose'], ['#FF6B35', 'Flame'], ['#F7B801', 'Gold'], ['#A54B3F', 'Ember'], ['#184A45', 'Night teal'], ['#0D0D0D', 'Ink']],
        fonts: [['Cinzel', 'Titles', "'Cinzel', serif", 700], ['Open Sans', 'Body text', "'Open Sans', sans-serif", 400], ['Great Vibes', 'Decorative', "'Great Vibes', cursive", 400]] },
      { layout: 'video', title: 'Explainer', youtube: '4f4stmTZrkY',
        text: 'A walkthrough of the finished site and the portal.' },
      { layout: 'steps', title: 'Build',
        text: 'Images generated with Adobe Firefly and finished in Photoshop, designed in Figma, then built and deployed.',
        steps: [
          ['React components', 'The site split into logical, reusable components.'],
          ['JSON + map()', 'All projects in the portal rendered from one JSON file.'],
          ['Router & Hooks', 'React Router for the portal; hooks drive scroll and animation state.'],
          ['GitHub Pages', 'Deployed and documented in the README, with every source explained.']
        ] }
    ] },

  { id: 'eyecandy', n: 5, title: 'EyeCandy', type: 'Expert Lab · 3D product film for a fictional drink brand', tagline: 'A juice brand that doesn’t exist, launched with a 3D film that runs live in your browser.', role: 'Concept, 3D & Front-end', year: 2025, tone: 'noor',
    cover: 'assets/eyecandy/frame-b.jpg',
    tools: ['React Three Fiber', 'Three.js', 'GSAP', 'Lenis'],
    description: 'A juice brand I invented, launched as a 3D product film that plays in the browser. Built in Expert Lab, a course that runs like a real job: you pitch your own project, research and experiment, and are allowed to fail.',
    context: 'Expert Lab · Erasmushogeschool Brussel, 2025 · Brand, name and product are fictional',
    features: [
      ['Own brief', 'I chose the theme: a fictional drink brand and its launch film.'],
      ['3D in the browser', 'The bottle and its ingredients as real-time 3D with React Three Fiber and drei.'],
      ['Scroll choreography', 'GSAP timelines with Lenis smooth scroll drive every scene.'],
      ['Optimised models', 'Models compressed with gltf-transform so the film loads fast.']
    ],
    chapters: [
      { layout: 'video', title: 'The result', src: 'assets/eyecandy/eyecandy-result.mp4', poster: 'assets/eyecandy/frame-b.jpg', ratio: 1920 / 910,
        text: 'The final product film, rendered live in the browser.' },
      { layout: 'steps', title: 'Working like a studio',
        text: 'Expert Lab is a process, not a finished product. There’s room to experiment and to fail, and feedback almost always leads to a better perspective.',
        steps: [
          ['Own proposal', 'Every project needs a technical skill and a theme of its own, beyond a tutorial.'],
          ['Scrum at 9:00', 'Present like a real job from 9:00 to 17:00, with a daily stand-up.'],
          ['Coaching', 'Regular coaching talks and an evaluation every two weeks, plus a weekly self-evaluation.'],
          ['Trello', 'I planned sprints and tracked progress on my own Trello board.']
        ] },
      { layout: 'wide', title: 'Stills',
        text: 'Bold type, fruit textures and soft pastel light: the brand feels fresh and playful.',
        media: [
          { src: 'assets/eyecandy/frame-a.jpg', ratio: 1920 / 910, cap: 'Opening · Mellow juice' },
          { src: 'assets/eyecandy/frame-b.jpg', ratio: 1920 / 910, cap: 'Product · Pure energy' }
        ] },
      { layout: 'steps', title: 'Stack',
        text: 'A lean, modern front-end stack, chosen for real-time 3D and smooth motion.',
        steps: [
          ['Vite + React 19', 'Fast dev server and build.'],
          ['R3F + drei', 'Three.js scenes written as React components.'],
          ['GSAP', 'Timelines for every camera move and reveal.'],
          ['Lenis', 'Smooth scrolling synced with the animation.']
        ] }
    ] },

  { id: 'posters', n: 6, title: 'Posters', type: 'Campaign & poster design', tagline: 'Two stories told with as few words as possible.', role: 'Graphic Design', year: 2024, tone: 'lumen',
    cover: 'assets/posters/ethio-ad.jpg',
    tools: ['Photoshop', 'Illustrator', 'InDesign'],
    description: 'Two posters that tell a story with as little text as possible. One advertising campaign carried from print to Instagram, and one poster for a social cause.',
    context: 'Design courses · Erasmushogeschool Brussel, 2024/25',
    links: [['Open the full ad (PDF)', 'assets/posters/ETHIO-advertising-campaign.pdf', 'arrow-up-right'], ['Inspiration board (PDF)', 'assets/posters/Inspiration-board-Duff.pdf', 'arrow-up-right']],
    chapters: [
      { layout: 'wide', title: 'ETHIO · Vision for a fairer world',
        text: 'An advertising concept for a fictional product: an A4 ad with concept image, slogan, logo, product visual and website, plus an Instagram story teaser and carousel in the same visual language. The same look runs from offline to online; the social versions add motion.',
        media: [{ src: 'assets/posters/ethio-ad.jpg', ratio: 2480 / 3508, cap: 'A4 advertisement · ETHIO' }] },
      { layout: 'steps', title: 'A poster for a cause',
        text: 'Design V brief: a poster for a fictional product that helps a known persona move an NGO’s mission forward. The message has to land without reading the text, so it’s told in one image, respectfully and without sensational visuals.',
        steps: [
          ['Cause & persona', 'Pick an NGO and a persona, then a credible product that grows their impact.'],
          ['Inspiration board', 'The persona’s world in graphics: packaging, interfaces, signs.'],
          ['Symbol, icon, index', 'Turn an abstract idea into one clear image.'],
          ['A2 poster', 'Type only supports. The story has to work without it.']
        ] }
    ] }
];

window.BB_CONTENT.me = {
  name: 'Beatrice Bjoko',
  role: 'UX/UI & Front-end Developer',
  city: 'Brussels, Belgium',
  email: 'beatricebjoko@hotmail.com',
  portrait: 'assets/me/portrait.jpg',
  cv: 'assets/me/CV-Beatrice-Bjoko.pdf',
  languages: ['Dutch', 'French', 'English', 'Romanian'],
  socials: [
    ['LinkedIn', 'https://www.linkedin.com/in/beatrice-bjoko-b1180a303/']
  ],
  skills: ['User research', 'User testing', 'Wireframing & prototyping', 'Interaction design', 'Figma', 'Photoshop', 'Illustrator', 'InDesign', 'JavaScript', 'React / React Native', 'Expo + Firebase', 'Three.js / R3F', 'GSAP'],
  experience: [
    ['01 → 04 / 2026', 'LiveIn · Bangkok, Thailand', 'UX/UI Designer & Front-end Intern'],
    ['2023 → 2026', 'Erasmushogeschool Brussel', 'BA Multimedia & Creative Technologies · magna cum laude · Final Work “Lume”: Jury, Impact and Mastermind Awards'],
    ['2021 → now', 'Hospitality', 'Customer service, working under pressure, teamwork at large events'],
    ['2020 → 2023', 'Vrije Universiteit Brussel', 'Law']
  ]
};
})();
// Lock globals immediately (the design-system bundle also ships demo data under these names).
['BB_PROJECTS', 'projects', 'BB_ME', 'me'].forEach(function (k, i, a) { if (i % 2) return; var key = a[i + 1]; Object.defineProperty(window, k, { configurable: true, get: function () { return window.BB_CONTENT[key]; }, set: function () {} }); });
