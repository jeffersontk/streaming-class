import { Route, Routes } from "react-router-dom";
import { PlayList } from "./Pages/PlayList";
import { Subscribe } from "./Pages/Subscribe"

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Subscribe />} />
      <Route path="/playlist" element={<PlayList />} />
      <Route path="/playlist/lesson/:slug" element={<PlayList />} />
    </Routes>
  )
}