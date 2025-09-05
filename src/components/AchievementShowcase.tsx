import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Download,
  Share2,
  Star,
  Award,
  Calendar,
  MapPin,
  Eye,
  ExternalLink
} from 'lucide-react';

const AchievementShowcase = () => {
  // Mock student data
  const studentData = {
    name: 'John Smith',
    studentId: 'CSE2021001',
    course: 'Computer Science Engineering',
    year: '4th Year',
    cgpa: '8.9',
    rating: 4.8,
    achievements: [
      {
        title: 'Best Research Paper Award',
        category: 'Academic',
        issuer: 'IEEE Conference 2024',
        date: '2024-03-15',
        location: 'New Delhi',
        verified: true,
        badge: 'gold'
      },
      {
        title: 'Google Cloud Certified',
        category: 'Certification',
        issuer: 'Google Cloud',
        date: '2024-02-20',
        location: 'Online',
        verified: true,
        badge: 'blue'
      },
      {
        title: 'Hackathon Winner',
        category: 'Competition',
        issuer: 'TechFest 2024',
        date: '2024-01-10',
        location: 'Mumbai',
        verified: true,
        badge: 'purple'
      }
    ]
  };

  const getBadgeVariant = (badge: string) => {
    switch (badge) {
      case 'gold': return 'default';
      case 'blue': return 'secondary';
      case 'purple': return 'outline';
      default: return 'default';
    }
  };

  return (
    <section id="showcase" className="py-20 lg:py-32 bg-secondary/20">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Showcase Your Achievements
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground">
            Transform your academic journey into a comprehensive, 
            verified digital portfolio that stands out to employers and institutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Student Profile Preview */}
          <div className="animate-scale-in">
            <Card className="bg-card border-0 shadow-card-hover">
              <CardContent className="p-8">
                {/* Profile Header */}
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-16 h-16 hero-gradient rounded-full flex items-center justify-center text-white text-xl font-bold">
                    {studentData.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{studentData.name}</h3>
                    <p className="text-muted-foreground">{studentData.studentId}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm text-muted-foreground">{studentData.rating}/5.0</span>
                    </div>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="text-center p-4 bg-secondary rounded-lg">
                    <div className="text-2xl font-bold text-foreground">{studentData.cgpa}</div>
                    <div className="text-sm text-muted-foreground">CGPA</div>
                  </div>
                  <div className="text-center p-4 bg-secondary rounded-lg">
                    <div className="text-2xl font-bold text-foreground">{studentData.achievements.length}</div>
                    <div className="text-sm text-muted-foreground">Awards</div>
                  </div>
                  <div className="text-center p-4 bg-secondary rounded-lg">
                    <div className="text-2xl font-bold text-foreground">{studentData.year}</div>
                    <div className="text-sm text-muted-foreground">Year</div>
                  </div>
                </div>

                {/* Recent Achievements */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-foreground flex items-center">
                    <Award className="w-5 h-5 mr-2 text-primary" />
                    Recent Achievements
                  </h4>
                  {studentData.achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors"
                    >
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Award className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2 mb-1">
                          <h5 className="font-medium text-foreground">{achievement.title}</h5>
                          <Badge 
                            variant={getBadgeVariant(achievement.badge)}
                            className="text-xs"
                          >
                            {achievement.category}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{achievement.issuer}</p>
                        <div className="flex items-center space-x-4 mt-2 text-xs text-muted-foreground">
                          <div className="flex items-center">
                            <Calendar className="w-3 h-3 mr-1" />
                            {new Date(achievement.date).toLocaleDateString()}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-3 h-3 mr-1" />
                            {achievement.location}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Portfolio Actions */}
                <div className="flex space-x-3 mt-8">
                  <Button 
                    size="sm" 
                    className="flex-1 hero-gradient text-white hover:opacity-90 transition-all duration-200"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Share2 className="w-4 h-4 mr-2" />
                    Share Portfolio
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Benefits */}
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Eye className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Visual Portfolio Preview
                  </h3>
                  <p className="text-muted-foreground">
                    See exactly how your achievements will look to employers and institutions 
                    with our real-time portfolio preview.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Download className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    One-Click PDF Generation
                  </h3>
                  <p className="text-muted-foreground">
                    Generate professional, formatted PDF portfolios instantly with all your 
                    verified achievements and academic records.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <ExternalLink className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Easy Sharing & Access
                  </h3>
                  <p className="text-muted-foreground">
                    Share your portfolio with a simple link, giving recruiters and institutions 
                    instant access to your verified achievements.
                  </p>
                </div>
              </div>
            </div>

            <Button 
              size="lg" 
              className="w-full lg:w-auto hero-gradient text-white hover:opacity-90 transition-all duration-200 shadow-hero"
            >
              View Sample Portfolio
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementShowcase;