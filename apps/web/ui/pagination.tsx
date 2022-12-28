import Link from 'next/link'
import cn from 'clsx'

interface Props {
  prev: string
  next: string
}

export default function Pagination({ next, prev }: Props) {
  return (
    <div className="w-full grid pt-6 columns-2 grid-cols-2">
      <Link
        href={prev}
        className={cn(
          'justify-self-start',
          'inline-block color-[#0070f3] px-4 h-10 leading-10 m-0 rounded-[7px] transition-all ease-in-out hover:bg-[rgba(0,118,255,0.1)]'
        )}
      >
        <span className="inline-block align-middle leading-[1] mr-2 ml-[-0.25rem] mt-[-2px]">
          <svg height="24" viewBox="0 0 24 24" width="24">
            <g fill="#0070f3">
              <path
                d="M14,17.414l-4.707-4.707c-0.391-0.391-0.391-1.023,0-1.414L14,6.586L15.414,8l-4,4l4,4L14,17.414z"
                fill="#0070f3"
              ></path>
            </g>
          </svg>
        </span>
        <span style={{ textDecoration: 'none', color: '#0070f3' }}>
          Previous
        </span>
      </Link>
      <Link
        href={next}
        className={cn(
          'justify-self-end',
          'inline-flex items-center justify-center h-10 px-7 shadow-[0_4px_14px_0_rgba(0,118,255,0.39)] hover:shadow-[0_6px_20px_rgba(0,118,255,0.23)] bg-[#0070f3] hover:bg-[rgba(0,118,255,0.9)] transition-all duration-500 ease-in-out rounded-[7px] leading-10'
        )}
      >
        <span style={{ textDecoration: 'none', color: '#fff' }}>
          Next Lesson
        </span>
      </Link>
    </div>
  )
}
