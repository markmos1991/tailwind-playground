import React from 'react'
import Link from 'next/link'

const projects = [
    {
      name: 'Student Profile',
      description: 'Aimed at education industries - student data overview for subject, pastoral, grades, and attendance tracking.',
    
     
    },
    // More people...
  ]
  
  export default function Main() {
    return (
      <div className="bg-white  py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Tailwhizzles</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              A playground for all things Tailwind. Maybe a bit of Framer Motion. A definitely Nextjs with Typescript.
            </p>
          </div>

          <Link href="/student">
        
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          >
            {projects.map((project) => (
              <li key={project.name}>
               
                <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">{project.name}</h3>
                <p className="text-base leading-7 text-gray-600">{project.description}</p>
                
              </li>
            ))}
          </ul>
          </Link>
          </div>
        </div>
    
    )
  }
  