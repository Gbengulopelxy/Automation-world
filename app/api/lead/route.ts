// app/api/lead/route.ts
/**
 * Serverless API endpoint for lead submission
 * 
 * This is a Next.js App Router API route handler.
 * It runs as a serverless function and logs submissions server-side.
 * 
 * Implementation notes:
 * - Runs on Vercel, Netlify, or any Node.js serverless platform
 * - Add authentication/rate limiting in production
 * - Integrate with your CRM (e.g., Salesforce, HubSpot) or email service
 * - Add validation, sanitization, and spam protection
 * - Store submissions in database (e.g., PostgreSQL, MongoDB)
 */

import { NextRequest, NextResponse } from "next/server"

interface LeadSubmission {
  fullName: string
  email: string
  company?: string
  budget?: string
  message: string
}

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body: LeadSubmission = await request.json()

    // Validate required fields
    if (!body.fullName || !body.email || !body.message) {
      return NextResponse.json(
        { error: "Missing required fields: fullName, email, message" },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      )
    }

    // Sanitize input (basic example - use a library like DOMPurify in production)
    const sanitizedSubmission: LeadSubmission = {
      fullName: body.fullName.trim(),
      email: body.email.trim().toLowerCase(),
      company: body.company?.trim(),
      budget: body.budget?.trim(),
      message: body.message.trim(),
    }

    // Log submission server-side
    console.log("=== LEAD SUBMISSION ===")
    console.log("Timestamp:", new Date().toISOString())
    console.log("Full Name:", sanitizedSubmission.fullName)
    console.log("Email:", sanitizedSubmission.email)
    console.log("Company:", sanitizedSubmission.company || "N/A")
    console.log("Budget:", sanitizedSubmission.budget || "N/A")
    console.log("Message:", sanitizedSubmission.message)
    console.log("IP Address:", request.ip || request.headers.get("x-forwarded-for") || "Unknown")
    console.log("User Agent:", request.headers.get("user-agent") || "Unknown")
    console.log("=======================")

    // TODO: Production implementations
    // 
    // 1. Store in database:
    //    await db.leads.create({ data: sanitizedSubmission })
    //
    // 2. Send to CRM:
    //    await crm.createContact(sanitizedSubmission)
    //
    // 3. Send notification email:
    //    await emailService.send({
    //      to: "sales@echoworks.ai",
    //      subject: "New Lead Submission",
    //      body: formatLeadEmail(sanitizedSubmission)
    //    })
    //
    // 4. Add rate limiting:
    //    const rateLimit = await checkRateLimit(body.email)
    //    if (!rateLimit.allowed) {
    //      return NextResponse.json(
    //        { error: "Too many requests. Please try again later." },
    //        { status: 429 }
    //      )
    //    }
    //
    // 5. Add spam detection:
    //    const spamScore = await checkSpam(sanitizedSubmission)
    //    if (spamScore > threshold) {
    //      console.warn("Potential spam submission:", sanitizedSubmission)
    //      return NextResponse.json({ success: true }, { status: 200 })
    //      // Silently accept but don't process
    //    }

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: "Lead submission received successfully",
      },
      { status: 200 }
    )
  } catch (error) {
    // Log error server-side
    console.error("Error processing lead submission:", error)

    // Return error response
    return NextResponse.json(
      {
        error: "Internal server error. Please try again later.",
      },
      { status: 500 }
    )
  }
}

// Optional: Handle GET requests for health checks
export async function GET() {
  return NextResponse.json(
    { message: "Lead submission API endpoint is active" },
    { status: 200 }
  )
}

