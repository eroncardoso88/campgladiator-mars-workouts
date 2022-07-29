import { FunctionComponent, useEffect, useState, useMemo } from "react";
import type { WorkoutData } from "@/types";
import { Heading, Paragraph } from "@campgladiator/cgui-core.atoms.typography";
import { Icon } from '@campgladiator/cgui-core.atoms.icon'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'
interface IWorkout extends WorkoutData {
  elementIndex: number
}

enum Impacts {
  beginner = 1,
  intermediate = 3,
  advanced = 5
}

const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };

const cardVariants = {
  hover: { scale: 0.95 }
}

const workoutCardVariants = {
  initial: { scale: 0.9, opacity: 0 },
  enter: { scale: 1, opacity: 1, transition },
  exit: {
    scale: 0.5,
    opacity: 0,
    transition: { ...transition, duration: 1 }
  }
};


export const Workout: FunctionComponent<IWorkout> = ({
  duration,
  id,
  levelTag,
  name,
  title,
  elementIndex
}) => {
  const [teste, setTeste] = useState(false)
  function isOdd(num: number) { return num % 2;}

  const stars = useMemo(() => Array.from({length: Impacts[levelTag]}), [id])

  return (
    <Link
      to={`/workout/${id}`}
      className={`col12 colSm6 colLg4 card-grid`}
    >
      <motion.div
        variants={workoutCardVariants}
        className={`card-grid__box`}
      >
          <motion.div
          className={`card cardBg-${elementIndex}`}
          onClick={() => setTeste(!teste)}
          whileHover="hover"
          variants={cardVariants}
          transition={transition}
          >
            <div className={"card__info"}>
              <Heading type="h3" variation="default" font="gotham">
                {name}
              </Heading>
              <div className={"card__level-tag"}>
                {stars.map((_, index)=> {
                  return (
                    <Icon.Solid name={"icon-dumbbell"} key={index} className={levelTag}/>
                    )
                  })}
              </div>
              <Paragraph size="large" weight="book">
                {title}
              </Paragraph>
              <Paragraph size="small" weight="book">
                ({duration} minutes)
              </Paragraph>
            </div>
          </motion.div>
      </motion.div>
    </Link>
  )
}
