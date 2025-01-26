import { DcPage, HeroPage, MarvelPage, SearchPage } from "../pages"

export const HeroesRouter = [
  { path: 'marvel', element: <MarvelPage />},
  { path: 'dc', element: <DcPage />},
  { path: 'search', element: <SearchPage />},
  { path: 'hero/:id', element: <HeroPage />},
]
