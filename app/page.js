import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Ship, Users, Gift, Ticket, Wine, Gamepad2, Beer, Music } from "lucide-react";
import { CircleDotDashed } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home() {
  return (
    <div className="min-h-screen bg-brand-dark">
      {/* Hero Section with Video Background */}
      <section className="relative h-screen">
        <video 
          autoPlay 
          loop 
          muted 
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/party-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-dark/80 z-10" />
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-[0.08em]" style={{
            textShadow: '3px 3px 0px rgba(255, 192, 203, 0.8)',
            color: 'white'
          }}>
            #1 BOAT PARTY IN PRAGUE
          </h1>
          <Button 
            className="bg-button-primary hover:bg-button-primary-hover text-white text-xl px-6 py-6 rounded-lg"
          >
            TICKETS FOR JUST 12 €
          </Button>
        </div>
      </section>

      {/* Featured Section */}
      <section className="bg-gradient-to-b from-[#FF4500] via-[#8B2703] to-[#0b0c1c] py-2">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-8 tracking-[0.08em]" style={{color: '#F9CF58'}}>
            FEATURED ON
          </h2>
          <div className="flex flex-row justify-center items-center gap-8 md:gap-12">
            <Image 
              src="/images/get-your-guide.png" 
              alt="Get Your Guide" 
              width={100} 
              height={33} 
              className="w-[75px] md:w-[150px] h-auto"
            />
            <Image 
              src="/images/tripadvisor.png" 
              alt="TripAdvisor" 
              width={100} 
              height={33}
              className="w-[75px] md:w-[150px] h-auto" 
            />
            <Image 
              src="/images/bookingcom-1.svg" 
              alt="Booking.com" 
              width={100} 
              height={33}
              className="w-[75px] md:w-[150px] h-auto"
            />
          </div>
        </div>
      </section>


      {/* Reasons Why Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <Image 
          src="/party-crowd.jpg" 
          alt="Party Background" 
          fill
          className="object-cover object-center absolute inset-0 z-0"
          priority
        />
        
        {/* Content */}
        <div className="relative z-20 container mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 text-white tracking-[0.08em]">
            REASONS WHY TO BOON WITH US?
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
            {/* #1 Boat Party */}
            <div className="flex flex-col items-center text-center">
              <div className="border border-white/50 p-6 rounded-xl mb-4 w-[140px] h-[120px] flex items-center justify-center">
                <Ship size={40} className="text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">#1 Boat Party</h3>
            </div>

            {/* Best Party Guides */}
            <div className="flex flex-col items-center text-center">
              <div className="border border-white/50 p-6 rounded-xl mb-4 w-[140px] h-[120px] flex items-center justify-center">
                <Users size={40} className="text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Best Party Guides</h3>
            </div>

            {/* Exclusive Offers */}
            <div className="flex flex-col items-center text-center">
              <div className="border border-white/50 p-6 rounded-xl mb-4 w-[140px] h-[120px] flex items-center justify-center">
                <Gift size={40} className="text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Exclusive Offers</h3>
            </div>

            {/* Free Entry */}
            <div className="flex flex-col items-center text-center">
              <div className="border border-white/50 p-6 rounded-xl mb-4 w-[140px] h-[120px] flex items-center justify-center">
                <Ticket size={40} className="text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Free Entry</h3>
            </div>

            {/* Welcome Shots */}
            <div className="flex flex-col items-center text-center">
              <div className="border border-white/50 p-6 rounded-xl mb-4 w-[140px] h-[120px] flex items-center justify-center">
                <Wine size={40} className="text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Welcome Shots</h3>
            </div>

            {/* Crazy Wild Games */}
            <div className="flex flex-col items-center text-center">
              <div className="border border-white/50 p-6 rounded-xl mb-4 w-[140px] h-[120px] flex items-center justify-center">
                <Gamepad2 size={40} className="text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Crazy Wild Games</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Hashtag Ticker */}
      <section className="bg-[#ff5f00] py-4 overflow-hidden whitespace-nowrap">
        <div className="flex animate-[marquee_30s_linear_infinite]">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex animate-[marquee_30s_linear_infinite]">
              {['#PartyTime', '#CelebrationMode', '#GoodVibes', '#PartySquad', '#NightToRemember', '#LetsCelebrate', '#PartyVibes', '#FestiveMood'].map((tag) => (
                <span key={tag} className="text-[#F9CF58] text-2xl mx-8 tracking-[0.1em] font-bold">{tag}</span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Party Schedule Section */}
      <section className="bg-[#0b0c1c]">
        {/* Gradient Header Section */}
        <div className="bg-gradient-to-b from-[#ff5f00] to-[#0b0c1c] py-8">
          <h2 className="text-4xl md:text-6xl font-bold text-center tracking-[0.08em]" style={{color: '#F9CF58'}}>
            PARTY SCHEDULE
          </h2>
        </div>

        {/* Content Section */}
        <div className="container mx-auto px-4 mt-16">
          <div className="space-y-20">
            {/* Boat Party */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Ship className="w-12 h-12 text-[#F9CF58]" />
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">BOAT PARTY</h3>
                  <p className="text-[#F9CF58] font-medium">8:00 PM - 10:00 PM</p>
                </div>
              </div>
              <p className="text-white/90 text-lg">
                Our boat party is the craziest, wildest, and most unforgettable experience! Enjoy welcome shots, insane party games, and the best crowd. Dance, drink, and vibe before we hit the club!
              </p>
              <Carousel className="w-full">
                <CarouselContent>
                  {[1, 2, 3, 4, 5, 6].map((index) => (
                    <CarouselItem key={index}>
                      <div className="relative w-full h-[400px] md:h-[600px] rounded-xl overflow-hidden">
                        <Image
                          src={`/boat-party-${index}.jpg`}
                          alt={`Boat Party ${index}`}
                          fill
                          className="object-cover"
                          priority
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-4 bg-black/30 hover:bg-black/50 text-white" />
                <CarouselNext className="right-4 bg-black/30 hover:bg-black/50 text-white" />
              </Carousel>
            </div>

            {/* Beer Pong Tournament */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Beer className="w-12 h-12 text-[#F9CF58]" />
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">BEER PONG TOURNAMENT</h3>
                  <p className="text-[#F9CF58] font-medium">10:00 PM - 00:00 AM</p>
                </div>
              </div>
              <p className="text-white/90 text-lg">
                After the Boat Party, join our Beer Pong Tournament or head straight to the club for an epic night! Compete, win prizes, and keep the vibes alive before the real party begins
              </p>
              <Carousel className="w-full">
                <CarouselContent>
                  {[1, 2, 3, 4, 5, 6].map((index) => (
                    <CarouselItem key={index}>
                      <div className="relative w-full h-[400px] md:h-[600px] rounded-xl overflow-hidden">
                        <Image
                          src={`/beer-pong-${index}.jpg`}
                          alt={`Beer Pong ${index}`}
                          fill
                          className="object-cover"
                          priority
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-4 bg-black/30 hover:bg-black/50 text-white" />
                <CarouselNext className="right-4 bg-black/30 hover:bg-black/50 text-white" />
              </Carousel>
            </div>

            {/* After Party @ EPIC */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <CircleDotDashed className="w-12 h-12 text-[#F9CF58]" />
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">AFTER PARTY @ EPIC</h3>
                  <p className="text-[#F9CF58] font-medium">10:00 PM - 5:00 AM</p>
                </div>
              </div>
              <p className="text-white/90 text-lg">
                After the boat, the party continues at EPIC Club, the most modern and high-energy club in Prague! With top DJs, mind-blowing lights, and the wildest crowd, get ready for an unforgettable night of music, dancing, and pure party madness!
                <br />
                <span className="italic mt-2 block">Fair warning: Only party legends survive this level. Think you can handle it?</span>
              </p>
              <Carousel className="w-full">
                <CarouselContent>
                  {[1, 2, 3, 4, 5, 6].map((index) => (
                    <CarouselItem key={index}>
                      <div className="relative w-full h-[400px] md:h-[600px] rounded-xl overflow-hidden">
                        <Image
                          src={`/epic-party-${index}.jpg`}
                          alt={`Epic Party ${index}`}
                          fill
                          className="object-cover"
                          priority
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-4 bg-black/30 hover:bg-black/50 text-white" />
                <CarouselNext className="right-4 bg-black/30 hover:bg-black/50 text-white" />
              </Carousel>
            </div>
          </div>
        </div>
      </section>

      {/* Divider Line */}
      <div className="w-full flex justify-center bg-[#0b0c1c] py-4">
        <div className="w-1/2 h-[2px] bg-[#ff5f00]"></div>
      </div>

      {/* Party Packages Section */}
      <section className="bg-[#0b0c1c] py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-extrabold text-center mb-16 tracking-[0.08em]" 
              style={{ 
                color: '#F9CF58',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)'
              }}>
            SELECT YOUR PARTY PACKAGE
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* All three cards with consistent height */}
            {[
              {
                title: "Boat Deal",
                price: "12",
                icon: <Ship className="w-12 h-12 text-white" />,
                image: "/boat-party-1.jpg",
                features: [
                  "2 hour boat party",
                  "Welcome shoot",
                  "Themed events",
                  "", // Empty strings for consistent height
                  ""
                ],
                hoverColor: "#ff5f00"
              },
              {
                title: "Hottest Deal",
                price: "16",
                icon: <Ship className="w-12 h-12 text-white" />,
                image: "/boat-party-2.jpg",
                features: [
                  "EVERYTHING FROM BOAT DEAL",
                  "Free shots",
                  "No queue, no waiting",
                  "Entrance to after party at EPIC CLUB",
                  "Drinking games"
                ],
                isBestSeller: true,
                hoverColor: "#F9CF58"
              },
              {
                title: "Add-On Deal",
                price: "22",
                icon: <Beer className="w-12 h-12 text-white" />,
                image: "/beer-pong.jpg",
                features: [
                  "Beer Pongs with free beer for 2 hours",
                  "", // Empty strings for consistent height
                  "",
                  "",
                  ""
                ],
                hoverColor: "#ff5f00"
              }
            ].map((deal, index) => (
              <div key={index} className="group relative">
                <div className="relative rounded-2xl overflow-hidden bg-ui-card/10 backdrop-blur-sm border border-white/10 transition-transform duration-300 hover:-translate-y-2 h-full flex flex-col">
                <div className="relative h-[300px]">
                  <Image 
                      src={deal.image} 
                      alt={deal.title} 
                    fill 
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="absolute top-0 left-0 right-0 flex flex-col items-center pt-4 gap-2">
                      {deal.isBestSeller && (
                    <div className="bg-[#F9CF58] px-4 py-1 rounded-full text-[#0b0c1c] text-sm font-bold mb-2">
                      BEST SELLER
                        </div>
                      )}
                      {deal.icon}
                      <p className="text-white text-2xl font-medium">From {deal.price} €</p>
                    </div>
                    <h3 className="absolute bottom-4 left-4 text-4xl font-bold text-white">{deal.title}</h3>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                  <p className="text-white text-xl mb-4">YOU GET:</p>
                    <ul className="space-y-2 text-white/80 flex-grow">
                      {deal.features.map((feature, i) => (
                        <li key={i} className={feature ? "" : "invisible"}>
                          {feature ? `- ${feature}` : "-"}
                        </li>
                      ))}
                  </ul>
                  <Button className="w-full mt-6 bg-transparent border-2 border-white hover:bg-white hover:text-black text-white text-xl py-6 rounded-full transition-all duration-300">
                    Book Now
                  </Button>
                </div>
              </div>
                <div 
                  className="absolute -bottom-1 left-[25%] right-[25%] h-1 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"
                  style={{ backgroundColor: deal.hoverColor }}
                />
              </div>
            ))}
          </div>

          {/* Special Deals Section */}
          <div className="text-center mt-16">
            <h3 className="text-3xl text-white font-bold mb-6">For Special Deals</h3>
            <Button className="bg-[#ff5f00] hover:bg-[#ff5f00]/90 text-white text-xl px-8 py-4 rounded-full">
              Check Out
            </Button>
          </div>
        </div>
      </section>

      {/* Divider Line */}
      <div className="w-full flex justify-center bg-brand-dark">
        <div className="w-1/2 h-[2px] bg-[#ff5f00]"></div>
      </div>

      {/* Meeting Point Section */}
      <section className="bg-gradient-to-b from-[#0b0c1c] to-[#ff5f00] py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 text-[#F9CF58] tracking-[0.08em]">
            MEETING POINT
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Boat Location */}
            <div className="relative rounded-2xl overflow-hidden border border-white/20 backdrop-blur-sm">
              <div className="flex flex-col items-center text-center p-12">
                <div className="text-[#F9CF58] mb-8">
                  <Ship size={64} />
                </div>
                <h3 className="text-[#F9CF58] text-3xl font-bold mb-4">Boat Location</h3>
                <p className="text-white text-lg mb-2">
                  Loď Odra, Náplavka,<br />
                  New Town, Czechia
                </p>
                <p className="text-white/70 text-sm">
                  (Location updated 2 hours prior via text)
                </p>
              </div>
            </div>

            {/* After Party */}
            <div className="relative rounded-2xl overflow-hidden border border-white/20 backdrop-blur-sm">
              <div className="flex flex-col items-center text-center p-12">
                <div className="text-[#F9CF58] mb-8">
                  <Music size={64} />
                </div>
                <h3 className="text-[#F9CF58] text-3xl font-bold mb-4">After-Party</h3>
                <p className="text-white text-lg">
                  Epic Prague, Revoluční,<br />
                  Old Town, Czechia
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Party Life Section */}
      <section className="bg-[#0b0c1c] py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 tracking-[0.08em]" 
              style={{ 
                color: '#F9CF58',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)'
              }}>
            PARTY LIFE, PARTY VIBES
          </h2>
          
          {/* Carousel Gallery */}
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {[...Array(20)].map((_, index) => (
                <CarouselItem key={index} className="pl-4 basis-full md:basis-1/2 lg:basis-1/4">
                  <div className="relative aspect-[3/4] rounded-xl overflow-hidden">
                    <Image
                      src={`/party-life-${index + 1}.jpg`}
                      alt={`Party Life ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      priority={index < 4}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 bg-black/30 hover:bg-black/50 text-white" />
            <CarouselNext className="right-4 bg-black/30 hover:bg-black/50 text-white" />
          </Carousel>
        </div>
      </section>

    </div>
  );
}

// Package Card Component
function PackageCard({ title, price, features, image, bestSeller }) {
  return (
    <div className="relative rounded-2xl overflow-hidden bg-ui-card/30 backdrop-blur-sm border border-white/10">
      {bestSeller && (
        <div className="absolute top-4 right-4 bg-brand-gold px-3 py-1 rounded-full text-brand-dark text-sm font-bold">
          BEST SELLER
        </div>
      )}
      <Image src={image} alt={title} width={400} height={300} className="w-full h-48 object-cover" />
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl text-white">{title}</h3>
          <p className="text-brand-gold">From {price} €</p>
        </div>
        <div className="mb-6">
          <p className="text-white mb-2">YOU GET:</p>
          <ul className="space-y-2">
            {features.map((feature) => (
              <li key={feature} className="text-white/80 text-sm">- {feature}</li>
            ))}
          </ul>
        </div>
        <Button className="w-full bg-button-primary hover:bg-button-primary-hover text-white">
          Book Now
        </Button>
      </div>
    </div>
  );
}

// Schedule Item Component
function ScheduleItem({ icon, title, time, description, image }) {
  return (
    <div className="flex flex-col md:flex-row gap-8 items-center">
      <div className="md:w-1/2 space-y-4">
        <div className="flex items-center gap-4">
          <Image src={icon} alt="" width={40} height={40} className="text-brand-gold" />
          <div>
            <h3 className="text-2xl text-white">{title}</h3>
            <p className="text-brand-gold">{time}</p>
          </div>
        </div>
        <p className="text-white/80">{description}</p>
      </div>
      <div className="md:w-1/2">
        <Image src={image} alt={title} width={600} height={400} className="rounded-xl" />
      </div>
    </div>
  );
}
