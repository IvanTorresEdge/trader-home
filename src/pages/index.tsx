import type { HeadFC, PageProps } from "gatsby"
import * as React from "react"

import BookmarksSection from "./home/components/BookmarksSection"
import NewsSection from "./home/components/NewsSection"
import SearchInput from "./home/components/SearchInput"
import ToolsSection from "./home/components/ToolsSection"

const currentDate = new Date()

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="antialiased">
      <SearchInput />
      <BookmarksSection />
      <NewsSection />
      <ToolsSection />
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Trader Home</title>
