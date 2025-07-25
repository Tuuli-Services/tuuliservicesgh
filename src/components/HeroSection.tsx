
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-tuuli-navy via-tuuli-navy/90 to-tuuli-green/20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="w-full h-full bg-white/5 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:20px_20px]"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Innovative Technology
              <span className="text-tuuli-yellow block">Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              Empowering individuals and businesses globally with cutting-edge software development, 
              web solutions, and digital innovation from Ghana.
            </p>
          </div>
          
          <div className="animate-slide-in-right flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">
            <Button 
              size="lg" 
              className="bg-tuuli-green hover:bg-tuuli-green/90 text-white px-8 py-4 text-lg font-semibold group"
              onClick={() => scrollToSection('contact')}
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-tuuli-navy hover:bg-white hover:text-tuuli-navy px-8 py-4 text-lg font-semibold"
              onClick={() => scrollToSection('services')}
            >
              View Our Services
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-fade-in">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-tuuli-yellow mb-2">50+</div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-tuuli-yellow mb-2">30+</div>
              <div className="text-gray-300">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-tuuli-yellow mb-2">7</div>
              <div className="text-gray-300">Services Offered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-tuuli-yellow mb-2">24/7</div>
              <div className="text-gray-300">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
