import React, { useState } from 'react';
import { Eye, X, Sparkles, Image as ImageIcon } from 'lucide-react';
import { GalleryItem } from '../types.ts';

export const CelebrationGallery: React.FC = () => {
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 'item-1',
      title: 'Grand Raas Garba Night',
      category: 'Celebration Arena',
      src: '/src/assets/images/hero_garba_celebration_1792212739928.jpg',
      alt: 'Celebration of Garba Night with authentic dancers and golden lighting',
      aspect: 'landscape',
    },
    {
      id: 'item-2',
      title: 'Dandiya & Marigold Offering',
      category: 'Festive Artifacts',
      src: '/src/assets/images/about_garba_spirit_1792212742524.jpg',
      alt: 'Decorated wooden and brass dandiya sticks crossed on marigolds with glowing diyas',
      aspect: 'square',
    },
    {
      id: 'item-3',
      title: 'Traditional Mirror-Work Attire',
      category: 'Festive Couture',
      src: '/src/assets/images/dresscode_girls_lehenga_1792212742810.jpg',
      alt: 'Vibrant Gujarati multicoloured traditional lehenga choli with mirror work',
      aspect: 'portrait',
    },
    {
      id: 'item-4',
      title: 'Royal Blue Kurta Ensemble',
      category: 'Gentlemen Attire',
      src: '/src/assets/images/dresscode_boys_kurta_1792212742929.jpg',
      alt: 'Regal royal blue traditional silk kurta with gold embroidery',
      aspect: 'portrait',
    },
    {
      id: 'item-5',
      title: 'Synchronized Garba Circles',
      category: 'Dance Energy',
      src: '/src/assets/images/gallery_garba_circle_1792212743563.jpg',
      alt: 'Students performing traditional Garba in synchronized circle with festoon lights',
      aspect: 'landscape',
    },
  ];

  return (
    <section id="gallery" className="relative py-20 sm:py-28 bg-[#160923] border-t border-[#D9AD58]/15 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-px w-6 bg-[#D9AD58]" />
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#D9AD58]">
              VISUAL REPERTOIRE
            </span>
            <span className="h-px w-6 bg-[#D9AD58]" />
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#FFF6E8]">
            CELEBRATION GALLERY
          </h2>

          <p className="mt-3 text-sm sm:text-base text-[#FFF6E8]/70 font-light">
            A visual curation celebrating the colours, costumes, decor, and jubilant rhythm of traditional Navratri festivities.
          </p>

          {/* Mandatory Transparency Disclaimer */}
          <div className="mt-4 inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#371451]/50 border border-[#D9AD58]/20 text-[11px] text-[#D9AD58]">
            <Sparkles className="w-3.5 h-3.5 shrink-0" />
            <span>Representative festival visual references celebrating the spirit of Navratri.</span>
          </div>
        </div>

        {/* Dynamic Masonry-Style Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Main Large Showcase Feature */}
          <div
            onClick={() => setActiveItem(galleryItems[0])}
            className="sm:col-span-2 lg:col-span-2 group relative rounded-2xl overflow-hidden cursor-pointer border border-[#D9AD58]/25 festive-glass h-[320px] sm:h-[400px]"
          >
            <img
              src={galleryItems[0].src}
              alt={galleryItems[0].alt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#160923] via-[#160923]/30 to-transparent opacity-85 group-hover:opacity-75 transition-opacity" />

            <div className="absolute inset-0 p-6 flex flex-col justify-between">
              <span className="self-start px-3 py-1 rounded-full bg-[#160923]/80 backdrop-blur-md text-[10px] font-bold tracking-widest uppercase text-[#D9AD58] border border-[#D9AD58]/30">
                {galleryItems[0].category}
              </span>
              <div>
                <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#FFF6E8] group-hover:text-[#D9AD58] transition-colors">
                  {galleryItems[0].title}
                </h3>
                <p className="text-xs text-[#FFF6E8]/70 mt-1 flex items-center gap-1.5">
                  <Eye className="w-3.5 h-3.5 text-[#D9AD58]" />
                  <span>Click to view full image</span>
                </p>
              </div>
            </div>
          </div>

          {/* Item 2: Dandiya still-life */}
          <div
            onClick={() => setActiveItem(galleryItems[1])}
            className="group relative rounded-2xl overflow-hidden cursor-pointer border border-[#D9AD58]/25 festive-glass h-[320px] sm:h-[400px]"
          >
            <img
              src={galleryItems[1].src}
              alt={galleryItems[1].alt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#160923] via-[#160923]/30 to-transparent opacity-85 group-hover:opacity-75 transition-opacity" />

            <div className="absolute inset-0 p-6 flex flex-col justify-between">
              <span className="self-start px-3 py-1 rounded-full bg-[#160923]/80 backdrop-blur-md text-[10px] font-bold tracking-widest uppercase text-[#FF9933] border border-[#FF9933]/30">
                {galleryItems[1].category}
              </span>
              <div>
                <h3 className="font-cinzel text-lg font-bold text-[#FFF6E8] group-hover:text-[#D9AD58] transition-colors">
                  {galleryItems[1].title}
                </h3>
                <p className="text-xs text-[#FFF6E8]/70 mt-1 flex items-center gap-1.5">
                  <Eye className="w-3.5 h-3.5 text-[#D9AD58]" />
                  <span>Click to view full image</span>
                </p>
              </div>
            </div>
          </div>

          {/* Item 3: Girls Lehenga Portrait */}
          <div
            onClick={() => setActiveItem(galleryItems[2])}
            className="group relative rounded-2xl overflow-hidden cursor-pointer border border-[#D9AD58]/25 festive-glass h-[340px] sm:h-[380px]"
          >
            <img
              src={galleryItems[2].src}
              alt={galleryItems[2].alt}
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#160923] via-[#160923]/30 to-transparent opacity-85 group-hover:opacity-75 transition-opacity" />

            <div className="absolute inset-0 p-6 flex flex-col justify-between">
              <span className="self-start px-3 py-1 rounded-full bg-[#160923]/80 backdrop-blur-md text-[10px] font-bold tracking-widest uppercase text-[#C02D91] border border-[#C02D91]/30">
                {galleryItems[2].category}
              </span>
              <div>
                <h3 className="font-cinzel text-lg font-bold text-[#FFF6E8] group-hover:text-[#D9AD58] transition-colors">
                  {galleryItems[2].title}
                </h3>
                <p className="text-xs text-[#FFF6E8]/70 mt-1 flex items-center gap-1.5">
                  <Eye className="w-3.5 h-3.5 text-[#D9AD58]" />
                  <span>Click to view</span>
                </p>
              </div>
            </div>
          </div>

          {/* Item 4: Boys Kurta Portrait */}
          <div
            onClick={() => setActiveItem(galleryItems[3])}
            className="group relative rounded-2xl overflow-hidden cursor-pointer border border-[#D9AD58]/25 festive-glass h-[340px] sm:h-[380px]"
          >
            <img
              src={galleryItems[3].src}
              alt={galleryItems[3].alt}
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#160923] via-[#160923]/30 to-transparent opacity-85 group-hover:opacity-75 transition-opacity" />

            <div className="absolute inset-0 p-6 flex flex-col justify-between">
              <span className="self-start px-3 py-1 rounded-full bg-[#160923]/80 backdrop-blur-md text-[10px] font-bold tracking-widest uppercase text-blue-400 border border-blue-400/30">
                {galleryItems[3].category}
              </span>
              <div>
                <h3 className="font-cinzel text-lg font-bold text-[#FFF6E8] group-hover:text-[#D9AD58] transition-colors">
                  {galleryItems[3].title}
                </h3>
                <p className="text-xs text-[#FFF6E8]/70 mt-1 flex items-center gap-1.5">
                  <Eye className="w-3.5 h-3.5 text-[#D9AD58]" />
                  <span>Click to view</span>
                </p>
              </div>
            </div>
          </div>

          {/* Item 5: Garba Circle Dance */}
          <div
            onClick={() => setActiveItem(galleryItems[4])}
            className="group relative rounded-2xl overflow-hidden cursor-pointer border border-[#D9AD58]/25 festive-glass h-[340px] sm:h-[380px]"
          >
            <img
              src={galleryItems[4].src}
              alt={galleryItems[4].alt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#160923] via-[#160923]/30 to-transparent opacity-85 group-hover:opacity-75 transition-opacity" />

            <div className="absolute inset-0 p-6 flex flex-col justify-between">
              <span className="self-start px-3 py-1 rounded-full bg-[#160923]/80 backdrop-blur-md text-[10px] font-bold tracking-widest uppercase text-[#FF9933] border border-[#FF9933]/30">
                {galleryItems[4].category}
              </span>
              <div>
                <h3 className="font-cinzel text-lg font-bold text-[#FFF6E8] group-hover:text-[#D9AD58] transition-colors">
                  {galleryItems[4].title}
                </h3>
                <p className="text-xs text-[#FFF6E8]/70 mt-1 flex items-center gap-1.5">
                  <Eye className="w-3.5 h-3.5 text-[#D9AD58]" />
                  <span>Click to view</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-[#160923]/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveItem(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] bg-[#371451]/70 border border-[#D9AD58]/40 rounded-2xl overflow-hidden p-2 sm:p-4 shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 px-2">
              <div>
                <span className="text-[10px] font-semibold tracking-widest uppercase text-[#D9AD58]">
                  {activeItem.category}
                </span>
                <h3 className="font-cinzel text-lg sm:text-xl font-bold text-[#FFF6E8]">
                  {activeItem.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveItem(null)}
                className="p-2 rounded-full text-[#FFF6E8]/70 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="relative flex-1 overflow-hidden rounded-xl bg-black/40 flex items-center justify-center">
              <img
                src={activeItem.src}
                alt={activeItem.alt}
                className="max-h-[70vh] w-auto max-w-full object-contain mx-auto"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
