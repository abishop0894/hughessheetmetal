import { Variants } from 'framer-motion'







/*
{{
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
*/



export const navVariants: Variants = {
  hidden: { y: -30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 1.6,
      duration: 1.4,
      ease: [0.17, 0.55, 0.55, 1],
    },
  },
}
//scaleY changed
export const logoVariants: Variants = {
  initial: { scaleY: 1.2 },
  scrolled: { 
    scaleY: 1,
    transition: {
      delay: .1,
      duration: .4,
       ease: [0.17, 0.55, 0.55, 1]
    }
  }
}

//

export const menuVariants: Variants = {
  closed: { 
    x: "100%",
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: [0.17, 0.55, 0.55, 1]
    }
  },
  open: { 
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: [0.17, 0.55, 0.55, 1]
    }
  }
}

export const menuItemVariants: Variants = {
  closed: { 
    x: 200,
    opacity: 0
  },
  open: (i: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.2,
      ease: "easeOut"
    }
  })
} 