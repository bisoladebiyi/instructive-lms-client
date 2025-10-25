export const StudentsTable = {
    columns: ["name", "course", "progress", "last_active"],
    rows: [
        {
            name: "Abisola Adebiyi",
            course: "Introduction to node.js - A beginner's guide",
            progress: "80%",
            last_active: "3 hours ago"
        },
        {
            name: "Osman Sharif",
            course: "Introduction to node.js - A beginner's guide",
            progress: "80%",
            last_active: "3 hours ago"
        },
        {
            name: "Adetimilehin Adeyosola",
            course: "Introduction to node.js - A beginner's guide",
            progress: "80%",
            last_active: "3 hours ago"
        },
        {
            name: "Bodunde Adebiyi",
            course: "Introduction to node.js - A beginner's guide",
            progress: "80%",
            last_active: "3 hours ago"
        }
    ]
}

export const course = {
    title: "Introduction to node.js - A beginner's guide",
    description: `
    <div style="font-family: 'Inter', sans-serif; line-height: 1.7; color: #333;">
      <h2 style="color: #2a7ae4; margin-bottom: 8px;">Welcome to the Course!</h2>
      <p style="margin-bottom: 16px;">
        This <strong>Introduction to Node.js</strong> course is designed for complete beginners
        who want to learn how to build fast, scalable server-side applications using JavaScript.
      </p>

      <h3 style="color: #1d4ed8; margin-top: 24px;">What You'll Learn</h3>
      <ul style="margin-left: 20px; margin-bottom: 16px;">
        <li>Understand how Node.js works under the hood</li>
        <li>Set up your local development environment</li>
        <li>Work with modules, NPM, and third-party libraries</li>
        <li>Build RESTful APIs with <code>Express.js</code></li>
        <li>Connect your backend to databases like MySQL or MongoDB</li>
      </ul>

      <h3 style="color: #1d4ed8; margin-top: 24px;">Who This Course is For</h3>
      <p style="margin-bottom: 16px;">
        Whether you’re a frontend developer looking to expand your skillset or someone completely
        new to web development, this course provides a solid foundation in backend programming.
      </p>

      <blockquote style="border-left: 4px solid #2a7ae4; padding-left: 12px; color: #555; font-style: italic;">
        “Learning Node.js helped me finally understand how the web really works.”
        — <em>Former Student</em>
      </blockquote>

      <p style="margin-top: 16px;">
        By the end of this course, you’ll have built several small projects and a full-fledged REST API
        you can proudly showcase in your portfolio.
      </p>

      <p style="margin-top: 16px;">
        <a href="https://nodejs.org/en/docs" target="_blank" rel="noopener noreferrer"
          style="color: #2a7ae4; text-decoration: underline;">
          Visit the official Node.js documentation
        </a>
      </p>
    </div>
  `,
    bannerUrl:
        "https://www.mbloging.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fyynr1uml%2Fproduction%2Fd1436504d3891835d2fb7150a6feaee968abf4a5-1024x576.jpg%3Fw%3D1024%26auto%3Dformat&w=3840&q=75",
    instructor: {
        name: "Abisola Adebiyi",
        avatarUrl: "https://avatar.iran.liara.run/public/job/teacher/male",
    },
    duration: "8h 30m",
    lessons: 24,
    rating: 4.8,
};

export const curriculumSections = [
    {
        title: "Section 1: Getting Started with Node.js",
        content: `
        <ul style="padding-left: 20px; line-height: 1.8;">
          <li>What is Node.js?</li>
          <li>How Node.js works under the hood</li>
          <li>Installing Node and npm</li>
          <li>Your first Node.js script</li>
        </ul>
      `,
    },
    {
        title: "Section 2: Core Concepts and Modules",
        content: `
        <ul style="padding-left: 20px; line-height: 1.8;">
          <li>Understanding the Event Loop</li>
          <li>Working with Core Modules (fs, path, http)</li>
          <li>Using npm and managing dependencies</li>
          <li>Creating and exporting modules</li>
        </ul>
      `,
    },
    {
        title: "Section 3: Building REST APIs with Express",
        content: `
        <ul style="padding-left: 20px; line-height: 1.8;">
          <li>Setting up Express.js</li>
          <li>Handling routes and middleware</li>
          <li>Connecting to a database</li>
          <li>Building CRUD endpoints</li>
        </ul>
      `,
    },
    {
        title: "Section 4: Authentication & Deployment",
        content: `
        <ul style="padding-left: 20px; line-height: 1.8;">
          <li>Implementing JWT authentication</li>
          <li>Environment variables and configuration</li>
          <li>Error handling and logging</li>
          <li>Deploying your app to production</li>
        </ul>
      `,
    },
];