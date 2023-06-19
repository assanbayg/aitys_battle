
const Footer = () => {
  return (
    <footer className="w-full bg-yellow-700 text-amber-50 py-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Aitys Battle. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
