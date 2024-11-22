import Header from "./HomePage/Header";
import Ratings from "./HomePage/Ratings";
import Analyze from "./HomePage/Analyze";
import About from "./HomePage/About";
import Pricing from "./HomePage/Pricing";
import JoinUs from "./HomePage//JoinUs";
import Footer from "./HomePage/footer";
export default function HomePage() {
  return (
    <div className="overflow-hidden">
      <Header />
      <Ratings />
      <Analyze />
      <About />
      <Pricing />
      <JoinUs />
      <Footer />
    </div>
  );
}
