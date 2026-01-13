import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "NIIS Institute of Business Administration, BPUT University",
    period: "2023 – 2025",
    grade: "CGPA: 7.1",
    description:
      "Specialized in Full-Stack Web Development, Python, React JS, and Database Systems.",
  },
  {
    degree: "Bachelor of Science (Mathematics)",
    institution: "Dr. Nayapalli College, Utkal University",
    period: "2020 – 2023",
    grade: "CGPA: 6.0",
    description:
      "Focus on Mathematics, Analytical Thinking, and Problem Solving.",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
          <span className="text-primary">#</span> Education
        </h2>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1">
                    <h3 className="text-xl font-semibold text-foreground">
                      {edu.degree}
                    </h3>
                    <span className="text-primary font-medium text-sm">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-2">{edu.institution}</p>
                  <p className="text-sm text-primary font-medium mb-2">
                    {edu.grade}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {edu.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
