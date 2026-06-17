import { Heart, Leaf, Award, Users, Target, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

const timeline = [
  {
    year: '2018',
    title: 'The Beginning',
    description: 'LuxeNails was founded with a simple mission: create beautiful nail polishes without compromising ethics.',
  },
  {
    year: '2020',
    title: 'Going Global',
    description: 'Expanded internationally, bringing our vegan formulas to beauty lovers across 30 countries.',
  },
  {
    year: '2022',
    title: 'Innovation Award',
    description: 'Received the Beauty Innovation Award for our breakthrough long-lasting formula technology.',
  },
  {
    year: '2024',
    title: 'Sustainability Milestone',
    description: 'Achieved carbon-neutral certification and launched our eco-friendly packaging initiative.',
  },
  {
    year: '2026',
    title: 'The Future',
    description: 'Continuing to innovate with new collections while staying true to our ethical roots.',
  },
];

const values = [
  {
    icon: Leaf,
    title: 'Sustainability',
    description: 'We prioritize eco-friendly practices from formulation to packaging, minimizing our environmental footprint.',
  },
  {
    icon: Heart,
    title: 'Ethics First',
    description: '100% vegan and cruelty-free. We never test on animals and use only conscious ingredients.',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Building a community of beauty lovers who share our passion for ethical, quality beauty products.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Committed to the highest quality standards, ensuring every bottle delivers stunning results.',
  },
];

const teamMembers = [
  {
    name: 'Sophia Anderson',
    role: 'Founder & CEO',
    bio: 'Former beauty chemist with a passion for ethical cosmetics.',
    image: 'https://images.pexels.com/photos/3765323/pexels-photo-3765323.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Isabella Martinez',
    role: 'Creative Director',
    bio: 'Award-winning designer bringing color to life.',
    image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Emma Thompson',
    role: 'Head of R&D',
    bio: 'Leads innovation in long-lasting, healthy nail formulas.',
    image: 'https://images.pexels.com/photos/3764119/pexels-photo-3764119.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
];

const About = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center page-transition">
            <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
              Our Story
            </span>
            <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-6">
              Beauty with a
              <span className="block gradient-text">Conscience</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              At LuxeNails, we believe that beautiful nails shouldn't come at a cost to our planet or its inhabitants.
              We're redefining luxury beauty with ethics at its core.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="card p-10 bg-gradient-to-br from-primary-50 to-white hover:shadow-xl">
              <div className="w-16 h-16 rounded-2xl bg-primary-100 flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary-600" />
              </div>
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                To create luxurious, high-performance nail products that celebrate self-expression while upholding the highest ethical standards. We're committed to being 100% vegan, cruelty-free, and increasingly sustainable in everything we do.
              </p>
            </div>

            {/* Vision */}
            <div className="card p-10 bg-gradient-to-br from-secondary-50 to-white hover:shadow-xl">
              <div className="w-16 h-16 rounded-2xl bg-secondary-100 flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-secondary-600" />
              </div>
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                A world where beauty and responsibility go hand in hand. We envision a future where every beauty product is made with consciousness, where self-care doesn't cost the earth, and where everyone can express themselves freely and guiltlessly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary-600 font-medium">Our Journey</span>
              <h2 className="section-title mt-2 mb-6">From Passion to Purpose</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  LuxeNails was born from a simple frustration: why should beautiful nail polish require compromising on ethics? Our founder, Sophia Anderson, spent years as a beauty chemist watching the industry's practices and dreamed of something better.
                </p>
                <p>
                  In 2018, she took a leap of faith, leaving her corporate role to start LuxeNails from her kitchen. The mission was clear: create nail polishes that were as kind as they were beautiful.
                </p>
                <p>
                  Today, from our humble kitchen beginnings, we've grown into a global brand trusted by millions. But our commitment remains the same — every product is crafted with care, consciousness, and the belief that beauty should never compromise ethics.
                </p>
              </div>
              <Link to="/products" className="btn-primary mt-8 inline-flex">
                Discover Our Products
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/7860090/pexels-photo-7860090.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="LuxeNails Story"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-xl p-6 max-w-xs">
                <div className="text-4xl font-display font-bold text-primary-600 mb-1">50K+</div>
                <p className="text-gray-600">Happy customers worldwide</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary-600 font-medium">What We Stand For</span>
            <h2 className="section-title mt-2">Our Core Values</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl hover:bg-primary-50 transition-colors duration-300"
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                  <value.icon className="w-10 h-10 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary-400 font-medium">The Journey</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-2">Our Timeline</h2>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary-500 to-primary-700 hidden md:block" />
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className={`card-dark p-8 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                      <span className="text-primary-400 font-semibold text-lg">{item.year}</span>
                      <h3 className="text-xl font-semibold mt-2 mb-3">{item.title}</h3>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex w-12 h-12 bg-primary-600 rounded-full items-center justify-center shadow-lg shadow-primary-500/30 z-10">
                    <div className="w-4 h-4 bg-white rounded-full" />
                  </div>
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary-600 font-medium">The People Behind the Brand</span>
            <h2 className="section-title mt-2">Meet Our Team</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="card overflow-hidden group">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-primary-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
