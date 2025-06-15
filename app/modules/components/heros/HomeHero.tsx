"use client"
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

interface HeroBottomBarProps {
  backgroundImages?: string[]
  backgroundImg?: string
  bottomBar?: string
  bottomBarBg?: string
  bottomBarText?: string
  arrowColor?: string
  home?: boolean
  autoPlay?: boolean
  interval?: number
}

const HeroBottomBar: React.FC<HeroBottomBarProps> = ({
  backgroundImages = [
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80",
    "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80",
    "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80"
  ],
  backgroundImg,
  bottomBar = "Expert Services",
  bottomBarBg = "black",
  bottomBarText = "white",
  arrowColor = "white",
  home = false,
  autoPlay = true,
  interval = 6000
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const isCarousel = bottomBar === "Expert Services" && !backgroundImg

  // Animation variants
 



  // Carousel functionality
  useEffect(() => {
    if (!isCarousel || !autoPlay) return

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      )
    }, interval)

    return () => clearInterval(timer)
  }, [isCarousel, autoPlay, interval, backgroundImages.length])

  // Scroll function
  const scroll = () => {
    window.scrollTo({
      top: 620,
      left: 0,
      behavior: 'smooth'
    })
  }

  // Get Tailwind classes for colors
  const getBackgroundClass = (color: string) => {
    const colorMap: { [key: string]: string } = {
      'black': 'bg-black',
      'white': 'bg-white', 
      'gray': 'bg-gray-800',
      'blue': 'bg-blue-600',
      'red': 'bg-red-600',
      'green': 'bg-green-600',
      'yellow': 'bg-yellow-600',
      'purple': 'bg-purple-600',
      'pink': 'bg-pink-600',
      'indigo': 'bg-indigo-600'
    }
    return colorMap[color] || 'bg-black/80'
  }

  const getTextClass = (color: string) => {
    const colorMap: { [key: string]: string } = {
      'white': 'text-white',
      'black': 'text-black',
      'gray': 'text-gray-800',
      'blue': 'text-blue-600',
      'red': 'text-red-600',
      'green': 'text-green-600',
      'yellow': 'text-yellow-600',
      'purple': 'text-purple-600',
      'pink': 'text-pink-600',
      'indigo': 'text-indigo-600'
    }
    return colorMap[color] || 'text-white'
  }

  const getArrowClass = (color: string) => {
    const colorMap: { [key: string]: string } = {
      'white': 'text-white',
      'black': 'text-black',
      'gray': 'text-gray-800',
      'blue': 'text-blue-600',
      'red': 'text-red-600',
      'green': 'text-green-600',
      'yellow': 'text-yellow-600',
      'purple': 'text-purple-600',
      'pink': 'text-pink-600',
      'indigo': 'text-indigo-600'
    }
    return colorMap[color] || 'text-white'
  }

  // Render carousel images
  const renderCarouselImages = () => {
    return backgroundImages.map((image, index) => (
      <div
        key={index}
        className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ${
          index === currentIndex ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ backgroundImage: `url(${image})` }}
      />
    ))
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
    hidden: { opacity: 0, scale: 1.7 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.4,
        ease: [0.17, 0.55, 0.55, 1],
      },
    },
  }}
      className="relative w-full h-[88vh] md:h-screen overflow-hidden"
    >
      {/* Background - Either Carousel or Single Image */}
      {isCarousel ? (
        <div className="absolute inset-0 w-full h-full">
          {renderCarouselImages()}
        </div>
      ) : (
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImg})` }}
        />
      )}

      {/* Home Text (Winter 2024) */}
      {home && (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { y: 20, opacity: 0 },
            visible: {
              y: 40,
              opacity: 1,
              transition: {
                delay: 0.5,
                duration: 0.8,
                ease: [0.6, 0.01, -0.05, 0.95]
              }
            }
          }}
          className="absolute bottom-24 left-8 z-40"
        >
          <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide drop-shadow-lg">
            WINTER 2024
          </h2>
        </motion.div>
      )}

      {/* Bottom Bar */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { y: 30, opacity: 0 },
          visible: {
            y: 0,
            opacity: 1,
            transition: {
              delay: 1.6,
              ease: [0.17, 0.55, 0.55, 1],
              duration: 1.4,
            },
          },
        }}
        className="absolute bottom-0 w-full z-50"
      >
        <div className={`flex items-center justify-between px-8 h-24 ${getBackgroundClass(bottomBarBg)}`}>
          <h4 className={`uppercase text-2xl md:text-3xl lg:text-4xl font-bold tracking-wide ${getTextClass(bottomBarText)}`}>
            {bottomBar}
          </h4>

          <ChevronDownIcon
            onClick={scroll}
            className={`w-11 h-11 cursor-pointer hover:scale-110 transition-transform duration-200 ${getArrowClass(arrowColor)}`}
          />
        </div>
      </motion.div>
    </motion.div>
  )
}

export default HeroBottomBar