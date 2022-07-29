import { FunctionComponent, useEffect, useState } from "react";
import { workoutsDB } from "@/fakeApi";
import type { WorkoutData } from "@/types";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Paragraph } from "@campgladiator/cgui-core.atoms.typography";
import { Icon } from "@campgladiator/cgui-core.atoms.icon";
import "react-html5video/dist/styles.css";
import { DefaultPlayer as Video } from "react-html5video";

const transition = {
  duration: 1,
  ease: [0.43, 0.13, 0.23, 0.96],
};

const backVariants = {
  initial: { opacity: 0, x: -1000 },
  animate: { opacity: 1, x: 0, ...transition },
  exit: { opacity: 0, x: 0, ...transition },
};

export const WorkoutVideo: FunctionComponent = () => {
  const [workout, setWorkout] = useState<WorkoutData>();
  const [loading, setLoading] = useState(true);
  const params = useParams();
  useEffect(() => {
    onLoadWorkout();
  }, []);

  const onLoadWorkout = async () => {
    //would love to have a try catch scenario
    const data = await workoutsDB.get(params.id);
    console.log(data);
    setWorkout(data);
  };

  return (
    <div className="video-area">
      <Link to="/">
        <motion.div
          variants={backVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="video-area__link"
        >
          <Icon.Solid name={"icon-left-arrow-from-left"} />
          <Paragraph size="default" weight="book">
            Back
          </Paragraph>
        </motion.div>
      </Link>
      <div className="video-area__image">
        <Paragraph size="small" weight="book">
          {workout?.description}
        </Paragraph>
        <br/>
        {workout?.media && (
          <Video
            autoPlay
            loop
            muted
            controls={["PlayPause", "Seek", "Time", "Volume", "Fullscreen"]}
            poster={workout.thumbnail}
          >
            <source src={workout.media} type="video/mp4" />
          </Video>
        )}
      </div>
    </div>
  );
};
