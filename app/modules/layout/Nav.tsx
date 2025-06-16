"use client"
import React, { useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { navVariants, logoVariants, menuVariants, menuItemVariants } from '../../../lib/framer/NavAnimation'
import Hamburger from 'hamburger-react'
import Image from 'next/image'
interface NavProps {
  logo?: string
}

const Nav: React.FC<NavProps> = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

const logoLink = useMemo(() => {
  return "https://hughessheetmetal.s3.us-east-1.amazonaws.com/a58cd650-4dff-46f3-842e-a9bbdfebc811.png.png"
}, [])

  const menuItems = [
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Our Work", href: "/portfolio" },
    { label: "Contact", href: "/contact" },
    { label: "Careers", href: "/careers" }
  ]
//test for working branch
  return (
    <>
      <motion.nav
        initial="hidden"
        animate="visible"
        variants={navVariants}
        className="fixed top-0 left-0 w-full bg-black z-[150]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex items-center justify-between transition-all duration-100 ${isScrolled ? 'h-[90px]' : 'h-[110px]'}`}>
             <motion.div
              variants={logoVariants}
              initial="initial"
              animate={isScrolled ? "scrolled" : "initial"}
              className="flex items-center justify-center"
            >
              <Image 
                src={logoLink} 
                alt="logo" 
                width={1000} 
                height={1000} 
                className={`transition-all duration-100 ${isScrolled ? 'w-[200px] h-[60px]' : 'w-[200px] h-[61px]'}`} 
              />
            </motion.div>
            
            <Hamburger
              toggled={isOpen}
              toggle={setIsOpen}
              color="white"
              size={20}
            />
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed top-0 right-0 w-3/4 md:w-1/2 h-full bg-[#171719] z-[100] pt-32"
          >
            <div className="px-8">
              <ul className="space-y-8">
                {menuItems.map((item, index) => (
                  <motion.li
                    key={item.label}
                    custom={index}
                    variants={menuItemVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                  >
                    <a
                      href={item.href}
                      className="text-white text-6xl font-light hover:text-green-300 transition-colors duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Nav 