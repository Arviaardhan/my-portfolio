export interface ProjectData {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  role: string;
  platform: string;
  duration: string;
  stack: { label: string; variant: "red" | "teal" | "amber" | "blue" | "green" }[];
  accent: string;
  challenge: {
    headline: string;
    business: string;
    technical: string;
    userPain: string;
    vision: string;
  };
  architecture: {
    label: string;
    color: "red" | "teal" | "amber" | "blue" | "green";
    description: string;
  }[];
  buildSteps: {
    phase: string;
    problem: string;
    decision: string;
    approach: string;
    result: string;
  }[];
  screens: {
    title: string;
    description: string;
  }[];
  performance: {
    metric: string;
    value: string;
    detail: string;
  }[];
  outcome: {
    headline: string;
    results: string[];
  };
}

export const PROJECTS: ProjectData[] = [
  {
    slug: "finflow",
    title: "FinFlow",
    tagline: "Personal finance reimagined for the mobile generation.",
    description:
      "A full-featured personal finance app with real-time budget tracking, smart categorization, and seamless bank integrations. Built with modular architecture to support rapid feature iteration.",
    role: "Lead Mobile Architect",
    platform: "iOS & Android",
    duration: "8 months",
    stack: [
      { label: "React Native", variant: "teal" },
      { label: "TypeScript", variant: "blue" },
      { label: "Node.js", variant: "green" },
      { label: "PostgreSQL", variant: "amber" },
    ],
    accent: "primary",
    challenge: {
      headline: "Breaking Down the Core Challenge",
      business: "Traditional finance apps suffer from fragmented data and overwhelming interfaces that discourage consistent usage among younger demographics.",
      technical: "Real-time bank sync with 6 major providers, each with different API standards and auth flows. Sub-200ms transaction categorization on-device.",
      userPain: "Users abandoning budgeting within the first week due to manual entry friction and lack of actionable, contextual insights.",
      vision: "A finance companion that feels invisible — working in the background, surfacing insight at exactly the right moment.",
    },
    architecture: [
      { label: "Auth Module", color: "red", description: "Biometric + OAuth2 multi-provider authentication with secure token rotation." },
      { label: "Sync Engine", color: "teal", description: "Real-time bank integration layer with conflict resolution and retry queues." },
      { label: "ML Categorizer", color: "blue", description: "On-device transaction classification using a lightweight TFLite model." },
      { label: "UI System", color: "green", description: "Design system with 40+ composable components, theming, and motion primitives." },
      { label: "State Core", color: "amber", description: "Normalized Redux store with optimistic updates and offline persistence." },
    ],
    buildSteps: [
      { phase: "Foundation", problem: "No unified data model across bank providers.", decision: "Built an adapter pattern for bank APIs.", approach: "Created provider-agnostic transaction schema with mapping layers for each integration.", result: "Onboarded 6 banks in 3 weeks with a single integration contract." },
      { phase: "Intelligence", problem: "Server-side categorization too slow for real-time feel.", decision: "Moved ML inference to device.", approach: "Trained a compact TFLite model on anonymized transaction data, quantized to 2MB.", result: "< 50ms categorization with 94% accuracy on-device." },
      { phase: "Experience", problem: "Budget dashboards felt static and punitive.", decision: "Reframed budgeting as progress, not restriction.", approach: "Designed momentum-based UI with animated progress rings and contextual nudges.", result: "42% increase in weekly active engagement." },
      { phase: "Scale", problem: "Sync conflicts during concurrent multi-device usage.", decision: "Implemented CRDT-based conflict resolution.", approach: "Built a custom last-writer-wins merge strategy with vector clocks per entity.", result: "Zero data loss incidents across 50K+ concurrent users." },
    ],
    screens: [
      { title: "Dashboard", description: "Momentum-based budget overview with animated progress rings and smart alerts." },
      { title: "Transaction Feed", description: "Real-time categorized feed with swipe actions and contextual grouping." },
      { title: "Insights Engine", description: "AI-powered spending patterns with predictive budget forecasting." },
    ],
    performance: [
      { metric: "Cold Start", value: "1.2s", detail: "Lazy module loading with critical-path optimization." },
      { metric: "Frame Rate", value: "60fps", detail: "Offloaded animations to native driver with Reanimated 3." },
      { metric: "Bundle Size", value: "8.4MB", detail: "Code splitting, tree shaking, and asset compression." },
      { metric: "Crash Rate", value: "0.02%", detail: "Comprehensive error boundaries and graceful degradation." },
    ],
    outcome: {
      headline: "Built to Scale.",
      results: [
        "200K+ downloads in first 6 months",
        "4.8★ average rating across stores",
        "42% higher retention vs. industry average",
        "Featured in App Store 'Finance Essentials'",
      ],
    },
  },
  {
    slug: "pulse",
    title: "Pulse",
    tagline: "Health monitoring that adapts to you.",
    description:
      "A health & fitness companion app integrating wearable data, AI-powered insights, and progressive goal tracking. Designed for performance with offline-first architecture and smooth 60fps animations.",
    role: "Mobile Product Architect",
    platform: "iOS & Android",
    duration: "10 months",
    stack: [
      { label: "Flutter", variant: "blue" },
      { label: "Dart", variant: "teal" },
      { label: "Firebase", variant: "amber" },
      { label: "ML Kit", variant: "red" },
    ],
    accent: "accent",
    challenge: {
      headline: "Decoding the Health Data Puzzle",
      business: "Health apps overwhelm users with raw data without translating it into meaningful, personalized action plans.",
      technical: "Aggregating data from 12+ wearable APIs with inconsistent sampling rates and data formats into a unified health profile.",
      userPain: "Users feeling lost in metrics — steps, heart rate, sleep — without understanding what actually matters for their goals.",
      vision: "An adaptive health companion that learns your patterns and proactively guides you toward better outcomes.",
    },
    architecture: [
      { label: "Wearable Hub", color: "teal", description: "Universal connector for 12+ device APIs with normalized data streams." },
      { label: "Health Engine", color: "red", description: "Pattern recognition and anomaly detection on continuous health data." },
      { label: "Goal System", color: "green", description: "Adaptive goal framework that adjusts targets based on user behavior." },
      { label: "Render Layer", color: "blue", description: "Custom Flutter rendering pipeline for smooth health visualizations." },
      { label: "Sync Manager", color: "amber", description: "Offline-first data layer with background sync and conflict merging." },
    ],
    buildSteps: [
      { phase: "Data Layer", problem: "Wildly inconsistent data formats from wearables.", decision: "Built a normalization pipeline.", approach: "Created device-agnostic health data schema with per-provider adapters and interpolation.", result: "Unified data model supporting 12 devices with < 2% data variance." },
      { phase: "Intelligence", problem: "Generic health advice ignored by users.", decision: "Built personalized insight engine.", approach: "Trained on-device models using federated learning patterns for privacy-first personalization.", result: "3x improvement in user engagement with insights." },
      { phase: "Visualization", problem: "Standard charts felt clinical and cold.", decision: "Created organic, animated health visualizations.", approach: "Custom Flutter canvas rendering with spring-based animations and gesture-driven exploration.", result: "Users spending 2.4x more time exploring their health data." },
      { phase: "Offline", problem: "Health tracking must work without connectivity.", decision: "Offline-first architecture from day one.", approach: "Local-first data store with background sync, conflict resolution, and delta compression.", result: "Full functionality offline with seamless sync when connected." },
    ],
    screens: [
      { title: "Health Dashboard", description: "Organic data visualization with animated health rings and trend indicators." },
      { title: "Activity Flow", description: "Real-time workout tracking with live metrics and adaptive coaching." },
      { title: "Sleep Analysis", description: "Detailed sleep phase breakdown with quality scoring and recommendations." },
    ],
    performance: [
      { metric: "Sync Latency", value: "< 100ms", detail: "Delta-based sync with WebSocket push for real-time updates." },
      { metric: "Render Time", value: "16ms", detail: "Custom render pipeline with GPU-accelerated health charts." },
      { metric: "Battery Impact", value: "< 3%", detail: "Optimized background processing with adaptive polling intervals." },
      { metric: "Offline Storage", value: "< 50MB", detail: "Efficient binary serialization with automatic data pruning." },
    ],
    outcome: {
      headline: "Built to Scale.",
      results: [
        "500K+ active users within first year",
        "4.7★ rating with 'Best Health App' nomination",
        "35% improvement in user health goal completion",
        "Partnership with 3 major wearable manufacturers",
      ],
    },
  },
  {
    slug: "threadspace",
    title: "ThreadSpace",
    tagline: "Collaborative workspaces, pocket-sized.",
    description:
      "A team collaboration platform focused on async communication, rich media sharing, and smart notifications. Engineered with a plugin-based architecture for enterprise extensibility.",
    role: "Senior Mobile Engineer",
    platform: "Android",
    duration: "12 months",
    stack: [
      { label: "Kotlin", variant: "amber" },
      { label: "Jetpack Compose", variant: "green" },
      { label: "GraphQL", variant: "red" },
      { label: "AWS", variant: "blue" },
    ],
    accent: "brick-amber",
    challenge: {
      headline: "Rethinking Mobile Collaboration",
      business: "Enterprise teams needed mobile-first collaboration without sacrificing the depth of desktop tools.",
      technical: "Building a plugin system on mobile that allows enterprise clients to extend functionality without app updates.",
      userPain: "Notification fatigue and context-switching between multiple collaboration tools throughout the day.",
      vision: "A single workspace that adapts to each team's workflow through intelligent prioritization and modular extensions.",
    },
    architecture: [
      { label: "Plugin Engine", color: "amber", description: "Dynamic module loading system for enterprise-custom extensions." },
      { label: "Message Core", color: "red", description: "Rich text engine with real-time sync, mentions, and threading." },
      { label: "Notification AI", color: "blue", description: "ML-driven priority scoring to reduce noise and surface what matters." },
      { label: "Media Pipeline", color: "green", description: "Optimized media processing with adaptive quality and lazy loading." },
      { label: "Compose UI", color: "teal", description: "Fully declarative UI with shared element transitions and gestures." },
    ],
    buildSteps: [
      { phase: "Architecture", problem: "Monolithic app couldn't scale for enterprise needs.", decision: "Designed plugin-based modular architecture.", approach: "Built dynamic feature modules with dependency injection and isolated sandboxing.", result: "Enterprise clients can ship custom modules without app store updates." },
      { phase: "Messaging", problem: "Real-time sync with rich content is complex on mobile.", decision: "Built custom CRDT-based messaging engine.", approach: "Operational transform for text, CRDT for state, with WebSocket real-time layer.", result: "Zero message loss with < 50ms delivery in normal conditions." },
      { phase: "Intelligence", problem: "Users drowning in notifications from multiple channels.", decision: "Built ML-based notification prioritization.", approach: "On-device model trained on user interaction patterns to score notification urgency.", result: "68% reduction in unnecessary notification interruptions." },
      { phase: "Polish", problem: "Compose transitions felt janky with complex layouts.", decision: "Invested in custom animation system.", approach: "Shared element transitions with predictive back gestures and spring physics.", result: "Smooth 60fps navigation with natural-feeling gesture responses." },
    ],
    screens: [
      { title: "Thread View", description: "Contextual conversation threading with inline media and smart replies." },
      { title: "Workspace Hub", description: "Customizable workspace dashboard with plugin widgets and priority feed." },
      { title: "Focus Mode", description: "Distraction-free interface with smart notification batching." },
    ],
    performance: [
      { metric: "Plugin Load", value: "< 200ms", detail: "Lazy module initialization with pre-warmed dependency graph." },
      { metric: "Message Sync", value: "< 50ms", detail: "WebSocket with automatic reconnection and message queue." },
      { metric: "Memory Usage", value: "< 120MB", detail: "Aggressive image recycling and view composition optimization." },
      { metric: "APK Size", value: "12MB", detail: "Dynamic feature delivery with on-demand module downloads." },
    ],
    outcome: {
      headline: "Built to Scale.",
      results: [
        "Adopted by 150+ enterprise teams",
        "4.6★ rating on Play Store",
        "68% reduction in notification fatigue",
        "3 enterprise contracts within 6 months of launch",
      ],
    },
  },
  {
    slug: "cartograph",
    title: "Cartograph",
    tagline: "Navigate the world with context.",
    description:
      "An AR-enhanced navigation app combining real-time mapping with contextual overlays for tourism, accessibility, and urban exploration. Built for performance on mid-range devices.",
    role: "iOS Lead & AR Architect",
    platform: "iOS",
    duration: "9 months",
    stack: [
      { label: "Swift", variant: "red" },
      { label: "ARKit", variant: "teal" },
      { label: "MapKit", variant: "green" },
      { label: "CoreML", variant: "blue" },
    ],
    accent: "brick-teal",
    challenge: {
      headline: "Bridging Digital and Physical Navigation",
      business: "Traditional map apps provide directions but lack contextual understanding of the environment around the user.",
      technical: "Real-time AR overlay rendering at 60fps while simultaneously processing ML-based point-of-interest recognition on mid-range hardware.",
      userPain: "Tourists and explorers missing hidden gems, accessibility information, and cultural context that flat maps can't convey.",
      vision: "A contextual navigation layer that makes the invisible visible — history, accessibility routes, local stories, all overlaid on the real world.",
    },
    architecture: [
      { label: "AR Engine", color: "teal", description: "Custom ARKit pipeline with environment understanding and plane detection." },
      { label: "Context Layer", color: "blue", description: "Real-time POI recognition with ML-based relevance scoring." },
      { label: "Map Core", color: "green", description: "Custom MapKit integration with offline tile caching and route optimization." },
      { label: "Render Pipeline", color: "red", description: "Metal-accelerated AR overlay rendering with LOD system." },
      { label: "Data Mesh", color: "amber", description: "Federated data layer aggregating tourism, accessibility, and cultural databases." },
    ],
    buildSteps: [
      { phase: "Foundation", problem: "AR rendering too heavy for mid-range devices.", decision: "Built adaptive quality system.", approach: "Dynamic LOD rendering with Metal shaders, adjusting complexity based on thermal and GPU state.", result: "Stable 60fps AR on devices 3 generations old." },
      { phase: "Intelligence", problem: "POI detection too slow for real-time AR overlay.", decision: "On-device ML with CoreML optimization.", approach: "Quantized detection model with spatial caching to avoid re-processing known environments.", result: "< 100ms POI recognition with 91% accuracy." },
      { phase: "Accessibility", problem: "No AR navigation app addressed mobility-impaired users.", decision: "Built accessibility-first route engine.", approach: "Custom pathfinding considering elevation, surface type, and obstacle data.", result: "First AR nav app with wheelchair-accessible AR wayfinding." },
      { phase: "Offline", problem: "Tourism areas often have poor connectivity.", decision: "Comprehensive offline mode.", approach: "Pre-cached AR anchors, offline maps, and local ML inference for zero-connectivity use.", result: "Full AR experience available without internet." },
    ],
    screens: [
      { title: "AR Navigator", description: "Real-time contextual overlays on the physical world with smart POI cards." },
      { title: "Explore Mode", description: "Discovery-driven interface surfacing hidden gems and cultural context." },
      { title: "Accessibility View", description: "Dedicated accessible routing with surface quality and elevation indicators." },
    ],
    performance: [
      { metric: "AR Frame Rate", value: "60fps", detail: "Metal-accelerated rendering with adaptive LOD and thermal management." },
      { metric: "POI Detection", value: "< 100ms", detail: "On-device CoreML with spatial caching and batch inference." },
      { metric: "Map Load", value: "< 500ms", detail: "Tile pre-caching with predictive loading based on route." },
      { metric: "Battery Life", value: "4+ hours", detail: "Adaptive AR processing with intelligent camera duty cycling." },
    ],
    outcome: {
      headline: "Built to Scale.",
      results: [
        "100K+ downloads in first 3 months",
        "4.9★ rating — highest in AR navigation category",
        "Accessibility award from mobility advocacy organization",
        "Licensed by 2 national tourism boards",
      ],
    },
  },
];
