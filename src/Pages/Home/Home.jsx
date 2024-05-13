import Banner from "./Banner";
import Faq from "./Faq";
import Feature from "./Feature";
import FeaturedAssignments from "./FeaturedAssignments";
import Members from "./Members";

const Home = () => {
  return (
    <div>
      <Banner />
      <FeaturedAssignments />
      <Feature />
      <Members />
      <Faq />
    </div>
  );
};

export default Home;
