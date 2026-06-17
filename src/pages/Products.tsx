import { useState } from 'react';
import { Filter, ShoppingCart, Heart, Search, Check } from 'lucide-react';

const collections = [
  { id: 'all', name: 'All Products' },
  { id: 'classic', name: 'Classic Collection' },
  { id: 'luxury', name: 'Luxury Line' },
  { id: 'limited', name: 'Limited Editions' },
  { id: 'care', name: 'Nail Care' },
];

const products = [
  {
    id: 1,
    name: 'Rose Petal',
    shade: 'Soft Pink',
    price: 24,
    collection: 'classic',
    image: '/assets/images/img1.png',
    description: 'A delicate, soft pink perfect for everyday elegance.',
    features: ['Long-lasting', 'Chip-resistant', 'Quick-dry formula'],
  },
  {
    id: 2,
    name: 'Midnight Velvet',
    shade: 'Deep Burgundy',
    price: 26,
    collection: 'luxury',
    image: '/assets/images/img2.png',
    description: 'Rich burgundy with sophisticated matte finish.',
    features: ['Gel-like finish', '15+ day wear', 'Premium pigment'],
  },
  {
    id: 3,
    name: 'Coral Sunset',
    shade: 'Vibrant Coral',
    price: 24,
    collection: 'classic',
    image: '/assets/images/img3.png',
    description: 'Eye-catching coral for stunning summer looks.',
    features: ['UV-protected', 'High shine', 'Easy application'],
  },
  {
    id: 4,
    name: 'French Nude',
    shade: 'Natural Beige',
    price: 26,
    collection: 'luxury',
    image: '/assets/images/img4.png',
    description: 'Sophisticated nude with sheer perfection.',
    features: ['Natural finish', 'Strengthens nails', 'Smooth coverage'],
  },
  {
    id: 5,
    name: 'Emerald Dream',
    shade: 'Deep Green',
    price: 28,
    collection: 'limited',
    image: '/assets/images/img1.png',
    description: 'Limited edition deep emerald with holographic shimmer.',
    features: ['Holographic finish', 'Limited edition', 'Collector item'],
  },
  {
    id: 6,
    name: 'Ocean Waves',
    shade: 'Teal Blue',
    price: 24,
    collection: 'classic',
    image: '/assets/images/img2.png',
    description: 'Beautiful teal that captures the essence of the sea.',
    features: ['Marine-inspired', 'High pigment', 'Even brush strokes'],
  },
  {
    id: 7,
    name: 'Mauve Magic',
    shade: 'Dusty Lilac',
    price: 26,
    collection: 'luxury',
    image: '/assets/images/img3.png',
    description: 'Elegant dusty lilac with a touch of romance.',
    features: ['Creamy texture', 'Romantic shade', 'Long-wear'],
  },
  {
    id: 8,
    name: 'Golden Hour',
    shade: 'Warm Gold',
    price: 28,
    collection: 'limited',
    image: '/assets/images/img4.png',
    description: 'Luxurious gold with metallic flakes for glamour.',
    features: ['Metallic finish', 'Real gold flakes', 'Statement shade'],
  },
  {
    id: 9,
    name: 'Cuticle Oil Set',
    shade: 'Treatment',
    price: 32,
    collection: 'care',
    image: '/assets/images/img1.png',
    description: 'Nourishing cuticle oil in 3 delightful scents.',
    features: ['Jojoba oil', 'Vitamin E', 'Natural ingredients'],
  },
  {
    id: 10,
    name: 'Base & Top Coat Duo',
    shade: 'Treatment',
    price: 28,
    collection: 'care',
    image: '/assets/images/img2.png',
    description: 'Essential duo for long-lasting manicures.',
    features: ['Strengthens nails', 'High gloss', 'Protects color'],
  },
  {
    id: 11,
    name: 'Nail Strengthener',
    shade: 'Treatment',
    price: 30,
    collection: 'care',
    image: '/assets/images/img3.png',
    description: 'Intensive treatment for stronger, healthier nails.',
    features: ['Protein formula', 'Repairs damage', 'Visible results'],
  },
  {
    id: 12,
    name: 'Midnight Galaxy',
    shade: 'Black with Glitter',
    price: 28,
    collection: 'limited',
    image: '/assets/images/img4.png',
    description: 'Jewel-toned black with scattered holographic glitter.',
    features: ['Galaxy effect', 'Multi-dimensional', 'Ultra-sparkle'],
  },
];

const Products = () => {
  const [activeCollection, setActiveCollection] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);

  const filteredProducts = products.filter((product) => {
    const matchesCollection = activeCollection === 'all' || product.collection === activeCollection;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.shade.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCollection && matchesSearch;
  });

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center page-transition">
            <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
              Premium Collection
            </span>
            <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-6">
              Discover Your
              <span className="block gradient-text">Perfect Shade</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our curated collection of vegan, cruelty-free nail polishes designed to make you shine.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white sticky top-16 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Search */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search shades..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 transition-all"
              />
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
              <Filter className="w-5 h-5 text-gray-400 flex-shrink-0" />
              {collections.map((collection) => (
                <button
                  key={collection.id}
                  onClick={() => setActiveCollection(collection.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                    activeCollection === collection.id
                      ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/30'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {collection.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex items-center justify-between">
            <p className="text-gray-600">
              Showing <span className="font-semibold text-gray-900">{filteredProducts.length}</span> products
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="card group overflow-hidden cursor-pointer"
                onClick={() => setSelectedProduct(product)}
              >
                <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {product.collection === 'limited' && (
                    <div className="absolute top-4 left-4 px-3 py-1 bg-accent-500 text-white text-xs font-semibold rounded-full">
                      Limited Edition
                    </div>
                  )}
                  <div className="absolute top-4 right-4">
                    <button
                      className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary-100 hover:text-primary-600"
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    >
                      <Heart className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      className="w-full py-2 bg-white text-gray-900 font-medium rounded-full flex items-center justify-center gap-2 hover:bg-primary-50 transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    >
                      <ShoppingCart className="w-4 h-4" />
                      Add to Cart
                    </button>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-900">{product.name}</h3>
                    <span className="font-bold text-primary-600">${product.price}</span>
                  </div>
                  <p className="text-sm text-gray-500 mb-3">{product.shade}</p>
                  <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No products found matching your search.</p>
            </div>
          )}
        </div>
      </section>

      {/* Product Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-auto animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="grid md:grid-cols-2 gap-0">
              <div className="aspect-square md:aspect-auto bg-gray-100">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full">
                    {collections.find(c => c.id === selectedProduct.collection)?.name}
                  </span>
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    ✕
                  </button>
                </div>
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-2">
                  {selectedProduct.name}
                </h2>
                <p className="text-gray-500 mb-4">{selectedProduct.shade}</p>
                <p className="text-gray-600 mb-6 leading-relaxed">{selectedProduct.description}</p>
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Features</h4>
                  <ul className="space-y-2">
                    {selectedProduct.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-600">
                        <Check className="w-5 h-5 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-auto">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-bold text-gray-900">${selectedProduct.price}</span>
                    <span className="text-green-600 text-sm font-medium">Free shipping over $50</span>
                  </div>
                  <button className="btn-primary w-full text-lg py-4">
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Why LuxeNails?</h2>
            <p className="section-subtitle">
              Every product is crafted with care, consciousness, and quality at its core.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                <Check className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">100% Vegan</h3>
              <p className="text-gray-600">All products are certified vegan with no animal-derived ingredients.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center">
                <Check className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Cruelty-Free</h3>
              <p className="text-gray-600">Never tested on animals. We're Leaping Bunny certified.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary-100 flex items-center justify-center">
                <Check className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Long-Lasting</h3>
              <p className="text-gray-600">Our chip-resistant formula lasts up to 14 days.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
