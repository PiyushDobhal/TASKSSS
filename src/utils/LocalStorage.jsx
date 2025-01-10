const employee = [
    {
      id: 1,
      firstName: "Arjun",
      email: "e1@e.com",
      password: "123",
      tasks: [
        {
          active: true,
          newTask: false,
          completed: false,
          failed: false,
          taskTitle: "Design Homepage",
          taskDescription: "Create a responsive homepage layout.",
          taskDate: "2025-01-10",
          category: "Design"
        },
        {
          active: false,
          newTask: true,
          completed: false,
          failed: false,
          taskTitle: "Debug Login Issue",
          taskDescription: "Fix the login API returning 500 error.",
          taskDate: "2025-01-12",
          category: "Development"
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          taskTitle: "Write Documentation",
          taskDescription: "Prepare technical documentation for the new feature.",
          taskDate: "2025-01-05",
          category: "Documentation"
        }
      ],
      taskNumbers: {
        active: 1,
        newTask: 1,
        completed: 1,
        failed: 0
      }
    },
    {
      id: 2,
      firstName: "Rohan",
      email: "employee2@example.com",
      password: "123",
      tasks: [
        {
          active: true,
          newTask: false,
          completed: false,
          failed: false,
          taskTitle: "Research New Framework",
          taskDescription: "Investigate the pros and cons of React Native.",
          taskDate: "2025-01-11",
          category: "Research"
        },
        {
          active: false,
          newTask: true,
          completed: false,
          failed: false,
          taskTitle: "Improve Accessibility",
          taskDescription: "Update the website to meet WCAG standards.",
          taskDate: "2025-01-14",
          category: "Development"
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          taskTitle: "Optimize Images",
          taskDescription: "Reduce image sizes without quality loss.",
          taskDate: "2025-01-03",
          category: "Optimization"
        },
        {
          active: false,
          newTask: false,
          completed: false,
          failed: true,
          taskTitle: "Fix Footer Issue",
          taskDescription: "Resolve the misaligned footer links.",
          taskDate: "2025-01-02",
          category: "Development"
        }
      ],
      taskNumbers: {
        active: 1,
        newTask: 1,
        completed: 1,
        failed: 1
      }
    },
    {
      id: 3,
      firstName: "Priya",
      email: "employee3@example.com",
      password: "123",
      tasks: [
        {
          active: false,
          newTask: true,
          completed: false,
          failed: false,
          taskTitle: "Analyze Competitor Websites",
          taskDescription: "Review features and design of competitor sites.",
          taskDate: "2025-01-15",
          category: "Research"
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          taskTitle: "Deploy Staging Environment",
          taskDescription: "Set up a staging environment for testing.",
          taskDate: "2025-01-08",
          category: "Deployment"
        },
        {
          active: true,
          newTask: false,
          completed: false,
          failed: false,
          taskTitle: "Fix CORS Issue",
          taskDescription: "Resolve CORS error for the API endpoint.",
          taskDate: "2025-01-09",
          category: "Development"
        }
      ],
      taskNumbers: {
        active: 1,
        newTask: 1,
        completed: 1,
        failed: 0
      }
    },
    {
      id: 4,
      firstName: "Ananya",
      email: "employee4@example.com",
      password: "123",
      tasks: [
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          taskTitle: "Write Blog Post",
          taskDescription: "Draft an article on the benefits of Tailwind CSS.",
          taskDate: "2025-01-04",
          category: "Content Writing"
        },
        {
          active: true,
          newTask: false,
          completed: false,
          failed: false,
          taskTitle: "Create Dashboard",
          taskDescription: "Build an analytics dashboard using React.",
          taskDate: "2025-01-13",
          category: "Development"
        },
        {
          active: false,
          newTask: true,
          completed: false,
          failed: false,
          taskTitle: "Test API Endpoints",
          taskDescription: "Perform functional testing for all API endpoints.",
          taskDate: "2025-01-15",
          category: "Testing"
        }
      ],
      taskNumbers: {
        active: 1,
        newTask: 1,
        completed: 1,
        failed: 0
      }
    },
    {
      id: 5,
      firstName: "Vikram",
      email: "employee5@example.com",
      password: "123",
      tasks: [
        {
          active: true,
          newTask: false,
          completed: false,
          failed: false,
          taskTitle: "Redesign About Page",
          taskDescription: "Implement a modern design for the About Us page.",
          taskDate: "2025-01-11",
          category: "Design"
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          taskTitle: "Set Up CI/CD",
          taskDescription: "Integrate CI/CD pipeline for the repository.",
          taskDate: "2025-01-06",
          category: "DevOps"
        },
        {
          active: false,
          newTask: true,
          completed: false,
          failed: false,
          taskTitle: "Update SEO Tags",
          taskDescription: "Add meta tags for improved SEO performance.",
          taskDate: "2025-01-14",
          category: "SEO"
        }
      ],
      taskNumbers: {
        active: 1,
        newTask: 1,
        completed: 1,
        failed: 0
      }
    }
  ];
  const admin = [
    {
      id: 1,
      firstName: "Admin",
      email: "admin@example.com",
      password: "123"
    }
  ];

    export const setLocalStorage = () => {
        localStorage.setItem('employees', JSON.stringify(employee));
        localStorage.setItem('admin', JSON.stringify(admin));
    }
    export const getLocalStorage = () => {
        const employees = JSON.parse(localStorage.getItem('employees'));
        const admin = JSON.parse(localStorage.getItem('admin'));
        return {employees, admin};
    }
  