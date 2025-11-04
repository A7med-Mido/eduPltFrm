import { NextResponse, NextRequest } from "next/server"




export async function GET (req: NextRequest) {
  try {
    return NextResponse.json({
      message: "Hello World !!!",
      success: true
    })
  } catch (error) {
    console.log(error)
  }
}
