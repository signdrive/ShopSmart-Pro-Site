import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Tag, Bell, Search, Zap, Shield, TrendingDown, Clock, Globe, Smartphone, BarChart3, Download } from 'lucide-react'

function Features() {
  const mainFeatures = [
    {
      icon: <Tag className="h-12 w-12 text-blue-600" />,
      title: "Advanced Price Tracking",
      description: "Monitor price changes on your favorite items across Amazon and eBay with real-time notifications.",
      details: [
        "Real-time price monitoring",
        "Historical price charts",
        "Price drop predictions",
        "Wishlist integration"
      ]
    },
    {
      icon: <TrendingDown className="h-12 w-12 text-green-600" />,
      title: "Smart Price Comparison",
      description: "Compare prices between Amazon and eBay instantly without leaving your current page.",
      details: [
        "Side-by-side comparisons",
        "Shipping cost calculations",
        "Seller rating analysis",
        "Best deal recommendations"
      ]
    },
    {
      icon: <Bell className="h-12 w-12 text-orange-600" />,
      title: "Intelligent Deal Alerts",
      description: "Get notified immediately when prices drop on items you're watching.",
      details: [
        "Customizable alert thresholds",
        "Email and browser notifications",
        "Flash sale detection",
        "Limited-time offer alerts"
      ]
    },
    {
      icon: <Search className="h-12 w-12 text-purple-600" />,
      title: "Lightning-Fast Search",
      description: "Search and compare products across platforms with lightning speed.",
      details: [
        "Cross-platform search",
        "Advanced filtering options",
        "Search history",
        "Saved search alerts"
      ]
    },
    {
      icon: <Zap className="h-12 w-12 text-yellow-600" />,
      title: "One-Click Savings",
      description: "Save money effortlessly with our streamlined interface and smart recommendations.",
      details: [
        "Automatic coupon detection",
        "Cashback opportunities",
        "Bundle deal suggestions",
        "Price match guarantees"
      ]
    },
    {
      icon: <Shield className="h-12 w-12 text-indigo-600" />,
      title: "Privacy & Security",
      description: "Your data stays private. We don't sell your information to third parties.",
      details: [
        "End-to-end encryption",
        "No data selling",
        "Local data storage",
        "GDPR compliant"
      ]
    }
  ]

  const additionalFeatures = [
    {
      icon: <Clock className="h-8 w-8 text-blue-500" />,
      title: "24/7 Monitoring",
      description: "Continuous price monitoring even when you're not browsing"
    },
    {
      icon: <Globe className="h-8 w-8 text-green-500" />,
      title: "Multi-Platform Support",
      description: "Works seamlessly across Amazon and eBay marketplaces"
    },
    {
      icon: <Smartphone className="h-8 w-8 text-purple-500" />,
      title: "Mobile Friendly",
      description: "Access your deals and alerts from any device"
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-orange-500" />,
      title: "Analytics Dashboard",
      description: "Track your savings and shopping patterns over time"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <Badge className="bg-blue-100 text-blue-800 text-lg px-4 py-2">
            🚀 Powerful Features
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900">
            Everything You Need to Shop Smarter
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Discover all the powerful features that make ShopSmart Pro the ultimate shopping companion for Amazon and eBay.
          </p>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainFeatures.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="text-center">
                  <div className="mb-4 flex justify-center">{feature.icon}</div>
                  <CardTitle className="text-2xl mb-2">{feature.title}</CardTitle>
                  <CardDescription className="text-gray-600 text-base">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Additional Features</h2>
            <p className="text-lg text-gray-600">Even more reasons to choose ShopSmart Pro</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalFeatures.map((feature, index) => (
              <Card key={index} className="text-center border-0 shadow-md hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="mb-3 flex justify-center">{feature.icon}</div>
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

      {/* Feature Comparison */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose ShopSmart Pro?</h2>
            <p className="text-lg text-gray-600">See how we compare to manual shopping</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-red-200 bg-red-50">
              <CardHeader>
                <CardTitle className="text-xl text-red-800">Manual Shopping</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center text-red-700">
                  <span className="text-red-500 mr-3">✗</span>
                  Time-consuming price comparisons
                </div>
                <div className="flex items-center text-red-700">
                  <span className="text-red-500 mr-3">✗</span>
                  Missing out on deals
                </div>
                <div className="flex items-center text-red-700">
                  <span className="text-red-500 mr-3">✗</span>
                  No price history tracking
                </div>
                <div className="flex items-center text-red-700">
                  <span className="text-red-500 mr-3">✗</span>
                  Manual coupon searching
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="text-xl text-green-800">With ShopSmart Pro</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center text-green-700">
                  <span className="text-green-500 mr-3">✓</span>
                  Instant price comparisons
                </div>
                <div className="flex items-center text-green-700">
                  <span className="text-green-500 mr-3">✓</span>
                  Automatic deal alerts
                </div>
                <div className="flex items-center text-green-700">
                  <span className="text-green-500 mr-3">✓</span>
                  Complete price history
                </div>
                <div className="flex items-center text-green-700">
                  <span className="text-green-500 mr-3">✓</span>
                  Automatic coupon detection
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-4xl font-bold">Ready to Experience These Features?</h2>
          <p className="text-xl text-blue-100">
            Install ShopSmart Pro now and start saving money with every purchase.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg"
            onClick={() => window.open('https://chromewebstore.google.com/detail/okhhadlbdbncnikoknfmdlnfmgdffdap', '_blank')}
          >
            <Download className="h-5 w-5 mr-2" />
            Add to Chrome - It's Free
          </Button>
        </div>
      </section>
    </div>
  )
}

export default Features

