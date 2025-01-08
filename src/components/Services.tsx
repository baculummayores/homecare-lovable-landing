import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const Services = () => {
  const services = [
    {
      title: "Cuidado Personal",
      description: "Asistencia en higiene personal, vestimenta y movilidad",
    },
    {
      title: "Acompañamiento",
      description: "Compañía y apoyo emocional en actividades diarias",
    },
    {
      title: "Cuidados Médicos",
      description: "Supervisión de medicación y cuidados básicos de salud",
    },
  ];

  return (
    <section className="py-20 bg-white" id="services">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Nuestros Servicios
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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