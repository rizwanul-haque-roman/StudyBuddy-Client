import axios from "axios";
import { useEffect, useState } from "react";
import CardAssignment from "../Assignments/CardAssignment";

const FeaturedAssignments = () => {
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    axios
      .get("https://study-buddy-server-six.vercel.app/featured")
      .then((res) => {
        setFeatured(res.data);
      });
  }, []);
  console.log(featured);

  return (
    <div className="my-24 container mx-auto">
      <div>
        <h1 className="text-7xl font-bold">Featured Assignments</h1>
        <p className="w-3/4 mt-6 text-xl">
          Explore our diverse assignments, crafted to engage learners at every
          level. Various problem-solving tasks, each selection fosters
          curiosity, critical thinking, and active learning. Begin your journey
          with our handpicked assignments today.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-6 my-12">
        {featured.map((assignment) => (
          <CardAssignment key={assignment._id} assignment={assignment} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedAssignments;
