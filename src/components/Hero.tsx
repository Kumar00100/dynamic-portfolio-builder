import { Mail, Phone, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Hello, I'm
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 tracking-tight">
            Kumar Gourab Barik
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Full-Stack Web Developer & Business Analyst
          </p>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Results-driven Full-Stack Web Developer with one year of hands-on experience 
            in designing, developing, and maintaining web applications. Strong knowledge 
            of front-end and back-end technologies with a focus on clean, scalable, and 
            maintainable code.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <a 
              href="tel:+919556445740" 
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              +91-9556445740
            </a>
            <a 
              href="mailto:kumargourabbarik@zohomail.in" 
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4" />
              kumargourabbarik@zohomail.in
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Bhubaneswar, Odisha
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
