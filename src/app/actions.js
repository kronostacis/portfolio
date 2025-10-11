"use server";

import { appendFile } from "fs/promises";
import { join } from "path";

export async function enviarContacto(formData) {
  const nombre = formData.get("nombre");
  const correo = formData.get("correo");
  const descripcion = formData.get("descripcion");

  const mensaje = {
    nombre,
    correo,
    descripcion,
    fecha: new Date().toISOString(),
  };

  try {
    const filePath = join(process.cwd(), "mensajes.json");

    // Cada mensaje es una línea JSON (fácil de leer línea por línea después)
    const contenido = JSON.stringify(mensaje) + "\n";

    await appendFile(filePath, contenido, "utf8");

    console.log("Mensaje guardado correctamente");
    return { success: true, message: "Mensaje enviado correctamente" };
  } catch (error) {
    console.error("Error al guardar el mensaje:", error);
    return { success: false, message: "Error al enviar el mensaje" };
  }
}
