import React from 'react'
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel"
import Image from 'next/image'

interface Feature {
  name: string
  description: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

interface FeaturesSectionProps {
  tagline?: string
  heading?: string
  description?: string
  imageSrc?: string
  imageAlt?: string
  features?: Feature[]
}

const images = [
{
  id: 1,
  image: "https://hughessheetmetal.s3.us-east-1.amazonaws.com/clients/IMG_2268.jpg",
  title: "Fabrication",
},
{
  id: 2,
  image: "https://hughessheetmetal.s3.us-east-1.amazonaws.com/clients/IMG_2268.jpg",
  title: "Welding",
},
{
  id: 3,
  image: "https://hughessheetmetal.s3.us-east-1.amazonaws.com/clients/IMG_2268.jpg",
  title: "Sheet Metal",
},
{ 
  id: 4,
  image: "https://hughessheetmetal.s3.us-east-1.amazonaws.com/clients/IMG_2268.jpg",
  title: "Scraping",
}

]

const FeaturesSection: React.FC<FeaturesSectionProps> = ({
  tagline = "Deploy faster",
  heading = "A better workflow",
  description = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
  features = [
    {
      name: 'Push to deploy.',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
      icon: CloudArrowUpIcon,
    },
    {
      name: 'SSL certificates.',
      description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
      icon: LockClosedIcon,
    },
    {
      name: 'Database backups.',
      description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
      icon: ServerIcon,
    },
  ]
}) => {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:ml-auto lg:pt-4 lg:pl-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-indigo-600">{tagline}</h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                {heading}
              </p>
              <p className="mt-6 text-lg/8 text-gray-600">
                {description}
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon aria-hidden="true" className="absolute top-1 left-1 size-5 text-indigo-600" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="flex items-start justify-end rounded-xl lg:order-first">
            <Carousel className="w-3xl relative max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-228">
  <CarouselContent className='rounded-xl'>
{images.map((image) => (
  <CarouselItem key={image.id} className='rounded-xl'>
    <Image key={image.id} src={image.image} alt="Product screenshot" width={2432} height={1442} className="w-3xl relative max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-228" />
  <h2 key={image.id} className='text-black text-[100px]  font-bold absolute bottom-[200px] z-[20] rotate-[-90deg] -right-[135px]'>{image.title}</h2>
  </CarouselItem>
))}
 </CarouselContent>
 <div className='absolute bottom-[50px]  right-[60px]'>
  <CarouselPrevious />
  <CarouselNext />
  </div>
</Carousel>

          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturesSection