import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, CheckCircle } from 'lucide-react';

const CTABanner = () => {
  const benefits = [
    'Verified Achievement Records',
    'Instant Portfolio Generation', 
    'NAAC/NIRF Compliance',
    'Real-time Analytics'
  ];

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-gradient"></div>
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-white/5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='7'/%3E%3Ccircle cx='53' cy='7' r='7'/%3E%3Ccircle cx='7' cy='53' r='7'/%3E%3Ccircle cx='53' cy='53' r='7'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full floating-animation"></div>
      <div className="absolute top-20 right-20 w-16 h-16 bg-white/10 rounded-lg floating-animation" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-20 left-20 w-12 h-12 bg-white/10 rounded-full floating-animation" style={{ animationDelay: '4s' }}></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          {/* Icon */}
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <Sparkles className="w-10 h-10 text-white" />
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-3xl lg:text-6xl font-bold text-white mb-6">
            Start Building Your Verified
            <br />
            <span className="text-white/90">Digital Profile Today!</span>
          </h2>

          <p className="text-lg lg:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Join thousands of students and institutions already using Smart Student Hub 
            to showcase achievements and streamline academic records.
          </p>

          {/* Benefits */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 max-w-3xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={benefit}
                className="flex items-center space-x-2 text-white/90 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CheckCircle className="w-5 h-5 text-white flex-shrink-0" />
                <span className="text-sm lg:text-base">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 transition-all duration-200 shadow-lg hover:shadow-xl group text-lg px-8 py-6"
            >
              Get Started Free
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-200 text-lg px-8 py-6"
            >
              Schedule Demo
            </Button>
          </div>

          {/* Additional Info */}
          <p className="text-white/60 text-sm mt-8">
            ✨ Free for students  •  🔒 Bank-level security  •  🚀 Instant setup  •  📱 Mobile friendly
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;