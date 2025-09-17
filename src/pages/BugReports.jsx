import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select.jsx'
import { Bug, AlertTriangle, Info, CheckCircle, Send, Upload } from 'lucide-react'

function BugReports() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    severity: '',
    browser: '',
    os: '',
    steps: '',
    expected: '',
    actual: ''
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSelectChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Bug report submitted:', formData)
  }

  const severityLevels = [
    {
      value: 'critical',
      label: 'Critical',
      description: 'Extension completely broken or causes browser crashes',
      color: 'text-red-600',
      icon: <AlertTriangle className="h-5 w-5" />
    },
    {
      value: 'high',
      label: 'High',
      description: 'Major feature not working, significant impact on functionality',
      color: 'text-orange-600',
      icon: <AlertTriangle className="h-5 w-5" />
    },
    {
      value: 'medium',
      label: 'Medium',
      description: 'Feature partially working or minor functionality issues',
      color: 'text-yellow-600',
      icon: <Info className="h-5 w-5" />
    },
    {
      value: 'low',
      label: 'Low',
      description: 'Cosmetic issues or minor inconveniences',
      color: 'text-blue-600',
      icon: <Info className="h-5 w-5" />
    }
  ]

  const commonIssues = [
    {
      title: "Extension not loading",
      description: "The extension icon appears but doesn't activate on product pages",
      solution: "Try refreshing the page or restarting your browser"
    },
    {
      title: "Price comparisons not showing",
      description: "No price comparison data appears on supported sites",
      solution: "Check if you're on a product page and ensure internet connection"
    },
    {
      title: "Notifications not working",
      description: "Not receiving price drop alerts or deal notifications",
      solution: "Check browser notification permissions and extension settings"
    },
    {
      title: "Slow performance",
      description: "Browser becomes slow when extension is active",
      solution: "Try disabling other extensions temporarily to isolate the issue"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <Badge className="bg-red-100 text-red-800 text-lg px-4 py-2">
            🐛 Bug Reports
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900">
            Report a Bug
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Found an issue with ShopSmart Pro? Help us improve by reporting bugs. 
            We take all reports seriously and work quickly to fix issues.
          </p>
        </div>
      </section>

      {/* Common Issues */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Common Issues & Solutions</h2>
            <p className="text-lg text-gray-600">Check if your issue has a quick fix before reporting</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {commonIssues.map((issue, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <Bug className="h-5 w-5 text-red-600 mr-2" />
                    {issue.title}
                  </CardTitle>
                  <CardDescription>{issue.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-green-800 text-sm">Quick Fix:</h4>
                        <p className="text-green-700 text-sm">{issue.solution}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Severity Levels */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Bug Severity Levels</h2>
            <p className="text-lg text-gray-600">Help us prioritize by selecting the right severity level</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {severityLevels.map((level, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardHeader className="text-center">
                  <div className={`mb-2 flex justify-center ${level.color}`}>
                    {level.icon}
                  </div>
                  <CardTitle className={`text-lg ${level.color}`}>{level.label}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm text-center">{level.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bug Report Form */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Submit Bug Report</h2>
            <p className="text-lg text-gray-600">Provide detailed information to help us reproduce and fix the issue</p>
          </div>

          <Card className="border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Bug Report Form</CardTitle>
              <CardDescription className="text-center">
                The more details you provide, the faster we can fix the issue
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="title" className="text-sm font-medium text-gray-700">
                    Bug Title *
                  </label>
                  <Input
                    id="title"
                    name="title"
                    type="text"
                    required
                    value={formData.title}
                    onChange={handleInputChange}
                    placeholder="Brief description of the bug"
                    className="border-2 border-gray-200 focus:border-blue-500"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      Severity Level *
                    </label>
                    <Select onValueChange={(value) => handleSelectChange('severity', value)}>
                      <SelectTrigger className="border-2 border-gray-200 focus:border-blue-500">
                        <SelectValue placeholder="Select severity level" />
                      </SelectTrigger>
                      <SelectContent>
                        {severityLevels.map((level) => (
                          <SelectItem key={level.value} value={level.value}>
                            <div className="flex items-center space-x-2">
                              <span className={level.color}>{level.icon}</span>
                              <span>{level.label}</span>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      Browser *
                    </label>
                    <Select onValueChange={(value) => handleSelectChange('browser', value)}>
                      <SelectTrigger className="border-2 border-gray-200 focus:border-blue-500">
                        <SelectValue placeholder="Select your browser" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="chrome">Google Chrome</SelectItem>
                        <SelectItem value="edge">Microsoft Edge</SelectItem>
                        <SelectItem value="brave">Brave Browser</SelectItem>
                        <SelectItem value="other">Other Chromium-based</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="description" className="text-sm font-medium text-gray-700">
                    Bug Description *
                  </label>
                  <Textarea
                    id="description"
                    name="description"
                    required
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Describe the bug in detail. What happened? When did it occur?"
                    rows={4}
                    className="border-2 border-gray-200 focus:border-blue-500"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="steps" className="text-sm font-medium text-gray-700">
                    Steps to Reproduce *
                  </label>
                  <Textarea
                    id="steps"
                    name="steps"
                    required
                    value={formData.steps}
                    onChange={handleInputChange}
                    placeholder="1. Go to... 2. Click on... 3. See error..."
                    rows={4}
                    className="border-2 border-gray-200 focus:border-blue-500"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="expected" className="text-sm font-medium text-gray-700">
                      Expected Behavior
                    </label>
                    <Textarea
                      id="expected"
                      name="expected"
                      value={formData.expected}
                      onChange={handleInputChange}
                      placeholder="What should have happened?"
                      rows={3}
                      className="border-2 border-gray-200 focus:border-blue-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="actual" className="text-sm font-medium text-gray-700">
                      Actual Behavior
                    </label>
                    <Textarea
                      id="actual"
                      name="actual"
                      value={formData.actual}
                      onChange={handleInputChange}
                      placeholder="What actually happened?"
                      rows={3}
                      className="border-2 border-gray-200 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Attach Screenshots (Optional)</h3>
                  <p className="text-gray-600 mb-4">Screenshots help us understand the issue better</p>
                  <Button type="button" variant="outline">
                    Choose Files
                  </Button>
                </div>

                <Button type="submit" size="lg" className="w-full bg-red-600 hover:bg-red-700 text-white">
                  <Send className="h-5 w-5 mr-2" />
                  Submit Bug Report
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Happens Next?</h2>
            <p className="text-lg text-gray-600">Here's our bug fixing process</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  1
                </div>
                <CardTitle>We Review</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Our team reviews your report within 24 hours and confirms the issue.</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  2
                </div>
                <CardTitle>We Fix</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">We work on fixing the bug based on priority level and complexity.</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  3
                </div>
                <CardTitle>We Update</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">The fix is released in the next extension update, and we notify you.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BugReports

