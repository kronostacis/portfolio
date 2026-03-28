import { Card, CardContent } from "./ui/card"

export const Languages = () => {

    const languages = [
        {
            name: "Python",
            image: "https://cdn.simpleicons.org/python",
        },
        {
            name: "JavaScript",
            image: "https://cdn.simpleicons.org/javascript",
        },
        {
            name: "SQL",
            image: "https://cdn.simpleicons.org/mysql",
        },
        {
            name: "React",
            image: "https://cdn.simpleicons.org/react",
        },
        {
            name: "FastAPI",
            image: "https://cdn.simpleicons.org/fastapi",
        },
        {
            name: "Docker",
            image: "https://cdn.simpleicons.org/docker",
        },
        {
            name: "Power BI",
            image: "https://logo.svgcdn.com/l/microsoft-power-bi.svg",
        },
        {
            name: "Qlik",
            image: "https://cdn.simpleicons.org/qlik",
        },
    ]
    return (
        <section id="lenguajes" className="mb-24">
          <h3 className="text-3xl sm:text-4xl font-bold mb-10 text-gray-900 text-center">
            Lenguajes y Tecnologías
          </h3>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {languages.map((language, index) => (
                <Card key={index} className="hover:shadow-xl hover:scale-105 transition-all duration-300 border border-gray-200">
                  <CardContent className="pt-8 pb-6 text-center">
                    <img
                      src={language.image}
                      alt={language.name}
                      className="w-16 h-16 mx-auto mb-4"
                    />
                    <h4 className="font-semibold text-gray-900 text-base">
                      {language.name}
                    </h4>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
    )
}
    
    