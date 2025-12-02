import { NextRequest, NextResponse } from 'next/server'

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID

if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
  console.error('Missing Telegram credentials in environment variables')
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, telegram, project, packageInfo } = body

    // Validate required fields
    if (!name || !email || !project) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Build message for Telegram
    const message = `
🔔 *New Lead from 7day Website*

👤 *Name:* ${name}
📧 *Email/X:* ${email}
${telegram ? `📱 *Telegram:* ${telegram}` : ''}
${packageInfo || '📦 *Package:* Not selected'}

💬 *Project Description:*
${project}
    `.trim()

    // Send to Telegram
    const response = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: message,
          parse_mode: 'Markdown',
        }),
      }
    )

    if (!response.ok) {
      const errorData = await response.json()
      console.error('Telegram API error:', errorData)
      throw new Error('Failed to send message to Telegram')
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error in contact API:', error)
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    )
  }
}
