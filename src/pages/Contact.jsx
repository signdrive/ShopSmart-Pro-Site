import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Mail, MessageCircle, Clock, Send, Phone, MapPin } from 'lucide-react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  const contactMethods = [
    {
      icon: <Mail className="h-8 w-8 text-blue-600" />,
      title: "Email Support",
      description: "Get help via email",
      info: "support@hotgadgets.com",
      responseTime: "Within 24 hours"
    },
    {
      icon: <MessageCircle className="h-8 w-8 text-green-600" />,
      title: "General Inquiries",
      description: "Questions about ShopSmart Pro",
      info: "hello@hotgadgets.com",
      responseTime: "Within 48 hours"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <Badge className="bg-green-100 text-green-800 text-lg px-4 py-2">
            📞 Contact Us
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Have a question, suggestion, or need help? We'd love to hear from you. Our support team is here to help.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How to Reach Us</h2>
            <p className="text-lg text-gray-600">Choose the best way to get in touch</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {contactMethods.map((method, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="mb-4 flex justify-center">{method.icon}</div>
                  <CardTitle className="text-2xl">{method.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {method.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <div className="text-xl font-semibold text-blue-600">{method.info}</div>
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span>{method.responseTime}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
            <p className="text-lg text-gray-600">Fill out the form below and we'll get back to you soon</p>
          </div>

          <Card className="border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Contact Form</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      className="border-2 border-gray-200 focus:border-blue-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      className="border-2 border-gray-200 focus:border-blue-500"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-gray-700">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What is this regarding?"
                    className="border-2 border-gray-200 focus:border-blue-500"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Please describe your question or issue in detail..."
                    rows={6}
                    className="border-2 border-gray-200 focus:border-blue-500"
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Company Information */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">About Hot Gadgets</h2>
            <p className="text-lg text-gray-600">The team behind ShopSmart Pro</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                Hot Gadgets is dedicated to creating innovative tools that help people save money and shop smarter online. 
                ShopSmart Pro is our flagship Chrome extension designed to make price comparison and deal hunting effortless.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe everyone deserves to get the best deals possible, and we're committed to providing free, 
                reliable tools that put more money back in your pocket.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">Based globally, serving customers worldwide</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Support available 24/7 via email</span>
                </div>
              </div>
            </div>
            
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">Our Commitment</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Free Forever</h3>
                    <p className="text-gray-600 text-sm">ShopSmart Pro will always be free to use</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Privacy First</h3>
                    <p className="text-gray-600 text-sm">We never sell your personal data</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Continuous Improvement</h3>
                    <p className="text-gray-600 text-sm">Regular updates and new features</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Response Time */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="border-0 shadow-xl">
            <CardHeader>
              <Clock className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <CardTitle className="text-2xl">What to Expect</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-lg text-gray-600">
                We aim to respond to all inquiries as quickly as possible.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">24 hours</div>
                  <div className="text-gray-600">Support requests</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">48 hours</div>
                  <div className="text-gray-600">General inquiries</div>
                </div>
              </div>
              <p className="text-sm text-gray-500">
                Response times may be longer during weekends and holidays
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

export default Contact

