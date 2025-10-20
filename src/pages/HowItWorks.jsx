import SEO from '../components/SEO'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Download, Chrome, ShoppingCart, Bell, TrendingDown, CheckCircle, ArrowRight, Play } from 'lucide-react'

function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Install the Extension",
      description: "Add ShopSmart Pro to your Chrome browser in just a few clicks",
      details: [
        "Visit the Chrome Web Store",
        "Click 'Add to Chrome'",
        "Confirm installation",
        "Extension is ready to use"
      ],
      icon: <Chrome className="h-12 w-12 text-blue-600" />
    },
    {
      number: "02",
      title: "Browse Normally",
      description: "Shop on Amazon or eBay as you usually do - no changes needed",
      details: [
        "Visit Amazon or eBay",
        "Browse products as usual",
        "Extension works automatically",
        "No additional setup required"
      ],
      icon: <ShoppingCart className="h-12 w-12 text-green-600" />
    },
    {
      number: "03",
      title: "See Instant Comparisons",
      description: "View price comparisons and alerts automatically on every product page",
      details: [
        "Automatic price detection",
        "Cross-platform comparisons",
        "Real-time price updates",
        "Historical price data"
      ],
      icon: <TrendingDown className="h-12 w-12 text-purple-600" />
    },
    {
      number: "04",
      title: "Save Money",
      description: "Make informed decisions and save on every purchase with smart alerts",
      details: [
        "Get deal notifications",
        "Track price drops",
        "Find better alternatives",
        "Maximize your savings"
      ],
      icon: <Bell className="h-12 w-12 text-orange-600" />
    }
  ]

  const features = [
    {
      title: "Automatic Detection",
      description: "The extension automatically detects when you're on a product page and starts working immediately."
    },
    {
      title: "No Registration Required",
      description: "Start using ShopSmart Pro right after installation - no account creation needed."
    },
    {
      title: "Works in Background",
      description: "Continuous monitoring and price tracking happen automatically in the background."
    },
    {
      title: "Instant Notifications",
      description: "Get real-time alerts for price drops and better deals as they happen."
    }
  ]

  const faqs = [
    {
      question: "How long does installation take?",
      answer: "Installation takes less than 30 seconds. Just click 'Add to Chrome' and you're ready to start saving."
    },
    {
      question: "Do I need to create an account?",
      answer: "No account creation is required. The extension works immediately after installation."
    },
    {
      question: "Will it slow down my browser?",
      answer: "ShopSmart Pro is lightweight and optimized for performance. It won't affect your browsing speed."
    },
    {
      question: "How accurate are the price comparisons?",
      answer: "Our price comparisons are updated in real-time and sourced directly from Amazon and eBay APIs for maximum accuracy."
    }
  ]

  const seoData = {
    title: "How It Works - ShopSmart Pro | Easy Installation & Setup Guide",
    description: "Learn how ShopSmart Pro works: install the Chrome extension, browse Amazon or eBay normally, and get instant price comparisons and deal alerts.",
    keywords: "how to use shopping extension, install chrome extension, price comparison tutorial, shopping assistant guide, Amazon eBay tool setup",
    url: "https://shopsmartpro.com/how-it-works",
    image: "https://shopsmartpro.com/images/how-it-works-social.jpg",
    schema: {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "How to Use ShopSmart Pro Shopping Assistant",
      "description": "Simple steps to install and use ShopSmart Pro Chrome extension for price comparisons and deal alerts on Amazon and eBay.",
      "step": [
        {
          "@type": "HowToStep",
          "name": "Install the Extension",
          "text": "Add ShopSmart Pro to your Chrome browser from the Chrome Web Store"
        },
        {
          "@type": "HowToStep", 
          "name": "Browse Normally",
          "text": "Shop on Amazon or eBay as you usually do - the extension works automatically"
        },
        {
          "@type": "HowToStep",
          "name": "See Instant Comparisons",
          "text": "View price comparisons and alerts automatically on every product page"
        },
        {
          "@type": "HowToStep",
          "name": "Save Money",
          "text": "Make informed decisions and save on every purchase with smart alerts"
        }
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
          <Badge className="bg-indigo-100 text-indigo-800 text-lg px-4 py-2">
            📋 How It Works
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900">
            Get Started in 4 Simple Steps
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Start saving money in minutes with our easy-to-use Chrome extension. No technical knowledge required.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
            <Play className="h-5 w-5 mr-2" />
            Watch Demo Video
          </Button>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                      {step.number}
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900">{step.title}</h2>
                    </div>
                  </div>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                  <div className="space-y-3">
                    {step.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={`flex justify-center ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <Card className="w-80 h-80 flex items-center justify-center border-2 border-gray-200 shadow-lg">
                    <div className="text-center space-y-4">
                      {step.icon}
                      <h3 className="text-xl font-semibold text-gray-800">{step.title}</h3>
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why It's So Easy</h2>
            <p className="text-lg text-gray-600">ShopSmart Pro is designed for simplicity and effectiveness</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-center border-0 shadow-md hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Everything you need to know about getting started</p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Guide */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Quick Installation Guide</h2>
            <p className="text-lg text-gray-600">Follow these simple steps to install ShopSmart Pro</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  1
                </div>
                <CardTitle>Visit Chrome Web Store</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Click the "Add to Chrome" button below to go directly to our Chrome Web Store page.</p>
                <Button 
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={() => window.open('https://chromewebstore.google.com/detail/okhhadlbdbncnikoknfmdlnfmgdffdap', '_blank')}
                >
                  Go to Store
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  2
                </div>
                <CardTitle>Install Extension</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Click "Add to Chrome" on the store page and confirm the installation when prompted.</p>
                <div className="text-sm text-gray-500">Takes less than 30 seconds</div>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  3
                </div>
                <CardTitle>Start Shopping</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Visit Amazon or eBay and start shopping. The extension will work automatically!</p>
                <div className="text-sm text-green-600 font-semibold">Ready to save money!</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-4xl font-bold">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100">
            Install ShopSmart Pro now and start saving money in minutes.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg"
            onClick={() => window.open('https://chromewebstore.google.com/detail/okhhadlbdbncnikoknfmdlnfmgdffdap', '_blank')}
          >
            <Download className="h-5 w-5 mr-2" />
            Add to Chrome - It's Free
          </Button>
          <div className="text-sm text-blue-200">
            ✓ Free forever ✓ No registration required ✓ Works instantly
          </div>
        </div>
      </section>
    </div>
  )
}

export default HowItWorks

