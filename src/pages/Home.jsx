import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { ShoppingCart, Tag, Bell, Search, Zap, Star, Download, ArrowRight, CheckCircle, TrendingDown, Users, Shield } from 'lucide-react'

// Import images
import heroImage from '../assets/ETRtsoftQprW.png'
import ecommerceHero from '../assets/SoMemqrzQRDp.jpg'

function Home() {
  const features = [
    {
      icon: <Tag className="h-8 w-8 text-blue-600" />,
      title: "Price Tracking",
      description: "Monitor price changes on your favorite items and never miss a deal again."
    },
    {
      icon: <TrendingDown className="h-8 w-8 text-green-600" />,
      title: "Price Comparison",
      description: "Compare prices between Amazon and eBay instantly without leaving your current page."
    },
    {
      icon: <Bell className="h-8 w-8 text-orange-600" />,
      title: "Deal Alerts",
      description: "Get notified immediately when prices drop on items you're watching."
    },
    {
      icon: <Search className="h-8 w-8 text-purple-600" />,
      title: "Quick Search",
      description: "Search and compare products across platforms with lightning speed."
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-600" />,
      title: "One-Click Savings",
      description: "Save money effortlessly with our streamlined interface and smart recommendations."
    },
    {
      icon: <Shield className="h-8 w-8 text-indigo-600" />,
      title: "Secure & Private",
      description: "Your data stays private. We don't sell your information to third parties."
    }
  ]

  const steps = [
    {
      number: "01",
      title: "Install Extension",
      description: "Add ShopSmart Pro to your Chrome browser in seconds"
    },
    {
      number: "02", 
      title: "Browse Normally",
      description: "Shop on Amazon or eBay as you usually do"
    },
    {
      number: "03",
      title: "See Comparisons",
      description: "View price comparisons and alerts automatically"
    },
    {
      number: "04",
      title: "Save Money",
      description: "Make informed decisions and save on every purchase"
    }
  ]

  const stats = [
    { number: "2+", label: "Active Users" },
    { number: "100%", label: "Free to Use" },
    { number: "2", label: "Platforms Supported" },
    { number: "24/7", label: "Price Monitoring" }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                  🚀 Now Available for Chrome
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Your Smarter Shopping Assistant for 
                  <span className="text-blue-600"> Amazon & eBay</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Track prices, compare deals, and save money with one click. Never overpay again with our intelligent shopping companion.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg"
                  onClick={() => window.open('https://chromewebstore.google.com/detail/okhhadlbdbncnikoknfmdlnfmgdffdap', '_blank')}
                >
                  <Download className="h-5 w-5 mr-2" />
                  Install Extension
                </Button>
                <Button size="lg" variant="outline" className="px-8 py-4 text-lg">
                  Watch Demo
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </div>

              <div className="grid grid-cols-4 gap-8 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src={heroImage} 
                  alt="ShopSmart Pro Interface" 
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute -bottom-8 -left-4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-blue-100 text-blue-800">Features</Badge>
            <h2 className="text-4xl font-bold text-gray-900">Everything You Need to Shop Smarter</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful features designed to help you make informed purchasing decisions and save money on every purchase.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="mb-4">{feature.icon}</div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-indigo-100 text-indigo-800">How It Works</Badge>
            <h2 className="text-4xl font-bold text-gray-900">Get Started in 4 Simple Steps</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Start saving money in minutes with our easy-to-use Chrome extension.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="relative">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto">
                    {step.number}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-blue-200 -translate-y-0.5"></div>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-green-100 text-green-800">Benefits</Badge>
                <h2 className="text-4xl font-bold text-gray-900">
                  Stop Overpaying. Start Shopping Smarter.
                </h2>
                <p className="text-xl text-gray-600">
                  Join thousands of smart shoppers who save money every day with ShopSmart Pro.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Save Time & Money</h3>
                    <p className="text-gray-600">Get instant price comparisons without switching tabs or websites.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Never Miss a Deal</h3>
                    <p className="text-gray-600">Automatic alerts ensure you catch every price drop and special offer.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Make Informed Decisions</h3>
                    <p className="text-gray-600">Compare prices across platforms to ensure you're getting the best deal.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src={ecommerceHero} 
                alt="Shopping Benefits" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold">Ready to Start Saving?</h2>
            <p className="text-xl text-blue-100">
              Install ShopSmart Pro now and join the smart shopping revolution.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg"
              onClick={() => window.open('https://chromewebstore.google.com/detail/okhhadlbdbncnikoknfmdlnfmgdffdap', '_blank')}
            >
              <Download className="h-5 w-5 mr-2" />
              Add to Chrome - It's Free
            </Button>
          </div>

          <div className="text-sm text-blue-200">
            ✓ Free forever ✓ No registration required ✓ Works instantly
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

