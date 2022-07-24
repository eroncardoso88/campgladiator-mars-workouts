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

export interface WorkoutData extends Workouts {
  name: string
}
