import { InMemoryDatabase } from './basedb'
import workoutsData from './basedb'

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

const workoutsDB = new InMemoryDatabase<Workouts>()

