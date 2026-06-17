import { useState } from 'react';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';

const galleryImages = [
  {
    id: 1,
    src: 'https://images.pexels.com/photos/7860090/pexels-photo-7860090.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Rose Petal Collection',
    category: 'Classic',
    description: 'Beautiful soft pink manicure showing our bestselling shade.',
  },
  {
    id: 2,
    src: 'https://images.pexels.com/photos/268257/pexels-photo-268257.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Deep Elegance',
    category: 'Luxury',
    description: 'Showcasing our luxurious deep burgundy polish.',
  },
  {
    id: 3,
    src: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'In the Studio',
    category: 'Behind the Scenes',
    description: 'A peek into our creative process and nail art sessions.',
  },
  {
    id: 4,
    src: 'https://images.pexels.com/photos/3764119/pexels-photo-3764119.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Color Consultation',
    category: 'Lifestyle',
    description: 'Finding your perfect shade has never been easier.',
  },
  {
    id: 5,
    src: 'https://images.pexels.com/photos/3765323/pexels-photo-3765323.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Natural Beauty',
    category: 'Classic',
    description: 'French Nude look for everyday elegance.',
  },
  {
    id: 6,
    src: 'https://images.pexels.com/photos/3993451/pexels-photo-3993451.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Summer Vibes',
    category: 'Limited Edition',
    description: 'Bright coral for the perfect summer touch.',
  },
  {
    id: 7,
    src: 'https://images.pexels.com/photos/3764119/pexels-photo-3764119.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Artistic Expression',
    category: 'Nail Art',
    description: 'Creative nail art featuring our signature shades.',
  },
  {
    id: 8,
    src: 'https://images.pexels.com/photos/4001296/pexels-photo-4001296.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Minimalist Chic',
    category: 'Luxury',
    description: 'Clean, minimalist nail design for modern elegance.',
  },
  {
    id: 9,
    src: 'https://images.pexels.com/photos/3765323/pexels-photo-3765323.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Galaxy Collection',
    category: 'Limited Edition',
    description: 'Holographic magic in our limited edition galaxy line.',
  },
  {
    id: 10,
    src: 'https://images.pexels.com/photos/3993446/pexels-photo-3993446.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Bridal Beauty',
    category: 'Classic',
    description: 'The perfect bridal nail for your special day.',
  },
  {
    id: 11,
    src: 'https://images.pexels.com/photos/268257/pexels-photo-268257.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Fall Palette',
    category: 'Luxury',
    description: 'Rich autumn tones from our fall collection.',
  },
  {
    id: 12,
    src: 'https://images.pexels.com/photos/3993442/pexels-photo-3993442.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Tropical Dreams',
    category: 'Limited Edition',
    description: 'Vibrant colors inspired by tropical sunsets.',
  },
];

const categories = ['All', 'Classic', 'Luxury', 'Limited Edition', 'Nail Art', 'Lifestyle'];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredImages = activeCategory === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

  const openLightbox = (image: typeof galleryImages[0], index: number) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    const newIndex = direction === 'prev'
      ? (currentIndex - 1 + filteredImages.length) % filteredImages.length
      : (currentIndex + 1) % filteredImages.length;
    setCurrentIndex(newIndex);
    setSelectedImage(filteredImages[newIndex]);
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center page-transition">
            <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
              Get Inspired
            </span>
            <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-6">
              Our Gallery
              <span className="block gradient-text">of Beautiful Nails</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore stunning nail art and manicure inspirations featuring our premium collections.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="sticky top-16 z-40 py-6 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === category
                    ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/30'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="group relative aspect-[4/5] overflow-hidden rounded-2xl cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
                onClick={() => openLightbox(image, index)}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs text-white font-medium">
                      {image.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-1">{image.title}</h3>
                  <p className="text-gray-300 text-sm line-clamp-2">{image.description}</p>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <ZoomIn className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
          onClick={closeLightbox}
        >
          {/* Navigation Arrows */}
          <button
            onClick={(e) => { e.stopPropagation(); navigateImage('prev'); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-10"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); navigateImage('next'); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-10"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          <div
            className="relative max-w-5xl w-full animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white/80 hover:text-white transition-colors"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Image */}
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="w-full max-h-[80vh] object-contain rounded-lg"
            />

            {/* Image Info */}
            <div className="mt-6 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm text-white">
                  {selectedImage.category}
                </span>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">{selectedImage.title}</h3>
              <p className="text-gray-400">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* Instagram CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-display font-bold text-white mb-6">
            Share Your Style
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Tag us @LuxeNails on Instagram for a chance to be featured in our gallery!
          </p>
          <a
            href="#"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            Follow Us on Instagram
          </a>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
