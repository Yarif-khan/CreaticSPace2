import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function Portfolio() {
  const projects = [
    { 
      title: "E-commerce Platform", 
      description: "A modern online store with advanced features and seamless user experience.",
      image: "/placeholder.svg",
      size: "large"
    },
    { 
      title: "Marketing Campaign", 
      description: "Successful digital marketing strategy for a tech startup, boosting their online presence.",
      image: "/placeholder.svg",
      size: "small"
    },
    { 
      title: "Mobile App", 
      description: "Innovative health and wellness tracking app with intuitive UI and real-time data syncing.",
      image: "/placeholder.svg",
      size: "small"
    },
    { 
      title: "Web Redesign", 
      description: "Complete overhaul of a corporate website, improving user engagement and conversion rates.",
      image: "/placeholder.svg",
      size: "medium"
    },
    { 
      title: "SEO Optimization", 
      description: "Comprehensive SEO strategy that significantly improved search rankings for a local business.",
      image: "/placeholder.svg",
      size: "small"
    },
    { 
      title: "Brand Identity Design", 
      description: "Created a cohesive and memorable brand identity for a startup, including logo and style guide.",
      image: "/placeholder.svg",
      size: "small"
    },
  ]

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 text-center">Our Portfolio</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02] ${
                project.size === 'large' ? 'md:col-span-2 md:row-span-2' :
                project.size === 'medium' ? 'md:col-span-2' : ''
              }`}
            >
              <div className="relative h-48 md:h-64">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  layout="fill" 
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-110"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

