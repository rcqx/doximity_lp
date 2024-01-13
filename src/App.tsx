import Hero from "./components/hero/Hero";
import Dialer from "./components/dialer/Dialer.tsx";
import Reviews from "./components/reviews/Reviews.tsx";
import Network from "./components/network/Network.tsx";
import Numbers from "./components/numbers/Numbers.tsx";

function App() {
  return (
    <div>
      <Hero />
      <Dialer />
      <Reviews />
      <Network />
      <Numbers />
    </div>
  );
}

export default App;
