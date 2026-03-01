"use client";
import { enviarContacto } from "./actions";
import React, { useState } from "react";
import Navigationbar from "@/app/components/navbar";
import ExperienceTimeline from "@/app/components/ExperienceTimeline";
import {
  Card,
  CardContent,
} from "@/app/components/ui/card";
import { AboutMe } from "@/app/components/AboutMe";
import { Languages } from "@/app/components/Languages";
import { Button } from "@/app/components/ui/button";
import { Projects } from "@/app/components/Projects";

export default function Home() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [respuesta, setRespuesta] = useState("");

  const webhookURL =
    "https://n.bvillablanca.dev/webhook/d88f68b3-ef6e-4e7a-9bf3-97321a188108";

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const data = {
      name: nombre,
      email: correo,
      message: descripcion,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Error al enviar datos");

      setRespuesta("Mensaje enviado correctamente");
      setNombre("");
      setCorreo("");
      setDescripcion("");
      setTimeout(() => {
        setRespuesta("");
      }, 5000);
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
            Actualmente{" "}
            <span className="text-red-600 font-semibold">
              no disponible para trabajar
            </span>{" "}
          </p>

          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-3 text-red-600 font-medium text-base">
              <span className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
              No disponible para trabajar
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

        <AboutMe />

        {/* --- Sección Experiencia --- */}
        <section id="experiencia" className="mb-24">
          <h3 className="text-3xl sm:text-4xl font-bold mb-10 text-gray-900 text-center">
            Experiencia
          </h3>
          <ExperienceTimeline />
        </section>

        <Languages />

        <Projects />

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
                  disabled={!nombre || !correo || !descripcion || respuesta}
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
