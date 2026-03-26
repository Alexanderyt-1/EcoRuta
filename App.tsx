"use client";
import { useState } from "react";

export default function App() {
  const [service, setService] = useState("delivery");
  const [price, setPrice] = useState(0);
  const [status, setStatus] = useState("idle");

  const calculate = () => {
    let base = 100;
    if (service === "light") base = 250;
    if (service === "heavy") base = 500;
    setPrice(base + Math.floor(Math.random() * 200));
  };

  const request = () => {
    setStatus("Buscando repartidor...");
    setTimeout(() => setStatus("Repartidor en camino 🚴"), 2000);
  };

  return (
    <main className="min-h-screen flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold text-green-400 mb-4">EcoRuta</h1>

      <div className="bg-zinc-900 p-6 rounded-2xl w-[370px] shadow-xl">
        <div className="flex gap-2 mb-4">
          {["delivery","light","heavy"].map((s)=>(
            <button key={s} onClick={()=>setService(s)}
              className={`flex-1 p-2 rounded ${service===s?"bg-green-500":"bg-zinc-800"}`}>
              {s}
            </button>
          ))}
        </div>

        <input placeholder="Origen" className="w-full p-2 mb-2 rounded bg-black border border-gray-700"/>
        <input placeholder="Destino" className="w-full p-2 mb-3 rounded bg-black border border-gray-700"/>

        <button onClick={calculate} className="w-full bg-green-500 p-2 rounded mb-3">
          Calcular Precio
        </button>

        <div className="text-center mb-3">
          Estimado: <span className="text-green-400 font-bold">RD${price}</span>
        </div>

        <div className="bg-black h-40 rounded flex items-center justify-center text-gray-500 mb-3">
          Mapa en vivo (simulado)
        </div>

        <button onClick={request} className="w-full bg-green-600 p-3 rounded font-bold">
          Solicitar Servicio
        </button>

        <div className="text-center mt-3 text-sm text-gray-400">
          {status}
        </div>
      </div>

      <div className="mt-6 text-center text-gray-500 text-sm">
        Sistema listo para integrar: pagos, GPS real, usuarios y repartidores
      </div>
    </main>
  );
}