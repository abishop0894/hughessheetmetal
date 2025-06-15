import React from 'react'
import { ThreeDMarqueeDemo } from './MarqueeComp'

interface CTASectionProps {
  title?: string
  description?: string
  primaryButtonText?: string
  primaryButtonHref?: string
  secondaryButtonText?: string
  secondaryButtonHref?: string
  imageSrc?: string
  imageAlt?: string
}

const CTASection: React.FC<CTASectionProps> = ({
  title = "Boost your productivity. Start using our app today.",
  description = "Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla.",
  primaryButtonText = "Get started",
  primaryButtonHref = "#",
  secondaryButtonText = "Learn more",
  secondaryButtonHref = "#",
}) => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-8xl py-2 sm:px-6 sm:py-2 lg:px-2">
        <div className="relative isolate overflow-hidden bg-gray-100 px-6 pt-16 shadow-2xl  sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 -z-10 size-256 -translate-y-1/2 mask-[radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          >
            <circle r={512} cx={512} cy={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#006400" />
                <stop offset={1} stopColor="#006400" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-semibold tracking-tight text-balance text-black sm:text-4xl">
              {title}
            </h2>
            <p className="mt-6 text-lg/8 text-pretty text-black/90">
              {description}
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <a
                href={primaryButtonHref}
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-xs hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                {primaryButtonText}
              </a>
              <a href={secondaryButtonHref} className="text-sm/6 font-semibold text-black">
                {secondaryButtonText} <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="relative mt-16 h-80 lg:mt-8">

    <div className="absolute top-0 left-0 w-228 max-w-none rounded-md">
      <ThreeDMarqueeDemo />
    </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default CTASection