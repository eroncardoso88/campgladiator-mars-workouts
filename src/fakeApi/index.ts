import { createDatabase } from './basedb'
import workoutsData from './initialData'

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

const WorkoutsDB = createDatabase<Workouts>()
const workoutsDB = new WorkoutsDB()

workoutsData.forEach((workout: Workouts) => {
  workoutsDB.set(workout)
})

export { workoutsDB }
