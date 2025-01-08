import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function Home() {
  return (
    <div>
      <section className="bg-gradient-to-r from-purple-700 to-blue-500 text-white py-20">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">Welcome to CreaticSpace</h1>
          <p className="text-xl mb-8 animate-fade-in-up animation-delay-200">Futuristic Digital Solutions for Your Business</p>
          <Button size="lg" asChild className="animate-fade-in-up animation-delay-400">
            <Link href="/services">Explore Our Services</Link>
          </Button>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {['Digital Marketing', 'Web Development', 'App Development', 'E-commerce Solutions'].map((service, index) => (
              <Card key={service} className="hover:shadow-lg transition-shadow duration-300 animate-fade-in-up p-6" style={{animationDelay: `${index * 100}ms`}}>
                <CardHeader>
                  <CardTitle className="text-2xl mb-2">{service}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-lg">Innovative solutions tailored for your business needs.</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-20">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Digital Presence?</h2>
          <p className="text-xl mb-8">Let's create something amazing together.</p>
          <Button size="lg" variant="default" asChild>
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

