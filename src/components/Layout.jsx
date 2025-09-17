import { Link, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { ShoppingCart, Download } from 'lucide-react'

function Layout({ children }) {
  const location = useLocation()

  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex items-center space-x-2">
              <ShoppingCart className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">ShopSmart Pro</span>
            </Link>
            
            <nav className="hidden md:flex space-x-8">
              <Link 
                to="/features" 
                className={`transition-colors ${isActive('/features') ? 'text-blue-600 font-medium' : 'text-gray-700 hover:text-blue-600'}`}
              >
                Features
              </Link>
              <Link 
                to="/how-it-works" 
                className={`transition-colors ${isActive('/how-it-works') ? 'text-blue-600 font-medium' : 'text-gray-700 hover:text-blue-600'}`}
              >
                How It Works
              </Link>
              <Link 
                to="/download" 
                className={`transition-colors ${isActive('/download') ? 'text-blue-600 font-medium' : 'text-gray-700 hover:text-blue-600'}`}
              >
                Download
              </Link>
              <Link 
                to="/support" 
                className={`transition-colors ${isActive('/support') ? 'text-blue-600 font-medium' : 'text-gray-700 hover:text-blue-600'}`}
              >
                Support
              </Link>
            </nav>

            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              <Download className="h-4 w-4 mr-2" />
              Add to Chrome
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <ShoppingCart className="h-6 w-6 text-blue-400" />
                <span className="text-xl font-bold">ShopSmart Pro</span>
              </div>
              <p className="text-gray-400">
                Your smarter shopping assistant for Amazon & eBay. Save money with every purchase.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Product</h3>
              <div className="space-y-2 text-gray-400">
                <Link to="/features" className="block hover:text-white transition-colors">Features</Link>
                <Link to="/how-it-works" className="block hover:text-white transition-colors">How It Works</Link>
                <Link to="/download" className="block hover:text-white transition-colors">Download</Link>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Support</h3>
              <div className="space-y-2 text-gray-400">
                <Link to="/help-center" className="block hover:text-white transition-colors">Help Center</Link>
                <Link to="/contact" className="block hover:text-white transition-colors">Contact Us</Link>
                <Link to="/bug-reports" className="block hover:text-white transition-colors">Bug Reports</Link>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Legal</h3>
              <div className="space-y-2 text-gray-400">
                <Link to="/privacy-policy" className="block hover:text-white transition-colors">Privacy Policy</Link>
                <Link to="/terms-of-service" className="block hover:text-white transition-colors">Terms of Service</Link>
                <Link to="/cookie-policy" className="block hover:text-white transition-colors">Cookie Policy</Link>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 ShopSmart Pro. All rights reserved. Built by Hot Gadgets.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout

