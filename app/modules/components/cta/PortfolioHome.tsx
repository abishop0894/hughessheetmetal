"use client"
import React, { useState } from 'react'
import { ChevronRightIcon, ChevronLeftIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'

interface Technology {
  name: string
  src: string
}

interface Project {
  id: number
  companyLogo: string
  title: string
  description: string
  technologies: Technology[]
  livePreviewHref: string
  caseStudyHref: string
}

interface PortfolioCarouselProps {
  tagline?: string
  heading?: string
  description?: string
  viewProjectsText?: string
  viewProjectsHref?: string
  viewTestimonialsText?: string
  viewTestimonialsHref?: string
  projects?: Project[][]
}

const PortfolioCarousel: React.FC<PortfolioCarouselProps> = ({
  tagline = "Trusted Worldwide",
  heading = "Trusted by over 100 companies and 10,000+ freelancers",
  description = "Our rigorous security and compliance standards are at the heart of all we do. We work tirelessly to protect you and your customers.",
  viewProjectsText = "View all projects",
  viewProjectsHref = "#",
  viewTestimonialsText = "View all testimonials", 
  viewTestimonialsHref = "#",
  projects = [
    [
      {
        id: 1,
        companyLogo: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/customers/ford.svg",
        title: "Official website",
        description: "Flowbite helps you connect with friends, family and communities of people who share your interests.",
        technologies: [
          { name: "Flowbite", src: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/flowbite.svg" },
          { name: "Tailwind CSS", src: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/tailwind-css.svg" },
          { name: "HTML5", src: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/html5.svg" },
          { name: "CSS3", src: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/css-3.svg" }
        ],
        livePreviewHref: "#",
        caseStudyHref: "#"
      },
      {
        id: 2,
        companyLogo: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/customers/fedex.svg",
        title: "Management system",
        description: "Flowbite helps you connect with friends, family and communities of people who share your interests.",
        technologies: [
          { name: "TypeScript", src: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/typescript.svg" },
          { name: "Java", src: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/java.svg" },
          { name: "React", src: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/react.svg" },
          { name: "AWS", src: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/amazon-web-services.svg" }
        ],
        livePreviewHref: "#",
        caseStudyHref: "#"
      },
      {
        id: 3,
        companyLogo: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/customers/intel.svg",
        title: "Logo design",
        description: "Flowbite helps you connect with friends, family and communities of people who share your interests.",
        technologies: [
          { name: "Figma", src: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/figma.svg" },
          { name: "Adobe Illustrator", src: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/illustrator.svg" }
        ],
        livePreviewHref: "#",
        caseStudyHref: "#"
      }
    ],
    [
      {
        id: 4,
        companyLogo: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/customers/spotify.svg",
        title: "Music platform",
        description: "Streamlined music discovery and playlist management for millions of users worldwide.",
        technologies: [
          { name: "React", src: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/react.svg" },
          { name: "TypeScript", src: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/typescript.svg" },
          { name: "Node.js", src: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/html5.svg" }
        ],
        livePreviewHref: "#",
        caseStudyHref: "#"
      },
      {
        id: 5,
        companyLogo: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/customers/netflix.svg",
        title: "Streaming dashboard",
        description: "Content management and analytics dashboard for streaming platform administrators.",
        technologies: [
          { name: "React", src: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/react.svg" },
          { name: "AWS", src: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/amazon-web-services.svg" }
        ],
        livePreviewHref: "#",
        caseStudyHref: "#"
      }
    ]
  ]
}) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const linkItems = [
    { text: viewProjectsText, href: viewProjectsHref },
    { text: viewTestimonialsText, href: viewTestimonialsHref }
  ]

  const renderTechnology = (tech: Technology, index: number) => (
    <div key={index} className="p-1 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800" title={tech.name}>
      <img 
        className="object-contain w-auto h-8" 
        src={tech.src} 
        alt={tech.name}
      />
    </div>
  )

  const renderProject = (project: Project) => (
    <div key={project.id} className="space-y-4">
      <img className="object-contain w-auto h-12" src={project.companyLogo} alt={`${project.title} logo`} />
      
      <div className="space-y-1">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
          {project.title}
        </h3>
        <a 
          href={project.livePreviewHref}
          className="inline-flex items-center text-lg font-medium text-blue-600 hover:underline dark:text-blue-500"
        >
          Live preview
          <ArrowTopRightOnSquareIcon className="w-5 h-5 ml-2.5" />
        </a>
      </div>

      <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
        {project.description}
      </p>

      <div className="flex items-center gap-2.5">
        {project.technologies.map((tech, index) => renderTechnology(tech, index))}
      </div>

      <a 
        href={project.caseStudyHref}
        className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-center text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
      >
        View case study
      </a>
    </div>
  )

  return (
    <section className="bg-white dark:bg-gray-900 antialiased">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
        <div className="max-w-2xl space-y-6">
          <div>
            <p className="text-lg font-medium leading-none text-blue-600 dark:text-blue-500">
              {tagline}
            </p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              {heading}
            </h2>
            <p className="mt-4 text-base font-normal text-gray-500 sm:text-xl dark:text-gray-400">
              {description}
            </p>
          </div>

          <div className="space-y-4">
            {linkItems.map((item, index) => (
              <a 
                key={index}
                href={item.href}
                className="flex items-center text-base font-medium text-blue-600 hover:underline dark:text-blue-500"
              >
                {item.text}
                <ChevronRightIcon className="w-5 h-5 ml-2" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 sm:mt-12 lg:mt-16">
          <div className="relative overflow-hidden h-[400px]">
            {projects.map((slideProjects, index) => (
              <div
                key={index}
                className={`${
                  index === currentSlide ? 'block' : 'hidden'
                } duration-700 ease-in-out bg-white dark:bg-gray-900`}
              >
                <div className="grid grid-cols-1 gap-20 sm:grid-cols-2 xl:grid-cols-3">
                  {slideProjects.map(renderProject)}
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center mt-2">
            <button
              type="button"
              onClick={prevSlide}
              className="flex items-center justify-center h-full mr-4 cursor-pointer group focus:outline-none"
            >
              <span className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
                <ChevronLeftIcon className="w-7 h-7" />
                <span className="sr-only">Previous</span>
              </span>
            </button>

            <button
              type="button"
              onClick={nextSlide}
              className="flex items-center justify-center h-full cursor-pointer group focus:outline-none"
            >
              <span className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
                <ChevronRightIcon className="w-7 h-7" />
                <span className="sr-only">Next</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PortfolioCarousel