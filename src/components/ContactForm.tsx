import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_term: "",
    utm_content: "",
    gclid: "",
    fbclid: "",
  });
  const { toast } = useToast();

  useEffect(() => {
    // Get UTM parameters and click IDs from URL
    const urlParams = new URLSearchParams(window.location.search);
    setFormData(prev => ({
      ...prev,
      utm_source: urlParams.get("utm_source") || "",
      utm_medium: urlParams.get("utm_medium") || "",
      utm_campaign: urlParams.get("utm_campaign") || "",
      utm_term: urlParams.get("utm_term") || "",
      utm_content: urlParams.get("utm_content") || "",
      gclid: urlParams.get("gclid") || "",
      fbclid: urlParams.get("fbclid") || "",
    }));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const { error } = await supabase
        .from("leads")
        .insert([formData]);

      if (error) throw error;

      toast({
        title: "Mensaje enviado",
        description: "Nos pondremos en contacto contigo pronto.",
      });

      // Only reset user-input fields
      setFormData(prev => ({
        ...prev,
        name: "",
        email: "",
        phone: "",
      }));
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.",
        variant: "destructive",
      });
    }
  };

  return (
    <section className="py-20 bg-white" id="contact">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Contacta con nosotros
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input
                placeholder="Nombre"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
            </div>
            <div>
              <Input
                type="tel"
                placeholder="Teléfono"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                required
              />
            </div>
            {/* Hidden fields for UTM parameters */}
            <input type="hidden" name="utm_source" value={formData.utm_source} />
            <input type="hidden" name="utm_medium" value={formData.utm_medium} />
            <input type="hidden" name="utm_campaign" value={formData.utm_campaign} />
            <input type="hidden" name="utm_term" value={formData.utm_term} />
            <input type="hidden" name="utm_content" value={formData.utm_content} />
            <input type="hidden" name="gclid" value={formData.gclid} />
            <input type="hidden" name="fbclid" value={formData.fbclid} />
            
            <Button
              type="submit"
              className="w-full bg-secondary hover:bg-secondary/90"
            >
              Enviar mensaje
            </Button>
          </form>
          <p className="text-center mt-8 text-gray-600">
            Si estás buscando empleo mándanos un email a{" "}
            <a 
              href="mailto:empleo@miresi.es"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              empleo@miresi.es
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};