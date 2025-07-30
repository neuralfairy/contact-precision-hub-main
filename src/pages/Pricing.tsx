import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { CheckCircle, X } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small teams getting started",
      price: isAnnual ? 29 : 39,
      originalPrice: isAnnual ? 39 : null,
      validations: "5,000",
      features: [
        "5,000 validations/month",
        "Real-time email validation",
        "CSV upload",
        "Basic reporting",
        "Email support",
        "API access"
      ],
      notIncluded: [
        "Data enrichment",
        "Bulk processing",
        "Custom integrations",
        "Priority support"
      ],
      popular: false
    },
    {
      name: "Professional", 
      description: "Ideal for growing sales teams",
      price: isAnnual ? 99 : 129,
      originalPrice: isAnnual ? 129 : null,
      validations: "25,000",
      features: [
        "25,000 validations/month",
        "Real-time email validation",
        "Bulk processing",
        "Data enrichment",
        "Advanced analytics",
        "CRM integrations",
        "Priority email support",
        "API access",
        "Custom fields"
      ],
      notIncluded: [
        "Custom integrations",
        "Dedicated support",
        "SLA guarantee"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      description: "For large organizations with custom needs",
      price: "Custom",
      validations: "Unlimited",
      features: [
        "Unlimited validations",
        "All Professional features",
        "Custom integrations",
        "Dedicated account manager",
        "SLA guarantee",
        "Custom reporting",
        "On-premise deployment",
        "24/7 phone support",
        "Training & onboarding"
      ],
      notIncluded: [],
      popular: false
    }
  ];

  const addOns = [
    {
      name: "Additional Validations",
      description: "Extra validations beyond your plan limit",
      price: "$0.001 per validation"
    },
    {
      name: "Data Enrichment",
      description: "Enhanced contact information",
      price: "$0.05 per enriched contact"
    },
    {
      name: "Priority Support",
      description: "24/7 priority customer support",
      price: "$99/month"
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
              Simple, Transparent
              <span className="block text-primary-foreground">Pricing</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Choose the perfect plan for your contact validation needs. 
              All plans include our core features with no hidden fees.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className={`text-white ${!isAnnual ? 'font-semibold' : 'opacity-70'}`}>
                Monthly
              </span>
              <Switch 
                checked={isAnnual} 
                onCheckedChange={setIsAnnual}
                className="data-[state=checked]:bg-white data-[state=unchecked]:bg-white/20"
              />
              <span className={`text-white ${isAnnual ? 'font-semibold' : 'opacity-70'}`}>
                Annual
              </span>
              {isAnnual && (
                <Badge className="bg-white text-primary">Save 25%</Badge>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative ${plan.popular ? 'border-primary shadow-lg' : ''} bg-gradient-card`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-primary text-white px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <p className="text-muted-foreground">{plan.description}</p>
                  
                  <div className="py-4">
                    {typeof plan.price === 'number' ? (
                      <div>
                        <div className="flex items-baseline justify-center gap-2">
                          <span className="text-4xl font-bold">${plan.price}</span>
                          <span className="text-muted-foreground">/month</span>
                        </div>
                        {plan.originalPrice && (
                          <div className="text-sm text-muted-foreground line-through">
                            ${plan.originalPrice}/month
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="text-4xl font-bold">{plan.price}</div>
                    )}
                  </div>
                  
                  <div className="text-sm text-muted-foreground">
                    {plan.validations} validations/month
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                    
                    {plan.notIncluded.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3 opacity-50">
                        <X className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-gradient-primary hover:opacity-90' : ''}`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Add-on Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Enhance your plan with additional services and features
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {addOns.map((addon, index) => (
              <Card key={index} className="text-center bg-gradient-card">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{addon.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{addon.description}</p>
                  <div className="text-xl font-bold text-primary">{addon.price}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              Pricing FAQ
            </h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="font-semibold text-lg mb-2">What counts as a validation?</h3>
                <p className="text-muted-foreground">
                  Each email address processed through our system counts as one validation, 
                  regardless of the result (valid, invalid, or risky).
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-2">Can I upgrade or downgrade my plan?</h3>
                <p className="text-muted-foreground">
                  Yes, you can change your plan at any time. Changes take effect immediately, 
                  and we'll prorate any billing adjustments.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-2">Do unused validations roll over?</h3>
                <p className="text-muted-foreground">
                  Unused validations don't roll over to the next month, but you can purchase 
                  additional validations as needed.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-2">Is there a free trial?</h3>
                <p className="text-muted-foreground">
                  Yes! All plans come with a 7-day free trial that includes 1,000 free validations. 
                  No credit card required.
                </p>
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of companies improving their contact quality with Contact Validator
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;