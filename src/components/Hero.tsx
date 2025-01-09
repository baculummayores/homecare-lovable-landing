import { Heart } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative bg-primary min-h-[600px] flex items-center">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              Cuidados profesionales en la comodidad del hogar
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Ofrecemos servicios de atención domiciliaria adaptándonos a las condiciones de cada persona
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-secondary text-white rounded-lg hover:bg-secondary/90 transition-colors"
            >
              <Heart className="mr-2 h-5 w-5" />
              Contacta con nosotros
            </a>
          </div>
          <div className="md:w-1/2">
            <img
              src="/placeholder.svg"
              alt="Cuidados profesionales"
              className="rounded-lg shadow-xl"
              width={600}
              height={400}
            />
          </div>
        </div>
      </div>
    </div>
  );
};