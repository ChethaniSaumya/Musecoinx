import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ChevronLeft } from "lucide-react";

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState('general');
  const [openQuestions, setOpenQuestions] = useState<Record<string, boolean>>({});

  const toggleQuestion = (id: string) => {
    setOpenQuestions(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const faqData = [
    {
      id: 'general',
      title: 'GENERAL',
      questions: [
        {
          id: 'what-is-musecoinx',
          question: 'What is Musecoinx?',
          answer: 'Musecoinx is a blockchain-powered fan engagement and music royalty-sharing platform that lets fans hold NFTs tied to the royalty income of songs. Think of it as owning a piece of your favourite track\'s future.'
        },
        {
          id: 'who-is-behind',
          question: 'Who is behind Musecoinx?',
          answer: 'Musecoinx is operated by PHYDIGI LIMITED, a UK-registered company (Company No. 14340557), headquartered in London.'
        },
        {
          id: 'what-is-hope-coin',
          question: 'What is "Hope Coin"?',
          answer: 'Hope Coin is the first NFT drop from Musecoinx — linked to the unreleased track "Humein Asha Hai" sung by the legendary late Bollywood singer KK. It\'s a tribute, a collectible, and a share in the journey of the song\'s success.'
        }
      ]
    },
    {
      id: 'fans-collectors',
      title: 'FOR FANS & COLLECTORS',
      questions: [
        {
          id: 'what-do-i-get',
          question: 'What do I get as a fan if I win a Hope Coin?',
          answer: 'If you\'re selected, you\'ll receive:\n• A unique NFT token (Hope Coin)\n• A fan membership certificate with your name and token number\n• A digital collectible of KK\'s autograph from the 2008 session'
        },
        {
          id: 'do-i-own',
          question: 'Do I own the song or just a piece of it?',
          answer: 'You don\'t own the song itself. You hold a token that entitles you to a share of the royalty income if the song performs well on streaming platforms like Spotify or YouTube.'
        },
        {
          id: 'how-to-get',
          question: 'How do I get a Hope Coin?',
          answer: 'You can:\n1. Win one via our social campaign (tag, follow, and share).\n2. Purchase limited drops during future sale windows.'
        },
        {
          id: 'need-wallet',
          question: 'Do I need a crypto wallet to receive the NFT?',
          answer: 'Yes:\n• If you already have a wallet, share your Web3 wallet address (MetaMask, Coinbase, etc.) to receive the token directly, or\n• If you don\'t have one, don\'t worry, it is easy to create one. Follow instructions on our website to open a wallet free of charge.\nhttps://www.musecoinx.com'
        },
        {
          id: 'claim-time',
          question: 'What if I don\'t claim my token in time?',
          answer: 'You must claim your token within 30 days of winner announcement. Unclaimed tokens will be forfeited and returned to the pool.'
        },
        {
          id: 'gas-fee',
          question: 'What is a gas fee on Polygon?',
          answer: 'Gas fees on Polygon are small costs you pay for actions like creating or claiming a digital collectible (NFT).'
        },
        {
          id: 'are-there-fees',
          question: 'Are there gas fees?',
          answer: 'We\'ve minimized gas fees as much as possible by using Polygon. Most fan participants will not need to pay gas unless transferring their NFT elsewhere.'
        }
      ]
    },
    {
      id: 'artists',
      title: 'FOR ARTISTS',
      questions: [
        {
          id: 'help-artists',
          question: 'How does Musecoinx help artists?',
          answer: 'Artists can:\n• Upload original tracks\n• Tokenize a share of their royalty rights\n• Engage fans in a new way by letting them earn when the music does well\n• Retain full ownership and control over their music'
        },
        {
          id: 'do-with-music',
          question: 'What does Musecoinx do with my music?',
          answer: 'We tokenize your declared royalty share. We don\'t own or control your song — you just grant us a limited license to tokenize and distribute royalty-linked NFTs.'
        },
        {
          id: 'receive-royalties',
          question: 'How do I receive royalties?',
          answer: 'You continue to receive royalties from Spotify, YouTube, etc. Musecoinx helps distribute the portion you agreed to share with token holders transparently via smart contracts.'
        },
        {
          id: 'minimum-catalogue',
          question: 'Is there a minimum catalogue requirement?',
          answer: 'Currently, we\'re launching with select songs. Full onboarding for multiple tracks and artists will begin soon. If you\'re an artist with fewer than 15 songs, contact us — we\'re still open to exploring pilot projects.'
        }
      ]
    },
    {
      id: 'token-royalty',
      title: 'TOKEN & ROYALTY',
      questions: [
        {
          id: 'song-token',
          question: 'What\'s a Song Token?',
          answer: 'A Song Token is an NFT that represents a fractional share in a song\'s royalty income. It\'s powered by Polygon blockchain.'
        },
        {
          id: 'earn-money',
          question: 'Do I earn real money?',
          answer: 'Yes, potentially. The more the song earns from streaming, the more royalties your token may generate. Royalties are pooled and distributed proportionally, as shared by the artists based on contractual agreements.'
        },
        {
          id: 'royalty-calculated',
          question: 'How is royalty calculated?',
          answer: 'It\'s based on streaming data and income from platforms like Spotify, YouTube, and Apple Music. We also rely on the artist\'s declaration to ensure transparency.'
        },
        {
          id: 'royalties-paid',
          question: 'How are royalties paid?',
          answer: 'Via Muse Coins — our native platform token.'
        }
      ]
    },
    {
      id: 'platform-legal',
      title: 'PLATFORM & LEGAL',
      questions: [
        {
          id: 'need-kyc',
          question: 'Do I need to do KYC?',
          answer: 'Yes. Artists and fans will be required to verify their identity (as per AML/KYC rules) when engaging in royalty-related activities.'
        },
        {
          id: 'nft-secure',
          question: 'Is my NFT secure?',
          answer: 'Yes — but you are responsible for your wallet\'s security. Musecoinx doesn\'t hold your tokens. We\'re non-custodial and do not store user funds.'
        },
        {
          id: 'lose-nft',
          question: 'Can I lose my NFT?',
          answer: 'If you lose access to your wallet or don\'t claim your NFT on time, we can\'t retrieve it for you. It\'s essential to keep your private keys secure.'
        },
        {
          id: 'tradable',
          question: 'Is my token tradable?',
          answer: 'Yes. In future. Song Tokens are transferable and tradable on compatible secondary marketplaces when it is opened in future.'
        }
      ]
    },
    {
      id: 'tech-support',
      title: 'TECH & SUPPORT',
      questions: [
        {
          id: 'what-blockchain',
          question: 'What blockchain is Musecoinx built on?',
          answer: 'Polygon — a scalable, secure, and eco-friendly Ethereum-compatible blockchain.'
        },
        {
          id: 'what-are-muse-coins',
          question: 'What are Muse Coins?',
          answer: 'Muse Coins are used for platform transactions — such as paying artists, distributing royalties, and engaging in the Musecoinx ecosystem.'
        },
        {
          id: 'contact-support',
          question: 'I need help — where can I contact support?',
          answer: 'Email: contact@musecoinx.com'
        }
      ]
    }
  ];

   return (
    <div className="min-h-screen bg-background font-lato" style={{ paddingBottom: '2rem' }}> {/* Added padding to prevent 'y' cropping */}
      {/* Back Button */}
      <div className="sticky top-0 z-40 bg-gray-900/95 backdrop-blur-lg border-b border-gray-800 py-4 px-6">
        <Button 
          variant="ghost" 
          onClick={() => window.history.back()}
          className="text-purple-400 hover:text-purple-300"
        >
          <ChevronLeft className="h-5 w-5 mr-2" />
          Back
        </Button>
      </div>
      
      <section className="py-16 px-4 sm:px-6 relative overflow-hidden" style={{
        background: "linear-gradient(90deg, rgba(16, 21, 37, 1) 0%, rgba(27, 39, 81, 1) 21%, rgba(16, 21, 37, 1) 51%, rgba(83, 24, 97, 1) 85%, rgba(16, 21, 37, 1) 100%)",
        paddingBottom: '6rem' // Extra padding for 'y' descenders
      }}>
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20"></div>

        {/* Glow effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-[20%] left-[10%] w-64 h-64 bg-purple-500 rounded-full filter blur-[100px] opacity-10"></div>
          <div className="absolute bottom-[10%] right-[20%] w-64 h-64 bg-blue-500 rounded-full filter blur-[100px] opacity-10"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Title */}
           <div className="text-center mb-12">
            <h1 className="text-center text-4xl md:text-5xl font-black leading-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-purple-600 mb-4 pb-2">
              Frequently Asked Questions
            </h1>
          </div>

          {/* FAQ Content */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Categories - Hidden on mobile, shown on desktop */}
            <div className="hidden lg:block lg:w-1/4">
              <div className="sticky top-24">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-4">
                  <h3 className="text-xl font-bold text-white mb-4">Categories</h3>
                  <ul className="space-y-2">
                    {faqData.map((category) => (
                      <li key={category.id}>
                        <button
                          onClick={() => setActiveCategory(category.id)}
                          className={`w-full text-left px-4 py-3 rounded-lg transition-all ${activeCategory === category.id
                            ? 'bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-white'
                            : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                            }`}
                        >
                          {category.title}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Questions */}
            <div className="w-full lg:w-3/4">
              {/* Mobile Category Selector */}
              <div className="lg:hidden mb-6">
                <select
                  onChange={(e) => setActiveCategory(e.target.value)}
                  value={activeCategory}
                  className="w-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  {faqData.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.title}
                    </option>
                  ))}
                </select>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden">
                {faqData
                  .filter(category => category.id === activeCategory)
                  .map(category => (
                    <div key={category.id}>
                      {category.questions.map((item) => (
                        <motion.div
                          key={item.id}
                          className="border-b border-gray-700 last:border-b-0"
                          initial={false}
                          animate={{ 
                            backgroundColor: openQuestions[item.id] ? 'rgba(39, 39, 42, 0.5)' : 'rgba(39, 39, 42, 0)'
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          <button
                            onClick={() => toggleQuestion(item.id)}
                            className="w-full text-left p-6 flex justify-between items-center"
                          >
                            <h3 className="text-lg md:text-xl font-bold text-white">{item.question}</h3>
                            <svg
                              className={`w-5 h-5 text-purple-400 transition-transform ${openQuestions[item.id] ? 'rotate-180' : ''}`}
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>
                          <motion.div
                            className="overflow-hidden"
                            initial={false}
                            animate={{
                              height: openQuestions[item.id] ? 'auto' : 0,
                              opacity: openQuestions[item.id] ? 1 : 0,
                              paddingBottom: openQuestions[item.id] ? '1.5rem' : '0' // Extra space for 'y' descenders
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="px-6 pb-6 text-gray-300 whitespace-pre-line" style={{ lineHeight: '1.6' }}>
                              {item.answer}
                            </div>
                          </motion.div>
                        </motion.div>
                      ))}
                    </div>
                  ))}
              </div>

              {/* Support CTA */}
              <div className="mt-8 bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-xl border border-gray-700 p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Still have questions?</h3>
                <p className="text-gray-300 mb-6">Our team is here to help you with any questions about Musecoinx.</p>
                <Button
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold px-8 py-4 group transition-all shadow-lg hover:shadow-purple-500/30"
                  onClick={() => window.location.href = 'mailto:contact@musecoinx.com'}
                >
                  Contact Support
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
 
      <Footer />
    </div>
  );
};

export default FAQ;