import { FunctionComponent, useEffect, useState } from "react";
import { Workout } from "../Workout";
import { workoutsDB } from "@/fakeApi";
import type { WorkoutData } from '@/types';
import { motion } from "framer-motion";

export const Workouts: FunctionComponent = () => {
  const [workouts, setWorkouts] = useState<WorkoutData[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    onLoadWorkouts()
  }, []);

  const onLoadWorkouts = async () => {
    //would love to have a try catch scenario
    const data = await workoutsDB.getAll()
    const root = document.documentElement;
    setWorkouts(data)
    data.forEach((item, index) => {
      root?.style.setProperty("--url-bg-" + index, `url(${item.thumbnail})`);
    })
    console.log({data})
    setLoading(false)
  }

  return (
    <motion.div
      className="row content"
      initial="initial"
      animate="enter"
      exit="exit"
      variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
    >
      {!loading && workouts.map((workout, i) => <Workout {...workout} elementIndex={i} key={workout.id}/>)}
    </motion.div>
  )
}
