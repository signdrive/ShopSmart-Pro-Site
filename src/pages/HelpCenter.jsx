import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Search, Book, Download, Settings, Shield, TrendingUp, ChevronRight, HelpCircle } from 'lucide-react'

function HelpCenter() {
  const [searchQuery, setSearchQuery] = useState('')

  const categories = [
    {
      icon: <Download className="h-8 w-8 text-blue-600" />,
      title: "Getting Started",
      description: "Installation, setup, and first steps",
      articles: 8,
      color: "bg-blue-50 border-blue-200"
    },
    {
      icon: <Settings className="h-8 w-8 text-green-600" />,
      title: "Using ShopSmart Pro",
      description: "Features, settings, and customization",
      articles: 12,
      color: "bg-green-50 border-green-200"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-purple-600" />,
      title: "Price Tracking",
      description: "Monitoring prices and setting alerts",
      articles: 6,
      color: "bg-purple-50 border-purple-200"
    },
    {
      icon: <Shield className="h-8 w-8 text-orange-600" />,
      title: "Privacy & Security",
      description: "Data protection and security features",
      articles: 4,
      color: "bg-orange-50 border-orange-200"
    }
  ]

  const popularArticles = [
    {
      title: "How to Install ShopSmart Pro",
      description: "Step-by-step guide to installing the Chrome extension",
      category: "Getting Started",
      readTime: "2 min read"
    },
    {
      title: "Setting Up Price Alerts",
      description: "Learn how to get notified when prices drop",
      category: "Price Tracking",
      readTime: "3 min read"
    },
    {
      title: "Understanding Price Comparisons",
      description: "How ShopSmart Pro compares prices across platforms",
      category: "Using ShopSmart Pro",
      readTime: "4 min read"
    },
    {
      title: "Privacy Settings and Data Protection",
      description: "Managing your privacy and understanding our data practices",
      category: "Privacy & Security",
      readTime: "5 min read"
    },
    {
      title: "Troubleshooting Common Issues",
      description: "Solutions to frequently encountered problems",
      category: "Using ShopSmart Pro",
      readTime: "6 min read"
    },
    {
      title: "Customizing Extension Settings",
      description: "Personalizing ShopSmart Pro for your shopping habits",
      category: "Using ShopSmart Pro",
      readTime: "3 min read"
    }
  ]

  const faqs = [
    {
      question: "Is ShopSmart Pro really free?",
      answer: "Yes, ShopSmart Pro is completely free to use. There are no hidden fees, subscriptions, or premium features. All functionality is available at no cost."
    },
    {
      question: "Which websites does ShopSmart Pro work on?",
      answer: "Currently, ShopSmart Pro works on Amazon and eBay. We're planning to add support for more shopping platforms in future updates."
    },
    {
      question: "How accurate are the price comparisons?",
      answer: "Our price comparisons are updated in real-time and sourced directly from the retailers' APIs. We strive for 99%+ accuracy in our price data."
    },
    {
      question: "Can I use ShopSmart Pro on mobile devices?",
      answer: "ShopSmart Pro is a Chrome extension designed for desktop browsers. However, you can access your saved items and alerts through any device with internet access."
    },
    {
      question: "How do I disable notifications?",
      answer: "Click the ShopSmart Pro icon in your browser toolbar, go to Settings, and toggle off the notifications you don't want to receive."
    }
  ]

  const filteredArticles = popularArticles.filter(article =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <Badge className="bg-blue-100 text-blue-800 text-lg px-4 py-2">
            📚 Help Center
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900">
            How Can We Help You?
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Find answers to your questions and learn how to get the most out of ShopSmart Pro.
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Search for help articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-3 text-lg border-2 border-gray-200 focus:border-blue-500 rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Browse by Category</h2>
            <p className="text-lg text-gray-600">Find help articles organized by topic</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className={`border-2 ${category.color} hover:shadow-lg transition-all duration-300 cursor-pointer`}>
                <CardHeader className="text-center">
                  <div className="mb-4 flex justify-center">{category.icon}</div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{category.articles} articles</span>
                    <ChevronRight className="h-4 w-4 text-gray-400" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {searchQuery ? 'Search Results' : 'Popular Articles'}
            </h2>
            <p className="text-lg text-gray-600">
              {searchQuery ? `Found ${filteredArticles.length} articles` : 'Most helpful articles from our community'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      {article.category}
                    </Badge>
                    <span className="text-xs text-gray-500">{article.readTime}</span>
                  </div>
                  <CardTitle className="text-lg hover:text-blue-600 transition-colors">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {article.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          {searchQuery && filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <HelpCircle className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
              <p className="text-gray-600 mb-4">Try searching with different keywords or browse our categories above.</p>
              <Button onClick={() => setSearchQuery('')} variant="outline">
                Clear Search
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Quick answers to common questions</p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900 flex items-center">
                    <HelpCircle className="h-5 w-5 text-blue-600 mr-2" />
                    {faq.question}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="border-0 shadow-xl">
            <CardHeader>
              <Book className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <CardTitle className="text-2xl">Still Need Help?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-lg text-gray-600">
                Can't find what you're looking for? Our support team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  Contact Support
                </Button>
                <Button size="lg" variant="outline">
                  Report a Bug
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

export default HelpCenter

