export interface CurriculumPhase {
  id: string;

  phase: string;

  title: string;

  promise: string;

  overview: string;

  keyExperiences: string[];

  confidenceStatement: string;

  purpose: string;

  whatYouWillLearn: string[];

  technologiesYouWillWorkWith: string[];

  learningApproach: string;

  readyFor: string;

  comingSoon?: boolean;

  isFinalPhase?: boolean;
}

export const phases: CurriculumPhase[] = [
  {
    id: "foundation",

    phase: "Foundation",

    title: "Learning to Learn",

    promise:
      "Build the confidence and habits needed to learn technology effectively.",

    overview:
      "Every learning journey begins with confidence. Before writing meaningful programs, learners first develop the mindset required to succeed throughout the rest of the curriculum.",

    keyExperiences: [
      "Understanding how programmers think",
      "Seeing that programming languages share common ideas",
      "Learning without unnecessary technical barriers",
    ],

    confidenceStatement: "I can learn this.",

    purpose:
      "Programming is rarely difficult because of syntax. It is often difficult because learners believe it is beyond them. This phase replaces uncertainty with curiosity and prepares learners to approach technology with confidence.",

    whatYouWillLearn: [
      "Programming languages share common ideas",
      "How computers execute instructions",
      "Programming as structured problem solving",
      "Debugging as a normal part of software development",
      "Learning how to learn independently",
    ],

    technologiesYouWillWorkWith: [
      "Browser-based development environment",
      "Jupyter Notebook",
    ],

    learningApproach:
      "Learning happens through interactive demonstrations, discussions, language comparisons, and guided experimentation. The emphasis is on curiosity and understanding rather than writing large amounts of code.",

    readyFor: "Thinking Like a Programmer",
  },

  // Phase 1
  {
        id: "thinking-like-a-programmer",

        phase: "Phase 1",

        title: "Thinking Like a Programmer",

        promise:
            "Learn to solve problems by thinking like a programmer.",

        overview:
            "Python becomes the language used throughout the remainder of the curriculum. Learners develop computational thinking through interactive notebooks, practical examples, and working with real data.",

        keyExperiences: [
            "Writing Python programs",
            "Manipulating structured data",
            "Exploring datasets through code",
        ],

        confidenceStatement:
            "I can write programs.",

        purpose:
            "The objective is not to master Python. The objective is to become comfortable expressing ideas through code and developing the computational thinking needed for everything that follows in the curriculum.",

        whatYouWillLearn: [
            "Variables and data types",
            "Expressions and operators",
            "Conditional logic",
            "Loops",
            "Functions",
            "Collections",
            "Working with files",
            "NumPy arrays",
            "Pandas",
            "Exploratory Data Analysis",
            "Data visualization",
        ],

        technologiesYouWillWorkWith: [
            "Python",
            "Jupyter Notebook",
            "NumPy",
            "Pandas",
            "Matplotlib",
            "Seaborn",
        ],

        learningApproach:
            "Learning happens through interactive notebooks containing hundreds of short examples. Learners experiment continuously, explore real datasets, and build confidence by understanding and modifying working code rather than memorizing syntax.",

        readyFor:
            "Building Software",
        },

    // Phase 2
    {
  id: "building-software",

  phase: "Phase 2",

  title: "Building Software",

  promise:
    "Turn ideas into working software through practical projects.",

  overview:
    "Programming becomes meaningful when it solves real problems. In this phase, learners build complete applications while discovering that the ability to read documentation and learn new tools is more valuable than mastering any single framework.",

  keyExperiences: [
    "Building interactive software",
    "Collaborating with Git and GitHub",
    "Learning new technologies from documentation",
  ],

  confidenceStatement:
    "I can build software.",

  purpose:
    "Software engineering is not about memorizing frameworks. It is about solving problems, learning continuously, and collaborating effectively. This phase introduces professional development workflows while reinforcing the idea that technologies change, but strong engineering practices remain valuable.",

  whatYouWillLearn: [
    "Git fundamentals",
    "Working with GitHub repositories",
    "Cloning, committing and pushing code",
    "Reading technical documentation",
    "Building interactive applications",
    "Structuring small software projects",
    "Debugging and improving applications",
  ],

  technologiesYouWillWorkWith: [
    "Git",
    "GitHub",
    "Python",
    "Gradio",
    "Streamlit",
    "Markdown",
  ],

  learningApproach:
    "Learners build several complete applications using different technologies. Rather than becoming attached to a particular framework, they develop the confidence to explore documentation, experiment, and assemble working software using whichever tools best fit the problem.",

  readyFor:
    "Teaching Computers to Learn",
},

// Phase 3
    {
  id: "teaching-computers-to-learn",

  phase: "Phase 3",

  title: "Teaching Computers to Learn",

  promise:
    "Discover how machines learn patterns from data instead of following fixed rules.",

  overview:
    "Artificial Intelligence begins with data. In this phase, learners explore Machine Learning and Deep Learning by training models on real datasets, evaluating their performance, and understanding why they succeed or fail. Rather than treating AI as magic, learners build an intuition for how intelligent systems are created.",

  keyExperiences: [
    "Training Machine Learning models",
    "Working with real-world datasets",
    "Building Deep Learning models",
  ],

  confidenceStatement:
    "I can teach a computer to learn.",

  purpose:
    "Modern software increasingly relies on data-driven decision making. This phase introduces the foundations of Artificial Intelligence through practical experimentation with Machine Learning and Neural Networks. Learners move beyond writing explicit instructions and begin building systems that learn from examples.",

  whatYouWillLearn: [
    "Preparing and cleaning datasets",
    "Feature engineering",
    "Supervised learning",
    "Classification and regression",
    "Model evaluation",
    "Overfitting and underfitting",
    "Neural Networks",
    "Deep Learning fundamentals",
    "Computer Vision",
    "Natural Language Processing",
  ],

  technologiesYouWillWorkWith: [
    "NumPy",
    "Pandas",
    "Matplotlib",
    "Scikit-learn",
    "TensorFlow",
    "PyTorch",
    "Jupyter Notebook",
  ],

  learningApproach:
    "Learners work with authentic datasets, train multiple models, compare their performance, visualize results, and iteratively improve them. Every concept is introduced through experimentation before formal theory, helping learners develop both intuition and practical skills.",

  readyFor:
    "Building Intelligent Systems",
},
// Phase 4
{
  id: "building-intelligent-systems",

  phase: "Phase 4",

  title: "Building Intelligent Systems",

  promise:
    "Combine programming and AI to build useful intelligent applications.",

  overview:
    "Machine Learning models become truly valuable when they are integrated into software that people can use. In this phase, learners combine software engineering with Artificial Intelligence to build complete applications that make predictions, analyze data, and solve real-world problems.",

  keyExperiences: [
    "Building AI-powered applications",
    "Deploying machine learning models",
    "Connecting AI with software",
  ],

  confidenceStatement:
    "I can build intelligent systems.",

  purpose:
    "Artificial Intelligence is rarely useful as an isolated notebook or trained model. Professional AI systems combine data processing, trained models, user interfaces, and deployment into a single application. This phase teaches learners how to bridge the gap between Machine Learning and Software Engineering.",

  whatYouWillLearn: [
    "Saving and loading trained models",
    "Model inference",
    "Building prediction pipelines",
    "Creating AI-powered web applications",
    "Deploying machine learning solutions",
    "Testing intelligent applications",
    "Improving user experience",
  ],

  technologiesYouWillWorkWith: [
    "Python",
    "Gradio",
    "Streamlit",
    "Scikit-Learn",
    "TensorFlow",
    "PyTorch",
  ],

  learningApproach:
    "Learners transform the models they trained in the previous phase into complete software applications. The emphasis shifts from experimenting in notebooks to building tools that others can interact with, reinforcing the idea that AI is most valuable when it solves real problems.",

  readyFor:
    "Building for the Real World",
},

// Phase 5
{
  id: "building-for-the-real-world",

  phase: "Phase 5",

  title: "Building for the Real World",

  promise:
    "Build software collaboratively using modern AI tools and professional engineering workflows.",

  overview:
    "Software development continues long after an application is deployed. In this final phase, learners experience how modern development teams build, improve, and maintain software by collaborating with AI assistants, exploring new technologies, and continuously learning throughout their careers.",

  keyExperiences: [
    "Collaborating with AI assistants",
    "Learning new technologies independently",
    "Working like a professional development team",
  ],

  confidenceStatement:
    "I can continue learning and building beyond this course.",

  purpose:
    "Technology evolves rapidly, but the ability to adapt lasts a career. Rather than preparing learners for today's tools alone, this phase develops the habits of continuous learning, critical thinking, collaboration, and responsible use of AI. The goal is to help learners become engineers who can confidently grow with the industry.",

  whatYouWillLearn: [
    "Using AI to accelerate software development",
    "Working with local and cloud-based language models",
    "Using modern AI SDKs and APIs",
    "Planning and building software collaboratively",
    "Reading documentation for unfamiliar technologies",
    "Debugging with AI assistance",
    "Improving and maintaining software over time",
    "Developing lifelong learning habits",
  ],

  technologiesYouWillWorkWith: [
    "OpenAI SDK",
    "Local Language Models",
    "Git",
    "GitHub",
    "Python",
    "Markdown",
  ],

  learningApproach:
    "Learners work as modern software developers: planning projects, collaborating with AI assistants, exploring unfamiliar technologies through documentation, and iteratively improving their software. The emphasis is on developing the confidence to continue learning long after the curriculum ends.",

  readyFor:
    "Your Next Project",
  
  isFinalPhase: true,
},
];