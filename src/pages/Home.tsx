import { ArrowRight, Star, Leaf, Heart, Shield, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

// Product images from Pexels
const featuredProducts = [
  {
    id: 1,
    name: 'Rose Petal',
    shade: 'Soft Pink',
    price: 24,
    image: 'https://images.pexels.com/photos/268257/pexels-photo-268257.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 2,
    name: 'Midnight Velvet',
    shade: 'Deep Burgundy',
    price: 26,
    image: 'https://images.pexels.com/photos/7860090/pexels-photo-7860090.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 3,
    name: 'Coral Sunset',
    shade: 'Vibrant Coral',
    price: 24,
    image: 'https://images.pexels.com/photos/268257/pexels-photo-268257.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 4,
    name: 'French Nude',
    shade: 'Natural Beige',
    price: 26,
    image: 'https://images.pexels.com/photos/7860090/pexels-photo-7860090.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

const features = [
  {
    icon: Leaf,
    title: 'Vegan & Cruelty-Free',
    description: 'All our products are certified vegan and never tested on animals.',
  },
  {
    icon: Shield,
    title: 'Chip-Resistant',
    description: 'Our formula stays flawless for up to 14 days without chipping.',
  },
  {
    icon: Heart,
    title: 'Nourishing Formula',
    description: 'Enriched with vitamins and oils to strengthen your nails.',
  },
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Beauty Enthusiast',
    content: 'LuxeNails has completely transformed my manicure routine. The colors are stunning and last so long!',
    rating: 5,
  },
  {
    name: 'Emily Chen',
    role: 'Nail Artist',
    content: 'As a professional, I trust LuxeNails for my clients. The quality and pigment payoff is unmatched.',
    rating: 5,
  },
  {
    name: 'Jessica Williams',
    role: 'Fashion Blogger',
    content: 'I love the ethical approach LuxeNails takes. Vegan, cruelty-free, and absolutely gorgeous shades!',
    rating: 5,
  },
];

const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        {/* Hero Image Section */}

        <div className="relative animate-slide-up">
          <div className="relative w-full aspect-square max-w-lg mx-auto">

            <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full transform rotate-12 scale-95 opacity-20" />

            <img
              src="/assets/images/img1.png"
              alt="LuxeNails Collection"
              className="relative rounded-3xl shadow-2xl object-cover w-full h-full"
            />

            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 animate-scale-in">
              <div className="flex items-center gap-3">

                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>

                <div>
                  <p className="font-semibold text-gray-900">
                    100% Vegan
                  </p>

                  <p className="text-sm text-gray-500">
                    Cruelty-free formula
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Why Choose LuxeNails?</h2>
            <p className="section-subtitle">
              We combine luxury with responsibility, creating nail polishes that look beautiful and feel right.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 stagger-children">
            {features.map((feature, index) => (
              <div
                key={index}
                className="card p-8 text-center group hover:bg-primary-50"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <span className="text-primary-600 font-medium">Best Sellers</span>
              <h2 className="section-title mt-2">Featured Collections</h2>
            </div>
            <Link
              to="/products"
              className="mt-4 md:mt-0 text-primary-600 font-medium flex items-center gap-1 hover:gap-2 transition-all"
            >
              View All Products <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <Link
                key={product.id}
                to="/products"
                className="card group overflow-hidden"
              >
                <div className="relative aspect-square overflow-hidden bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <span className="inline-block px-4 py-2 bg-white text-gray-900 text-sm font-medium rounded-full shadow-lg">
                      Quick View
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-900">{product.name}</h3>
                    <span className="font-bold text-primary-600">${product.price}</span>
                  </div>
                  <p className="text-sm text-gray-500">{product.shade}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary-600 font-medium">Testimonials</span>
            <h2 className="section-title mt-2">What Our Customers Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-200 to-primary-300" />
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full" />
          <div className="absolute bottom-10 right-10 w-60 h-60 bg-white rounded-full" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Ready to Transform Your Look?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers and discover your perfect shade today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/products"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Shop Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="btn-outline"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
