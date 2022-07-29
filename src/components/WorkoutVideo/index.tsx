import { FunctionComponent, useEffect, useState } from "react";
import { Workout } from "../Workout";
import { workoutsDB } from "@/fakeApi";
import type { WorkoutData } from '@/types';
import { Link } from "react-router-dom";

export const WorkoutVideo: FunctionComponent = () => {
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
    <div className="row content">
      <Link to="/">
        <p>oie</p>
      </Link>
    </div>
  )
}
