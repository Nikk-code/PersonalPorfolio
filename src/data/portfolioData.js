export const personalInfo = {
  greeting: 'Hi, my name is',
  name: 'Nikhil Chandrakant Sakalkar',
  tagline:
    'I am a Test Automation Engineer specialized in building high-performance automation frameworks (Playwright & Tosca) and CI/CD pipelines that accelerate release cycles, optimize execution times, and ensure enterprise software quality.',
  phone: '+91-7020581542',
  email: 'nikkhilsakalkar@gmail.com',
  github: 'https://github.com/Nikk-code',
  linkedin: 'https://www.linkedin.com/in/nikhil-sakalkar/',
}

export const stats = [
  { label: 'VERIFIED SKILLS', value: 34 },
  { label: 'PROFESSIONAL PROJECTS', value: 7 },
  { label: 'DSA PROBLEMS SOLVED', value: '200+' },
]

export const skills = [
  {
    category: 'Automation',
    items: ['Playwright', 'Playwright Test', 'Tosca', 'UFT', 'Page Object Model', 'Fixtures', 'Data-Driven Testing', 'Parallel Execution']
  },
  {
    category: 'Programming',
    items: ['JavaScript', 'TypeScript', 'Python']
  },
  {
    category: 'API & Web',
    items: ['REST API', 'API Validation', 'JSON', 'HTML', 'CSS']
  },
  {
    category: 'CI/CD & Version Control',
    items: ['Azure DevOps', 'Git', 'GitHub', 'GitLab CI']
  },
  {
    category: 'Testing',
    items: ['Functional', 'Regression', 'Smoke', 'End-to-End', 'Cross-Browser', 'Test Data Management', 'Environment Management']
  },
  {
    category: 'Reporting & Defect Management',
    items: ['JIRA', 'Allure Report', 'HTML Reports']
  },
  {
    category: 'SAP',
    items: ['SAP ECC', 'SAP Fiori', 'SAP MM', 'SAP SD']
  }
]

export const projects = [
  {
    id: 0,
    title: 'Healthcare Provider Portal (Cognizant)',
    date: 'Mar 2023 - Present',
    isProfessional: true,
    tags: ['Playwright', 'JavaScript', 'Page Object Model', 'Azure DevOps', 'CI/CD'],
    moreCount: 15,
    description:
      'A Healthcare Provider Portal supporting member information, provider details, claims, authorization requests, and internal user workflows. Working as an Associate at Cognizant, Pune.',
    highlights: [
      'Designed and developed automated test scripts using Playwright with JavaScript for enterprise web application workflows.',
      'Developed a reusable Page Object Model (POM) framework with fixtures and utility functions to improve maintainability and reduce duplicate code.',
      'Reduced regression execution time from 6 hours to 2 hours using Playwright parallel execution across multiple browser workers.',
      'Automated critical business workflows including Login, Member Search, Claims, Provider Search, Authorization, and User Profile modules.',
      'Performed cross-browser testing across Chromium, Firefox, and WebKit and executed Functional, Smoke, Regression, and End-to-End test suites.',
      'Maintained JSON-based test data and environment-specific configuration for QA, UAT, and Pre-Production using configuration files and environment variables.',
      'Integrated and executed automated regression suites through Azure DevOps CI/CD pipelines and supported monthly production releases.',
      'Analyzed failed automation executions using Playwright Trace Viewer, screenshots, logs, and HTML reports; collaborated with developers to investigate defects and support root-cause analysis.',
      'Reported defects in JIRA and collaborated with developers and cross-functional teams throughout Agile sprint cycles and release activities.'
    ],
    allTags: [
      'Playwright',
      'Playwright Test',
      'JavaScript',
      'TypeScript',
      'Page Object Model (POM)',
      'Fixtures',
      'Parallel Execution',
      'Cross-Browser Testing',
      'Azure DevOps',
      'Git',
      'GitHub',
      'CI/CD Pipelines',
      'Test Data Management',
      'JIRA',
      'Allure Report',
      'HTML Reports',
      'Functional Testing',
      'Regression Testing',
      'Smoke Testing',
      'End-to-End (E2E)'
    ],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 1,
    title: 'SAP Automation & Testing (Cargill)',
    date: 'Oct 2021 - Feb 2023',
    isProfessional: true,
    tags: ['Tosca', 'SAP ECC', 'SAP Fiori', 'SAP MM/SD', 'Automation'],
    moreCount: 12,
    description:
      'SAP ECC, SAP Fiori, and web application automation using Tricentis Tosca across SAP SD, MM, and FICO business processes for client Cargill. Working as a Test Analyst at Cognizant, Pune.',
    highlights: [
      'Developed reusable Tosca Modules using XScan and designed maintainable automated TestCases using Tosca\'s model-based automation approach.',
      'Worked with SAP Functional Consultants and Business Analysts to understand requirements and prepare automation scenarios for SAP and web applications.',
      'Automated end-to-end business scenarios across SAP ECC, SAP Fiori, and web applications covering SAP SD, MM, and FICO processes.',
      'Executed Functional, Regression, Smoke, and End-to-End suites using Tosca ExecutionLists and analyzed results for defects and coverage.',
      'Created reusable automation components and optimized existing test cases to improve maintainability and execution efficiency.',
      'Reported defects with supporting evidence and participated in requirement analysis, test design, execution, defect verification, and Agile sprint activities.'
    ],
    allTags: [
      'Tricentis Tosca',
      'Tosca Commander',
      'SAP ECC',
      'SAP Fiori',
      'SAP SD',
      'SAP MM',
      'SAP FICO',
      'XScan',
      'Model-Based Automation',
      'ExecutionLists',
      'Functional Testing',
      'Regression Testing',
      'Smoke Testing',
      'End-to-End (E2E)',
      'Requirement Analysis',
      'Defect Reporting',
      'Agile / Scrum'
    ],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 2,
    title: 'QKart Frontend',
    date: 'Mar 2025',
    tags: ['React Hooks', 'Forms', 'Controlled Components', 'REST', 'JSON', 'Error Handling'],
    moreCount: 16,
    description:
      'A full-featured e-commerce frontend built with React. Includes product browsing, cart management, checkout flow, and REST API integration with proper error handling.',
    highlights: [
      'Implemented cart state with React Hooks',
      'Built reusable form components with validation',
      'Integrated REST APIs for products and checkout',
      'Handled loading, error, and empty states gracefully',
    ],
    allTags: [
      'React Hooks',
      'Forms',
      'Controlled Components',
      'REST',
      'JSON',
      'Error Handling',
      'useState',
      'useEffect',
      'Material UI',
      'Responsive Design',
      'API Integration',
      'State Management',
      'Component Architecture',
      'Async/Await',
      'Local Storage',
      'Routing',
      'Authentication',
      'Checkout Flow',
      'Product Filtering',
      'Search',
      'Pagination',
      'Form Validation',
    ],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 3,
    title: 'XBoard',
    date: 'Mar 2025',
    tags: ['HTML', 'CSS', 'Figma', 'Bootstrap Accordion', 'Bootstrap', 'ES6'],
    moreCount: 10,
    description:
      'A responsive bulletin board application for posting and browsing announcements. Designed in Figma and built with semantic HTML and Bootstrap components.',
    highlights: [
      'Translated Figma designs into pixel-perfect UI',
      'Used Bootstrap accordion for collapsible content',
      'Built fully responsive layout for mobile and desktop',
    ],
    allTags: [
      'HTML',
      'CSS',
      'Figma',
      'Bootstrap Accordion',
      'Bootstrap',
      'ES6',
      'Responsive Design',
      'Semantic HTML',
      'Flexbox',
      'Grid',
      'UI/UX',
      'Accessibility',
      'Cross-browser',
      'Media Queries',
      'Component Layout',
      'Design Systems',
    ],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 4,
    title: 'QTripDynamic',
    date: 'Feb 2025',
    tags: ['HTML', 'CSS', 'ES6', 'JavaScript', 'Developer Tools', 'Bootstrap'],
    moreCount: 15,
    description:
      'A dynamic travel discovery platform that fetches city and adventure data from APIs. Users can filter, search, and explore destinations interactively.',
    highlights: [
      'Fetched and rendered dynamic data from REST APIs',
      'Implemented client-side filtering and search',
      'Used ES6 modules for clean code organization',
    ],
    allTags: [
      'HTML',
      'CSS',
      'ES6',
      'JavaScript',
      'Developer Tools',
      'Bootstrap',
      'REST API',
      'DOM Manipulation',
      'Fetch API',
      'Filtering',
      'Search',
      'Event Handling',
      'Async Programming',
      'Error Handling',
      'Responsive UI',
      'Card Layouts',
      'Dynamic Rendering',
      'Modular JS',
      'Debugging',
      'Performance',
      'UX Patterns',
    ],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 5,
    title: 'QTripStatic',
    date: 'Jan 2025',
    tags: ['HTML', 'CSS', 'Developer Tools', 'Bootstrap', 'CSS Flexbox', 'Responsive Design'],
    moreCount: 9,
    description:
      'A static travel website showcasing popular cities and adventures. Focused on layout, typography, and responsive design using Bootstrap and Flexbox.',
    highlights: [
      'Built multi-section landing page from scratch',
      'Applied Flexbox for flexible card layouts',
      'Ensured mobile-first responsive behavior',
    ],
    allTags: [
      'HTML',
      'CSS',
      'Developer Tools',
      'Bootstrap',
      'CSS Flexbox',
      'Responsive Design',
      'Landing Page',
      'Typography',
      'Spacing',
      'Hero Section',
      'Footer',
      'Navigation',
      'Image Optimization',
      'CSS Variables',
      'Media Queries',
    ],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 6,
    title: 'XCruise',
    date: 'Jan 2025',
    tags: ['HTML', 'CSS', 'Responsive Design'],
    moreCount: 0,
    description:
      'A cruise booking landing page with hero banners, feature sections, and a clean call-to-action flow. Optimized for all screen sizes.',
    highlights: [
      'Designed an engaging hero section',
      'Created reusable section layouts',
      'Tested responsiveness across breakpoints',
    ],
    allTags: ['HTML', 'CSS', 'Responsive Design'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 7,
    title: 'XProfile',
    date: 'Jan 2025',
    tags: ['HTML', 'CSS'],
    moreCount: 0,
    description:
      'A personal profile page showcasing bio, skills, and contact information. A clean, minimal first project focused on HTML structure and CSS styling.',
    highlights: [
      'Practiced semantic HTML5 structure',
      'Styled with custom CSS (no frameworks)',
      'Built a simple, accessible profile layout',
    ],
    allTags: ['HTML', 'CSS'],
    liveUrl: '#',
    githubUrl: '#',
  },
]

export const navLinks = [
  { label: 'Skills Acquired', href: '#skills' },
  { label: 'My Projects', href: '#projects' },
  { label: 'GitHub', href: '#github' },
]
