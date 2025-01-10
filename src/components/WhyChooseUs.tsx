import { Heart, User, PhoneCall } from "lucide-react";

export const WhyChooseUs = () => {
  const benefits = [
    {
      icon: <Heart className="h-12 w-12 text-secondary" />,
      title: "Cuidado Personalizado",
      description: "Adaptamos nuestro servicio a cada necesidad y patología",
    },
    {
      icon: <User className="h-12 w-12 text-secondary" />,
      title: "Personal Cualificado",
      description: "Equipo profesional con mínimo 2 años de experiencia",
    },
    {
      icon: <PhoneCall className="h-12 w-12 text-secondary" />,
      title: "Disponibilidad 24/7",
      description: "Atención y soporte disponible todos los días del año",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          ¿Por qué elegirnos?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex justify-center mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};