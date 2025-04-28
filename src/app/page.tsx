// import { Maintenance } from "../../components/organisms/Maintenance";
import { Banner } from "../../components/organisms/Banner";
import { ServicesTabs } from "../../components/organisms/ServicesTabs";
import { About } from "../../components/organisms/About";
import "../app/globals.css";
import { ReviewSection } from "../../components/organisms/ReviewSection";
import { Footer } from "../../components/organisms/Footer";

export default function Home() {
  return (
    <>
      <div>
        <Banner />
      </div>
      <div>
        <About/>
      </div>
      <div>
        <ServicesTabs />
      </div>
      <div>
        <ReviewSection />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
