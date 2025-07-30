import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Calendar, User, ArrowRight, Search } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Blog = () => {
  const featuredPost = {
    title: "The Complete Guide to Email Validation in 2024",
    excerpt: "Learn everything you need to know about email validation, from basic syntax checking to advanced deliverability testing.",
    author: "Sarah Martinez",
    date: "March 15, 2024",
    readTime: "12 min read",
    category: "Best Practices",
    image: "/placeholder-blog-featured.jpg"
  };

  const blogPosts = [
    {
      title: "10 Common Email Validation Mistakes That Cost Sales Teams",
      excerpt: "Avoid these critical mistakes that can damage your sender reputation and reduce campaign effectiveness.",
      author: "Michael Chen",
      date: "March 10, 2024",
      readTime: "8 min read",
      category: "Sales Tips",
      image: "/placeholder-blog-1.jpg"
    },
    {
      title: "How to Improve Email Deliverability by 45%",
      excerpt: "Data-driven strategies to boost your email deliverability rates and reach more prospects.",
      author: "Emily Rodriguez",
      date: "March 5, 2024",
      readTime: "6 min read",
      category: "Email Marketing",
      image: "/placeholder-blog-2.jpg"
    },
    {
      title: "GDPR and Email Validation: What B2B Teams Need to Know",
      excerpt: "Navigate data protection regulations while maintaining effective contact validation practices.",
      author: "David Kim",
      date: "February 28, 2024",
      readTime: "10 min read",
      category: "Compliance",
      image: "/placeholder-blog-3.jpg"
    },
    {
      title: "ROI Case Study: 300% Increase in Lead Quality",
      excerpt: "See how TechCorp transformed their sales process with professional contact validation.",
      author: "Sarah Martinez",
      date: "February 20, 2024",
      readTime: "7 min read",
      category: "Case Studies",
      image: "/placeholder-blog-4.jpg"
    },
    {
      title: "API Integration Best Practices for Contact Validation",
      excerpt: "Technical guide to integrating email validation seamlessly into your existing workflows.",
      author: "Michael Chen",
      date: "February 15, 2024",
      readTime: "9 min read",
      category: "Technical",
      image: "/placeholder-blog-5.jpg"
    },
    {
      title: "The Future of Contact Data Quality",
      excerpt: "Emerging trends and technologies shaping the future of B2B contact validation.",
      author: "Emily Rodriguez",
      date: "February 10, 2024",
      readTime: "5 min read",
      category: "Industry Trends",
      image: "/placeholder-blog-6.jpg"
    }
  ];

  const categories = [
    "All Posts", "Best Practices", "Sales Tips", "Email Marketing", 
    "Compliance", "Case Studies", "Technical", "Industry Trends"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-16 bg-gradient-hero">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Contact Validation
              <span className="block text-primary-foreground">Insights & Resources</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Expert insights, best practices, and industry trends to help you 
              maximize your contact validation strategy and sales success.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input 
                placeholder="Search articles..." 
                className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/70"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Featured Article</h2>
            
            <Card className="overflow-hidden bg-gradient-card">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="bg-primary/5 flex items-center justify-center h-64 lg:h-auto">
                  <p className="text-muted-foreground">Featured Article Image</p>
                </div>
                <div className="p-8">
                  <Badge className="mb-4">{featuredPost.category}</Badge>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    {featuredPost.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {featuredPost.date}
                    </div>
                    <span>{featuredPost.readTime}</span>
                  </div>
                  
                  <Button className="bg-gradient-primary hover:opacity-90">
                    Read Article
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-2">
              {categories.map((category, index) => (
                <Button 
                  key={index}
                  variant={index === 0 ? "default" : "outline"}
                  size="sm"
                  className={index === 0 ? "bg-gradient-primary hover:opacity-90" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <Card key={index} className="overflow-hidden bg-gradient-card hover:shadow-lg transition-shadow">
                  <div className="bg-primary/5 h-48 flex items-center justify-center">
                    <p className="text-muted-foreground text-sm">Article Image</p>
                  </div>
                  
                  <CardHeader className="pb-4">
                    <Badge variant="secondary" className="w-fit mb-2">
                      {post.category}
                    </Badge>
                    <h3 className="font-semibold text-lg line-clamp-2">
                      {post.title}
                    </h3>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">{post.readTime}</span>
                      <Button variant="ghost" size="sm" className="text-primary">
                        Read More
                        <ArrowRight className="w-3 h-3 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Load More Articles
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Get the latest contact validation insights and industry trends delivered to your inbox
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
              />
              <Button className="bg-white text-primary hover:bg-white/90">
                Subscribe
              </Button>
            </div>
            
            <p className="text-sm text-white/80 mt-4">
              No spam, unsubscribe at any time
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;