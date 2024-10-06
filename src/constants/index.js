import {
  monarkit,
  eysi,
  projetErp,
  projetJibi,
  projetEcom,
  projetIA,
  projetFilter,
  projetCnn,
  projectMicro,
  projetSchool,
 
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experiences",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
 // {
 //   id: "resume",
 //   title: "Resume",
 // },
];

const services = [
  {
    title: "Web Developer",
    icon: eysi,
  }
];





const experiences = [
  {
    title: "Software engineer intern",
    company_name: "Agence de communication et de création des sites web à Marrakech, Maroc",
    icon: eysi,
    iconBg: "#51158c",
    date: "July 2024 - september 2024",
    points: [
      " During my internship at Eysi, I helped develop a SaaS solution that automates key processes like sales management, invoicing, and inventory control for small and medium-sized businesses, using modern web technologies.",
      " Task 1 : Developed and implemented the SaaS solution using Spring Boot (backend), Angular (frontend), and MySQL (database) to manage key operations like sales, stock, and invoicing for multiple companies.",
      " Task 2 : Designed critical features such as performance tracking, role management, and permission control, ensuring secure data access for different user levels.",
      " Task 3 : Integrated Stripe for subscription payments.",
      " Task 4 : Deployed the application on AWS using Docker and EC2, ensuring secure, scalable, and efficient operations for multiple businesses.",
      " Task 5 : Set up CI/CD pipelines with GitHub Actions, automating the deployment process for continuous integration and rapid updates.",
      " Task 6 : Collaborated in an Agile environment, delivering features incrementally in sprints."
    ],
 
  },
  {
    title: "Software engineer intern",
    company_name: "Monarkit.net",
    icon: monarkit,
    iconBg: "#FFFFFF",
    date: "July 2023 - september 2023",
    points: [
      " During my internship at Monarkit.net, I worked on two main tasks :",
      " Task 1 :  Data Extraction with Web Scraping: I used Python to scrape data from PDF files and websites, extracting content to build a question-and-answer application. This automated data extraction process was essential for efficiently gathering relevant information and structuring it for the application.",
      " Task 2 : Web Application Development: I contributed to the development of a web application using Python (Django) for the backend and ReactJS for the frontend, creating a responsive and dynamic platform.",
    ],
 
  }
];



const projects1 = [
  {
    name: "SaaS Solution for Commercial Business Management",
    description:
      "This application for small and medium-sized enterprises (SMEs) centralizes administrative processes and multi-company management. It allows administrators to manage multiple entities through a single interface, with customizable options based on the selected subscription plans. The app offers features such as price level management, a price comparison tool using web scraping, invoice automation, real-time stock optimization, and robust data security to ensure sensitive information is protected.",
    tags: [
      {
        name: "SpringBoot",
        color: "green-text-gradient",
      },
      {
        name: "Angular",
        color: "pink-text-gradient",
      },
      {
        name: "Mysql",
        color: "blue-text-gradient",
      
      },
      {
        name: "aws cloud",
        color: "orange-text-gradient",
      },
    ],
    image: projetErp,
    source_code_link: "https://github.com/ll-laila/SaaS-Solution-for-Commercial-Business-Management.git",
  },
  {
    name: "e-banking solution simulation",
    description:
      "The JIBI project is a modern bill payment management platform using Spring Boot and Angular. It consists of three main areas: BackOffice for administrators, Agent for client registration, and Client for balance inquiries and payments. With interfaces tailored for both individuals and professionals, JIBI ensures a secure user experience through advanced features. The application integrates CMI web services for automated and secure transactions, while providing reconciliation and financial management tools to ensure data transparency and synchronization.",
      tags: [
        {
          name: "SpringBoot",
          color: "green-text-gradient",
        },
        {
          name: "Angular",
          color: "pink-text-gradient",
        },
        {
          name: "Mysql",
          color: "blue-text-gradient",
        
        },
      ],
    image: projetJibi,
    source_code_link: "https://github.com/ll-laila/E-banking-solution-simulation.git",
  },
  {
    name: "App E-Commerce Multi Seller MERN (e-shop)",
    description:
      "This project uses the MERN stack (MongoDB, Express.js, React.js, Node.js) to build a multi-vendor e-commerce platform. It features a unified experience where visitors can explore products, clients can shop securely and interact with sellers, vendors manage their shops and finances with a 10% service fee, and administrators oversee the system to ensure smooth operations and growth. The platform integrates robust database management, interactive interfaces, and server-side operations for an efficient e-commerce experience, and it provides a well-rounded solution.",
    tags: [
      {
        name: "MERN",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "blue-text-gradient",
      },
      {
        name: "aws cloud",
        color: "orange-text-gradient",
      },
    ],
    image: projetEcom,
    source_code_link: "https://github.com/ll-laila/App-E-Commerce-Multi-Seller-MERN.git",
  }
];

const projects2 = [
  {
    name: "Asynchronous Microservices Platform",
    description:
      "This project features a microservices architecture designed for managing customers, products, orders, and payments. Each service is built using Spring Boot, with asynchronous communication for payment and order confirmations handled via Kafka. MongoDB is used as the database, and Zipkin is integrated for distributed tracing of inter-service calls. The API Gateway routes external traffic to the appropriate services, and Docker is used to containerize the entire infrastructure.",
      tags: [
        {
          name: "SpringCloud",
          color: "orange-text-gradient",
        },
        {
          name: "MongoDB",
          color: "green-text-gradient",
        },
        {
          name: "Kafka",
          color: "pink-text-gradient",
        },
        {
          name: "Zipkin",
          color: "blue-text-gradient",
        
        },
        {
          name: "API Gateway",
          color: "green-text-gradient"
        },
        {
          name: "Eureka Server",
          color: "blue-text-gradient"
        }
        
      ],
    image: projectMicro,
    source_code_link: "https://github.com/ll-laila/microservices-system.git",
  },
  {
    name: "facial recognition system",
    description:
      "This is a facial recognition system based on the Local Binary Pattern Histogram (LBPH) technique and the Haar Cascade Classifier for real-time human face recognition using a computer camera. The system first prepares the data from which information will be extracted for recognition, involving photos and videos containing human face data. It then uses the Haar Cascade Classifier algorithm to detect the human face. Next, the system extracts facial feature points to encode the face shape in binary using the LBP technique. Finally, it classifies the generated histograms to determine whether the identified person is the correct one.",
    tags: [
      {
        name: "Django",
        color: "green-text-gradient",
      },
      {
        name: "Python",
        color: "pink-text-gradient",
      },
      {
        name: "SqLite",
        color: "blue-text-gradient",
      
      },
      {
        name: "IA",
        color: "orange-text-gradient",
      },
    ],
    image: projetIA,
    source_code_link: "https://github.com/ll-laila/systeme-de-reconnaissance-faciale.git",
  },
  {
    name: "App for Solving Handwritten Mathematical equations using CNN",
    description:
      "It is an interactive web application allowing users to solve mathematical equations by submitting images containing handwritten equations (mathematical numbers and symbols). The application uses CNN specifically trained for solving mathematical equations. The goal is to create a user-friendly interface that allows users to write their handwritten equations, submit them as images, and get the calculated solutions back.",
    tags: [
      {
        name: "TensorFlow",
        color: "pink-text-gradient",
      },
      {
        name: "Keras",
        color: "green-text-gradient",
      },
      {
        name: "OpenCv",
        color: "orange-text-gradient",
      },
      {
        name: "Django",
        color: "blue-text-gradient",
      },
    ],
    image: projetCnn,
    source_code_link: "https://github.com/ll-laila/Solving-Handwritten-Mathematical-equations-using-CNN.git",
  }
];

const projects3 = [
  {
    name: "Desktop application for filtering CVs",
    description:
      "This desktop application, developed in Java, simplifies and optimizes the recruitment process by automating CV filtering. Using advanced semantic analysis, it extracts relevant information from CVs and compares them with the requirements of job postings. Users can apply for jobs, manage their profiles, and track their application status through an intuitive interface. The application also provides recruiters with personalized filters to tailor the candidate search. This solution accelerates the candidate selection process.",
      tags: [
        {
          name: "Java",
          color: "orange-text-gradient",
        },
        {
          name: "JavaFX",
          color: "green-text-gradient",
        },
        {
          name: "Scene Builder",
          color: "pink-text-gradient",
        },
        {
          name: "Mysql",
          color: "blue-text-gradient",
        
        },
      ],
    image: projetFilter,
    source_code_link: "https://github.com/ll-laila/Desktop-app-for-filtering-CVs.git",
  },
  {
    name: "School Management system",
    description:
      "The School Management Application is an automated system designed to streamline administrative operations and student tracking. It simplifies tasks such as managing student records, monitoring academic progress, and handling day-to-day administrative duties, making school management more efficient and organized. The system also facilitates communication between teachers, students, and parents through integrated messaging features and provides real-time analytics on academic performance and attendance.",
    tags: [
      {
        name: "PHP",
        color: "green-text-gradient",
      },
      {
        name: "Laravel",
        color: "orange-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "Mysql",
        color: "blue-text-gradient",
      }
    ],
    image: projetSchool,
    source_code_link: "https://github.com/ll-laila/School_Management.git",
  }
];

export { services, experiences, projects1 , projects2, projects3};
