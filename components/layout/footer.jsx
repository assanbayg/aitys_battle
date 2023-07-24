const Footer = () => {
  return (
    <footer className="bg-[#593440  w-full py-4 font-headline">
      <div className="container mx-auto text-center">
        <p>
          &copy; {new Date().getFullYear()} Aitys Battle. All rights reserved.
        </p>
        <p>Made in Kazakhstan.</p>
      </div>
    </footer>
  );
};

export default Footer;
