import { NextResponse } from "next/server"
import { fetchExercisesByMuscle } from "@/lib/api/exercisedb"
import type { ExerciseResponse, ExerciseAPIError } from "@/lib/api/types"

export async function GET(request: Request, { params }: { params: Promise<{ muscle: string }> }) {
  try {
    const { muscle } = await params

    if (!muscle) {
      return NextResponse.json<ExerciseAPIError>(
        {
          error: "Bad Request",
          message: "Muscle group parameter is required",
        },
        { status: 400 },
      )
    }

    // Fetch exercises from ExerciseDB API
    const exercises = await fetchExercisesByMuscle(muscle)

    const response: ExerciseResponse = {
      exercises,
      count: exercises.length,
      muscle,
    }

    return NextResponse.json(response)
  } catch (error) {
    console.error("[v0] Error in exercises API route:", error)

    return NextResponse.json<ExerciseAPIError>(
      {
        error: "Internal Server Error",
        message: "Failed to fetch exercises",
      },
      { status: 500 },
    )
  }
}
