
import Hero from './_sections/Hero'
import type { Metadata } from 'next'
import TridingLinkCard from './_sections/TridingLinkCard' 

export const metadata: Metadata = {
  title: "Stephen Leachman - Trading",
  description: "With a genuine passion for trading the financial markets, my trading site is the hub for all my trading activities. ",
  openGraph: {
    title: "",
    description: "",
    url: "https://stephenleachman.com/trading/",
    siteName: "Stephen Leachmans Personal Portfolio",
    images: "",
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: "summary_large_image",
    title: "Stephen Leachman - Trading",
    description: "With a genuine passion for trading the financial markets, my trading site is the hub for all my trading activities.",
    creator: "Stephen Leachman",
    images: [
      {
        url: "https://stephenleachman.com/trading",
        width: 1200,
        height: 630,
        alt: "Trading Home Image",
      },
    ],
  }
}

const tradingCardInfo = [
  { id: 1,
    title: "Daily Report Cards", 
    summery: "Each report card is divided into three key sections: pre-market analysis, intra-day plays, and post-market reviews. These sections are updated in real-time as the trading day progresses, with a final review completed after market close. The purpose of these report cards is to help me continually refine and improve my trading skills.",
    link: "/",
    backgroundImage: "https://res.cloudinary.com/dpthcnuy6/image/upload/Designer_11_tflhxp.jpg",
    imgAlt: "Trading Daily Report Card Image",
    isDisabled: true,
    buttonText: "Coming Soon!",
  },
  { id: 2,
    title: "Playbooks", 
    summery: "Focused on trading strategy, each playbook outlines a systematic approach to trading. It includes identifying in-play stocks, analyzing the fundamental or technical catalysts, and defining clear criteria for entry, exit, and risk management. These playbooks are designed to provide a structured and disciplined framework for successful trading.",
    link: "/",
    backgroundImage: "https://res.cloudinary.com/dpthcnuy6/image/upload/v1730562730/Designer_12_hwk5oi.jpg",
    imgAlt: "Play Book Image",
    isDisabled: true,
    buttonText: "Coming Soon!",
  },
  { id: 3,
    title: "Watchlist", 
    summery: "I take a top-down approach, starting from major indexes and secular trends, then narrowing down to individual stocks. My watchlist incorporates both fundamental analysis and key technical levels, helping to identify relative strengths and weaknesses within different market sectors. I set alerts and monitor closely for opportunities, ensuring I’m well-positioned to take advantage of favorable market conditions.",
    link: "/",
    backgroundImage: "https://res.cloudinary.com/dpthcnuy6/image/upload/v1730564925/Designer_18_vjrfpl.jpg",
    imgAlt: "Trading Watchlist Image",
    isDisabled: true,
    buttonText: "Coming Soon!",
  },
  { id: 4,
    title: "Options Portfolio", 
    summery: "Follow me as I build and manage a diverse portfolio of option spreads, including verticals, iron condors, and calendars, primarily with expirations set 30 to 45 days out. I’ll share my strategies, thought process, and how I manage these positions over time, providing valuable insights into navigating the world of options trading and portfolio management.",
    link: "/",
    backgroundImage: "https://res.cloudinary.com/dpthcnuy6/image/upload/v1730564745/Designer_17_fr6jvn.jpg",
    imgAlt: "Trading Market Themes Image",
    isDisabled: true,
    buttonText: "Coming Soon!",
  },
  { id: 5,
    title: "Market Themes", 
    summery: "Understanding the overall themes driving the market is crucial. These themes often revolve around politics, central banks, and their monetary policies, macroeconomic trends, and sector or industry innovations. Staying well-informed and up-to-date on these developments is essential for any short-term trader or portfolio manager.",
    link: "/",
    backgroundImage: "https://res.cloudinary.com/dpthcnuy6/image/upload/v1730567444/Designer_25_hehkll.jpg",
    imgAlt: "Trading University Image",
    isDisabled: true,
    buttonText: "Coming Soon!",
  },
  { id: 6,
    title: "Traders University", 
    summery: "Becoming a Consistently Profitable Trader (CPT) requires experience, practice, and discipline. However, the journey begins with building a strong foundation and gaining a comprehensive understanding of how the financial markets operate. Trader’s University is designed to equip students with in-depth knowledge of the markets, covering everything needed to develop effective and profitable trading strategies.",
    link: "/",
    backgroundImage: "https://res.cloudinary.com/dpthcnuy6/image/upload/v1730566855/Designer_22_n42r88.jpg",
    imgAlt: "Trading University Image",
    isDisabled: true,
    buttonText: "Coming Soon!",
  },
];


function TradingPage() {
  return (
    <main className="bg-custom-gray dark:bg-custom-dark-4">
      <section id="home" className="px-4 md:px-10 dark:bg-custom-dark-3 border-b-[3px] border-white dark:border-custom-dark-1 relative">
        <Hero />
      </section>
      <section id="traders-home" className="px-4 md:px-10 bg-custom-gray dark:bg-custom-dark-4 sm:mb-10 mb-[90px]">
        <div className="flex justify-center">
          <div className="container mt-[80px]">
            <div className="">
              <div className="grid lg:grid-cols-2 gap-5">
                {tradingCardInfo.map((card) => (
                  <TridingLinkCard
                    key={card.id} 
                    title={card.title}
                    summery={card.summery}
                    link={card.link}
                    backgroundImage={card.backgroundImage}
                    imgAlt={card.imgAlt}
                    isDisabled={card.isDisabled}
                    buttonText={card.buttonText}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default TradingPage
