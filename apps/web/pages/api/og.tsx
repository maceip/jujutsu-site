import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'

const spaceMono_regular = fetch(
  new URL('../../fonts/regular.ttf', import.meta.url)
).then((res) => res.arrayBuffer())
const spaceMono_bold = fetch(
  new URL('../../fonts/bold.ttf', import.meta.url)
).then((res) => res.arrayBuffer())
const inter_regular = fetch(
  new URL('../../fonts/inter.ttf', import.meta.url)
).then((res) => res.arrayBuffer())

export default async function handler(req: NextRequest) {
  const regular = await spaceMono_regular
  const bold = await spaceMono_bold
  const inter = await inter_regular

  const { searchParams } = new URL(req.url)

  // ?content=<content>
  const hasContent = searchParams.has('content')
  const content = hasContent
    ? searchParams.get('content')?.slice(0, 100) || 'No Message Provided'
    : 'No Message Provided'

  // ?context=<context>
  const hasContext = searchParams.has('context')
  const context = hasContext
    ? searchParams.get('context')?.slice(0, 100) || 'Unknown context'
    : 'Unknown context'

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          height: '100%',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          letterSpacing: '-.02em',
          fontWeight: 400,
          background: 'white',
        }}
      >
        <div
          style={{
            left: 42,
            top: 42,
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <svg
      height={24}
      viewBox="0 0 75 65"
      fill="black"
    >
      <path d="M37.59.25l36.95 64H.64l36.95-64z"></path>
    </svg>
          <span
            style={{
              marginLeft: 8,
              fontSize: 20,
              fontFamily: 'Inter'
            }}
          >
            {context}
          </span>
        </div>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            padding: '20px 50px',
            margin: '0 42px',
            fontSize: 40,
            width: 'auto',
            maxWidth: '100%',
            textAlign: 'center',
            backgroundColor: 'black',
            color: 'white',
            lineHeight: 1.4,
          }}
        >
          {content}
        </div>
      </div>
    ),
    {
      width: 800,
      height: 500,
      fonts: [
        {
          name: 'Space Mono',
          data: regular,
          weight: 400,
          style: 'normal',
        },
        {
          name: 'Space Mono',
          data: bold,
          weight: 700,
          style: 'normal',
        },
        {
          name: "inter",
          data: inter,
          weight: 400,
          style: 'normal'
        }
      ],
    }
  )
}
