import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ChevronDown, ChevronRight, Search, HelpCircle } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqCategories = [
    {
      title: "Getting Started",
      faqs: [
        {
          question: "What is Contact Validator and how does it work?",
          answer: "Contact Validator is a professional email verification service that checks the validity, deliverability, and quality of email addresses. It uses advanced algorithms to verify syntax, domain validity, mailbox existence, and predict deliverability rates."
        },
        {
          question: "How do I get started with Contact Validator?",
          answer: "Getting started is simple! Sign up for a free trial account, upload your contact list (CSV or Excel), and let our system validate your emails. You'll receive detailed results within minutes, including validity status and quality scores for each contact."
        },
        {
          question: "Do you offer a free trial?",
          answer: "Yes! We offer a 7-day free trial that includes 1,000 email validations. No credit card required to start. This gives you a chance to test our accuracy and see the quality of results before committing to a paid plan."
        },
        {
          question: "What file formats do you support?",
          answer: "We support CSV, Excel (.xlsx, .xls), and TXT files. You can also validate individual emails through our web interface or integrate with our API for real-time validation."
        }
      ]
    },
    {
      title: "Validation Process",
      faqs: [
        {
          question: "How accurate is your email validation?",
          answer: "Our validation service maintains a 99.5% accuracy rate. We use multiple validation layers including syntax checking, domain verification, MX record validation, and mailbox existence testing to ensure the highest accuracy possible."
        },
        {
          question: "What types of emails do you validate?",
          answer: "We validate all types of email addresses including business emails, personal emails, and international domains. Our system supports over 190 countries and handles various email formats and domain extensions."
        },
        {
          question: "How long does validation take?",
          answer: "Validation speed depends on list size. Small lists (under 1,000 emails) are typically processed within 1-2 minutes. Larger lists may take 10-30 minutes. You'll receive real-time progress updates and email notifications when complete."
        },
        {
          question: "What validation results do you provide?",
          answer: "Each email receives a status (Valid, Invalid, Risky, Unknown) plus detailed information including deliverability score, risk assessment, domain health, catch-all detection, and spam trap identification."
        }
      ]
    },
    {
      title: "Pricing & Plans",
      faqs: [
        {
          question: "How does your pricing work?",
          answer: "We offer three main plans: Starter ($39/month for 5K validations), Professional ($129/month for 25K validations), and Enterprise (custom pricing for unlimited validations). Annual plans receive a 25% discount."
        },
        {
          question: "What counts as a validation?",
          answer: "Each email address processed through our system counts as one validation, regardless of the result (valid, invalid, or risky). This includes API calls, bulk uploads, and individual validations."
        },
        {
          question: "Do unused validations roll over?",
          answer: "Unused validations do not roll over to the next billing cycle. However, you can purchase additional validation credits as needed, and we offer volume discounts for large one-time validation needs."
        },
        {
          question: "Can I upgrade or downgrade my plan?",
          answer: "Yes, you can change your plan at any time. Upgrades take effect immediately, while downgrades take effect at the next billing cycle. We'll prorate any billing adjustments accordingly."
        }
      ]
    },
    {
      title: "API & Integrations",
      faqs: [
        {
          question: "Do you offer an API?",
          answer: "Yes! We provide a robust RESTful API that supports real-time email validation, bulk processing, and webhook notifications. Our API is rate-limited based on your plan and includes comprehensive documentation."
        },
        {
          question: "What integrations are available?",
          answer: "We integrate with popular CRM and email marketing platforms including Salesforce, HubSpot, Mailchimp, Pipedrive, Marketo, and many others. We also provide Zapier integration for connecting with 3,000+ apps."
        },
        {
          question: "Is there an API rate limit?",
          answer: "API rate limits depend on your plan: Starter (100 requests/minute), Professional (500 requests/minute), Enterprise (custom limits). We also offer burst allowances for occasional high-volume needs."
        },
        {
          question: "Can I validate emails in real-time on my website?",
          answer: "Absolutely! Our API is perfect for real-time validation during form submissions, user registrations, or lead capture. This helps prevent invalid emails from entering your database in the first place."
        }
      ]
    },
    {
      title: "Security & Compliance",
      faqs: [
        {
          question: "How do you protect my data?",
          answer: "We're SOC 2 Type II certified and use bank-level encryption. All data is encrypted in transit and at rest. We automatically delete processed data after 30 days unless you request longer retention."
        },
        {
          question: "Are you GDPR compliant?",
          answer: "Yes, we're fully GDPR compliant. We process data only for validation purposes, provide data deletion upon request, maintain detailed audit logs, and have appointed a Data Protection Officer."
        },
        {
          question: "Do you store my email lists?",
          answer: "We temporarily store email lists only for processing purposes. By default, all uploaded data is automatically deleted after 30 days. Enterprise customers can configure custom retention periods or request immediate deletion."
        },
        {
          question: "What certifications do you have?",
          answer: "We maintain SOC 2 Type II, ISO 27001, GDPR compliance, and CCPA compliance certifications. We undergo regular security audits and maintain detailed compliance documentation."
        }
      ]
    },
    {
      title: "Support & Troubleshooting",
      faqs: [
        {
          question: "What support options are available?",
          answer: "We offer email support for all users, priority email support for Professional users, and 24/7 phone support for Enterprise customers. Our average response time is under 4 hours for all inquiries."
        },
        {
          question: "Why might some emails show as 'Unknown'?",
          answer: "Emails may show as 'Unknown' due to temporary server issues, aggressive spam filters, or privacy settings. These represent about 2-5% of validations and often include valid addresses that couldn't be definitively verified."
        },
        {
          question: "Can you help with deliverability issues?",
          answer: "Yes! Our support team can provide deliverability consulting, help identify issues with your sender reputation, and recommend best practices for improving inbox placement rates."
        },
        {
          question: "Do you offer training or onboarding?",
          answer: "Professional and Enterprise customers receive personalized onboarding sessions. We also provide comprehensive documentation, video tutorials, and best practice guides for all users."
        }
      ]
    }
  ];

  const filteredFAQs = faqCategories.map(category => ({
    ...category,
    faqs: category.faqs.filter(faq =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.faqs.length > 0);

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-16 bg-gradient-hero">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Frequently Asked
              <span className="block text-primary-foreground">Questions</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Find answers to common questions about Contact Validator. 
              Can't find what you're looking for? Contact our support team.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input 
                placeholder="Search FAQ..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/70"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-3xl mx-auto">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">99.5%</div>
              <div className="text-muted-foreground">Validation Accuracy</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">&lt;4h</div>
              <div className="text-muted-foreground">Support Response Time</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Enterprise Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {filteredFAQs.length === 0 ? (
              <div className="text-center py-12">
                <HelpCircle className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">No results found</h3>
                <p className="text-muted-foreground">Try adjusting your search terms or browse all categories below.</p>
              </div>
            ) : (
              filteredFAQs.map((category, categoryIndex) => (
                <div key={categoryIndex} className="mb-12">
                  <h2 className="text-2xl font-bold mb-6">{category.title}</h2>
                  <div className="space-y-4">
                    {category.faqs.map((faq, faqIndex) => {
                      const itemIndex = categoryIndex * 100 + faqIndex;
                      const isOpen = openItems.includes(itemIndex);
                      
                      return (
                        <Card key={faqIndex} className="bg-gradient-card">
                          <CardContent className="p-0">
                            <button
                              onClick={() => toggleItem(itemIndex)}
                              className="w-full p-6 text-left flex items-center justify-between hover:bg-accent/50 transition-colors"
                            >
                              <h3 className="font-semibold text-lg pr-4">{faq.question}</h3>
                              {isOpen ? (
                                <ChevronDown className="w-5 h-5 text-primary flex-shrink-0" />
                              ) : (
                                <ChevronRight className="w-5 h-5 text-primary flex-shrink-0" />
                              )}
                            </button>
                            
                            {isOpen && (
                              <div className="px-6 pb-6">
                                <p className="text-muted-foreground leading-relaxed">
                                  {faq.answer}
                                </p>
                              </div>
                            )}
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Still Need Help?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Our support team is here to help you get the most out of Contact Validator
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90">
                Contact Support
              </Button>
              <Button size="lg" variant="outline">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* JSON-LD Structured Data for FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqCategories.flatMap(category =>
              category.faqs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            )
          })
        }}
      />

      <Footer />
    </div>
  );
};

export default FAQ;