import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export default function About() {
  const teamMembers = [
    { name: "Jane Doe", role: "CEO & Founder", image: "/placeholder.svg" },
    { name: "John Smith", role: "CTO", image: "/placeholder.svg" },
    { name: "Alice Johnson", role: "Creative Director", image: "/placeholder.svg" },
    { name: "Bob Williams", role: "Lead Developer", image: "/placeholder.svg" },
  ]

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">About CreaticSpace</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <p className="text-lg mb-4">
              CreaticSpace is a cutting-edge digital agency specializing in innovative marketing solutions and development services. Our team of experts is dedicated to transforming your digital presence and driving your business forward.
            </p>
            <p className="text-lg">
              With a focus on creativity and technology, we deliver tailored solutions that help our clients stand out in the digital landscape.
            </p>
          </div>
          <div className="relative h-64 md:h-auto">
            <Image 
              src="/placeholder.svg" 
              alt="CreaticSpace Team" 
              layout="fill" 
              objectFit="cover" 
              className="rounded-lg"
            />
          </div>
        </div>
        <h2 className="text-3xl font-bold mb-8 text-center">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 animate-fade-in-up" style={{animationDelay: `${index * 100}ms`}}>
              <CardHeader>
                <Image 
                  src={member.image} 
                  alt={member.name} 
                  width={200} 
                  height={200} 
                  className="rounded-full mx-auto"
                />
              </CardHeader>
              <CardContent className="text-center">
                <CardTitle>{member.name}</CardTitle>
                <CardDescription>{member.role}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

