import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

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
          <h1 className="text-6xl md:text-8xl font-bold mb-8" style={{
            textShadow: '3px 3px 0px rgba(255, 192, 203, 0.8)',
            color: 'white'
          }}>
            #1 BOAT PARTY IN PRAGUE
          </h1>
          <Button 
            className="bg-button-primary hover:bg-button-primary-hover text-white text-xl px-8 py-6 rounded-full"
          >
            TICKETS FOR JUST 12 €
          </Button>
        </div>
      </section>

      {/* Hashtag Ticker */}
      <section className="bg-brand-orange py-4 overflow-hidden whitespace-nowrap">
        <div className="animate-marquee flex">
          {['#PartyVibes', '#FestiveMood', '#PartyTime', '#CelebrationMode', '#GoodTimes'].map((tag) => (
            <span key={tag} className="text-brand-gold text-2xl mx-8">{tag}</span>
          ))}
        </div>
      </section>

      {/* Meeting Point Section */}
      <section className="bg-gradient-to-b from-brand-dark to-brand-orange py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl text-brand-gold text-center mb-16">MEETING POINT</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-ui-card/30 backdrop-blur-sm p-8 rounded-xl border border-white/10">
              <div className="flex flex-col items-center text-center">
                <Image src="/boat-icon.svg" alt="Boat" width={64} height={64} className="text-brand-gold mb-4" />
                <h3 className="text-2xl text-brand-gold mb-2">Boat Location</h3>
                <p className="text-white mb-2">Loď Odra, Náplavka,<br />New Town, Czechia</p>
                <p className="text-sm text-white/70">(Location updated 2 hours prior via text)</p>
              </div>
            </div>
            <div className="bg-ui-card/30 backdrop-blur-sm p-8 rounded-xl border border-white/10">
              <div className="flex flex-col items-center text-center">
                <Image src="/music-icon.svg" alt="Music" width={64} height={64} className="text-brand-gold mb-4" />
                <h3 className="text-2xl text-brand-gold mb-2">After-Party</h3>
                <p className="text-white">Epic Prague, Revoluční,<br />Old Town, Czechia</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Party Packages Section */}
      <section className="bg-brand-dark py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl text-brand-gold text-center mb-16">SELECT YOUR PARTY PACKAGE</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Package cards */}
            <PackageCard
              title="Boat Deal"
              price="12"
              features={[
                "2 hour boat party",
                "Welcome shoot",
                "Themed events"
              ]}
              image="/boat-party-1.jpg"
            />
            <PackageCard
              title="Hottest Deal"
              price="16"
              features={[
                "EVERYTHING FROM BOAT DEAL",
                "Free shots",
                "No queue, no waiting",
                "Entrance to after party at EPIC CLUB",
                "Drinking games"
              ]}
              image="/boat-party-2.jpg"
              bestSeller
            />
            <PackageCard
              title="Add-On Deal"
              price="22"
              features={[
                "Beer Pongs with free beer for 2 hours"
              ]}
              image="/beer-pong.jpg"
            />
          </div>
        </div>
      </section>

      {/* Party Schedule Section */}
      <section className="bg-gradient-to-b from-brand-orange to-brand-dark py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl text-brand-gold text-center mb-16">PARTY SCHEDULE</h2>
          <div className="space-y-16">
            <ScheduleItem
              icon="/boat-icon.svg"
              title="BOAT PARTY"
              time="8:00 PM - 10:00 PM"
              description="Our boat party is the craziest, wildest, and most unforgettable experience! Enjoy welcome shots, insane party games, and the best crowd. Dance, drink, and vibe before we hit the club!"
              image="/boat-party-schedule.jpg"
            />
            <ScheduleItem
              icon="/beer-icon.svg"
              title="BEER PONG TOURNAMENT"
              time="10:00 PM - 00:00 AM"
              description="After the Boat Party, join our Beer Pong Tournament or head straight to the club for an epic night! Compete, win prizes, and keep the vibes alive before the real party begins"
              image="/beer-pong-tournament.jpg"
            />
            <ScheduleItem
              icon="/club-icon.svg"
              title="AFTER PARTY @ EPIC"
              time="10:00 PM - 5:00 AM"
              description="After the boat, the party continues at EPIC Club, the most modern and high-energy club in Prague! With top DJs, mind-blowing lights, and the wildest crowd, get ready for an unforgettable night of music, dancing, and pure party madness!"
              image="/after-party.jpg"
            />
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="bg-brand-orange py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl text-brand-gold mb-12">FEATURED ON</h2>
          <div className="flex justify-center items-center gap-12">
            <Image src="/get-your-guide.png" alt="Get Your Guide" width={150} height={50} />
            <Image src="/tripadvisor.png" alt="TripAdvisor" width={150} height={50} />
            <Image src="/booking.png" alt="Booking.com" width={150} height={50} />
          </div>
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
