import type { ExerciseDBExercise } from "./types"

// Map our muscle groups to ExerciseDB bodyPart values
export const MUSCLE_TO_BODYPART: Record<string, string> = {
  Chest: "chest",
  Shoulders: "shoulders",
  Arms: "upper arms",
  Core: "waist",
  Glutes: "upper legs",
  Quads: "upper legs",
  Hamstrings: "upper legs",
  Calves: "lower legs",
}

/**
 * Fetches exercises from ExerciseDB API by body part
 * @param bodyPart - The body part to fetch exercises for (e.g., "chest", "shoulders")
 * @returns Array of exercises or empty array on error
 */
export async function fetchExercisesByBodyPart(bodyPart: string): Promise<ExerciseDBExercise[]> {
  const apiKey = process.env.RAPIDAPI_KEY

  if (!apiKey) {
    console.error("[v0] RAPIDAPI_KEY is not set")
    return []
  }

  try {
    const response = await fetch(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": apiKey,
        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
      },
      // Cache for 24 hours (86400 seconds)
      next: { revalidate: 86400 },
    })

    if (!response.ok) {
      console.error(`[v0] ExerciseDB API error: ${response.status} ${response.statusText}`)
      return []
    }

    const data = await response.json()
    return data as ExerciseDBExercise[]
  } catch (error) {
    console.error("[v0] Error fetching exercises from ExerciseDB:", error)
    return []
  }
}

/**
 * Fetches exercises for a specific muscle group
 * @param muscleGroup - Our muscle group name (e.g., "Chest", "Shoulders")
 * @returns Array of exercises or empty array on error
 */
export async function fetchExercisesByMuscle(muscleGroup: string): Promise<ExerciseDBExercise[]> {
  const bodyPart = MUSCLE_TO_BODYPART[muscleGroup]

  if (!bodyPart) {
    console.error(`[v0] Unknown muscle group: ${muscleGroup}`)
    return []
  }

  return fetchExercisesByBodyPart(bodyPart)
}
