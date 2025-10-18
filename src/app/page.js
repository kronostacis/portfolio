"use client";
import { enviarContacto } from "./actions";
import React, { useState } from "react";
import Navigationbar from "@/components/navbar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [respuesta, setRespuesta] = useState("");

  const webhookURL =
    "https://n.bvillablanca.dev/webhook-test/d88f68b3-ef6e-4e7a-9bf3-97321a188108";

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      nombre,
      correo,
      descripcion,
    };

    try {
      const res = await fetch(webhookURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Error al enviar datos");

      setRespuesta("Mensaje enviado correctamente");
    } catch (error) {
      setRespuesta("Error al enviar el mensaje");
      console.error(error);
    }
  };

  return (
    <div className="font-sans min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800">
      {/* Navbar ocupa todo el ancho */}
      <Navigationbar />

      {/* Contenido principal */}
      <main className="px-6 py-16 max-w-6xl mx-auto">
        {/* --- Sección de disponibilidad --- */}
        <section className="text-center mb-24">
          <p className="text-lg text-gray-600 mb-8">
            Actualmente me encuentro{" "}
            <span className="text-green-600 font-semibold">
              disponible para realizar mi práctica profesional
            </span>{" "}
            en el área de análisis de datos o desarrollo.
          </p>

          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-3 text-green-600 font-medium text-base">
              <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
              Disponible para práctica profesional
            </div>

            <Button
              asChild
              className="bg-black text-white hover:bg-gray-800 transition-all duration-200 px-8 py-6 text-base"
            >
              <a href="/cv.pdf" download>
                📄 Descargar CV
              </a>
            </Button>
          </div>
        </section>

        {/* --- Sección "Sobre mí" --- */}
        <section id="about" className="text-center mb-24">
          <h1 className="text-5xl sm:text-6xl font-bold mb-4 text-gray-900">
            Benjamin Villablanca Zuñiga
          </h1>
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-gray-700">
            Sobre mí
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed text-justify hyphens-auto">
            Soy estudiante de Ingeniería Civil Informática en la Universidad
            Católica del Maule, Chile, con un fuerte interés en la tecnología y
            el análisis de datos, seguido del desarrollo backend y bases de
            datos. Me apasiona aprender nuevas tecnologías y me gustaria aplicar
            mis conocimientos en proyectos innovadores.
          </p>
        </section>

        {/* --- Sección "Lenguajes y Tecnologías" --- */}
        <section id="lenguajes" className="mb-24">
          <h3 className="text-3xl sm:text-4xl font-bold mb-10 text-gray-900 text-center">
            Lenguajes y Tecnologías
          </h3>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {/* Python */}
              <Card className="hover:shadow-xl hover:scale-105 transition-all duration-300 border border-gray-200">
                <CardContent className="pt-8 pb-6 text-center">
                  <img
                    src="https://cdn.simpleicons.org/python"
                    alt="Python"
                    className="w-16 h-16 mx-auto mb-4"
                  />
                  <h4 className="font-semibold text-gray-900 text-base">
                    Python
                  </h4>
                </CardContent>
              </Card>

              {/* JavaScript */}
              <Card className="hover:shadow-xl hover:scale-105 transition-all duration-300 border border-gray-200">
                <CardContent className="pt-8 pb-6 text-center">
                  <img
                    src="https://cdn.simpleicons.org/javascript"
                    alt="JavaScript"
                    className="w-16 h-16 mx-auto mb-4"
                  />
                  <h4 className="font-semibold text-gray-900 text-base">
                    JavaScript
                  </h4>
                </CardContent>
              </Card>

              {/* SQL */}
              <Card className="hover:shadow-xl hover:scale-105 transition-all duration-300 border border-gray-200">
                <CardContent className="pt-8 pb-6 text-center">
                  <img
                    src="https://cdn.simpleicons.org/mysql"
                    alt="SQL"
                    className="w-16 h-16 mx-auto mb-4"
                  />
                  <h4 className="font-semibold text-gray-900 text-base">SQL</h4>
                </CardContent>
              </Card>

              {/* R */}
              <Card className="hover:shadow-xl hover:scale-105 transition-all duration-300 border border-gray-200">
                <CardContent className="pt-8 pb-6 text-center">
                  <img
                    src="https://cdn.simpleicons.org/r"
                    alt="R"
                    className="w-16 h-16 mx-auto mb-4"
                  />
                  <h4 className="font-semibold text-gray-900 text-base">R</h4>
                </CardContent>
              </Card>

              {/* React */}
              <Card className="hover:shadow-xl hover:scale-105 transition-all duration-300 border border-gray-200">
                <CardContent className="pt-8 pb-6 text-center">
                  <img
                    src="https://cdn.simpleicons.org/react"
                    alt="React"
                    className="w-16 h-16 mx-auto mb-4"
                  />
                  <h4 className="font-semibold text-gray-900 text-base">
                    React
                  </h4>
                </CardContent>
              </Card>

              {/* FastAPI */}
              <Card className="hover:shadow-xl hover:scale-105 transition-all duration-300 border border-gray-200">
                <CardContent className="pt-8 pb-6 text-center">
                  <img
                    src="https://cdn.simpleicons.org/fastapi"
                    alt="FastAPI"
                    className="w-16 h-16 mx-auto mb-4"
                  />
                  <h4 className="font-semibold text-gray-900 text-base">
                    FastAPI
                  </h4>
                </CardContent>
              </Card>

              {/* Docker */}
              <Card className="hover:shadow-xl hover:scale-105 transition-all duration-300 border border-gray-200">
                <CardContent className="pt-8 pb-6 text-center">
                  <img
                    src="https://cdn.simpleicons.org/docker"
                    alt="Docker"
                    className="w-16 h-16 mx-auto mb-4"
                  />
                  <h4 className="font-semibold text-gray-900 text-base">
                    Docker
                  </h4>
                </CardContent>
              </Card>

              {/* Power BI */}
              <Card className="hover:shadow-xl hover:scale-105 transition-all duration-300 border border-gray-200">
                <CardContent className="pt-8 pb-6 text-center">
                  <img
                    src="https://logo.svgcdn.com/l/microsoft-power-bi.svg"
                    alt="Power BI"
                    className="w-16 h-16 mx-auto mb-4"
                  />
                  <h4 className="font-semibold text-gray-900 text-base">
                    Power BI
                  </h4>
                </CardContent>
              </Card>

              {/* Qlik */}
              <Card className="hover:shadow-xl hover:scale-105 transition-all duration-300 border border-gray-200">
                <CardContent className="pt-8 pb-6 text-center">
                  <img
                    src="https://cdn.simpleicons.org/qlik"
                    alt="Qlik"
                    className="w-16 h-16 mx-auto mb-4"
                  />
                  <h4 className="font-semibold text-gray-900 text-base">
                    Qlik
                  </h4>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* --- Sección "Proyectos académicos" --- */}
        <section id="proyectos" className="mb-24">
          <h3 className="text-3xl sm:text-4xl font-bold mb-10 text-gray-900 text-center">
            Proyectos Académicos
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Proyecto 1 */}
            <Card className="hover:shadow-2xl transition-shadow duration-300 border border-gray-200 flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl">
                  Sistema de Gestión de Ventas e Inventario
                </CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Sistema web que automatiza la gestión de ventas y control de
                  inventario. Permite mejorar la eficiencia y trazabilidad del
                  proceso de ventas.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-gray-700 text-sm">
                  <span className="font-semibold">Tecnologías:</span> Next.js,
                  Prisma ORM, MySQL, Tailwind CSS.
                </p>
              </CardContent>
              <CardFooter className="flex gap-3 pt-4">
                <Button asChild variant="outline" className="flex-1">
                  <a
                    href="https://github.com/kronostacis/ing-software-punto-venta"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver código
                  </a>
                </Button>
                {/*  <Button asChild className="flex-1">
                  <a
                    href="https://tu-demo.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver demo
                  </a>
                </Button> */}
              </CardFooter>
            </Card>

            {/* Proyecto 2 */}
            <Card className="hover:shadow-2xl transition-shadow duration-300 border border-gray-200 flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl">
                  Aplicación de Reconocimiento de Minerales (En desarrollo)
                </CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  App móvil desarrollada con React Native y FastAPI que utiliza
                  redes neuronales convolucionales para identificar minerales a
                  partir de imágenes.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-gray-700 text-sm">
                  <span className="font-semibold">Tecnologías:</span> React
                  Native, FastAPI, TensorFlow, Python.
                </p>
              </CardContent>
              <CardFooter className="flex gap-3 pt-4">
                {/* 
                <Button asChild variant="outline" className="flex-1">
                  <a
                    href="https://github.com/tu-usuario/earthscanner"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver código
                  </a>
                </Button>
                {/*  <Button asChild className="flex-1">
                  <a
                    href="https://tu-demo.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver demo
                  </a>
                </Button> */}
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* --- Sección de Contacto --- */}
        <section id="contacto" className="mb-24">
          <h3 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900 text-center">
            Contacto
          </h3>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-10 text-center">
            ¿Tienes alguna pregunta o propuesta? No dudes en contactarme.
          </p>

          <Card className="max-w-2xl mx-auto border border-gray-200 shadow-lg">
            <CardContent className="pt-8 pb-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2 text-left">
                  <label
                    htmlFor="nombre"
                    className="text-sm font-semibold text-gray-900 block"
                  >
                    Nombre
                  </label>
                  <input
                    id="nombre"
                    name="nombre"
                    type="text"
                    placeholder="Tu nombre"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                  />
                </div>

                <div className="space-y-2 text-left">
                  <label
                    htmlFor="correo"
                    className="text-sm font-semibold text-gray-900 block"
                  >
                    Correo Electrónico
                  </label>
                  <input
                    id="correo"
                    name="correo"
                    type="email"
                    placeholder="tu@email.com"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                  />
                </div>

                <div className="space-y-2 text-left">
                  <label
                    htmlFor="descripcion"
                    className="text-sm font-semibold text-gray-900 block"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="descripcion"
                    name="descripcion"
                    placeholder="Escribe tu mensaje aquí..."
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent resize-none transition-all"
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-black text-white hover:bg-gray-800 transition-all duration-200 py-6 text-base font-semibold"
                >
                  📧 Enviar Mensaje
                </button>

                {respuesta && <p>{respuesta}</p>}
              </form>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* --- Footer --- */}
      <footer className="py-12 border-t border-gray-300 text-center text-gray-600 text-sm bg-white">
        <p>© {new Date().getFullYear()} Benjamin Villablanca.</p>
        <p className="mt-1">Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
