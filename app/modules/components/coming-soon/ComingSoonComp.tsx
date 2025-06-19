"use client"
import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface CarouselImage {
  id: number;
  src: string;
  alt: string;
}

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ComingSoonPage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const carouselRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);

  const carouselImages: CarouselImage[] = [
    {
      id: 1,
      src: 'https://hughessheetmetal.s3.us-east-1.amazonaws.com/coming-soon/191120-HVAC-BP-03.jpg',
      alt: 'Space technology'
    },
    {
      id: 2,
      src: 'https://hughessheetmetal.s3.us-east-1.amazonaws.com/coming-soon/High_precision_CNC_gas_cutting_metal_sheet.webp',
      alt: 'Modern cityscape'
    },
    {
      id: 3,
      src: 'https://hughessheetmetal.s3.us-east-1.amazonaws.com/coming-soon/hvac-units-on-rooftop.jpg',
      alt: 'Digital innovation'
    },
    {
      id: 4,
      src: 'https://hughessheetmetal.s3.us-east-1.amazonaws.com/coming-soon/IMG_9842_1.jpg',
      alt: 'Future technology'
    },
  
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % carouselImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  useEffect(() => {
    const slides = slideRefs.current.filter(Boolean) as HTMLDivElement[];
    
    slides.forEach((slide, index) => {
      if (index === currentSlide) {
        gsap.to(slide, {
          opacity: 1,
          scale: 1.05,
          duration: 1.5,
          ease: 'power2.out'
        });
      } else {
        gsap.to(slide, {
          opacity: 0,
          scale: 1,
          duration: 1.5,
          ease: 'power2.out'
        });
      }
    });
  }, [currentSlide]);

  const setSlideRef = (el: HTMLDivElement | null, index: number) => {
    slideRefs.current[index] = el;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Reset form on success
      setFormData({ name: '', email: '', message: '' });
      setSubmitStatus('success');
    } catch (error: unknown) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = formData.name.trim() && formData.email.trim() && formData.message.trim();

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Background Carousel */}
      <div ref={carouselRef} className="absolute inset-0 w-full h-full">
        {carouselImages.map((image, index) => (
          <div
            key={image.id}
            ref={(el) => setSlideRef(el, index)}
            className="absolute inset-0 w-full h-full opacity-0"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        
        {/* Dimmed Overlay */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        <div className="max-w-7xl w-full mx-auto">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 items-center">
            
            {/* Left Side - Coming Soon Content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <div className="mb-6 sm:mb-8">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                  Something 
                  <span className="text-transparent m-2 bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                    Amazing
                  </span>
                  <br />
                  is Coming
                </h1>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Our website is under construction. Please check back soon for updates.
                </p>
              </div>

             
            
            </div>

            {/* Right Side - Contact Form */}
            <div className="w-full max-w-md mx-auto lg:mx-0">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl">
                <h2 className="text-2xl font-bold text-white mb-6 text-center">
                  Get in touch
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Message"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={!isFormValid || isSubmitting}
                    className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:from-gray-500 disabled:to-gray-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-transparent"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </div>
                    ) : (
                      'Notify Me'
                    )}
                  </button>

                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <div className="text-center text-green-400 text-sm">
                      ✅ Thank you! We&apos;ll notify you when we launch.
                    </div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <div className="text-center text-red-400 text-sm">
                      ❌ Something went wrong. Please try again.
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-1 sm:space-x-2">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white scale-125' 
                  : 'bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComingSoonPage;