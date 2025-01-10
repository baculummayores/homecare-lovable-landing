import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { ContactForm } from "@/components/ContactForm";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24">
        <Hero />
        <Services />
        <WhyChooseUs />
        <ContactForm />
      </main>
    </>
  );
};

export default Index;