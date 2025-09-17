import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Cookie, Settings, Shield, BarChart3, CheckCircle, XCircle } from 'lucide-react'

function CookiePolicy() {
  const lastUpdated = "September 16, 2025"

  const cookieTypes = [
    {
      title: "Essential Cookies",
      icon: <Shield className="h-8 w-8 text-green-600" />,
      description: "Required for basic functionality",
      purpose: "These cookies are necessary for the extension to work properly. They enable core features like price comparisons and user preferences.",
      canDisable: false,
      examples: ["Extension settings", "User preferences", "Session data"]
    },
    {
      title: "Analytics Cookies",
      icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
      description: "Help us understand usage patterns",
      purpose: "These cookies help us understand how users interact with our extension so we can improve its performance and features.",
      canDisable: true,
      examples: ["Usage statistics", "Feature adoption", "Error tracking"]
    },
    {
      title: "Functional Cookies",
      icon: <Settings className="h-8 w-8 text-purple-600" />,
      description: "Enhance your experience",
      purpose: "These cookies enable enhanced functionality and personalization, such as remembering your notification preferences.",
      canDisable: true,
      examples: ["Notification settings", "Display preferences", "Alert configurations"]
    }
  ]

  const thirdPartyServices = [
    {
      name: "Chrome Storage API",
      purpose: "Store user preferences and settings locally",
      dataShared: "Extension settings, user preferences",
      privacy: "Data stored locally on your device"
    },
    {
      name: "Amazon Product API",
      purpose: "Retrieve product information and prices",
      dataShared: "Product URLs you visit",
      privacy: "No personal data shared"
    },
    {
      name: "eBay API",
      purpose: "Retrieve product information and prices",
      dataShared: "Product URLs you visit",
      privacy: "No personal data shared"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <Badge className="bg-orange-100 text-orange-800 text-lg px-4 py-2">
            🍪 Cookie Policy
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900">
            Cookie Policy
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Learn about how ShopSmart Pro uses cookies and similar technologies to provide and improve our service.
          </p>
          <div className="text-sm text-gray-500">
            Last updated: {lastUpdated}
          </div>
        </div>
      </section>

      {/* What Are Cookies */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Are Cookies?</h2>
            <p className="text-lg text-gray-600">Understanding cookies and how they work</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                Cookies are small text files that are stored on your device when you use web applications and browser extensions. 
                They help us remember your preferences and provide a better user experience.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                ShopSmart Pro uses cookies and similar technologies to store your settings, track usage for improvements, 
                and provide personalized features like price alerts and comparison preferences.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="font-semibold text-blue-900 mb-2">Important Note</h3>
                <p className="text-blue-800 text-sm">
                  Most data in ShopSmart Pro is stored locally on your device using Chrome's secure storage APIs, 
                  not traditional web cookies.
                </p>
              </div>
            </div>
            
            <Card className="border-0 shadow-xl">
              <CardHeader className="text-center">
                <Cookie className="h-16 w-16 text-orange-600 mx-auto mb-4" />
                <CardTitle className="text-2xl">Cookie-Free by Design</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-gray-600">
                  ShopSmart Pro minimizes cookie usage by storing most data locally on your device, 
                  giving you better privacy and control.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-green-50 p-3 rounded-lg">
                    <div className="font-semibold text-green-800">Local Storage</div>
                    <div className="text-green-600">95% of data</div>
                  </div>
                  <div className="bg-orange-50 p-3 rounded-lg">
                    <div className="font-semibold text-orange-800">Cookies</div>
                    <div className="text-orange-600">5% of data</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Types of Cookies */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Types of Data Storage</h2>
            <p className="text-lg text-gray-600">How we store and use different types of information</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {cookieTypes.map((type, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="mb-4 flex justify-center">{type.icon}</div>
                  <CardTitle className="text-xl">{type.title}</CardTitle>
                  <p className="text-gray-600">{type.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 text-sm">{type.purpose}</p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900 text-sm">Examples:</h4>
                    <ul className="space-y-1">
                      {type.examples.map((example, idx) => (
                        <li key={idx} className="text-gray-600 text-sm flex items-center">
                          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></div>
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t">
                    <span className="text-sm text-gray-600">Can disable:</span>
                    {type.canDisable ? (
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    ) : (
                      <XCircle className="h-5 w-5 text-red-600" />
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Third Party Services */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Third-Party Services</h2>
            <p className="text-lg text-gray-600">External services we use and how they handle data</p>
          </div>

          <div className="space-y-6">
            {thirdPartyServices.map((service, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardHeader>
                  <CardTitle className="text-lg">{service.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Purpose</h4>
                      <p className="text-gray-600 text-sm">{service.purpose}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Data Shared</h4>
                      <p className="text-gray-600 text-sm">{service.dataShared}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Privacy</h4>
                      <p className="text-gray-600 text-sm">{service.privacy}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Managing Cookies */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Managing Your Data</h2>
            <p className="text-lg text-gray-600">You have control over your data and privacy settings</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <Settings className="h-6 w-6 text-blue-600 mr-2" />
                  Extension Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Control data collection and storage through the extension settings panel.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Disable analytics tracking</li>
                  <li>• Clear stored preferences</li>
                  <li>• Reset all settings</li>
                  <li>• Export your data</li>
                </ul>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Open Extension Settings
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <Shield className="h-6 w-6 text-green-600 mr-2" />
                  Browser Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Use your browser's built-in privacy controls for additional protection.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Block third-party cookies</li>
                  <li>• Clear browsing data</li>
                  <li>• Use incognito mode</li>
                  <li>• Manage site permissions</li>
                </ul>
                <Button variant="outline" className="w-full">
                  Browser Privacy Settings
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-xl">
            <CardHeader className="text-center">
              <Cookie className="h-16 w-16 text-orange-600 mx-auto mb-4" />
              <CardTitle className="text-2xl">Questions About Cookies?</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <p className="text-lg text-gray-600">
                If you have questions about our use of cookies or data storage, we're here to help.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Privacy Questions</h3>
                  <p className="text-blue-600">privacy@hotgadgets.com</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Technical Support</h3>
                  <p className="text-blue-600">support@hotgadgets.com</p>
                </div>
              </div>
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <p className="text-orange-800 font-medium text-sm">
                  Policy Version: 1.0 • Last Updated: {lastUpdated}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

export default CookiePolicy

