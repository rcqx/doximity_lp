import Hero from "../components/hero/Hero";
import Dialer from "../components/dialer/Dialer.tsx";
import Reviews from "../components/reviews/Reviews.tsx";
import Network from "../components/network/Network.tsx";
import Numbers from "../components/numbers/Numbers.tsx";
import Footer from "../components/footer/Footer.tsx";

const Home = () => {
  return (
    <div>
      <Hero />
      <Dialer />
      <Reviews />
      <Network />
      <Numbers />
      <Footer />
    </div>
  );
};

export default Home;
