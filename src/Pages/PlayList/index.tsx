import { ReactElement } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../../components/Header";
import { SectionPlayer } from "../../components/SectionPlayer";
import { SideBar } from "../../components/SideBar";

export const PlayList = (): ReactElement => {
  const { slug } = useParams<{ slug: string }>()

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1 justify-center">
        <main className="w-full max-w-screen-2xl flex ">
          {
            slug
              ? <SectionPlayer lessonSlug={slug} />
              : <div className="flex-1"></div>
          }
          <SideBar />
        </main>
      </div>
    </div>
  )
}