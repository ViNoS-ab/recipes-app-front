import { Footer } from "@/app/components/shared/footer";
import { Navbar } from "@/app/components/shared/header";

export default function DefaultLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
