"use client"
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

// Note: In a real project, you'd need to import and register ScrollTrigger
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// gsap.registerPlugin(ScrollTrigger);

interface ParallaxImage {
  id: number;
  src: string;
  alt: string;
  caption: string;
}

const PortfolioComponent: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const parallaxRefs = useRef<(HTMLDivElement | null)[]>([]);
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);
  const captionRefs = useRef<(HTMLSpanElement | null)[]>([]);

  const images: ParallaxImage[] = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1583144584182-1717fab24b1e?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
      alt: 'Vintage camera',
      caption: 'image #1'
    },
    
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1580637592264-9024a17b9bd8?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
      alt: 'Film photography',
      caption: 'image #2'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1547823065-4cbbb2d4d185?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
      alt: 'Photography equipment',
      caption: 'image #3'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1583144584182-1717fab24b1e?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
      alt: 'Classic camera',
      caption: 'image #4'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1571096892464-eee432a6f965?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
      alt: 'Dark photography',
      caption: 'image #5'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1552375769-21180344ce63?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
      alt: 'Professional camera',
      caption: 'image #6'
    }
  ];

  useEffect(() => {
    const parallaxElements = parallaxRefs.current.filter(Boolean) as HTMLDivElement[];
    const imageElements = imageRefs.current.filter(Boolean) as HTMLImageElement[];
    const captionElements = captionRefs.current.filter(Boolean) as HTMLSpanElement[];

    if (parallaxElements.length === 0) return;

    const animations: (gsap.core.Timeline | gsap.core.Tween)[] = [];

    // Image parallax animations
    parallaxElements.forEach((element, index) => {
      const image = imageElements[index];
      if (image) {
        const imageAnimation = gsap.fromTo(
          image,
          { y: '-50%' },
          {
            scrollTrigger: {
              trigger: element,
              start: 'top bottom',
              end: 'bottom top',
              markers: false,
              scrub: true,
            },
            y: '0%',
            ease: 'none'
          }
        );
        animations.push(imageAnimation);
      }
    });

    // Caption parallax animations
    parallaxElements.forEach((element, index) => {
      const caption = captionElements[index];
      if (caption) {
        const captionAnimation = gsap.fromTo(
          caption,
          { y: '30vh' },
          {
            scrollTrigger: {
              trigger: element,
              start: 'top bottom',
              end: 'bottom top',
              markers: false,
              scrub: true,
            },
            y: '-30vh',
            ease: 'none'
          }
        );
        animations.push(captionAnimation);
      }
    });

    // Cleanup function
    return () => {
      animations.forEach(animation => {
        if (animation && animation.kill) {
          animation.kill();
        }
      });
    };
  }, []);

  const setParallaxRef = (el: HTMLDivElement | null, index: number) => {
    parallaxRefs.current[index] = el;
  };

  const setImageRef = (el: HTMLImageElement | null, index: number) => {
    imageRefs.current[index] = el;
  };

  const setCaptionRef = (el: HTMLSpanElement | null, index: number) => {
    captionRefs.current[index] = el;
  };

  return (
    <div ref={containerRef} className="font-sans">
      {/* Introduction section */}
     

      {/* Parallax images */}
      {images.map((image, index) => (
        <div
          key={image.id}
          ref={(el) => setParallaxRef(el, index)}
          className="relative bg-gray-800 overflow-hidden m-2.5"
          style={{ height: 'calc(100vh - 20px)' }}
        >
          <img
            ref={(el) => setImageRef(el, index)}
            src={image.src}
            alt={image.alt}
            className="w-full object-cover"
            style={{ height: '150%' }}
          />
          <span
            ref={(el) => setCaptionRef(el, index)}
            className="absolute bg-white text-red-600 font-extrabold leading-none px-6 py-4"
            style={{
              top: 'calc(50vh - 3vw)',
              left: '5vw',
              fontSize: '4vw',
              padding: '1vw 1.5vw'
            }}
          >
            {image.caption}
          </span>
        </div>
      ))}

      {/* Closing section */}
      
    </div>
  );
};

export default PortfolioComponent;