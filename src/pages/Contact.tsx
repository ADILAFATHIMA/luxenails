import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, MessageCircle, CheckCircle, AlertCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      content: 'hello@luxenails.com',
      subtext: 'We reply within 24 hours',
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+1 (555) 123-4567',
      subtext: 'Mon-Fri 9am-6pm PST',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      content: '123 Beauty Lane',
      subtext: 'Los Angeles, CA 90001',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      content: 'Mon-Fri: 9am-6pm',
      subtext: 'Sat-Sun: 10am-4pm',
    },
  ];

  const faqItems = [
    {
      question: 'Are your products vegan and cruelty-free?',
      answer: 'Yes! All LuxeNails products are 100% vegan and cruelty-free. We are Leaping Bunny certified and never test on animals.',
    },
    {
      question: 'How long does shipping take?',
      answer: 'Standard shipping takes 3-5 business days. Express shipping (1-2 days) is available for an additional fee. Free shipping on orders over $50.',
    },
    {
      question: 'What is your return policy?',
      answer: 'We offer a 30-day satisfaction guarantee. If you\'re not happy with your purchase, return it for a full refund or exchange.',
    },
    {
      question: 'Do you ship internationally?',
      answer: 'Yes! We ship to over 30 countries worldwide. International shipping times vary by location (7-14 business days).',
    },
  ];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (formData.phone && !/^[\d\s\-()+]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: 'General Inquiry',
      message: '',
    });

    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center page-transition">
            <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
              Get in Touch
            </span>
            <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-6">
              We'd Love to
              <span className="block gradient-text">Hear From You</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have questions about our products, need recommendations, or just want to say hello?
              We're here to help!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="card p-6 text-center hover:bg-primary-50 group"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <info.icon className="w-7 h-7 text-primary-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
                <p className="text-gray-600 text-sm">{info.content}</p>
                <p className="text-gray-500 text-xs mt-1">{info.subtext}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="card p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900">Send us a Message</h2>
                  <p className="text-gray-500">We'll get back to you within 24 hours</p>
                </div>
              </div>

              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3 animate-fade-in">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <p className="text-green-700">Thank you! Your message has been sent successfully.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.name ? 'border-red-300 bg-red-50' : 'border-gray-200'
                    } focus:outline-none transition-all`}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.name}
                    </p>
                  )}
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.email ? 'border-red-300 bg-red-50' : 'border-gray-200'
                      } focus:outline-none transition-all`}
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.phone ? 'border-red-300 bg-red-50' : 'border-gray-200'
                      } focus:outline-none transition-all`}
                      placeholder="+1 (555) 000-0000"
                    />
                    {errors.phone && (
                      <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none transition-all bg-white"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Product Question">Product Question</option>
                    <option value="Order Support">Order Support</option>
                    <option value="Wholesale Inquiry">Wholesale Inquiry</option>
                    <option value="Collaboration">Collaboration</option>
                    <option value="Feedback">Feedback</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.message ? 'border-red-300 bg-red-50' : 'border-gray-200'
                    } focus:outline-none transition-all resize-none`}
                    placeholder="How can we help you?"
                  />
                  {errors.message && (
                    <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`btn-primary w-full py-4 ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      <Send className="w-5 h-5" />
                      Send Message
                    </span>
                  )}
                </button>
              </form>
            </div>

            {/* FAQ Section */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-8">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {faqItems.map((item, index) => (
                  <details
                    key={index}
                    className="card overflow-hidden group"
                  >
                    <summary className="p-6 cursor-pointer font-medium text-gray-900 hover:bg-primary-50 transition-colors flex items-center justify-between">
                      {item.question}
                      <span className="text-primary-600 group-open:rotate-45 transition-transform">
                        +
                      </span>
                    </summary>
                    <div className="px-6 pb-6 text-gray-600">
                      {item.answer}
                    </div>
                  </details>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 card overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                    <p className="text-gray-500">123 Beauty Lane, Los Angeles, CA 90001</p>
                    <a
                      href="#"
                      className="mt-4 inline-block text-primary-600 font-medium hover:underline"
                    >
                      View on Google Maps
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
            Connect With Us
          </h2>
          <p className="text-gray-600 mb-8">
            Follow us on social media for updates, tutorials, and community inspiration.
          </p>
          <div className="flex justify-center gap-4">
            {['Instagram', 'Facebook', 'Twitter', 'YouTube'].map((platform) => (
              <a
                key={platform}
                href="#"
                className="px-6 py-3 bg-gray-100 text-gray-700 rounded-full font-medium hover:bg-primary-100 hover:text-primary-700 transition-colors"
              >
                {platform}
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
