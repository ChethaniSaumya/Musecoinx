import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, User, Play, X } from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import logo from '../../assets/logo.png';

interface NavItem {
  name: string;
  id: string;
}

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("");

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const smoothScroll = (id: string, itemName: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
    setActiveItem(itemName);
    setIsMobileMenuOpen(false);
  };

  const mobileMenuVariants: Variants = {
    hidden: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1],
        when: "beforeChildren",
        staggerChildren: 0.05
      }
    }
  };

  const menuItemVariants: Variants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24
      }
    }
  };

  const navItems: NavItem[] = [
    { name: "How It Works", id: "how-it-works" },
    { name: "For Artists & Fans", id: "for-artists-and-fans" },
    { name: "Marketplace", id: "marketplace" }
  ];

  return (
    <nav className="bg-gray-900/95 backdrop-blur-lg border-b border-gray-800 sticky top-0 z-50 font-lato py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="relative flex items-center justify-between h-20">
          {/* Logo with enhanced animation */}
          <div className="flex-shrink-0 flex items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => smoothScroll("home", "")}
            >
              <img
                src={logo}
                alt="Musecoinx Logo"
                className="h-14 w-auto"
              />
            </motion.div>
          </div>

          {/* Desktop Navigation - shown at 1276px and above */}
          <div className="hidden xl:flex absolute left-1/2 transform -translate-x-1/2">
            <motion.div
              className="flex items-center space-x-1 bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-700"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {navItems.map(({ name, id }) => {
                return (
                  <motion.button
                    key={id}
                    onClick={() => smoothScroll(id, name)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-4 py-2 text-sm font-bold ${activeItem === name
                      ? 'text-white bg-gradient-to-r from-purple-500/20 to-blue-500/20'
                      : 'text-gray-300 hover:text-white'
                      } transition-all hover:bg-gray-700/50 rounded-full cursor-pointer relative`}
                  >
                    {name}
                    {activeItem === name && (
                      <motion.span
                        layoutId="navUnderline"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </motion.button>
                );
              })}
            </motion.div>
          </div>

          {/* Desktop CTA Buttons - shown at 1276px and above */}
          <div className="hidden xl:flex items-center space-x-3">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                className="font-bold border-purple-500 text-purple-400 hover:bg-purple-900/30 hover:text-purple-300 px-4 h-10 transition-all"
              >
                <User className="h-4 w-4 mr-2" />
                Fan Login
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold px-6 h-10 group transition-all shadow-lg hover:shadow-purple-500/30"
                onClick={() => smoothScroll("marketplace", "")}
              >
                <Play className="h-4 w-4 mr-2 transition-transform group-hover:translate-x-1" />
                Explore Music
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button - shown below 1276px */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="xl:hidden"
          >
            <Button
              variant="outline"
              size="icon"
              className="h-10 w-10 border-gray-700 hover:border-purple-500/50 transition-all bg-gray-800/50"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5 text-purple-400 transition-all rotate-180" />
              ) : (
                <Menu className="h-5 w-5 text-gray-300 transition-all hover:text-purple-400" />
              )}
            </Button>
          </motion.div>
        </div>

        {/* Enhanced Mobile Menu with Animation - shown below 1276px */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={mobileMenuVariants}
              className="xl:hidden bg-gray-800/95 backdrop-blur-lg border border-gray-700 rounded-xl mt-2 py-2 shadow-xl overflow-hidden"
            >
              <motion.div className="flex flex-col space-y-1 px-2 pb-2">
                {navItems.map(({ name, id }) => {
                  return (
                    <motion.button
                      key={id}
                      onClick={() => smoothScroll(id, name)}
                      className={`px-4 py-3 text-sm font-bold ${activeItem === name
                        ? 'text-white bg-gradient-to-r from-purple-500/20 to-blue-500/20'
                        : 'text-gray-300 hover:text-white'
                        } transition-all hover:bg-gray-700/50 rounded-lg text-left flex items-center`}
                      variants={menuItemVariants}
                    >
                      <span className="w-2 h-2 rounded-full bg-purple-500 mr-3"></span>
                      {name}
                    </motion.button>
                  );
                })}
              </motion.div>

              <motion.div
                className="flex flex-col space-y-3 px-2 pt-2 pb-3 border-t border-gray-700"
                variants={menuItemVariants}
              >
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    variant="outline"
                    className="font-bold border-purple-500 text-purple-400 hover:bg-purple-900/30 hover:text-purple-300 w-full py-3 transition-all"
                  >
                    <User className="h-4 w-4 mr-2" />
                    Fan Login
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold w-full py-3 group transition-all shadow-lg hover:shadow-purple-500/30"
                    onClick={() => smoothScroll("marketplace", "")}
                  >
                    <Play className="h-4 w-4 mr-2 transition-transform group-hover:translate-x-1" />
                    Explore Music
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navigation;