import SEO from '../components/SEO'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Download, Chrome, Shield, Zap, CheckCircle, Star, Users, Globe } from 'lucide-react'

function DownloadPage() {
  const requirements = [
    "Google Chrome browser (version 88 or higher)",
    "Windows, macOS, or Linux operating system",
    "Active internet connection",
    "No additional software required"
  ]

  const benefits = [
    {
      icon: <Zap className="h-8 w-8 text-yellow-600" />,
      title: "Instant Savings",
      description: "Start saving money immediately after installation"
    },
    {
      icon: <Shield className="h-8 w-8 text-green-600" />,
      title: "100% Safe",
      description: "Verified by Google and trusted by thousands of users"
    },
    {
      icon: <Globe className="h-8 w-8 text-blue-600" />,
      title: "Works Everywhere",
      description: "Compatible with Amazon and eBay worldwide"
    },
    {
      icon: <Users className="h-8 w-8 text-purple-600" />,
      title: "Growing Community",
      description: "Join thousands of smart shoppers saving money daily"
    }
  ]

  const steps = [
    {
      step: 1,
      title: "Click Download",
      description: "Click the 'Add to Chrome' button below to visit the Chrome Web Store"
    },
    {
      step: 2,
      title: "Install Extension",
      description: "Click 'Add to Chrome' on the store page and confirm installation"
    },
    {
      step: 3,
      title: "Start Shopping",
      description: "Visit Amazon or eBay and the extension will work automatically"
    }
  ]

  const stats = [
    { number: "20 975+", label: "Active Users" },
    { number: "100%", label: "Free to Use" },
    { number: "2", label: "Platforms Supported" },
    { number: "24/7", label: "Price Monitoring" }
  ]

  const seoData = {
    title: "Download ShopSmart Pro - Free Chrome Extension | Price Comparison Tool",
    description: "Download the free ShopSmart Pro Chrome extension. Compare prices, track deals, and save money on Amazon & eBay purchases. Install now.",
    keywords: "download shopping extension, free chrome extension, price comparison tool, Amazon eBay extension, deal finder download, shopping assistant chrome",
    url: "https://shopsmartpro.com/download",
    image: "https://shopsmartpro.com/images/download-social.jpg",
    schema: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "ShopSmart Pro",
      "description": "Free Chrome extension to compare prices and find deals on Amazon and eBay",
      "applicationCategory": "ShoppingApplication",
      "operatingSystem": "Chrome",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "softwareVersion": "1.0.0",
      "downloadUrl": "https://chromewebstore.google.com/detail/okhhadlbdbncnikoknfmdlnfmgdffdap"
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
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <Badge className="bg-green-100 text-green-800 text-lg px-4 py-2">
            📥 Download Now
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900">
            Download ShopSmart Pro
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Get the free Chrome extension that helps you save money on every Amazon and eBay purchase.
          </p>
          
          {/* Main Download Button */}
          <div className="space-y-4">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-6 text-xl"
              onClick={() => window.open('https://chromewebstore.google.com/detail/okhhadlbdbncnikoknfmdlnfmgdffdap', '_blank')}
            >
              <Chrome className="h-6 w-6 mr-3" />
              Add to Chrome - It's Free
            </Button>
            <p className="text-sm text-gray-500">
              Compatible with Chrome 88+ • No registration required • Instant setup
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-8 pt-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-blue-600">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Steps */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Easy Installation in 3 Steps</h2>
            <p className="text-lg text-gray-600">Get started in less than a minute</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base">
                    {step.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* System Requirements */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">System Requirements</h2>
            <p className="text-lg text-gray-600">Make sure your system is compatible</p>
          </div>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl text-center">Minimum Requirements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {requirements.map((requirement, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{requirement}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Download ShopSmart Pro?</h2>
            <p className="text-lg text-gray-600">Join thousands of smart shoppers who save money every day</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="mb-4 flex justify-center">{benefit.icon}</div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Privacy */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-green-100 text-green-800">Security & Privacy</Badge>
              <h2 className="text-3xl font-bold text-gray-900">
                Your Data is Safe with Us
              </h2>
              <p className="text-lg text-gray-600">
                ShopSmart Pro is built with privacy and security as top priorities.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Shield className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">No Data Selling</h3>
                    <p className="text-gray-600">We never sell your personal information to third parties.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Shield className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Local Storage</h3>
                    <p className="text-gray-600">Your preferences and data are stored locally on your device.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Shield className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Google Verified</h3>
                    <p className="text-gray-600">Our extension is verified and approved by Google Chrome Web Store.</p>
                  </div>
                </div>
              </div>
            </div>
            <Card className="border-0 shadow-xl">
              <CardHeader className="text-center">
                <Shield className="h-16 w-16 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-2xl">Trusted by Users</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div className="flex justify-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600">
                  "ShopSmart Pro has saved me hundreds of dollars. It's completely safe and works perfectly!"
                </p>
                <p className="text-sm text-gray-500">- Verified Chrome User</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-4xl font-bold">Ready to Start Saving Money?</h2>
          <p className="text-xl text-blue-100">
            Download ShopSmart Pro now and never overpay for online purchases again.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-blue-600 hover:bg-gray-100 px-12 py-6 text-xl"
            onClick={() => window.open('https://chromewebstore.google.com/detail/okhhadlbdbncnikoknfmdlnfmgdffdap', '_blank')}
          >
            <Download className="h-6 w-6 mr-3" />
            Add to Chrome - It's Free
          </Button>
          <div className="text-sm text-blue-200 space-y-1">
            <div>✓ Free forever ✓ No registration required ✓ Works instantly</div>
            <div>✓ 100% safe and secure ✓ Google verified ✓ Trusted by thousands</div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DownloadPage

