const experiences = [
  {
    dateStart: "Mar 2026",
    dateEnd: "Hoy",
    title: "Desarrollador Full Stack",
    company: "Haulmer SpA",
    description:
      "Trabajo en modalidad Part Time en un equipo encargado de la mejora y mantenimiento continuo de una de las plataformas utilizadas por los cllientes de Haulmer.",
    current: true,
  },
  {
    dateStart: "Ene 2026",
    dateEnd: "Feb 2026",
    title: "Practicante de Ingeniería Civil Informática",
    company: "Haulmer SpA",
    description:
      "Esta fue mi primera experiencia en el entorno laboral relacionada con mi carrera, donde pude aplicar mis conocimientos adquiridos durante mi formación académica y adquirir nuevos conocimientos en un ambiente profesional. Participé en el desarrollo de soluciones tecnológicas y colaboré con equipos de trabajo para cumplir con los objetivos de Haulmer.",
    current: false,
  },
  {
    dateStart: "2021",
    dateEnd: "Jul 2026",
    title: "Estudiante de Ingeniería Civil Informática",
    company: "Universidad Catolica del Maule",
    description:
      "Estudiante de Ingeniería Civil Informática, donde he adquirido conocimientos en diversas áreas de la informática y la ingeniería.",
    current: false,
  }
];

export default function ExperienceTimeline() {
  return (
    <div className="max-w-3xl mx-auto relative">
      {/* Línea vertical central */}
      <div className="absolute left-6 top-0 bottom-0 w-px bg-gray-200 hidden sm:block" />

      <div className="flex flex-col gap-10">
        {experiences.map((exp, index) => (
          <div key={exp.title} className="flex gap-6 items-start group">
            {/* Dot en la línea vertical */}
            <div className="hidden sm:flex flex-col items-center mt-1 z-10">
              <div
                className={`w-3 h-3 rounded-full border-2 ${
                  exp.current
                    ? "bg-black border-black"
                    : "bg-white border-gray-400"
                } group-hover:border-black transition-colors duration-300`}
              />
            </div>

            {/* Contenido del ítem */}
            <div className="flex-1 pb-2">
              {/* Rango de fechas */}
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">
                {exp.dateStart}{" — "}{exp.dateEnd}
                {exp.current && (
                  <span className="ml-2 inline-flex items-center gap-1 text-black">
                    <span className="w-1.5 h-1.5 bg-black rounded-full animate-pulse" />
                    {" Actualmente"}
                  </span>
                )}
              </span>

              {/* Título y empresa */}
              <h4 className="text-lg font-bold text-gray-900 leading-snug">
                {exp.title}
              </h4>
              {exp.company && (
                <p className="text-sm font-medium text-gray-500 mb-2">
                  {exp.company}
                </p>
              )}

              {/* Descripción */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
