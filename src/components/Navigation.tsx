import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, User, Play, X, Mic, Eye, EyeOff } from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import logo from '../../assets/logo.png';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import '../mobileNumber.css';

// TypeScript interfaces
interface NavItem {
  name: string;
  id: string;
}

interface ArtistFormData {
  name: string;
  email: string;
  mobile: string;
  password: string;
}

interface FieldErrors {
  name?: string;
  email?: string;
  mobile?: string;
  password?: string;
}

interface TouchedFields {
  name?: boolean;
  email?: boolean;
  mobile?: boolean;
  password?: boolean;
}

interface Message {
  text: string;
  type: 'error' | 'success' | 'info';
}

interface ArtistLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const dashboardLink = () => {
  window.open("https://hopecoinkk.musecoinx.com/my-dashboard");
}

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("");
  const [isArtistModalOpen, setIsArtistModalOpen] = useState(false);

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

  const openArtistModal = () => {
    setIsArtistModalOpen(true);
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
    <>
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
                  onClick={openArtistModal}
                  variant="outline"
                  className="font-bold border-orange-500 text-orange-400 hover:bg-orange-900/30 hover:text-orange-300 px-6 py-2 h-10 transition-all whitespace-nowrap min-w-[120px]"
                >
                  <Mic className="h-4 w-4 mr-2 flex-shrink-0" />
                  Artist Login
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button onClick={dashboardLink}
                  variant="outline"
                  className="font-bold border-purple-500 text-purple-400 hover:bg-purple-900/30 hover:text-purple-300 px-6 py-2 h-10 transition-all whitespace-nowrap min-w-[110px]"
                >
                  <User className="h-4 w-4 mr-2 flex-shrink-0" />
                  Fan Login
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/*<Button
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold px-6 h-10 group transition-all shadow-lg hover:shadow-purple-500/30 whitespace-nowrap"
                  onClick={() => smoothScroll("marketplace", "")}
                >
                  <Play className="h-4 w-4 mr-2 transition-transform group-hover:translate-x-1 flex-shrink-0" />
                  Explore Music
                </Button>*/}
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
                      onClick={openArtistModal}
                      variant="outline"
                      className="font-bold border-orange-500 text-orange-400 hover:bg-orange-900/30 hover:text-orange-300 w-full py-3 transition-all"
                    >
                      <Mic className="h-4 w-4 mr-2" />
                      Artist Login
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button onClick={dashboardLink}
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
                   {/*} <Button
                      className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold w-full py-3 group transition-all shadow-lg hover:shadow-purple-500/30"
                      onClick={() => smoothScroll("marketplace", "")}
                    >
                      <Play className="h-4 w-4 mr-2 transition-transform group-hover:translate-x-1" />
                      Explore Music
                    </Button>*/}
                  </motion.div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* Artist Login Modal */}
      {isArtistModalOpen && (
        <ArtistLoginModal
          isOpen={isArtistModalOpen}
          onClose={() => setIsArtistModalOpen(false)}
        />
      )}
    </>
  );
};

// Complete Artist Login Modal Component with proper TypeScript
const ArtistLoginModal: React.FC<ArtistLoginModalProps> = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [message, setMessage] = useState<Message | null>(null);

  // Form state with proper TypeScript types
  const [formData, setFormData] = useState<ArtistFormData>({
    name: "",
    email: "",
    mobile: "",
    password: ""
  });

  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [touched, setTouched] = useState<TouchedFields>({});

  const API_BASE_URL = 'https://muse-be.onrender.com';

  // Validation functions with proper types
  const validateEmail = (email: string): string => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email) return "Email is required";
    if (!emailRegex.test(email)) return "Please enter a valid email address (e.g., user@gmail.com)";
    return "";
  };

  const validateName = (name: string): string => {
    if (!name) return "Name is required";
    if (name.length > 15) return "Name must be 15 characters or less";
    if (name.length < 2) return "Name must be at least 2 characters";
    return "";
  };

  const validateMobile = (mobile: string): string => {
    if (!mobile) return "Mobile number is required";
    if (mobile.length < 10) return "Please enter a valid mobile number";
    return "";
  };

  const validatePassword = (password: string): string => {
    if (!password) return "Password is required";
    if (password.length < 6) return "Password must be at least 6 characters";
    return "";
  };

  // Real-time validation with proper typing
  const validateField = (name: keyof ArtistFormData, value: string): string => {
    switch (name) {
      case 'name': return validateName(value);
      case 'email': return validateEmail(value);
      case 'mobile': return validateMobile(value);
      case 'password': return validatePassword(value);
      default: return "";
    }
  };

  // Handle input changes with proper typing
  const handleInputChange = (name: keyof ArtistFormData, value: string): void => {
    // Enforce character limits
    if (name === 'name' && value.length > 15) {
      return; // Don't allow more than 15 characters
    }

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Mark field as touched
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));

    // Validate field
    const error = validateField(name, value);
    setFieldErrors(prev => ({
      ...prev,
      [name]: error
    }));

    // Clear general message when user starts typing
    if (message) {
      setMessage(null);
    }
  };

  // Handle mobile input separately due to PhoneInput
  const handleMobileChange = (value: string | undefined): void => {
    const mobileValue = value || "";
    setFormData(prev => ({
      ...prev,
      mobile: mobileValue
    }));

    setTouched(prev => ({
      ...prev,
      mobile: true
    }));

    const error = validateMobile(mobileValue);
    setFieldErrors(prev => ({
      ...prev,
      mobile: error
    }));

    if (message) {
      setMessage(null);
    }
  };

  // Validate entire form
  const validateForm = (): boolean => {
    const errors: FieldErrors = {};
    
    if (!isLogin) {
      errors.name = validateName(formData.name);
      errors.mobile = validateMobile(formData.mobile);
    }
    
    errors.email = validateEmail(formData.email);
    errors.password = validatePassword(formData.password);

    setFieldErrors(errors);
    
    // Mark all fields as touched
    const touchedFields: TouchedFields = {};
    (Object.keys(formData) as Array<keyof ArtistFormData>).forEach(key => {
      touchedFields[key] = true;
    });
    setTouched(touchedFields);

    return Object.values(errors).every(error => !error);
  };

  // Show message with auto-dismiss
  const showMessage = (text: string, type: Message['type']): void => {
    setMessage({ text, type });
    // Auto-dismiss after 5 seconds
    setTimeout(() => {
      setMessage(null);
    }, 5000);
  };

  const resetForm = (): void => {
    setFormData({
      name: "",
      email: "",
      mobile: "",
      password: ""
    });
    setFieldErrors({});
    setTouched({});
    setMessage(null);
    setShowPassword(false);
  };

  const handleLogin = async (): Promise<void> => {
    if (!validateForm()) {
      showMessage("Please fix the errors above", "error");
      return;
    }

    setIsLoading(true);
    showMessage("Logging in...", "info");

    try {
      const response = await fetch(`${API_BASE_URL}/api/artists/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          email: formData.email, 
          password: formData.password 
        })
      });

      const data = await response.json();

      if (response.ok && data.success) {
        showMessage("Login successful! Redirecting to dashboard...", "success");

        setTimeout(() => {
          // Store artist data in localStorage
          localStorage.setItem('artistData', JSON.stringify(data.artist));
          
          // Try to open the dashboard window
          const dashboardWindow = window.open('http://localhost:3000', '_blank');
          
          if (dashboardWindow) {
            // Wait for the window to load, then send the data
            setTimeout(() => {
              try {
                dashboardWindow.postMessage({
                  type: 'ARTIST_LOGIN',
                  artistData: data.artist
                }, 'http://localhost:3000');
              } catch (error) {
                console.error('Error sending postMessage:', error);
              }
            }, 1000);
          } else {
            // If popup was blocked, redirect in the same window
            console.warn('Popup blocked, redirecting in same window');
            window.location.href = 'http://localhost:3000';
          }
          
          onClose();
          resetForm();
        }, 1500);
      } else {
        showMessage(data.error || "Login failed", "error");
      }
    } catch (error) {
      console.error('Login error:', error);
      showMessage("Login failed. Please check your connection and try again.", "error");
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegister = async (): Promise<void> => {
    if (!validateForm()) {
      showMessage("Please fix the errors above", "error");
      return;
    }

    setIsLoading(true);
    showMessage("Creating account...", "info");

    try {
      const response = await fetch(`${API_BASE_URL}/api/artists/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.toLowerCase().trim(),
          mobile: formData.mobile,
          password: formData.password
        })
      });

      const data = await response.json();

      if (response.ok && data.success) {
        showMessage("Registration successful! You can now log in.", "success");
        setTimeout(() => {
          setIsLogin(true);
          resetForm();
        }, 2000);
      } else {
        showMessage(data.error || "Registration failed", "error");
      }
    } catch (error) {
      console.error('Registration error:', error);
      showMessage("Registration failed. Please check your connection and try again.", "error");
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl w-full max-w-md p-6 relative max-h-[90vh] overflow-y-auto"
          onClick={(e: React.MouseEvent) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-gray-800"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-white mb-2">
              {isLogin ? "Artist Login" : "Artist Registration"}
            </h2>
          </div>

          {/* Message Display */}
          <AnimatePresence>
            {message && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                className={`mb-4 p-3 rounded-lg text-sm ${
                  message.type === 'error'
                    ? 'bg-red-900/50 border border-red-700 text-red-200'
                    : message.type === 'success'
                      ? 'bg-green-900/50 border border-green-700 text-green-200'
                      : 'bg-blue-900/50 border border-blue-700 text-blue-200'
                }`}
              >
                {message.text}
              </motion.div>
            )}
          </AnimatePresence>

          <div className="space-y-4">
            {/* Name Field - Registration Only */}
            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name <span className="text-red-400">*</span>
                  <span className="text-xs text-gray-500 ml-2">
                    ({formData.name.length}/15 characters)
                  </span>
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('name', e.target.value)}
                    className={`w-full pl-10 pr-4 py-3 bg-gray-800 border ${
                      touched.name && fieldErrors.name
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-gray-600 focus:border-orange-500'
                    } rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-orange-500/50 focus:border-transparent transition-all`}
                    placeholder="Enter your full name (max 15 chars)"
                    disabled={isLoading}
                    maxLength={15}
                  />
                  {formData.name.length >= 13 && (
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                      <span className={`text-xs ${
                        formData.name.length === 15 ? 'text-red-400' : 'text-yellow-400'
                      }`}>
                        {15 - formData.name.length} left
                      </span>
                    </div>
                  )}
                </div>
                {touched.name && fieldErrors.name && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-xs mt-1"
                  >
                    {fieldErrors.name}
                  </motion.p>
                )}
              </div>
            )}

            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email Address <span className="text-red-400">*</span>
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('email', e.target.value)}
                  className={`w-full pl-10 pr-4 py-3 bg-gray-800 border ${
                    touched.email && fieldErrors.email
                      ? 'border-red-500 focus:border-red-500'
                      : 'border-gray-600 focus:border-purple-500'
                  } rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all`}
                  placeholder="Enter your email (e.g., user@gmail.com)"
                  disabled={isLoading}
                />
              </div>
              {touched.email && fieldErrors.email && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400 text-xs mt-1"
                >
                  {fieldErrors.email}
                </motion.p>
              )}
            </div>

            {/* Mobile Number Field - Registration Only */}
            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Mobile Number <span className="text-red-400">*</span>
                </label>
                <PhoneInput
                  international
                  defaultCountry="US"
                  value={formData.mobile}
                  onChange={handleMobileChange}
                  className={`phone-input-custom ${
                    touched.mobile && fieldErrors.mobile ? 'phone-input-error' : ''
                  }`}
                  disabled={isLoading}
                />
                {touched.mobile && fieldErrors.mobile && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-xs mt-1"
                  >
                    {fieldErrors.mobile}
                  </motion.p>
                )}
              </div>
            )}

            {/* Password Field */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Password <span className="text-red-400">*</span>
                {!isLogin && <span className="text-xs text-gray-500 ml-2">(min 6 characters)</span>}
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('password', e.target.value)}
                  className={`w-full pl-4 pr-12 py-3 bg-gray-800 border ${
                    touched.password && fieldErrors.password
                      ? 'border-red-500 focus:border-red-500'
                      : 'border-gray-600 focus:border-purple-500'
                  } rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all`}
                  placeholder="Enter password"
                  disabled={isLoading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
              {touched.password && fieldErrors.password && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400 text-xs mt-1"
                >
                  {fieldErrors.password}
                </motion.p>
              )}
            </div>

            <motion.button
              onClick={isLogin ? handleLogin : handleRegister}
              disabled={isLoading}
              whileHover={{ scale: isLoading ? 1 : 1.02 }}
              whileTap={{ scale: isLoading ? 1 : 0.98 }}
              className={`w-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 disabled:from-gray-600 disabled:to-gray-600 text-white font-bold py-3 px-6 rounded-lg transition-all shadow-lg disabled:cursor-not-allowed ${
                isLoading ? 'opacity-70' : ''
              }`}
            >
              {isLoading ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>{isLogin ? "Logging in..." : "Creating account..."}</span>
                </div>
              ) : (
                isLogin ? "Login" : "Register"
              )}
            </motion.button>

            <div className="text-center pt-4 border-t border-gray-700">
              <p className="text-gray-400 text-sm">
                {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
                <button
                  onClick={() => { setIsLogin(!isLogin); resetForm(); }}
                  className="text-orange-400 hover:text-orange-300 font-medium transition-colors"
                  disabled={isLoading}
                >
                  {isLogin ? "Register" : "Login"}
                </button>
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Navigation;
