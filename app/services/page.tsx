import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Services() {
  const services = [
    {
      title: "Digital Marketing",
      description: "Boost your online presence with our cutting-edge digital marketing strategies.",
      features: ["SEO Optimization", "Social Media Management", "Content Marketing", "PPC Campaigns"]
    },
    {
      title: "Web Development",
      description: "Create stunning, responsive websites that captivate your audience.",
      features: ["Custom Web Design", "E-commerce Solutions", "CMS Development", "Web Application Development"]
    },
    {
      title: "App Development",
      description: "Bring your ideas to life with our expert mobile app development services.",
      features: ["iOS App Development", "Android App Development", "Cross-platform Development", "App Maintenance and Support"]
    },
    {
      title: "E-commerce Solutions",
      description: "Build and grow your online store with our comprehensive e-commerce services.",
      features: ["E-commerce Platform Development", "Payment Gateway Integration", "Inventory Management", "Customer Analytics"]
    }
  ]

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 text-center">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 animate-fade-in-up" style={{animationDelay: `${index * 100}ms`}}>
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

