import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Medicare+ Hospital Management System",
    description: "A comprehensive healthcare platform built with MERN stack featuring appointment booking, doctor management, patient records, and emergency services. Includes features like 24/7 pharmacy, lab tests, ICU care, ambulance services, and more.",
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS"],
    liveUrl: "https://aesthetic-tarsier-a1f680.netlify.app/",
    features: [
      "Patient Appointment Booking",
      "Doctor & Department Management", 
      "24/7 Emergency Services",
      "Health Checkup Packages",
      "Insurance Integration"
    ]
  },
  {
    title: "AI Library Bot - AIADopTs by CoachBoTs",
    description: "An intelligent AI-powered library management platform developed at CoachBoTs. Features adoption intelligence, user authentication, and AI-driven book recommendations and management system.",
    technologies: ["React", "AI/ML", "Node.js", "Authentication", "REST API"],
    liveUrl: "https://playground.coachbots.com/library-bot/c48fe4c1-97d6-4535-8de5-08ab0ea04adb",
    features: [
      "AI Adoption Intelligence",
      "User Authentication",
      "Library Management",
      "AI Recommendations",
      "Feedback System"
    ]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 md:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Showcasing my work in full-stack web development
        </p>
        
        <div className="grid gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl shadow-lg overflow-hidden border border-border hover:shadow-xl transition-all duration-300 animate-fade-in"
            >
              <div className="p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <a 
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors whitespace-nowrap font-medium"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">Key Features</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                    {project.features.map((feature, i) => (
                      <div 
                        key={i}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
