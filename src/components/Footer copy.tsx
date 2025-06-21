import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Twitter, MessageSquare, Instagram, Youtube, ChevronDown, ChevronUp } from "lucide-react";

const Footer = () => {
  const [expandedSection, setExpandedSection] = useState<number | null>(null);

  const socialLinks = [
    { icon: Twitter, label: "Twitter", href: "#" },
    { icon: MessageSquare, label: "Discord", href: "#" },
    { icon: Instagram, label: "Instagram", href: "#" },
    { icon: Youtube, label: "YouTube", href: "#" }
  ];

  const footerSections = [
    {
      title: "Platform",
      links: ["Marketplace", "Mint NFTs", "Artist Portal", "Governance"]
    },
    {
      title: "Resources",
      links: ["Documentation", "API", "Tutorials", "FAQ"]
    },
    {
      title: "Community",
      links: ["Discord", "Forum", "Blog", "Events"]
    },
    {
      title: "Legal",
      links: ["Privacy Policy", "Terms of Service", "Cookie Policy", "DMCA"]
    }
  ];

  const toggleSection = (index: number) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  return (
    <footer className="bg-card/50 backdrop-blur-sm border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Musecoinx Tagline */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center justify-center gap-4 px-6 py-3 bg-primary/10 rounded-full">
            <span className="text-primary font-medium font-helvetica">
              Musecoinx = Music + Ownership + Vibes
            </span>
          </div>

          <h3 className="font-helvetica text-4xl font-bold text-foreground max-w-2xl mx-auto leading-tight">
            Redefining music ownership in the Web3 era
          </h3>

          <div className="flex flex-col items-center space-y-4">
            <p className="text-xl text-muted-foreground font-helvetica max-w-2xl">
              Part Spotify, part StockX, part Web3 — built for streamers, believers, and legends in the making.
            </p>
          </div>
        </div>

        <Separator className="mb-12" />

        {/* Main Footer Content */}
        <div className="mb-12">
          {/* Brand Section */}
          <div className="mb-8 md:mb-0 lg:col-span-2">
            <h3 className="font-helvetica text-2xl font-bold text-foreground mb-4">
              Music<span className="text-primary">coinx</span>
            </h3>
            <p className="text-muted-foreground font-helvetica mb-6 max-w-sm">
              The future of music ownership. Discover, collect, and trade music NFTs
              on the first truly decentralized music platform.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="icon"
                  className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground w-10 h-10"
                  asChild
                >
                  <a href={social.href} aria-label={social.label}>
                    <social.icon className="h-4 w-4" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Mobile Accordion Footer Links */}
          <div className="md:hidden space-y-4 mt-8">
            {footerSections.map((section, index) => (
              <div key={index} className="border-b border-border/50 pb-4">
                <button
                  className="flex justify-between items-center w-full"
                  onClick={() => toggleSection(index)}
                >
                  <h4 className="font-helvetica font-semibold text-foreground text-base">
                    {section.title}
                  </h4>
                  {expandedSection === index ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </button>
                
                {expandedSection === index && (
                  <ul className="mt-3 space-y-2 pl-2">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a
                          href="#"
                          className="text-muted-foreground hover:text-primary transition-colors duration-200 font-helvetica text-sm block py-1"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Grid Footer Links */}
          <div className="hidden md:grid grid-cols-4 gap-8 mt-8">
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h4 className="font-helvetica font-semibold text-foreground text-base">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href="#"
                        className="text-muted-foreground hover:text-primary transition-colors duration-200 font-helvetica text-sm"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <Separator className="mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-4 py-4">
          {/* Copyright */}
          <div className="text-muted-foreground font-helvetica text-sm text-center md:text-left">
            © 2024 Musecoinx. All rights reserved.
          </div>

          {/* Legal links */}
          <div className="grid grid-cols-3 gap-4 md:flex md:items-center md:space-x-6 text-sm w-full md:w-auto justify-center md:justify-start">
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors duration-200 font-helvetica text-center px-2 py-1 rounded hover:bg-accent/10"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors duration-200 font-helvetica text-center px-2 py-1 rounded hover:bg-accent/10"
            >
              Terms
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors duration-200 font-helvetica text-center px-2 py-1 rounded hover:bg-accent/10"
            >
              Cookies
            </a>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-secondary opacity-50"></div>
      </div>
    </footer>
  );
};

export default Footer;