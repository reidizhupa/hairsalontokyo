import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Philosophy } from "@/components/philosophy";
import { Stylists } from "@/components/stylists";
import { Gallery } from "@/components/gallery";
import { Testimonials } from "@/components/testimonials";
import { BookingCta } from "@/components/booking-cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <Philosophy />
        <Stylists />
        <Gallery />
        <Testimonials />
        <BookingCta />
      </main>
      <Footer />
    </>
  );
}
