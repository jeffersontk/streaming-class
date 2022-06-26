import { ReactElement } from "react";
import { Link, useParams } from "react-router-dom";
import classNames from 'classnames'

interface LessonProps {
  tag: string;
  title: string;
  description: string;
  slug: string;
  channel: string;
  typeClass: 'theory' | 'practice';
}

export const Lesson = (props: LessonProps): ReactElement => {
  const { slug } = useParams<{ slug: string }>()
  const { title, description, tag, channel, typeClass } = props

  const isActiveLesson = slug === props.slug

  return (
    <Link to={`/playlist/lesson/${props.slug}`} className="mr-2">
      <a
        className="text-gray-300 hover:text-green-500"
        href={`https://www.youtube.com/c/${channel}`}
        target="_blank"
      >
        @{channel}
      </a>
      <div
        className={classNames('rounded p-4 mt-2', {
          'bg-green-500 border border-green-500 hover:border-transparent': isActiveLesson,
          'border border-gray-300 hover:border-green-500': !isActiveLesson
        })}
      >
        <header className="flex item-center justify-between mb-2">
          <strong className="text-md text-white font-medium">
            {tag}
          </strong>
          <span className={classNames('text-sm rounded py-[0.125rem] px-2 text-white border border-gray-300 font-bold', {
            'border-white': isActiveLesson
          })}>
            {typeClass === 'theory' ? 'AULA TEÓRICA' : 'AULA PRATICA'}
          </span>
        </header>
        <div className="flex flex-col gap-2 max-w-[280px]">
          <span className={classNames('text-ellipsis whitespace-nowrap overflow-hidden', {
            'text-white': isActiveLesson,
            'text-gray-200': !isActiveLesson
          })}>
            {title}
          </span>
          <span className={classNames('text-sm text-ellipsis whitespace-nowrap overflow-hidden', {
            'text-white': isActiveLesson,
            'text-gray-200': !isActiveLesson
          })}>
            {description}
          </span>
        </div>
      </div>
    </Link>
  )
}