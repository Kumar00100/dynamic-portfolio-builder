const skills = [
  "MERN Stack",
  "Next.js",
  "TypeScript",
  "Core Python",
  "Django",
  "SQL / Oracle Database",
  "Business Analysis",
  "Product Coordination",
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
          <span className="text-primary">#</span> Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <span
              key={skill}
              className="px-6 py-3 bg-card border border-border rounded-full text-foreground font-medium hover:border-primary hover:text-primary transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
