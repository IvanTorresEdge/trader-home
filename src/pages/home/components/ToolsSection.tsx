import { LinkIcon } from "@heroicons/react/24/outline"
import * as React from "react"

const tools = [
  {
    name: "Forex Market Snapshot",
    href: "https://marketmilk.babypips.com/",
  },
  {
    name: "Forex Market Hours",
    href: "https://www.babypips.com/tools/forex-market-hours",
  },
  {
    name: "Sentiment",
    href: "https://www.dailyfx.com/sentiment",
  },
  {
    name: "Forex Correlation",
    href: "https://www.mataf.net/en/forex/tools/correlation",
  },
]

const ToolsSection = () => (
  <div className="p-24 px-12 mx-auto max-w-7xl rounded-md border-gray-200 bg-white border mb-6">
    <div className="grid grid-cols-8 gap-12">
      <h2 className="col-span-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        The Tools.
      </h2>
      <div className="col-span-6">
        <div className="grid grid-cols-2">
          {tools.map((bookmark) => (
            <div key={bookmark.name} className="mb-6">
              <dt>
                <LinkIcon
                  className="absolute mt-1 h-6 w-6 text-indigo-600"
                  aria-hidden="true"
                />
                <p className="ml-10 text-lg font-medium leading-8 text-gray-900">
                  {bookmark.name}
                </p>
              </dt>
              <dd className="ml-10 text-base leading-7 text-gray-600">
                {(Array.isArray(bookmark.href)
                  ? bookmark.href
                  : [bookmark.href]
                ).map((href) => (
                  <a
                    href={href}
                    target="_blank"
                    className="ellipsis block cursor-pointer truncate font-medium text-indigo-500 underline hover:text-indigo-400"
                  >
                    {href}
                  </a>
                ))}
              </dd>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
)

export default ToolsSection
