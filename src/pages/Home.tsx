import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { CheckCircle, Shield, Zap, Users, Star, TrendingUp } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Home = () => {
  const [email, setEmail] = useState("");

  const features = [
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "99.5% Accuracy Rate",
      description: "Industry-leading validation accuracy with real-time verification"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Instant Validation",
      description: "Validate thousands of contacts in seconds with our API"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "GDPR Compliant",
      description: "Fully compliant with data protection regulations"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Collaboration",
      description: "Share validated lists across your entire sales team"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechCorp",
      role: "Sales Director",
      content: "Contact Validator increased our email deliverability by 45% and saved us thousands in bounced email costs.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "Growth Solutions",
      role: "Marketing Manager", 
      content: "The ROI was immediate. We saw a 60% improvement in our outbound campaign response rates.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      company: "StartupXYZ",
      role: "CEO",
      content: "Simple, fast, and incredibly accurate. This tool is essential for any B2B sales operation.",
      rating: 5
    }
  ];

  const stats = [
    { value: "50M+", label: "Contacts Validated" },
    { value: "10K+", label: "Happy Customers" },
    { value: "99.5%", label: "Accuracy Rate" },
    { value: "24/7", label: "Support Available" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-16 bg-gradient-hero">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Validate Contacts.<br />
              <span className="text-primary-foreground">Boost Success Rates.</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Professional contact validation that improves your outbound success rate. 
              Clean your lists, reduce bounces, and reach more prospects with confidence.
            </p>
            
            {/* Email Signup */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
              />
              <Button className="bg-white text-primary hover:bg-white/90">
                Start Free Trial
              </Button>
            </div>
            
            <p className="text-sm text-white/80">
              No credit card required • 1,000 free validations • Cancel anytime
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Contact Validator?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Advanced email verification technology that ensures your messages reach real prospects
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-gradient-card">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 text-primary">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator Teaser */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <TrendingUp className="w-16 h-16 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Calculate Your ROI
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              See how much Contact Validator can save your business in reduced bounce rates and improved deliverability
            </p>
            <Button size="lg" className="bg-gradient-primary hover:opacity-90">
              Try ROI Calculator
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Trusted by Sales Teams Worldwide
            </h2>
            <p className="text-xl text-muted-foreground">
              Join thousands of companies improving their outbound success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gradient-card">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Improve Your Contact Quality?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Start validating your contacts today with our 7-day free trial
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Book a Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;