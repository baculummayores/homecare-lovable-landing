const Navbar = () => {
  return (
    <nav className="bg-white py-4 px-6 fixed w-full top-0 z-50 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <img
          src="/lovable-uploads/3cb0a8e4-a027-48b6-aecd-8bff66bd8f95.png"
          alt="miResi Logo"
          className="h-16 w-auto"
        />
        <img
          src="/lovable-uploads/8c4053d6-844d-457a-8a65-e12810737faf.png"
          alt="Empresa Social Logo"
          className="h-16 w-auto"
        />
      </div>
    </nav>
  );
};

export default Navbar;