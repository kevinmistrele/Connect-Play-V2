import {Header} from "@/components/home/header.tsx";
import {FeaturesSection} from "@/components/home/features-section.tsx";
import {CTASection} from "@/components/home/cta-section.tsx";
import {Footer} from "@/components/home/footer.tsx";
import {HeroSection} from "@/components/home/hero-section.tsx";
import {HowItWorksSection} from "@/components/home/how-it-works-section.tsx";

export default function HomePage() {
    return (
        <div className="min-h-screen bg-cp-background text-cp-text-light">
            <Header />
            <HeroSection />
            <FeaturesSection />
            <HowItWorksSection />
            <CTASection />
            <Footer />
        </div>
    )
}
