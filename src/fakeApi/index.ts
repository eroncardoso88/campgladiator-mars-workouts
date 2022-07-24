import { createDatabase } from './basedb'
import workoutsData from './initialData'
import trainersData from './trainers'

export interface Workouts {
  description: string;
  thumbnail: string;
  levelTag: string;
  media: string;
  title: string;
  impactTag: string;
  id: string;
  trainerId: string;
  duration: number
}

export interface Trainers {
  name: string;
  id: string;
}

export interface WorkoutData extends Workouts {
  name: string
}

const WorkoutsDB = createDatabase<WorkoutData>()
const workoutsDB = new WorkoutsDB()

workoutsData.forEach((workout: Workouts) => {
  workoutsDB.set({
    name: trainersData.find(t => t.id === workout.trainerId)?.name || "Highly qualified trainer",
    ...workout,
  })
})

export { workoutsDB }
