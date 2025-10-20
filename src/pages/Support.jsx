import SEO from '../components/SEO'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Link } from 'react-router-dom'
import { HelpCircle, MessageCircle, Bug, Book, Mail, Phone, Clock, ArrowRight } from 'lucide-react'

function Support() {
  const supportOptions = [
    {
      icon: <Book className="h-12 w-12 text-blue-600" />,
      title: "Help Center",
      description: "Browse our comprehensive knowledge base with step-by-step guides and tutorials.",
      link: "/help-center",
      buttonText: "Visit Help Center"
    },
    {
      icon: <MessageCircle className="h-12 w-12 text-green-600" />,
      title: "Contact Us",
      description: "Get in touch with our support team for personalized assistance.",
      link: "/contact",
      buttonText: "Contact Support"
    },
    {
      icon: <Bug className="h-12 w-12 text-red-600" />,
      title: "Report a Bug",
      description: "Found an issue? Let us know so we can fix it quickly.",
      link: "/bug-reports",
      buttonText: "Report Bug"
    }
  ]

  const quickHelp = [
    {
      question: "How do I install the extension?",
      answer: "Visit the Chrome Web Store, click 'Add to Chrome', and confirm the installation. It takes less than 30 seconds."
    },
    {
      question: "Why isn't the extension working?",
      answer: "Make sure you're on Amazon or eBay product pages. The extension only activates on supported shopping sites."
    },
    {
      question: "How do I enable notifications?",
      answer: "Click the extension icon in your browser toolbar and enable notifications in the settings panel."
    },
    {
      question: "Is my data safe?",
      answer: "Yes, we don't collect or sell personal data. All information is stored locally on your device."
    }
  ]

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-blue-600" />,
      title: "Email Support",
      info: "support@hotgadgets.com",
      description: "Get help via email within 24 hours"
    },
    {
      icon: <Clock className="h-6 w-6 text-green-600" />,
      title: "Response Time",
      info: "Within 24 hours",
      description: "We aim to respond to all inquiries quickly"
    }
  ]

  const seoData = {
    title: "Support - ShopSmart Pro | Help Center & Contact",
    description: "Get help with ShopSmart Pro. Browse our help center, contact support, report bugs, and find answers to common questions.",
    keywords: "shopping extension support, chrome extension help, ShopSmart Pro support, price comparison tool help, contact support, bug report",
    url: "https://shopsmartpro.com/support",
    image: "https://shopsmartpro.com/images/support-social.jpg",
    schema: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "ShopSmart Pro Support",
      "description": "Support resources for ShopSmart Pro Chrome extension including help center, contact options, and FAQ",
      "url": "https://shopsmartpro.com/support",
      "relatedLink": [
        "https://shopsmartpro.com/help-center",
        "https://shopsmartpro.com/contact",
        "https://shopsmartpro.com/bug-reports"
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <SEO 
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        url={seoData.url}
        image={seoData.image}
        schema={seoData.schema}
      />
      
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <Badge className="bg-blue-100 text-blue-800 text-lg px-4 py-2">
            🛟 Support Center
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900">
            How Can We Help You?
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Get the support you need to make the most of ShopSmart Pro. We're here to help you save money and shop smarter.
          </p>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Support Option</h2>
            <p className="text-lg text-gray-600">Find the help you need through our various support channels</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {supportOptions.map((option, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="mb-4 flex justify-center">{option.icon}</div>
                  <CardTitle className="text-2xl">{option.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-gray-600 text-base">
                    {option.description}
                  </CardDescription>
                  <Link to={option.link}>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                      {option.buttonText}
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Help */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Quick Help</h2>
            <p className="text-lg text-gray-600">Common questions and instant answers</p>
          </div>

          <div className="space-y-6">
            {quickHelp.map((item, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900 flex items-center">
                    <HelpCircle className="h-5 w-5 text-blue-600 mr-2" />
                    {item.question}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{item.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Information</h2>
            <p className="text-lg text-gray-600">Get in touch with our support team</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {contactInfo.map((contact, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    {contact.icon}
                    <CardTitle className="text-xl">{contact.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-2xl font-semibold text-blue-600">{contact.info}</p>
                    <p className="text-gray-600">{contact.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support Hours */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="border-0 shadow-xl">
            <CardHeader>
              <Clock className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <CardTitle className="text-2xl">Support Hours</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg text-gray-600">
                Our support team is available to help you with any questions or issues.
              </p>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Email Support</h3>
                  <p className="text-gray-600">24/7 - We respond within 24 hours</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Bug Reports</h3>
                  <p className="text-gray-600">24/7 - Critical issues prioritized</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Additional Resources</h2>
            <p className="text-lg text-gray-600">More ways to get help and stay informed</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-lg">Installation Guide</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Step-by-step instructions for installing and setting up ShopSmart Pro.</p>
                <Link to="/how-it-works">
                  <Button variant="outline" className="w-full">
                    View Guide
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-lg">Feature Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Learn about all the features and how to use them effectively.</p>
                <Link to="/features">
                  <Button variant="outline" className="w-full">
                    Explore Features
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-lg">Privacy Policy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Understand how we protect your privacy and handle your data.</p>
                <Link to="/privacy-policy">
                  <Button variant="outline" className="w-full">
                    Read Policy
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-4xl font-bold">Still Need Help?</h2>
          <p className="text-xl text-blue-100">
            Our support team is here to help you get the most out of ShopSmart Pro.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg">
                <MessageCircle className="h-5 w-5 mr-2" />
                Contact Support
              </Button>
            </Link>
            <Link to="/help-center">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg">
                <Book className="h-5 w-5 mr-2" />
                Browse Help Center
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Support

