import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { FileText, Scale, Shield, AlertTriangle, CheckCircle, XCircle } from 'lucide-react'

function TermsOfService() {
  const lastUpdated = "September 16, 2025"

  const sections = [
    {
      title: "Acceptance of Terms",
      icon: <CheckCircle className="h-6 w-6 text-green-600" />,
      content: "By installing, accessing, or using ShopSmart Pro, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our extension."
    },
    {
      title: "Description of Service",
      icon: <FileText className="h-6 w-6 text-blue-600" />,
      content: "ShopSmart Pro is a Chrome browser extension that provides price comparison, price tracking, and deal alert services for online shopping platforms including Amazon and eBay. The service is provided free of charge."
    },
    {
      title: "User Responsibilities",
      icon: <Shield className="h-6 w-6 text-purple-600" />,
      content: "You are responsible for your use of the extension and must comply with all applicable laws. You agree not to use the service for any unlawful purpose or in any way that could damage, disable, or impair our service."
    },
    {
      title: "Prohibited Uses",
      icon: <XCircle className="h-6 w-6 text-red-600" />,
      content: "You may not use ShopSmart Pro to violate any laws, infringe on intellectual property rights, distribute malware, engage in fraudulent activities, or attempt to gain unauthorized access to our systems or other users' data."
    },
    {
      title: "Intellectual Property",
      icon: <Scale className="h-6 w-6 text-orange-600" />,
      content: "ShopSmart Pro and all related materials are owned by Hot Gadgets and protected by intellectual property laws. You may not copy, modify, distribute, or create derivative works without our written permission."
    },
    {
      title: "Privacy and Data",
      icon: <Shield className="h-6 w-6 text-indigo-600" />,
      content: "Your privacy is important to us. Our collection and use of your information is governed by our Privacy Policy, which is incorporated into these terms by reference."
    },
    {
      title: "Disclaimers",
      icon: <AlertTriangle className="h-6 w-6 text-yellow-600" />,
      content: "ShopSmart Pro is provided 'as is' without warranties of any kind. We do not guarantee the accuracy of price information or the availability of deals. Use the service at your own risk."
    },
    {
      title: "Limitation of Liability",
      icon: <Scale className="h-6 w-6 text-gray-600" />,
      content: "To the maximum extent permitted by law, Hot Gadgets shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of ShopSmart Pro."
    }
  ]

  const userRights = [
    "Use the extension for personal, non-commercial purposes",
    "Receive price comparison and tracking services",
    "Access customer support",
    "Uninstall the extension at any time",
    "Request deletion of your data"
  ]

  const userObligations = [
    "Use the service lawfully and responsibly",
    "Not attempt to reverse engineer the extension",
    "Not interfere with the service's operation",
    "Respect the intellectual property rights of others",
    "Report bugs and security issues responsibly"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <Badge className="bg-blue-100 text-blue-800 text-lg px-4 py-2">
            📋 Terms of Service
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900">
            Terms of Service
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            These terms govern your use of ShopSmart Pro. Please read them carefully before using our extension.
          </p>
          <div className="text-sm text-gray-500">
            Last updated: {lastUpdated}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Terms Overview</h2>
            <p className="text-lg text-gray-600">Key points about using ShopSmart Pro</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-green-800 flex items-center">
                  <CheckCircle className="h-6 w-6 mr-2" />
                  Your Rights
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {userRights.map((right, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{right}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-blue-800 flex items-center">
                  <Shield className="h-6 w-6 mr-2" />
                  Your Obligations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {userObligations.map((obligation, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{obligation}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Terms */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Detailed Terms</h2>
            <p className="text-lg text-gray-600">Complete terms and conditions</p>
          </div>

          <div className="space-y-8">
            {sections.map((section, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center space-x-3">
                    {section.icon}
                    <span>{section.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{section.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Availability */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Service Availability</h2>
            <p className="text-lg text-gray-600">What you can expect from our service</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle>Free Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">ShopSmart Pro is provided free of charge with no hidden fees or premium tiers.</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <AlertTriangle className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                <CardTitle>No Guarantees</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">We strive for accuracy but cannot guarantee price information or service availability.</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Best Effort</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">We work hard to provide reliable service and fix issues quickly when they arise.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Termination */}
      <section className="py-16 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-xl">
            <CardHeader className="text-center">
              <XCircle className="h-16 w-16 text-red-600 mx-auto mb-4" />
              <CardTitle className="text-2xl">Termination</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">You May Terminate</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Uninstall the extension at any time</li>
                    <li>• Stop using the service without notice</li>
                    <li>• Request deletion of your data</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">We May Terminate</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• For violation of these terms</li>
                    <li>• For illegal or harmful activities</li>
                    <li>• With notice for service discontinuation</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact and Changes */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-xl">
              <CardHeader className="text-center">
                <CardTitle className="text-xl">Questions About These Terms?</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-gray-600">
                  If you have questions about these Terms of Service, please contact us.
                </p>
                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <p className="text-blue-600">legal@hotgadgets.com</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl">
              <CardHeader className="text-center">
                <CardTitle className="text-xl">Changes to Terms</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-gray-600">
                  We may update these terms from time to time. Significant changes will be communicated through the extension.
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                  <p className="text-blue-800 text-sm font-medium">
                    Current Version: 1.0
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TermsOfService

