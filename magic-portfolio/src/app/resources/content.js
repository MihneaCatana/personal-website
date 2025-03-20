import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Mihnea",
  lastName: "Catană",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Full Stack Developer",
  avatar: "/images/avatar.jpg",
  location: "Europe/Bucharest", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Romanian", "English", "French"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the
      intersection of creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/MihneaCatana",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://ro.linkedin.com/in/mihnea-catan%C4%83",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:mihneacatana@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Full Stack Developer</>,
  subline: (
    <>
      I'm Mihnea, a software engineer at <InlineCode>Lenovo</InlineCode>, where
      I craft intuitive
      <br /> user experiences. After hours, I build my own projects.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Mihnea Catană is a Full Stack Developer with a strong focus on
        JavaScript frameworks, including React and Angular. He has leveraged
        these technologies to build dynamic and responsive web applications. In
        addition to his frontend expertise, he is proficient in backend
        development with Node.js and has experience working with Spring Boot to
        develop scalable and efficient server-side applications. His skill set
        spans across modern web technologies, ensuring seamless integration
        between frontend and backend systems.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Lenovo",
        timeframe: "Jan 2025 - Present",
        role: "Full Stack Developer",
        achievements: [
          <>Contribute to the internal UI Library</>,
          <>Develop microservices using Node.js</>,
          <>Implement cron jobs for the resynchronization of data</>,
          <>Implement Figma designs using Angular and Typescript</>,
          <>
            Writing documentation for features and create diagrams representing
            workflows
          </>,
          <>Create web materials for university intended workshops</>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "IBM",
        timeframe: "Jan 2024 - Jan 2025",
        role: "Application Developer",
        achievements: [
          <>Improving REST API code and implement design patterns</>,
          <>
            Integrating other microservices from the ecosystem via Api calls or
            Kafka Messages
          </>,
          <>
            Integrating other microservices from the ecosystem via Api calls or
            Kafka Messages
          </>,
          <>
            Develop unit tests with JUnit 5 for backend and Karma for frontend
          </>,
          <>
            Implementing UI mockups, using Angular and HTML, CSS and Javascript
          </>,
          <>
            Training AI assistants and integrating them inside the workflows of
            the application using Python, exposing them through an user
            interface made with Streamlit
          </>,
          <>Writing SQL queries for complex operations</>,
        ],
        images: [],
      },
      {
        company: "Adobe",
        timeframe: "Jul 2023 - Jan 2024",
        role: "Software Engineer Intern",
        achievements: [
          <>
            Design a mock-up for internship project, integrating application
            flows, using Adobe XD
          </>,
          <>Develop UI using internal component libraries</>,
          <>Integrating components using React and Typescript</>,
          <>
            Writing unit and e2e test for a better code quality using Jest and
            Playwright
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Faculty of Economic Cybernetics, Statistics and Computer Science",
        description: (
          <>
            <p>Bachelor degree: 2020-2023</p>
            <>Studied software engineering and economics.</>
          </>
        ),
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Javascript & Typescript",
        description: (
          <>Able to prototype in Figma with Once UI with unnatural speed.</>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "React.js, Node.js",
        description: (
          <>Building next gen apps with Next.js + Once UI + Supabase.</>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
