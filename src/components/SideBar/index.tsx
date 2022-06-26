import { ReactElement } from "react";
import { Lesson } from "../Lesson";
import { useGetLessonsQuery } from "../../graphql/generated";

export const SideBar = (): ReactElement => {
  const { data } = useGetLessonsQuery()

  return (
    <aside className=" border-l border-green-500 p-4">
      <span className="font-bold text-2xl pb-4 mb-4 border-b border-green-500 block">
        PlayList - ReactJS
      </span>

      <div className="flex flex-col gap-8 max-h-[80vh] overflow-y-auto">
        {data?.lessons.map(lesson => {
          return (
            <Lesson
              key={lesson.id}
              channel={lesson.channel || ''}
              tag={lesson.tag || ''}
              title={lesson.title}
              description={lesson.description || ''}
              slug={lesson.slug || ''}
              typeClass={lesson.typeClass || 'practice'}
            />
          )
        })}
      </div>
    </aside>
  )
}