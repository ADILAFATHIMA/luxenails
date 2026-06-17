import { Link } from 'react-router-dom';
import { Sparkles, Instagram, Facebook, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const products = [
    { name: 'Classic Collection', path: '/products' },
    { name: 'Luxury Line', path: '/products' },
    { name: 'Limited Editions', path: '/products' },
    { name: 'Nail Care Sets', path: '/products' },
    { name: 'Gift Boxes', path: '/products' },
  ];

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center shadow-lg">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-display font-bold">
                Luxe<span className="text-primary-400">Nails</span>
              </span>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Discover luxurious, long-lasting nail polishes that express your unique style.
              Vegan, cruelty-free, and made to perfection.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-gray-800 flex items-center justify-center
                           hover:bg-primary-600 hover:-translate-y-1 transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-primary-400 hover:translate-x-1 transition-all duration-200 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Products</h3>
            <ul className="space-y-3">
              {products.map((product, index) => (
                <li key={index}>
                  <Link
                    to={product.path}
                    className="text-gray-400 hover:text-primary-400 hover:translate-x-1 transition-all duration-200 inline-block"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">hello@luxenails.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">
                  123 Beauty Lane<br />
                  Los Angeles, CA 90001
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              {currentYear} LuxeNails. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-500 hover:text-primary-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-primary-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-500 hover:text-primary-400 transition-colors">
                Shipping Info
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
