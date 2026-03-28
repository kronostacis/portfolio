import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"

export const Projects = () => {
    const projects = [
        {
            name: "Sistema de Gestión de Ventas e Inventario",
            description: "Sistema web que automatiza la gestión de ventas y control de inventario. Permite mejorar la eficiencia y trazabilidad del proceso de ventas.",
            technologies: ["Next.js", "Prisma ORM", "MySQL", "Tailwind CSS"],
            github: "https://github.com/kronostacis/ing-software-punto-venta",
            demo: "https://tu-demo.vercel.app"
        },
        {
            name: "Aplicación de Reconocimiento de Minerales",
            description: "App móvil desarrollada con React Native y FastAPI que utiliza redes neuronales convolucionales para identificar minerales a partir de imágenes.",
            technologies: ["React Native", "FastAPI", "TensorFlow", "Python"],
            github: "https://github.com/kronostacis/EarthScanner",
            demo: "https://tu-demo.vercel.app"
        }
    ]

 return (
    <section id="proyectos" className="mb-24">
          <h3 className="text-3xl sm:text-4xl font-bold mb-10 text-gray-900 text-center">
            Proyectos Académicos
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {projects.map((projects, index) => {
                return (
                    <Card key={index} className="hover:shadow-2xl transition-shadow duration-300 border border-gray-200 flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl">
                  {projects.name}
                </CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {projects.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-gray-700 text-sm">
                  <span className="font-semibold">Tecnologías:</span> {projects.technologies.join(", ")}
                </p>
              </CardContent>
              <CardFooter className="flex gap-3 pt-4">
                <Button asChild variant="outline" className="flex-1">
                  <a
                    href={projects.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver código
                  </a>
                </Button>
                {/*  <Button asChild className="flex-1">
                  <a
                    href={projects.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver demo
                  </a>
                </Button> */}
              </CardFooter>
            </Card>
                )
            })}
          </div>
        </section>
 )   
}