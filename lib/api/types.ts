// TypeScript interfaces for ExerciseDB API responses

export interface ExerciseDBExercise {
  id: string
  name: string
  bodyPart: string
  target: string // Primary muscle targeted
  secondaryMuscles: string[]
  equipment: string
  gifUrl: string
  instructions: string[]
}

export interface ExerciseResponse {
  exercises: ExerciseDBExercise[]
  count: number
  muscle: string
}

export interface ExerciseAPIError {
  error: string
  message: string
}
