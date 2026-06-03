import { useState } from "react";
import { Button } from "../ui/Button";
import { Menu, X } from "lucide-react";
import logo from "../../assets/logo.webp";
import { WhatsappLogo } from "../ui/WhatsappIcon";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "ראשי", href: "#" },
    { name: "עלינו", href: "#about" },
    { name: "שירותים", href: "#services" },
    { name: "גלריה", href: "#gallery" },
    { name: "חבילות", href: "#packages" },
    { name: "צור קשר", href: "#contact" },
  ];

  return (
    <nav className="fixed w-full z-50 top-0 bg-dark/90 backdrop-blur-md border-b border-white/5">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2 text-2xl font-script tracking-wider text-gold">
            <img
              src={logo}
              alt="Magic 4 You Logo"
              className="w-10 h-10 object-contain"
            />
            <span>Magic 4 You</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-6">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-gray-300 hover:text-gold transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <Button
              variant="outline"
              className="text-sm !py-2 !px-4"
              href="https://wa.me/972502251234"
              target="_blank"
              rel="noopener noreferrer"
            >
              שריין תאריך
              <WhatsappLogo className="w-4 h-4 mr-2" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gold"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-dark border-t border-white/5 p-4">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-gold transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Button
              className="w-full justify-center mt-4"
              href="https://wa.me/972502251234"
              target="_blank"
              rel="noopener noreferrer"
              icon={<WhatsappLogo className="w-5 h-5" />}
            >
              שריין תאריך
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};
