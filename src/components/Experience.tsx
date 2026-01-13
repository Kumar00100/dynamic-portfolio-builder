import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Full-Stack Web Developer",
    company: "AIADopTs by CoachBoTs",
    period: "2025 – 2026",
    points: [
      "Developed and maintained 10+ full-stack web features using React JS, Python (Django), and Oracle database.",
      "Improved application performance and code stability through optimization and refactoring of core modules.",
      "Contributed to building a scalable user-facing platform supporting 10+ content categories and workflows.",
    ],
  },
  {
    title: "Business Analyst (Product & Platform)",
    company: "AIADopTs by CoachBoTs",
    period: "2025 – 2026",
    points: [
      "Performed business analysis for a user-facing AI platform by gathering and documenting requirements from multiple stakeholders.",
      "Analyzed and structured user journeys across 5+ core platform sections to improve content discovery.",
      "Coordinated with technical teams to support product operations, documentation, and reporting.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
          <span className="text-primary">#</span> Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-semibold text-foreground">
                      {exp.title}
                    </h3>
                    <span className="text-primary font-medium text-sm">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-4">{exp.company}</p>
                  <ul className="space-y-2">
                    {exp.points.map((point, i) => (
                      <li
                        key={i}
                        className="text-muted-foreground text-sm flex items-start gap-2"
                      >
                        <span className="text-primary mt-1.5">•</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
