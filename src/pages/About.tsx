import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Award, Zap } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const About = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Accuracy First",
      description: "We're obsessed with providing the most accurate contact validation in the industry."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Speed & Scale",
      description: "Lightning-fast processing that scales with your business needs."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Customer Success",
      description: "Your success is our mission. We're here to help you achieve your goals."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Innovation",
      description: "Continuously improving our technology to stay ahead of industry needs."
    }
  ];

  const team = [
    {
      name: "Sarah Martinez",
      role: "CEO & Co-Founder",
      bio: "Former VP of Sales at TechCorp with 15+ years in B2B sales technology.",
      expertise: ["Sales Technology", "Business Strategy", "Team Leadership"]
    },
    {
      name: "Michael Chen",
      role: "CTO & Co-Founder", 
      bio: "Ex-Google engineer with deep expertise in data validation and machine learning.",
      expertise: ["Machine Learning", "Data Engineering", "System Architecture"]
    },
    {
      name: "Emily Rodriguez",
      role: "VP of Customer Success",
      bio: "Customer success expert who has helped 1000+ companies optimize their sales processes.",
      expertise: ["Customer Success", "Sales Operations", "Process Optimization"]
    },
    {
      name: "David Kim",
      role: "Head of Data Science",
      bio: "PhD in Computer Science specializing in email validation algorithms and fraud detection.",
      expertise: ["Data Science", "Algorithm Development", "Fraud Detection"]
    }
  ];

  const stats = [
    { value: "2019", label: "Founded" },
    { value: "50M+", label: "Contacts Validated" },
    { value: "10K+", label: "Happy Customers" },
    { value: "99.5%", label: "Accuracy Rate" }
  ];

  const certifications = [
    "SOC 2 Type II",
    "GDPR Compliant",
    "ISO 27001",
    "CCPA Compliant"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-16 bg-gradient-hero">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About NetworkMarketingNews
              <span className="block text-primary-foreground">Solutions</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              We're on a mission to help B2B sales teams connect with their prospects 
              through accurate, reliable contact validation technology.
            </p>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              Our Story
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-6">
                NetworkMarketingNews Solutions was founded in 2019 by a team of sales technology 
                veterans who experienced firsthand the frustration of poor contact data quality. 
                After seeing countless sales teams struggle with bounced emails, invalid contacts, 
                and wasted outreach efforts, we knew there had to be a better way.
              </p>
              
              <p className="text-lg text-muted-foreground mb-6">
                We started with a simple mission: create the most accurate, fastest, and 
                most reliable contact validation service in the market. What began as a solution 
                to our own problems quickly grew into a platform trusted by thousands of companies 
                worldwide.
              </p>
              
              <p className="text-lg text-muted-foreground">
                Today, we're proud to help over 10,000 companies improve their outbound success 
                rates, reduce bounce rates, and build more meaningful connections with their prospects. 
                Our technology validates over 50 million contacts annually, and we're just getting started.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center bg-gradient-card">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 text-primary">
                    {value.icon}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Meet the experts behind Contact Validator's success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="bg-gradient-card">
                <CardContent className="p-6">
                  <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4"></div>
                  <h3 className="font-semibold text-lg text-center mb-1">{member.name}</h3>
                  <p className="text-primary text-sm text-center mb-4">{member.role}</p>
                  <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
                  
                  <div className="flex flex-wrap gap-1">
                    {member.expertise.map((skill, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Security & Compliance
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Your data security and privacy are our top priorities
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {certifications.map((cert, index) => (
                <Badge key={index} variant="outline" className="p-3 text-center">
                  {cert}
                </Badge>
              ))}
            </div>

            <p className="text-muted-foreground">
              We maintain the highest standards of data protection and comply with all major 
              privacy regulations including GDPR, CCPA, and PIPEDA. Our SOC 2 Type II certification 
              ensures your data is handled with enterprise-grade security.
            </p>
          </div>
        </div>
      </section>

      {/* Miami Office */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Miami Headquarters
                </h2>
                <p className="text-muted-foreground mb-6">
                  Located in the heart of Miami's thriving tech district, our headquarters 
                  brings together talent from across the Americas to build the future of 
                  contact validation technology.
                </p>
                
                <div className="space-y-2 text-muted-foreground">
                  <p><strong>Address:</strong></p>
                  <p>NetworkMarketingNews Solutions</p>
                  <p>123 Business District</p>
                  <p>Miami, FL 33131</p>
                  <p><strong>Phone:</strong> (305) 555-0123</p>
                </div>
              </div>
              
              <div className="bg-primary/5 h-64 rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground">Miami Office Location</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Work with Us?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of companies who trust Contact Validator for their data quality needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Contact Our Team
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;