import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const Services = () => {
  const services = [
    {
      title: "Atención Personal",
      description: "Nos adaptamos a diferentes horarios y necesidades.",
    },
    {
      title: "Acompañamiento",
      description: "Ofrecemos acompañamiento frente a los diferentes tipos de deterioro cognitivo, físico y emocional",
    },
    {
      title: "Gestión de Medicamentos y Terapias",
      description: "Gestión de medicamentos y terapias y ejercicios personalizados",
    },
    {
      title: "Asesoramiento Familiar",
      description: "Orientación y apoyo profesional para familias en el cuidado de sus mayores",
    },
  ];

  return (
    <section className="py-20 bg-white" id="services">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Nuestros Servicios
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};