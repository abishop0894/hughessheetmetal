"use client"
import React, { useEffect, useRef, useState, useCallback } from 'react';
import gsap from 'gsap';

interface SlideData {
  id: number;
  image: string;
  title: string;
  highlight: string;
  link: string;
  label: string;
}

interface SliderSettings {
  currentSlide: number;
  totalSlides: number;
  animating: boolean;
  autoPlay: boolean;
  autoPlaySpeed: number;
  transitionSpeed: number;
  ease: string;
  timeline: ReturnType<typeof gsap.timeline>;
  imageScale: ReturnType<typeof gsap.to> | null;
}

const PortfolioHome: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState<number>(1);
  const settingsRef = useRef<SliderSettings>({
    currentSlide: 1,
    totalSlides: 3,
    animating: false,
    autoPlay: true,
    autoPlaySpeed: 8,
    transitionSpeed: 2.75,
    ease: 'expo',
    timeline: gsap.timeline({}),
    imageScale: null,
  });

  const slides: SlideData[] = [
    {
      id: 1,
      image: "https://dbpadventures.kinsta.cloud/wp-content/uploads/2020/04/ngor-senegal-dronebillede.jpg",
      title: "New Ducts and VAVs",
      highlight: "Duct Work",
      link: "Like what you see?",
      label: "Duct Work"
    },
    {
      id: 2,
      image: "https://dbpadventures.kinsta.cloud/wp-content/uploads/2020/04/ngor-island-drone.jpg",
      title: "New HVAC System",
      highlight: "HVAC System",
      link: "Like what you see?",
      label: "HVAC System"
    },
    {
      id: 3,
      image: "https://dbpadventures.kinsta.cloud/wp-content/uploads/2020/04/strand-ngor-senegal.jpg",
      title: "Fabrication used for stadium",
      highlight: "Stadium Fabrication",
      link: "Like what you see?",
      label: "Stadium Fabrication"
    }
  ];

  const updateNav = useCallback((from: number, to: number) => {
    const settings = settingsRef.current;
    
    // Update previous nav item
    gsap.to(`.nav-timer-${from}`, settings.transitionSpeed, {
      width: 55,
      ease: settings.ease + '.inOut',
    });
    gsap.to(`.nav-label-${from}`, settings.transitionSpeed, {
      opacity: 0,
      ease: settings.ease + '.inOut',
    });
    
    // Update current nav item
    gsap.to(`.nav-timer-${to}`, settings.transitionSpeed, {
      width: 95,
      ease: settings.ease + '.inOut',
    });
    gsap.to(`.nav-label-${to}`, settings.transitionSpeed, {
      opacity: 1,
      ease: settings.ease + '.inOut',
    });
    
    // Reset progress bar
    gsap.to(`.timer-progress-${from}`, settings.transitionSpeed, {
      x: '100%',
      ease: settings.ease + '.inOut'
    });
  }, []);

  const slideAnimation = useCallback((from: number, to: number, dir: 'next' | 'prev') => {
    const settings = settingsRef.current;
    settings.animating = true;

    updateNav(from, to);

    const fromSlide = `.slide-${from}`;
    const toSlide = `.slide-${to}`;

    settings.timeline.clear();
    settings.timeline.play(0);

    settings.timeline
      .set(toSlide, { display: 'block' })
      .to(`${fromSlide} .slide-content > *`, (settings.transitionSpeed / 100) * 40, {
        y: -20,
        opacity: 0,
        ease: settings.ease + '.in',
        stagger: 0.1,
      }, 'slideAnimation')
      .fromTo(`${toSlide} .slide-content > *`, (settings.transitionSpeed / 100) * 40, {
        y: 20,
        opacity: 0,
      }, {
        y: 0,
        opacity: 1,
        ease: 'power3.out',
        stagger: 0.1,
      }, '>0.5')
      .fromTo(`${fromSlide} .slide-image`, settings.transitionSpeed, {
        display: 'block',
        x: '0%',
      }, {
        x: dir === 'next' ? '-100%' : '100%',
        ease: settings.ease + '.inOut',
      }, 'slideAnimation')
      .fromTo(`${fromSlide} .slide-image img`, settings.transitionSpeed, {
        transformOrigin: 'center',
        x: '0%',
      }, {
        x: dir === 'next' ? '50%' : '-50%',
        ease: settings.ease + '.inOut',
      }, 'slideAnimation')
      .fromTo(`${toSlide} .slide-image img`, settings.transitionSpeed, {
        transformOrigin: 'center',
        x: dir === 'next' ? '-50%' : '50%',
      }, {
        x: '0%',
        ease: settings.ease + '.inOut',
      }, 'slideAnimation')
      .fromTo(`${toSlide} .slide-image`, settings.transitionSpeed, {
        display: 'block',
        transformOrigin: 'right center',
        x: dir === 'next' ? '100%' : '-100%',
      }, {
        x: '0%',
        ease: settings.ease + '.inOut',
        onComplete: () => {
          settings.animating = false;
          gsap.set(fromSlide, { display: 'none' });
          if (settings.imageScale) {
            settings.imageScale.kill();
          }
          gsap.set(`${fromSlide} .slide-image img`, { scale: 1 });
          settings.imageScale = gsap.to(`${toSlide} .slide-image img`, 15, {
            scale: 1.1,
            ease: "sine.inOut",
            yoyo: true,
            yoyoEase: true,
            repeat: -1
          });
        }
      }, 'slideAnimation');

    if (settings.autoPlay) {
      const progressEl = `.timer-progress-${to}`;
      settings.timeline.fromTo(progressEl, settings.autoPlaySpeed - settings.transitionSpeed, {
        x: '-100%'
      }, {
        x: 0,
        ease: 'none',
        onComplete: () => {
          changeSlide('next');
        }
      }, '>');
    }
  }, [updateNav]);

  const changeSlide = useCallback((dir: 'next' | 'prev') => {
    const settings = settingsRef.current;
    if (settings.animating) return;
    
    const animateFrom = settings.currentSlide;
    if (dir === 'next') {
      if (settings.currentSlide >= settings.totalSlides) {
        settings.currentSlide = 1;
      } else {
        settings.currentSlide++;
      }
    } else {
      if (settings.currentSlide <= 1) {
        settings.currentSlide = settings.totalSlides;
      } else {
        settings.currentSlide--;
      }
    }
    
    setCurrentSlide(settings.currentSlide);
    slideAnimation(animateFrom, settings.currentSlide, dir);
  }, [slideAnimation]);

  const jumpToSlide = useCallback((slideNum: number) => {
    const settings = settingsRef.current;
    if (settings.animating || slideNum === settings.currentSlide) return;
    
    const animateFrom = settings.currentSlide;
    settings.currentSlide = slideNum;
    setCurrentSlide(slideNum);
    
    const dir = slideNum > animateFrom ? 'next' : 'prev';
    slideAnimation(animateFrom, settings.currentSlide, dir);
  }, [slideAnimation]);

  const autoPlay = useCallback(() => {
    const settings = settingsRef.current;
    settings.autoPlay = true;

    const progressEl = `.timer-progress-${settings.currentSlide}`;
    settings.timeline.fromTo(progressEl, settings.autoPlaySpeed - settings.transitionSpeed, {
      x: '-100%'
    }, {
      x: 0,
      ease: 'none',
      delay: 0.5,
      onComplete: () => {
        changeSlide('next');
      }
    });
  }, [changeSlide]);

  const stopAutoPlay = useCallback(() => {
    const settings = settingsRef.current;
    if (settings.autoPlay) {
      settings.timeline.progress(1);
    }
    settings.autoPlay = false;
  }, []);

  useEffect(() => {
    const settings = settingsRef.current;
    settings.totalSlides = slides.length;
    
    // Initialize image scaling animation
    settings.imageScale = gsap.to('.slide-1 .slide-image img', 15, {
      scale: 1.1,
      ease: "sine.inOut",
      yoyo: true,
      yoyoEase: true,
      repeat: -1
    });

    if (settings.autoPlay) {
      autoPlay();
    }

    return () => {
      if (settings.imageScale) {
        settings.imageScale.kill();
      }
      settings.timeline.kill();
    };
  }, [autoPlay]);

  return (
    <div 
      ref={sliderRef}
      className="relative w-full min-h-screen bg-slate-800 text-white flex items-start overflow-hidden"
    >
      {/* UI Controls */}
      <div className="relative z-10 max-w-6xl min-w-[60%] mx-auto mt-[10%] flex justify-between">
        {/* Navigation Points */}
        <div className="flex flex-col">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className="flex items-center mb-2.5 font-black cursor-pointer"
              onClick={() => {
                stopAutoPlay();
                jumpToSlide(index + 1);
              }}
            >
              <span className="text-white">
                {String(slide.id).padStart(2, '0')}
              </span>
              <div 
                className={`nav-timer-${slide.id} relative mx-1.5 h-px bg-white/50 overflow-hidden transition-all duration-1000 ${
                  currentSlide === slide.id ? 'w-24' : 'w-14'
                }`}
              >
                <div 
                  className={`timer-progress-${slide.id} absolute top-0 left-0 bg-white h-px w-full transform -translate-x-full`}
                />
              </div>
              <span 
                className={`nav-label-${slide.id} font-normal transition-opacity duration-1000 ${
                  currentSlide === slide.id ? 'opacity-100' : 'opacity-0'
                }`}
              >
                {slide.label}
              </span>
            </div>
          ))}
        </div>
        
        {/* Arrow Controls */}
        <div className="flex">
          <button
            className="w-12 h-12 rounded-full border border-white opacity-50 bg-white ml-5 flex justify-center items-center text-black hover:opacity-75 transition-opacity"
            onClick={() => {
              stopAutoPlay();
              changeSlide('prev');
            }}
          >
            &lt;
          </button>
          <button
            className="w-12 h-12 rounded-full border border-white opacity-50 bg-white ml-5 flex justify-center items-center text-black hover:opacity-75 transition-opacity"
            onClick={() => {
              stopAutoPlay();
              changeSlide('next');
            }}
          >
            &gt;
          </button>
        </div>
      </div>

      {/* Slides */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide-${slide.id} absolute inset-0 w-full h-full ${
              currentSlide === slide.id ? 'block' : 'hidden'
            }`}
            data-slide={slide.id}
          >
            {/* Background Image */}
            <div className="slide-image absolute inset-0 w-full h-full overflow-hidden">
              <img
                src={slide.image}
                alt=""
                className="absolute inset-0 w-full h-full object-cover opacity-50"
              />
            </div>
            
            {/* Content Container */}
            <div className="absolute inset-0 w-full h-full flex items-center justify-center">
              <div className="slide-content pt-25 max-w-6xl min-w-[60%] font-sans">
                <div className="text-5xl max-w-2xl leading-tight font-semibold">
                  {slide.title} <span className="text-yellow-400">{slide.highlight}</span>
                </div>
                <div className="mt-6 text-lg">
                  {slide.link}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default PortfolioHome