import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle, 
  Zap, 
  Shield, 
  Database, 
  Globe, 
  Users,
  BarChart3,
  Settings,
  RefreshCw,
  Lock
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Features = () => {
  const coreFeatures = [
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Real-Time Email Validation",
      description: "Validate email addresses instantly with our advanced verification algorithms that check syntax, domain validity, and mailbox existence.",
      features: ["Syntax validation", "Domain verification", "Mailbox existence check", "Catch-all detection"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Bulk Processing",
      description: "Upload and validate thousands of contacts simultaneously with our high-performance processing engine.",
      features: ["CSV/Excel upload", "Up to 100K contacts", "Progress tracking", "Downloadable results"]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Enrichment",
      description: "Enhance your contact data with additional information including social profiles and company details.",
      features: ["Company information", "Social profiles", "Phone numbers", "Job titles"]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Coverage",
      description: "Validate contacts from any country with our worldwide email verification network.",
      features: ["190+ countries", "Local validation rules", "Timezone detection", "Language support"]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Advanced Analytics",
      description: "Get detailed insights into your contact quality with comprehensive validation reports and metrics.",
      features: ["Quality scores", "Bounce predictions", "Deliverability insights", "Custom reports"]
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "API Integration",
      description: "Seamlessly integrate our validation service into your existing workflows and applications.",
      features: ["RESTful API", "Webhooks", "SDKs available", "Real-time validation"]
    }
  ];

  const integrations = [
    "Salesforce", "HubSpot", "Mailchimp", "Pipedrive", 
    "Klaviyo", "Marketo", "Pardot", "ActiveCampaign"
  ];

  const securityFeatures = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enterprise Security",
      description: "SOC 2 Type II certified with bank-level encryption"
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "GDPR Compliant",
      description: "Full compliance with data protection regulations"
    },
    {
      icon: <RefreshCw className="w-6 h-6" />,
      title: "Data Deletion",
      description: "Automatic data deletion after processing"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-16 bg-gradient-hero">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Powerful Contact Validation
              <span className="block text-primary-foreground">Features</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Discover the comprehensive features that make Contact Validator the most trusted 
              solution for B2B contact verification and data quality management.
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Try All Features Free
            </Button>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything You Need for Contact Validation
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive feature set ensures your contact data is accurate, 
              complete, and ready for successful outreach campaigns.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {coreFeatures.map((feature, index) => (
              <Card key={index} className="bg-gradient-card">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                      {feature.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Seamless Integrations
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Connect Contact Validator with your favorite CRM, email marketing platform, 
              or sales automation tool in just a few clicks.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {integrations.map((integration, index) => (
                <Badge key={index} variant="secondary" className="px-4 py-2 text-base">
                  {integration}
                </Badge>
              ))}
            </div>
            
            <div className="text-center">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90">
                View All Integrations
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Enterprise-Grade Security
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your data security is our priority. We maintain the highest standards 
              of data protection and compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {securityFeatures.map((feature, index) => (
              <Card key={index} className="text-center bg-gradient-card">
                <CardContent className="p-6">
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

      {/* Interactive Demo CTA */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              See Contact Validator in Action
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Experience the power of our validation features with a personalized demo
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Book Interactive Demo
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Try Free Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Features;