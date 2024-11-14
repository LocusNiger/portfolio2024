import { Timeline } from "./ui/Timeline";
import { timelineData } from "@/data";

const Experience = () => {
  return (
    <div className="py-10">
      <h1 className="heading text-purple">Experience</h1>
      <Timeline data={timelineData} />
    </div>
  );
};

export default Experience;
