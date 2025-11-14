import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AccountMenu from "./AccountMenu";
import CartDialog from "./CartDialog";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isHome) return;

    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [isHome]);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "What's New?", id: "new" },
    { name: "Category", id: "category" },
    // { name: "Contact", id: "footer" },
  ];

  const handleNavClick = (id: string) => {
    if (isHome) {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 50);
    }
  };

  return (
    <div
      className={`flex justify-between py-3 px-3 md:px-5 fixed w-full left-0 top-0 z-50 
        ${isHome
          ? isScrolled
            ? "bg-black/80"
            : "bg-transparent"
          : "bg-black"
        }`}
    >
      <img
        src="/logo.svg"
        alt="logo"
        onClick={() => navigate("/")}
        className="w-10 h-10 active:scale-95 cursor-pointer relative z-999"
      />
      <div className="flex gap-x-5 items-center">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleNavClick(item.id)}
            className={`relative hidden md:block md:min-w-20 min-h-12 text-center place-content-center active:scale-95 text-dummy-white overflow-hidden ${activeSection === item.id ? "text-dummy-green" : "group hover:text-dummy-white transition duration-300"
              }`}
          >
            <div className="relative overflow-hidden">
              <span
                className={`block transition-transform duration-300 ease-in-out ${activeSection === item.id ? "text-dummy-green" : "group-hover:-translate-y-6"
                  }`}
              >
                {item.name}
              </span>
              <span
                className={`absolute left-0 top-6 w-full text-dummy-green transition-transform duration-300 ease-in-out ${activeSection === item.id ? "hidden" : "group-hover:-translate-y-6"
                  }`}
              >
                {item.name}
              </span>
            </div>
          </button>
        ))}

        <div className="flex items-center gap-x-6">
          <CartDialog />
          <AccountMenu />
        </div>
      </div>
    </div>
  );
}
