/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Utkarsh's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Utkarsh Tripathi Portfolio",
    type: "website",
    url: "http://utkarshtripathi.com/",
  },
};

//Home Page
const greeting = {
  title: "Utkarsh Tripathi",
  logo_name: "UtkarshTripathi",
  // nickname: "utkarsh",
  subTitle:
    "A passionate Data Scientist and Full Stack Python Developer who thrives on building end-to-end intelligent products. Focused on creating scalable, data-driven systems that deliver real-world technical impact.",
  resumeLink:
    "https://drive.google.com/file/d/1AzHaF3wnfSoSnuel7na-67i-x0w-CGoI/view?usp=sharing",
  portfolio_repository: "https://github.com/Utkarsht2310/My-portfolio",
  githubProfile: "https://github.com/Utkarsht2310",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/Utkarsht2310",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/utkarsh-tripathi-555964244/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://youtube.com/c/DevSense19",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:utkarshtripathi891@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: "X-Twitter",
  //   link: "https://twitter.com/ashutosh_1919",
  //   fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
  //   backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  // },
  // {
  //   name: "Facebook",
  //   link: "https://www.facebook.com/laymanbrother.19/",
  //   fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
  //   backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  // },
  // {
  //   name: "Instagram",
  //   link: "https://www.instagram.com/layman_brother/",
  //   fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
  //   backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  // },
];

const skills = {
  data: [
    {
      // title: "Data Science & AI",
      // fileName: "DataScienceImg",
      // skills: [
      //   "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
      //   "⚡ Experience of working with Computer Vision and NLP projects",
      //   "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      // ],
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Building  machine learning models using ARIMA, XGBoost, and Scikit-learn for forecasting and predictive analytics.",
        "⚡ Hands-on experience in Computer Vision (OpenCV-based gesture systems) and LLM-powered NLP applications with LangChain & LLaMA.",
        "⚡ Performing end-to-end ETL, EDA, KPI analysis, and developing interactive Power BI dashboards for business intelligence insights.",
      ],

      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Scikit-learn",
          fontAwesomeClassname: "simple-icons:scikitlearn",
          style: {
            backgroundColor: "transparent",
            color: "#c76034"
          },
        },

        {
          skillName: "LLaMA",
          fontAwesomeClassname: "simple-icons:meta",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "OpenCV",
          fontAwesomeClassname: "simple-icons:opencv",
          style: {
            backgroundColor: "transparent",
          },
        },

        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        // {
        //   skillName: "LLama",
        //   imageSrc: "deeplearning_ai_logo.png",
        // },
      ],
    },
    {
      // title: "Full Stack Development",
      // fileName: "FullStackImg",
      // skills: [
      //   "⚡ Building responsive website front end using React-Redux",
      //   "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
      //   "⚡ Creating application backend in Node, Express & Flask",
      // ],
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building scalable full-stack web applications using Django and Flask with RESTful API integration.",
        "⚡ Developing responsive front-end interfaces using HTML5, CSS3, and JavaScript with optimized UI performance.",
        "⚡ Designing secure backend systems with PostgreSQL/MySQL, implementing authentication, real-time features, and AI integrations.",
      ],

      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },

        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Flask",
          fontAwesomeClassname: "simple-icons:flask",
          style: {
            color: "#20181c",
          },
        },
        {
          skillName: "Django",
          fontAwesomeClassname: "simple-icons:django",
          style: {
            color: "#339933",
          },
        },

        {
          skillName: "PostgreSql",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#2C8EBB",
          },
        },
        // {
        //   skillName: "Gatsby",
        //   fontAwesomeClassname: "simple-icons:gatsby",
        //   style: {
        //     color: "#663399",
        //   },
        // },
        // {
        //   skillName: "Flutter",
        //   fontAwesomeClassname: "simple-icons:flutter",
        //   style: {
        //     color: "#02569B",
        //   },
        // },
      ],
    },

    {

      title: "Data Analysis and Engineering",
      fileName: "DataAnalysisImg",
      skills: [
        "⚡ Performing end-to-end ETL processes including data extraction, transformation, cleaning, and validation from multiple data sources.",
        "⚡ Conducting EDA, KPI analysis, and trend analysis using Python, SQL, Excel, and Power BI for business insights.",
        "⚡ Designing structured data pipelines and integrating PostgreSQL/MySQL databases to support analytics and AI-driven applications.",
      ],

      softwareSkills: [
        {
          skillName: "Power BI",
          fontAwesomeClassname: "simple-icons:powerbi",
          style: {
            color: "#e3de53",
          },
        },
        {
          skillName: "Excel",
          fontAwesomeClassname: "simple-icons:microsoftexcel",
          style: {
            color: "#1e5121",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            color: "#1a1338",
          },
        },
        {
          skillName: "Numpy",
          fontAwesomeClassname: "simple-icons:numpy",
          style: {
            color: "#3d1796",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/u/utkarsh2310/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/profile/utkarshtripath17",
    },
    // {
    //   siteName: "Codechef",
    //   iconifyClassname: "simple-icons:codechef",
    //   style: {
    //     color: "#5B4638",
    //   },
    //   profileLink: "https://www.codechef.com/users/ashutosh_1919",
    // },
    // {
    //   siteName: "Codeforces",
    //   iconifyClassname: "simple-icons:codeforces",
    //   style: {
    //     color: "#1F8ACB",
    //   },
    //   profileLink: "http://codeforces.com/profile/layman_brother",
    // },
    // {
    //   siteName: "Hackerearth",
    //   iconifyClassname: "simple-icons:hackerearth",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "https://www.hackerearth.com/@ashutosh391",
    // },
    // {
    //   siteName: "Kaggle",
    //   iconifyClassname: "simple-icons:kaggle",
    //   style: {
    //     color: "#20BEFF",
    //   },
    //   profileLink: "https://www.kaggle.com/laymanbrother",
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Dronacharya Group of Institutions",
      subtitle: "B.Tech. in Computer Engineering",
      logo_path: "dgi.png",
      alt_name: "IIITDM Kurnool",
      duration: "2021 - 2025",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, COA, AI etc.",
        "⚡ Apart from this, I have done courses on Python, Data Science, Cloud Computing and Full Stack Development.",
        "⚡ I have published two research papers in international conferences and journals.",
        "⚡ I participated in various coding competitions and hackathons held in college.",
        "⚡ I was also involved in various sports activities and was part of college cricket team ,volleyball team.",
        "⚡ I was also part of college cultural team and participated in various events like seminars,expos.",
      ],
      // website_link: "http://iiitk.ac.in",
    },
    // {
    //   title: "Indiana University Bloomington",
    //   subtitle: "M.S. in Computer Science",
    //   logo_path: "iu_logo.png",
    //   alt_name: "Indiana University Bloomington",
    //   duration: "2021 - 2023",
    //   descriptions: [
    //     "⚡ I have taken varity of courses related to Artificial Intelligence which correspond to Explainable AI, Graph Machine Learning, Computer Vision etc.",
    //     "⚡ Apart from this, I have also done research assistantship. As part of it, I have worked on creating new algorithms in Graph ML and Network Science.",
    //     "⚡ During my time at university, I was also associated with multimedia department. As part of it, I have worked on some documentry films and interviews.",
    //   ],
    //   website_link: "https://www.indiana.edu/",
    // },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Programming Concepts in Python",
      // subtitle: "- Andrew Ng",
      logo_path: "pypng.png",
      certificate_link:
        "https://drive.google.com/file/d/1U2q4gSv1SswXCrIsVCQYQ_1OmUylcR5z/view?usp=sharing",
      alt_name: "Programming Concepts in Python",
      color_code: "#8C151599",
    },
    {
      title: "Machine Learning Beginner",
      // subtitle: "- Andrew Ng",
      logo_path: "ml.png",
      certificate_link:
        "https://drive.google.com/file/d/17zsdDRG-ZP3kYY_VCHf0kw1rl8Pe5VJH/view?usp=sharing",
      alt_name: "Machine Learning Beginner",
      color_code: "#00000099",
    },
    {
      title: "Core Java Programming Revisited",
      // subtitle: "- GCP Training",
      logo_path: "Java-Logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1LFOd2C1n4H3e-hy4VVNqQ3kOGUnaW80P/view?usp=sharing",
      alt_name: "Core Java Programming Revisited",
      color_code: "#0C9D5899",
    },
    {
      title: "Solutions Architecture Job Simulation",
      // subtitle: "- Alex Aklson",
      logo_path: "aws.png",
      certificate_link:
        "https://drive.google.com/file/d/1DyRhqv4R_OpR_LGk5fZv9CqvFajuh6Eb/view?usp=sharing",
      alt_name: "Solutions Architecture Job Simulation",
      color_code: "#1F70C199",
    },
    {
      title: "AWS Academy Graduate - AWS Academy Cloud Foundations",
      // subtitle: "- Kim Akers",
      logo_path: "aws.png",
      certificate_link:
        "https://drive.google.com/file/d/16NrkppYvNzqEqJoQyCnn1GO61fjcddlm/view?usp=sharing",
      alt_name: "AWS Academy Graduate - AWS Academy Cloud Foundations",
      color_code: "#D83B0199",
    },

    {
      title: "Data Analysis with Python",
      // subtitle: "- GCP Training",
      logo_path: "data-analysislo.jpg",
      certificate_link:
        "https://drive.google.com/file/d/1sq3np7KNmXj8RLGWZb57gqB22egS1kEZ/view?usp=sharing",
      alt_name: "Data Analysis with Python",
      color_code: "#0C9D5899",
    },
    {
      title: "Network Addressing and Basic Troubleshooting",
      // subtitle: "- Laurence Moroney",
      logo_path: "cisco.png",
      certificate_link:
        "https://drive.google.com/file/d/1MD-CUGFp31qsFq7WcnFlFD4iVf9-moEJ/view?usp=sharing",
      alt_name: "Network Addressing and Basic Troubleshooting",
      color_code: "#00000099",
    },
    {
      title: "Networking Basics",
      // subtitle: "- Jogesh Muppala",
      logo_path: "cisco.png",
      certificate_link:
        "https://drive.google.com/file/d/1YPcT2Y5-1RoFZkPUyn1Sp_aM-pKDBnOF/view?usp=sharing",
      alt_name: "Networking Basics",
      color_code: "#2A73CC",
    },
    {
      title: "Mobile Testing and Automation",
      // subtitle: "- Romeo Kienzler",
      logo_path: "bstack.png",
      certificate_link:
        "https://drive.google.com/file/d/1ZP_oTO3nOX-wRNH7C_7wF0TbJSQWboSP/view?usp=sharing",
      alt_name: "Mobile Testing and Automation",
      color_code: "#1F70C199",
    },

  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked as a Data Science Intern at Onelogica, where I performed end-to-end ETL, built forecasting models like ARIMA and XGBoost, and developed interactive dashboards for business insights.I also worked as a Web Developer Intern at Devtern, building responsive web applications and optimizing UI performance",
  header_image_path: "experience.svg",
  sections: [
    // {
    //   title: "Work",
    //   work: true,
    //   experiences: [
    //     {
    //       title: "Machine Learning Engineer",
    //       company: "TikTok Inc.",
    //       company_url: "https://www.tiktok.com/en/",
    //       logo_path: "tiktok_logo.png",
    //       duration: "June 2023 - Present",
    //       location: "San Jose, CA, USA",
    //       description:
    //         "Improving ads ranking models on the core TikTok product. Experience working on modeling two-tower architectures like DeepFM, Wide & deep learning, etc. Working on Large Language Models (LLM) pretraining and Large Multi-modal Model (LMM) finetuning strategies.",
    //       color: "#000000",
    //     },
    //     {
    //       title: "Associate AI Engineer",
    //       company: "Legato Health Technology",
    //       company_url: "https://legatohealthtech.com/",
    //       logo_path: "legato_logo.png",
    //       duration: "June 2020 - Aug 2021",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "I am working on automating healthcare products. The projects involve automation for process improvements and for significantly enhancing the profits. I am currently working on Cancer Survival and Reoccurence Prediction. Our goal is to make AI system which scales and removes doctor dependency as much as possible.",
    //       color: "#0879bf",
    //     },
    //     {
    //       title: "Android and ML Developer",
    //       company: "Muffito Incorporation",
    //       company_url: "https://www.linkedin.com/company/muffito-inc/about/",
    //       logo_path: "muffito_logo.png",
    //       duration: "May 2018 - Oct 2018",
    //       location: "Pune, Maharashtra",
    //       description:
    //         "I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
    //       color: "#9b1578",
    //     },
    //     {
    //       title: "Android Developer",
    //       company: "FreeCopy Pvt. Ltd.",
    //       company_url: "https://www.linkedin.com/company/freecopy/about/",
    //       logo_path: "freecopy_logo.png",
    //       duration: "Nov 2017 - Dec 2017",
    //       location: "Ahmedabad, Gujarat",
    //       description:
    //         "FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
    //       color: "#fc1f20",
    //     },
    //   ],
    // },
    {
      title: "Internships",
      experiences: [
        {
          title: "Data Science Intern",
          company: "Onelogica.",
          company_url: "https://www.onelogica.com/",
          logo_path: "onelogica.png",
          duration: "DEC 2024 - MAR 2025",
          location: "Greater Noida, Uttar Pradesh",
          description:
            "Performed comprehensive data extraction, transformation, and loading (ETL) processes, followed by in-depth data analysis and the creation of interactive dashboards for actionable insights. Built and evaluated prediction models using advanced forecasting techniques such as ARIMA, XGBoost, and other machine learning algorithms on realworld datasets.",
          color: "#000000",
        },
        {
          title: "Web Developer Intern",
          company: "Devtern.",
          company_url: "https://www.devtern.com/",
          logo_path: "devtern.png",
          duration: "JUL 2024 - AUG 2024",
          location: "Virtual",
          description:
            "Developed an e-commerce platform using JavaScript, HTML, and CSS. Collaborated with team members tooptimize UI performance and ensure seamless system interactions. Designed and deployed a to-do list application and landing page focusing on responsive layouts and efficient user experience..",
          color: "#f8f6f6",
        },

      ],
    },

  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects combine Data Science, AI, and Full Stack Development to build intelligent, real-world applications. I specialize in developing machine learning models, LLM-powered systems, and computer vision solutions, and deploying them through scalable Django/Flask web applications integrated with databases and cloud-ready architectures.",
  avatar_image_path: "projects_image.svg",
};


const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MeetSync – A Smart AI-Integrated Video Conferencing Web App",
      name: "MeetSync – A Smart AI-Integrated Video Conferencing Web App",
      // createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in IRJET 2025",
      url: "https://www.irjet.net/archives/V12/i5/IRJET-V12I5232.pdf",
    },
    {
      id: "Image processing technique in autonomous vehicles",
      name: "Image processing technique in autonomous vehicles",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Paper Published in ICOTET 2024",
      url: "https://pubs.aip.org/aip/acp/article-abstract/3297/1/090002/3369688/Image-processing-technique-in-autonomous-vehicles?redirectedFrom=fulltext",
    },

  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, python Development.",
  },
  // blogSection: {
  //   title: "Blogs",
  //   subtitle:
  //     "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
  //   link: "https://blogs.ashutoshhathidara.com/",
  //   avatar_image_path: "blogs_image.svg",
  // },
  // addressSection: {
  //   title: "Address",
  //   subtitle: "Saratoga Ave, San Jose, CA, USA 95129",
  //   locality: "San Jose",
  //   country: "USA",
  //   region: "California",
  //   postalCode: "95129",
  //   streetAddress: "Saratoga Avenue",
  //   avatar_image_path: "address_image.svg",
  //   location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
  // },
  // phoneSection: {
  //   title: "",
  //   subtitle: "",
  // },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
