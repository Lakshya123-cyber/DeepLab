import {
  mobile,
  backend,
  creator,
  web,
  work1,
  work2,
  work3,
  avatar,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "services",
    title: "Services",
  },
  {
    id: "blogs",
    title: "Blogs",
  },
  {
    id: "testimonial",
    title: "Testimonial",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Data Analysis and Insights",
    icon: web,
  },
  {
    title: "Strategic Planning and Execution",
    icon: mobile,
  },
  {
    title: "Knowledge Management Solutions",
    icon: backend,
  },
  {
    title: "Client Relationship Management",
    icon: creator,
  },
];

const experiences = [
  {
    title: "Data Analysis and Insights",
    company_name: "Starbucks",
    icon: web,
    iconBg: "#dccb6f",
    points: [
      "Uncover patterns, trends, and correlations within complex datasets to derive actionable insights and make informed business decisions.",
      "Utilize advanced analytics tools to analyze data, identify opportunities, mitigate risks, and optimize strategies for better outcomes.",
      "Leverage statistical models and machine learning techniques to forecast future trends, anticipate customer behavior, and drive proactive decision-making.",
    ],
  },
  {
    title: "Strategic Planning and Execution",
    company_name: "Tesla",
    icon: mobile,
    iconBg: "#E6DEDD",
    points: [
      "Develop customized strategic plans that align with business goals, considering market dynamics, competitive landscape, and internal capabilities.",
      "Optimize resource allocation, budgeting, and timeline management to ensure smooth execution of strategic initiatives and maximize return on investment.",
      "Establish key performance indicators (KPIs), monitor progress, and implement feedback loops to evaluate the effectiveness of strategies and drive continuous improvement.",
    ],
  },
  {
    title: "Knowledge Management Solutions",
    company_name: "Shopify",
    icon: backend,
    iconBg: "#dccb6f",
    points: [
      "Create a centralized platform to capture and store valuable knowledge, best practices, and lessons learned from past projects for easy access and knowledge sharing.",
      "Foster collaboration among team members, enabling them to exchange ideas, share expertise, and leverage collective knowledge to drive innovation and efficiency.",
      "Implement effective knowledge sharing processes, including training programs, documentation, and mentorship, to ensure knowledge is effectively disseminated across the organization and retained for future use.",
    ],
  },
  {
    title: "Client Relationship Management",
    company_name: "Meta",
    icon: creator,
    iconBg: "#E6DEDD",
    points: [
      "Develop and implement effective strategies to build strong client relationships, foster trust, and enhance client satisfaction.",
      "Establish streamlined communication channels, actively listen to client feedback, and proactively address their needs to ensure a positive client experience.",
      "Tailor services to meet individual client requirements, deliver customized solutions, and provide a high level of personalized attention to foster long-term client loyalty and retention.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Deep Point Lab surpassed my expectations as a business consulting partner. The ability to provide transformative insights was truly impressive.",
    name: "Person",
    designation: "CFO",
    company: "Some",
    image: avatar,
  },
  {
    testimonial:
      "Deep Point Lab's consulting expertise is truly unmatched when it comes to unlocking growth potential.",
    name: "Person",
    designation: "COO",
    company: "Some",
    image: avatar,
  },
  {
    testimonial:
      "Working with Deep Point Lab was a game-changer for our business. Navigating complex challenges was evident from day one.",
    name: "Person",
    designation: "CTO",
    company: "Some",
    image: avatar,
  },
];

const projects = [
  {
    name: "Mastering Data Analytics",
    description:
      "This blog dives into the fundamentals of data analytics, explores popular tools and techniques, and provides practical tips for leveraging data to drive business growth.",
    tags: [
      {
        name: "analytics",
        color: "blue-text-gradient",
      },
      {
        name: "business",
        color: "green-text-gradient",
      },
      {
        name: "Insights",
        color: "pink-text-gradient",
      },
    ],
    image: work1,
  },
  {
    name: "Strategic Planning Demystified",
    description:
      "This blog delves into the key elements of strategic planning, discusses proven methodologies, and offers practical guidance to help you develop and execute winning strategies.",
    tags: [
      {
        name: "planning",
        color: "blue-text-gradient",
      },
      {
        name: "success",
        color: "green-text-gradient",
      },
      {
        name: "execution",
        color: "pink-text-gradient",
      },
    ],
    image: work2,
  },
  {
    name: "Client Relationship Management",
    description:
      "Learn strategies to build strong client connections, enhance and foster long-term loyalty. This blog provides insights, best practices, and actionable tips to excel in managing client relationships.",
    tags: [
      {
        name: "satisfaction",
        color: "blue-text-gradient",
      },
      {
        name: "connections",
        color: "green-text-gradient",
      },
    ],
    image: work3,
  },
];

export { services, experiences, testimonials, projects };
