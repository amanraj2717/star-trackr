import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  User,
  UserCheck,
  Shield,
  BookOpen,
  Upload,
  FileText,
  CheckCircle,
  BarChart3,
  Users,
  Settings,
  Database,
  TrendingUp,
  ArrowRight
} from 'lucide-react';

const RoleSection = () => {
  const roles = [
    {
      id: 'student',
      title: 'Student',
      icon: User,
      description: 'Manage your academic journey and showcase achievements',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      features: [
        { icon: BookOpen, title: 'Personal Dashboard', desc: 'Track your academic progress and achievements in real-time' },
        { icon: Upload, title: 'Upload Achievements', desc: 'Easily upload certificates, awards, and project documentation' },
        { icon: FileText, title: 'Portfolio Generator', desc: 'Create professional portfolios automatically from your data' },
        { icon: BarChart3, title: 'Progress Analytics', desc: 'Visualize your growth and identify areas for improvement' },
      ]
    },
    {
      id: 'faculty',
      title: 'Faculty',
      icon: UserCheck,
      description: 'Guide students and manage academic verification processes',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      features: [
        { icon: CheckCircle, title: 'Approval Workflow', desc: 'Review and approve student achievement submissions efficiently' },
        { icon: Users, title: 'Student Mentoring', desc: 'Provide guidance and track mentee progress over time' },
        { icon: BarChart3, title: 'Class Analytics', desc: 'Monitor class performance and identify improvement opportunities' },
        { icon: FileText, title: 'Reporting Tools', desc: 'Generate comprehensive reports for academic assessments' },
      ]
    },
    {
      id: 'admin',
      title: 'Admin',
      description: 'Oversee institutional operations and system management',
      icon: Shield,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      features: [
        { icon: Users, title: 'User Management', desc: 'Manage student, faculty, and staff accounts with role-based access' },
        { icon: Database, title: 'System Integration', desc: 'Connect with existing LMS, ERP, and other institutional systems' },
        { icon: TrendingUp, title: 'Institutional Reports', desc: 'Generate reports for NAAC, NIRF, AICTE compliance' },
        { icon: Settings, title: 'System Configuration', desc: 'Configure workflows, notifications, and system preferences' },
      ]
    }
  ];

  return (
    <section id="dashboards" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Tailored for Every Role
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground">
            Purpose-built dashboards and tools for students, faculty, and 
            administration with role-specific features and workflows.
          </p>
        </div>

        {/* Role Tabs */}
        <Tabs defaultValue="student" className="w-full">
          <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-12 bg-secondary">
            {roles.map((role) => (
              <TabsTrigger
                key={role.id}
                value={role.id}
                className="flex items-center space-x-2 data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                <role.icon className="w-4 h-4" />
                <span className="hidden sm:inline">{role.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {roles.map((role) => (
            <TabsContent key={role.id} value={role.id} className="mt-0">
              <div className="animate-fade-in">
                {/* Role Header */}
                <div className="text-center mb-12">
                  <div className={`w-20 h-20 ${role.bgColor} rounded-3xl flex items-center justify-center mx-auto mb-6`}>
                    <role.icon className={`w-10 h-10 ${role.color}`} />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                    {role.title} Experience
                  </h3>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    {role.description}
                  </p>
                </div>

                {/* Role Features */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  {role.features.map((feature, index) => (
                    <Card
                      key={feature.title}
                      className="card-hover bg-card border-0 shadow-card animate-scale-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className={`w-12 h-12 ${role.bgColor} rounded-xl flex items-center justify-center flex-shrink-0`}>
                            <feature.icon className={`w-6 h-6 ${role.color}`} />
                          </div>
                          <div className="space-y-2">
                            <h4 className="text-lg font-semibold text-foreground">
                              {feature.title}
                            </h4>
                            <p className="text-muted-foreground">
                              {feature.desc}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Role CTA */}
                <div className="text-center">
                  <Button 
                    size="lg" 
                    className="hero-gradient text-white hover:opacity-90 transition-all duration-200 shadow-hero group"
                  >
                    Explore {role.title} Dashboard
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default RoleSection;