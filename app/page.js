import Hero from "@/app/components/home/hero";
import { WeBetter } from "@/app/components/home/weBetter";
import { BasedOn } from "@/app/components/home/basedOn";
import { AllOurPlans } from "@/app/components/home/allOurPlans";
import { MiddleImage } from "@/app/components/home/middleImage";
import { JoinUs } from "@/app/components/home/joinUs";
import { Footer } from "@/app/components/shared/footer";
import { Navbar } from "@/app/components/shared/header";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="py-5">
        <Hero />
        <WeBetter />
        <BasedOn />
        <AllOurPlans />
        <MiddleImage />
        <JoinUs />
      </main>
      <Footer />
    </>
  );
}
