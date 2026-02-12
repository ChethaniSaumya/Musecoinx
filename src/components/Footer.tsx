import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Twitter, MessageSquare, Instagram, Youtube, ChevronDown, ChevronUp } from "lucide-react";

const Footer = () => {
  const [expandedSection, setExpandedSection] = useState<number | null>(null);

  const socialLinks = [
    { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/musecoinx?igsh=NWM3YWZuanphYWFq" },
  ];

  const footerSections = [
    {
      title: "Platform",
      links: [
        { text: "Marketplace", onClick: () => window.open("https://www.musecoinx.com/projects"), enabled: true },
        { text: "Artist Portal", onClick: () => window.open("https://www.musecoinx.com/artist-dashboard"), enabled: true }
      ]

    },
    {
      title: "Resources",
      links: [
        { text: "FAQ", onClick: () => window.location.href = 'faq', enabled: true },
        "Tutorials",
        "Documentation",
        "API"
      ]
    },
    {
      title: "Community",
      links: ["Discord", "Forum", "Blog", "Events"]
    },
    {
      title: "Legal",
      links: [
        { text: "Privacy Policy", onClick: () => window.location.href = 'privacy-policy', enabled: true },
        { text: "Terms of Reference", onClick: () => window.location.href = 'terms-of-reference', enabled: true }
      ]
    }
  ];

  const toggleSection = (index: number) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  const handleLinkClick = (section: any, link: any) => {
    if (typeof link === "object" && link.onClick && link.enabled !== false) {
      link.onClick();
    }
  };

  const isLinkEnabled = (link: any) => {
    if (typeof link === "object") {
      return link.enabled !== false;
    }
    return false;
  };

  const getLinkText = (link: any) => {
    if (typeof link === "object") {
      return link.text;
    }
    return link;
  };

  return (
    <footer className="bg-card/50 backdrop-blur-sm border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* MuseCoinX Tagline */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center justify-center gap-4 px-6 py-3 bg-primary/10 rounded-full">
            <span className="text-primary font-medium font-helvetica">
              MuseCoinX = Music + Royalty + Vibes
            </span>
          </div>

          <h3 className="font-helvetica text-4xl font-bold text-foreground max-w-2xl mx-auto leading-tight">
            Redefining fan engagement and music royalty distribution in the Web3 era
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
              Muse<span className="text-primary">CoinX</span>
            </h3>
            <p className="text-muted-foreground font-helvetica mb-6 max-w-sm">
              The future of music. Discover, collect, and trade music NFTs
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

            <div className="flex items-center gap-2 mt-5">
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
              <a
                href="mailto:contact@musecoinx.com"
                className="text-muted-foreground hover:text-primary font-helvetica text-sm transition-colors"
              >
                contact@musecoinx.com
              </a>
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
                          onClick={(e) => {
                            e.preventDefault();
                            handleLinkClick(section, link);
                          }}
                          className={`${isLinkEnabled(link) ? 'text-muted-foreground hover:text-primary cursor-pointer' : 'text-muted-foreground/50 cursor-not-allowed'} transition-colors duration-200 font-helvetica text-sm block py-1`}
                        >
                          {getLinkText(link)}
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
                        onClick={(e) => {
                          e.preventDefault();
                          handleLinkClick(section, link);
                        }}
                        className={`${isLinkEnabled(link) ? 'text-muted-foreground hover:text-primary cursor-pointer' : 'text-muted-foreground/50 cursor-not-allowed'} transition-colors duration-200 font-helvetica text-sm`}
                      >
                        {getLinkText(link)}
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
          <div className="text-center md:text-left">
            {/* Copyright */}
            <div className="text-muted-foreground font-helvetica text-sm">
              2026 MuseCoinX. A PhyDigi Limited Company. All rights reserved
            </div>
            {/* Disclaimer */}
            <div className="text-muted-foreground/60 font-helvetica text-xs mt-2 max-w-lg">
              Disclaimer: The names of Billie Eilish and Ed Sheeran are used for illustration purposes only.
              They are not affiliated with or currently using the platform.
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-secondary opacity-50"></div>
      </div>
    </footer>
  );
};

export default Footer;
