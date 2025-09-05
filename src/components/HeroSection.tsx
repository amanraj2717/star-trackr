import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Award, BarChart3 } from 'lucide-react';
import heroIllustration from '@/assets/hero-illustration.jpg';

const HeroSection = () => {
  const stats = [
    { label: 'Active Students', value: '10K+', icon: Users },
    { label: 'Achievements', value: '50K+', icon: Award },
    { label: 'Success Rate', value: '98.3%', icon: BarChart3 },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 hero-gradient opacity-5"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full floating-animation"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-primary/20 rounded-lg floating-animation" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-primary/15 rounded-full floating-animation" style={{ animationDelay: '4s' }}></div>

      <div className="container mx-auto px-4 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Hero Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Your Centralized
                <span className="block hero-gradient bg-clip-text text-transparent">
                  Digital Student
                </span>
                Portfolio
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground max-w-xl">
                All achievements in one verified, shareable hub. Streamline academic records, 
                co-curricular activities, and career development.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="hero-gradient text-white hover:opacity-90 transition-all duration-200 shadow-hero group">
                Student Login
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white transition-all duration-200">
                Faculty/Admin Login
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="text-center animate-scale-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex justify-center mb-2">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-2xl lg:text-3xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative z-10">
              <img
                src={heroIllustration}
                alt="Digital Student Portfolio Illustration"
                className="w-full h-auto rounded-2xl shadow-hero"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 hero-gradient rounded-full opacity-20 animate-float"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full opacity-50 animate-float" style={{ animationDelay: '3s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;