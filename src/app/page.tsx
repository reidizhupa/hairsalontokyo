import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { About } from "@/components/about";
import { Stylists } from "@/components/stylists";
import { Recruit } from "@/components/recruit";
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
                <About />
                <Services />
                <Stylists />
                <Recruit />
                <Gallery />
                <Testimonials />
                <BookingCta />
            </main>
            <Footer />
        </>
    );
}
