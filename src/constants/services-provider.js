import {
  MobileAppSolutions,
  WebAppSolutions,
  ECommerceSolutions,
  DigitalMarketingSolutions,
  AiSolutions,
  PrompotBotIcon,
} from "../assets/images";

const services = [
  {
    id: 0,
    category: "Mobile Application Solutions",
    imageUrl: MobileAppSolutions,
    options: [
      {
        id: 0,
        subCategory: "iOS Apps (Native)",
      },
      {
        id: 1,
        subCategory: "Android Apps (Native)",
      },
      {
        id: 2,
        subCategory: "Cross platform",
      },
      {
        id: 3,
        subCategory: "Flutter (Hybrid)",
      },
      {
        id: 4,
        subCategory: "React (Hybrid)",
      },
      {
        id: 5,
        subCategory: "UI/UX Design",
      },
      {
        id: 6,
        subCategory: "App Prototype & Strategy",
      },
    ],
  },
  {
    id: 1,
    category: "Web Application Solutions",
    imageUrl: WebAppSolutions,
    options: [
      {
        id: 0,
        subCategory: "Progressive Web Applications (PWAs)",
      },
      {
        id: 1,
        subCategory: "Single Page Applications (SPAs)",
      },
      {
        id: 2,
        subCategory: "API first development",
      },
      {
        id: 3,
        subCategory: "Server architecture",
      },
      {
        id: 4,
        subCategory: "Blockchain",
      },
    ],
  },
  {
    id: 2,
    imageUrl: ECommerceSolutions,
    category: "E-commerce Solutions",
    options: [
      {
        id: 0,
        subCategory: "Magento",
      },
      {
        id: 1,
        subCategory: "Opencart",
      },
      {
        id: 2,
        subCategory: "WordPress",
      },
      {
        id: 3,
        subCategory: "Shopify",
      },
      {
        id: 4,
        subCategory: "Headless Technology",
      },
    ],
  },
  {
    id: 3,
    category: "Digital Marketing Solutions",
    imageUrl: DigitalMarketingSolutions,
    options: [
      {
        id: 0,
        subCategory: "Digital Marketing",
      },
      {
        id: 1,
        subCategory: "Paid Marketing",
      },
      {
        id: 2,
        subCategory: "SEO Services",
      },
      {
        id: 3,
        subCategory: "Online Reputation Management",
      },
      {
        id: 4,
        subCategory: "Content Marketing",
      },
      {
        id: 5,
        subCategory: "Social Media Optimization",
      },
    ],
  },
  {
    id: 4,
    category: "AI Solutions",
    imageUrl: AiSolutions,
    options: [
      {
        id: 0,
        subCategory: "Algorithm",
      },
      {
        id: 1,
        subCategory: "ChatGPT",
      },
      {
        id: 2,
        subCategory: "Machine learning",
      },
      {
        id: 3,
        subCategory: "AI Funnels",
      },
      {
        id: 4,
        subCategory: "Cognitive Computing",
      },
    ],
  },
  {
    id: 5,
    imageUrl: PrompotBotIcon,
    category: "Ask from our chatbot?",
  },
];

export default services;
