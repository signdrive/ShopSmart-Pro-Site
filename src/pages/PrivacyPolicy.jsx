import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Shield, Eye, Lock, Database, UserCheck, Globe } from 'lucide-react'

function PrivacyPolicy() {
  const lastUpdated = "September 16, 2025"

  const sections = [
    {
      title: "Information We Collect",
      icon: <Database className="h-6 w-6 text-blue-600" />,
      content: [
        {
          subtitle: "Automatically Collected Information",
          text: "When you use ShopSmart Pro, we may automatically collect certain information about your device and usage patterns, including browser type, operating system, and extension version."
        },
        {
          subtitle: "Shopping Data",
          text: "We collect information about the products you view and price comparisons you request to provide our core functionality. This data is processed locally on your device whenever possible."
        },
        {
          subtitle: "Optional Information",
          text: "If you contact our support team, we collect the information you provide in your communications with us, such as your email address and the content of your messages."
        }
      ]
    },
    {
      title: "How We Use Your Information",
      icon: <Eye className="h-6 w-6 text-green-600" />,
      content: [
        {
          subtitle: "Core Functionality",
          text: "We use your information to provide price comparisons, track price changes, and send you deal alerts as requested."
        },
        {
          subtitle: "Service Improvement",
          text: "We analyze usage patterns to improve our extension's performance and add new features that benefit our users."
        },
        {
          subtitle: "Customer Support",
          text: "We use contact information to respond to your inquiries and provide technical support when needed."
        }
      ]
    },
    {
      title: "Information Sharing",
      icon: <UserCheck className="h-6 w-6 text-purple-600" />,
      content: [
        {
          subtitle: "No Sale of Personal Data",
          text: "We do not sell, rent, or trade your personal information to third parties for marketing purposes."
        },
        {
          subtitle: "Service Providers",
          text: "We may share information with trusted service providers who help us operate our extension, but only to the extent necessary for them to provide their services."
        },
        {
          subtitle: "Legal Requirements",
          text: "We may disclose information if required by law or to protect our rights, property, or safety, or that of our users or others."
        }
      ]
    },
    {
      title: "Data Security",
      icon: <Lock className="h-6 w-6 text-red-600" />,
      content: [
        {
          subtitle: "Security Measures",
          text: "We implement appropriate technical and organizational measures to protect your information against unauthorized access, alteration, disclosure, or destruction."
        },
        {
          subtitle: "Local Storage",
          text: "Most of your data is stored locally on your device using Chrome's secure storage APIs, reducing the risk of data breaches."
        },
        {
          subtitle: "Encryption",
          text: "All data transmitted between your browser and our servers is encrypted using industry-standard SSL/TLS protocols."
        }
      ]
    },
    {
      title: "Your Rights and Choices",
      icon: <Shield className="h-6 w-6 text-orange-600" />,
      content: [
        {
          subtitle: "Access and Control",
          text: "You can access and control your data through the extension's settings panel. You can disable features, clear stored data, or uninstall the extension at any time."
        },
        {
          subtitle: "Data Deletion",
          text: "You can request deletion of your data by contacting us. Most data is stored locally and can be cleared by uninstalling the extension."
        },
        {
          subtitle: "Opt-Out",
          text: "You can opt out of data collection for analytics purposes through the extension settings without affecting core functionality."
        }
      ]
    },
    {
      title: "International Users",
      icon: <Globe className="h-6 w-6 text-indigo-600" />,
      content: [
        {
          subtitle: "Global Service",
          text: "ShopSmart Pro is available to users worldwide. We comply with applicable data protection laws in the jurisdictions where we operate."
        },
        {
          subtitle: "GDPR Compliance",
          text: "For users in the European Union, we comply with the General Data Protection Regulation (GDPR) and provide additional rights as required by law."
        },
        {
          subtitle: "Data Transfers",
          text: "If we transfer data internationally, we ensure appropriate safeguards are in place to protect your information."
        }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <Badge className="bg-blue-100 text-blue-800 text-lg px-4 py-2">
            🔒 Privacy Policy
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information when you use ShopSmart Pro.
          </p>
          <div className="text-sm text-gray-500">
            Last updated: {lastUpdated}
          </div>
        </div>
      </section>

      {/* Privacy Commitment */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Privacy Commitment</h2>
            <p className="text-lg text-gray-600">We believe in transparency and putting you in control of your data</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle>No Data Selling</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">We never sell your personal information to third parties. Your data is not our product.</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <Lock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Local Storage</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Most of your data stays on your device, reducing privacy risks and giving you control.</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <Eye className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <CardTitle>Transparency</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">We're clear about what data we collect and how we use it. No hidden practices.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Policy Sections */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {sections.map((section, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center space-x-3">
                    {section.icon}
                    <span>{section.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {section.content.map((item, idx) => (
                    <div key={idx} className="space-y-2">
                      <h3 className="text-lg font-semibold text-gray-900">{item.subtitle}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Questions About This Policy?</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <p className="text-lg text-gray-600">
                If you have any questions about this Privacy Policy or our data practices, please contact us.
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <p className="text-blue-600">privacy@hotgadgets.com</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Response Time</h3>
                  <p className="text-gray-600">We respond to privacy inquiries within 48 hours</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Updates */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl">Policy Updates</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg text-gray-600">
                We may update this Privacy Policy from time to time to reflect changes in our practices or for legal reasons.
              </p>
              <p className="text-gray-600">
                When we make significant changes, we'll notify users through the extension and update the "Last updated" date above. 
                Your continued use of ShopSmart Pro after changes become effective constitutes acceptance of the updated policy.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-blue-800 font-medium">
                  Current Version: 1.0 • Last Updated: {lastUpdated}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

export default PrivacyPolicy

