import React from 'react'

interface StatItem {
  value: string
  label: string
}

interface HomeStatsProps {
  title?: string
  description?: string
  stats?: StatItem[]
}

const HomeStats: React.FC<HomeStatsProps> = ({
  title = "LogoIpsum powers the world's most innovative companies",
  description = "Our SaaS platform empowers businesses with robust analytics, seamless integrations, and enterprise-grade security. We help organizations streamline operations.",
  stats = [
    {
      value: '99.9%',
      label: 'System Uptime',
    },
    {
      value: '95%',
      label: 'Customer Satisfaction',
    },
    {
      value: '4B+',
      label: 'Data Processed',
    },
    {
      value: '72%',
      label: 'Revenue Growth',
    },
  ]
}) => {
  return (
    <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col md:flex-row gap-4 md:gap-5">
          <h2 className="text-3xl md:text-4xl font-bold flex-1 max-w-lg">
            {title}
          </h2>

          <p className="text-gray-600 text-base md:text-lg flex-1 pt-1">
            {description}
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-8 flex-1">
          {stats.map((item, index) => (
            <div key={index} className="flex flex-col gap-0 px-4 border-l border-gray-200">
              <span className="text-4xl md:text-5xl font-medium">
                {item.value}
              </span>
              <span className="text-gray-600">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomeStats