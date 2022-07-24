import { createDatabase } from './basedb'
import workoutsData from './mock/initialData'
import trainersData from './mock/trainers'
import type { Workouts, WorkoutData } from '@/types'

const WorkoutsDB = createDatabase<WorkoutData>()
const workoutsDB = new WorkoutsDB()

workoutsData.forEach((workout: Workouts) => {
  workoutsDB.set({
    name: trainersData.find(t => t.id === workout.trainerId)?.name || "Highly qualified trainer",
    ...workout,
  })
})

export { workoutsDB }
