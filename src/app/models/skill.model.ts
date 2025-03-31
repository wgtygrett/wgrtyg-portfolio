// export interface Skill {
//     name: string;
//     description: string;
//   }export const skillsList: Skill[] = [
//     // **Full-Stack & Web Development**
//     {
//       name: `Full-Stack Development`,
//       description: `Developing both the front-end and back-end of web applications.`
//     },
//     {
//       name: `Angular`,
//       description: `A framework for building web applications using TypeScript.`
//     },
//     {
//       name: `Node.js`,
//       description: `A JavaScript runtime for building scalable server-side applications.`
//     },
//     {
//       name: `HTML`,
//       description: `Hyper Text Markup Language - for creating web pages.`
//     },
//     {
//       name: `CSS`,
//       description: `Cascading Style Sheets - to define the layout and appearance of elements in a web page.`
//     },
//     {
//       name: `Tailwind CSS`,
//       description: `A utility-first CSS framework for rapidly building custom designs.`
//     },
//     {
//       name: `TypeScript`,
//       description: `A JavaScript superset that adds static typing.`
//     },
//     {
//       name: `Front-End Development`,
//       description: `Building the user interface and experience of web applications.`
//     },
  
//     // **Cloud & Data-Related Technologies (Hot Topics)**
//     {
//       name: `AWS Services`,
//       description: `S3, EC2, SNS, SES, Amplify, IAM, Redshift, CloudWatch, and more.`
//     },
//     {
//       name: `Databricks`,
//       description: `Cloud-based platform for Big Data analytics and machine learning.`
//     },
//     {
//       name: `Kafka`,
//       description: `A distributed event streaming platform for building real-time data pipelines.`
//     },
//     {
//       name: `Apache Hadoop`,
//       description: `Framework for processing and storing large data sets across clusters.`
//     },
//     {
//       name: `Apache Hive`,
//       description: `Data warehouse system for querying and managing large data in Hadoop.`
//     },
//     {
//       name: `Teradata`,
//       description: `Data warehousing solution for handling large-scale data.`
//     },
//     {
//       name: `Teradata Vantage`,
//       description: `A platform for integrated data analytics across multi-cloud environments.`
//     },
  
//     // **DevOps & Automation Tools (Increasing Demand)**
//     {
//       name: `Docker`,
//       description: `Used to spin up containers for portability and scalability in deploying apps.`
//     },
//     {
//       name: `Jenkins`,
//       description: `For continuous integration and delivery (CI/CD).`
//     },
//     {
//       name: `Git`,
//       description: `Version control - for tracking changes to code.`
//     },
//     {
//       name: `GitHub`,
//       description: `Platform for hosting Git repositories and collaborating on code.`
//     },
//     {
//       name: `GitLab`,
//       description: `Git-based version control and CI/CD platform for collaborative development.`
//     },
//     {
//       name: `Cloudbees`,
//       description: `A CI/CD platform built on Jenkins for automating application deployment.`
//     },
//     {
//       name: `RedHat OpenShift`,
//       description: `A container platform based on Kubernetes for deploying and managing applications.`
//     },
//     {
//       name: `Terraform`,
//       description: `An infrastructure-as-code tool for provisioning and managing cloud resources.`
//     },
  
//     // **Soft Skills (Highly Valuable for Collaboration & Leadership Roles)**
//     {
//       name: `Agile Methodologies`,
//       description: `Iterative approach to software development, focusing on collaboration and delivery.`
//     },
//     {
//       name: `Project Management`,
//       description: `Managing projects through planning, execution, and tracking to ensure timely delivery.`
//     },
//     {
//       name: `Problem-Solving & Analytical Thinking`,
//       description: `Ability to analyze situations, identify issues, and find solutions effectively.`
//     },
//     {
//       name: `Cross-Functional Collaboration`,
//       description: `Working with diverse teams across departments to achieve common goals.`
//     },
//     {
//       name: `Mentorship & Coaching`,
//       description: `I enjoy providing guidance and support to help others grow professionally.`
//     },
//     {
//       name: `Effective Communication`,
//       description: `I have experience with clearly conveying ideas and info verbally, written, and visually.`
//     },
  
//     // **Big Data Analytics & Engineering**
//     {
//       name: `Data Analytics & Engineering`,
//       description: `Using data analysis and engineering techniques to derive insights and optimize processes.`
//     },
//     {
//       name: `Data Modeling & Integration`,
//       description: `Designing and integrating data structures for effective storage and analysis.`
//     },
  
//     // **Healthcare Knowledge (Niche but Valuable)**
//     {
//       name: `Health Insurance & Payer Systems`,
//       description: `Knowledge of Medicare, Medicaid, and commercial insurance systems.`
//     },
//     {
//       name: `Prior Authorization & Drug Formulary Knowledge`,
//       description: `Familiarity with healthcare processes like prior authorizations and drug formularies.`
//     },
  
//     // **Miscellaneous Technologies**
//     {
//       name: `Job Scheduling & Automated Workflow Tools`,
//       description: `CA Workload and ActiveBatch. Tools for automating and managing workflows.`
//     },
//     {
//       name: `Orchestrator`,
//       description: `Automation tools for managing workflows.`
//     }
//   ];
export interface Skill {
    name: string;
    subtitle: string;
    description: string;
  }
  
  export const skillsList: Skill[] = [
  // **Front-End Development**
  {
    name: `Front-End Development`,
    subtitle: `Angular, HTML, CSS, Tailwind CSS, TypeScript`,
    description: `Building user interfaces using 
    Angular, HTML, CSS, Tailwind CSS, and TypeScript to create responsive and dynamic web applications.`
  },
  
  // **Back-End Development**
  {
    name: `Back-End Development`,
    subtitle: `Node.js, AWS Services, Kafka, Databricks, 
    Apache Hadoop, Apache Hive, Teradata, Teradata Vantage, Python`,
    description: `Experience in building and managing server-side logic
    and cloud/data technologies for scalable backend solutions.`
  },
  
  // **Full-Stack Development**
//   {
//     name: `Full-Stack Development`,
//     subtitle: `Angular, Node.js, HTML, CSS, Tailwind CSS, TypeScript, AWS Services`,
//     description: `Developing both the front-end and back-end of web applications using Angular, Node.js, HTML, CSS, Tailwind CSS, TypeScript, and AWS for full-stack solutions.`
//   },
  
  // **Cloud & Big Data Technologies (Hot Topics)**
  {
    name: `Cloud & Big Data Technologies`,
    subtitle: `AWS Services, Databricks, Kafka, Apache Hadoop, Apache Hive, Teradata, Teradata Vantage`,
    description: `I have leveraged cloud services like AWS (S3, EC2, SNS, SES) and big data tools such as Databricks, Kafka, Hadoop, and Teradata for managing and analyzing large-scale data.`
  },
  
  // **DevOps & CI/CD Tools (Increasing Demand)**
  {
    name: `DevOps & CI/CD Tools`,
    subtitle: `Docker, Jenkins, Git, GitHub, GitLab, Cloudbees, Terraform, RedHat OpenShift`,
    description: `I have utilized listed tools to implement continuous integration, continuous delivery, and containerized environments.`
  },
  
  // **Soft Skills (Highly Valuable for Collaboration & Leadership Roles)**
  {
    name: `Soft Skills & Collaboration`,
    subtitle: `Agile Methodologies, Project Management, Cross-Functional Collaboration, Mentorship`,
    description: `I love working on teams! I foster effective communication and colaboration. I enjoy mentoring juniors. My entire career has been within the domain of Agile.`
  },
  
  // **Big Data Analytics & Engineering**
  {
    name: `Data Analytics & Engineering`,
    subtitle: `ETL Processes, Data Modeling, Integration, Analytics, Data Normalization`,
    description: `Used to optimize business processes and provide actionable insights from large datasets.`
  },
  
  // **Healthcare Knowledge (Niche but Valuable)**
  {
    name: `Healthcare & Insurance Systems`,
    subtitle: `Health Insurance, Payer Systems, Prior Authorization, Drug Formulary`,
    description: `Deep understanding of Medicare, Medicaid, commercial insurance, and processes like prior authorizations and drug formularies.`
  },
  
  // **Miscellaneous Technologies**
  {
    name: `Automation Tools`,
    subtitle: `Job Scheduling, Orchestrator, CA Workload, ActiveBatch, Databricks Workflows`,
    description: `Experience with job scheduling and automating and managing complex workflows.`
  }
];