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
          src="/lovable-uploads/b67b7a2c-4cbd-463a-adb9-ed4875032c02.png"
          alt="Empresa Social Logo"
          className="h-16 w-auto"
        />
      </div>
    </nav>
  );
};

export default Navbar;