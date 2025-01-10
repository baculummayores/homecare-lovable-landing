import { Heart } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative bg-primary min-h-[600px] flex items-center">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              Cuidado a domicilio para nuestros mayores
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Ofrecemos servicios de atención domiciliaria adaptándonos a las condiciones de cada persona
            </p>
            <div className="flex justify-center">
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-secondary text-white rounded-lg hover:bg-secondary/90 transition-colors"
              >
                <Heart className="mr-2 h-5 w-5" />
                Infórmate gratis
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src="/lovable-uploads/1acdbc84-f97c-460d-990d-fcb8d29c526e.png"
              alt="Manos entrelazadas representando el cuidado y apoyo a nuestros mayores"
              className="rounded-lg shadow-xl w-full h-auto object-cover"
              width={600}
              height={400}
            />
          </div>
        </div>
      </div>
    </div>
  );
};