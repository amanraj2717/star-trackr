import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  User,
  UserCheck,
  Shield,
  Calendar,
  FileText,
  BarChart3,
  Bell,
  Puzzle,
  Trophy,
  ArrowRight
} from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: User,
      title: 'Student Dashboard',
      description: 'Personal profile management, achievement uploads, and portfolio generation in one place.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      icon: UserCheck,
      title: 'Faculty Dashboard',
      description: 'Approve student submissions, provide mentorship, and access detailed analytics.',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      icon: Shield,
      title: 'Admin Dashboard',
      description: 'Complete user management, system reports, and seamless integrations.',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      icon: Calendar,
      title: 'Activity Tracker',
      description: 'Track conferences, certifications, workshops, and extra-curricular activities.',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
    },
    {
      icon: FileText,
      title: 'Portfolio Generator',
      description: 'Auto-generate professional PDF portfolios with verified achievements.',
      color: 'text-pink-600',
      bgColor: 'bg-pink-50',
    },
    {
      icon: BarChart3,
      title: 'Analytics & Reports',
      description: 'Comprehensive reports for NAAC, NIRF, AICTE compliance and institutional insights.',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
    },
    {
      icon: Bell,
      title: 'Smart Notifications',
      description: 'Real-time email and push notifications for important updates and deadlines.',
      color: 'text-red-600',
      bgColor: 'bg-red-50',
    },
    {
      icon: Puzzle,
      title: 'LMS/ERP Integration',
      description: 'Seamlessly connect with existing Learning Management and ERP systems.',
      color: 'text-teal-600',
      bgColor: 'bg-teal-50',
    },
    {
      icon: Trophy,
      title: 'Gamification',
      description: 'Leaderboards, achievement badges, and progress tracking for student engagement.',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
    },
  ];

  return (
    <section id="features" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Everything You Need in One Platform
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground">
            Comprehensive tools for students, faculty, and administration to manage 
            and showcase academic achievements efficiently.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className="card-hover bg-card border-0 shadow-card animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="space-y-4">
                  {/* Icon */}
                  <div className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center`}>
                    <feature.icon className={`w-8 h-8 ${feature.color}`} />
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* CTA */}
                  <Button 
                    variant="ghost" 
                    className="p-0 h-auto text-primary hover:text-primary-dark group"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <Button size="lg" className="hero-gradient text-white hover:opacity-90 transition-all duration-200 shadow-hero">
            Explore All Features
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;