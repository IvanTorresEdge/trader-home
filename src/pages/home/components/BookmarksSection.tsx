import { LinkIcon } from "@heroicons/react/24/outline"
import * as React from "react"

// const currentDate = new Date()

// // calculate the week number for the current date
// // source: https://weeknumber.net/how-to/javascript
// const calculateWeekNumber = (d: Date): number => {
//   // Copy date so don't modify original
//   d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()))
//   // Set to nearest Thursday: current date + 4 - current day number
//   // Make Sunday's day number 7
//   d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7))
//   // Get first day of year
//   const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1))
//   // Calculate full weeks to nearest Thursday
//   const weekNo = Math.ceil(
//     ((d.getTime() - yearStart.getTime()) / 86400000 + 1) / 7
//   )
//   // Return array of year and week number
//   return weekNo
// }

const bookmarks = [
  {
    name: "Fear & Greed Index",
    href: "https://edition.cnn.com/markets/fear-and-greed",
  },
  {
    name: "Heatmap",
    href: ["https://finviz.com/map.ashx", "https://finviz.com/map.ashx?t=geo"],
  },
  {
    name: "Sectors",
    href: "https://finviz.com/groups.ashx",
  },
  {
    name: "Economic Calendar",
    href: "https://www.babypips.com/economic-calendar",
  },
]

const BookmarksSection = () => (
  <div className="p-24 px-12 mx-auto max-w-7xl rounded-md border-gray-200 bg-white border mb-6">
    <div className="grid grid-cols-8 gap-12">
      <h2 className="col-span-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Trading Warmup.
      </h2>
      <div className="col-span-6">
        <div className="grid grid-cols-2">
          {bookmarks.map((link) => (
            <div key={link.name} className="mb-6">
              <dt>
                <LinkIcon
                  className="absolute mt-1 h-6 w-6 text-indigo-600"
                  aria-hidden="true"
                />
                <p className="ml-10 text-lg font-medium leading-8 text-gray-900">
                  {link.name}
                </p>
              </dt>
              <dd className="ml-10 text-base leading-7 text-gray-600">
                {(Array.isArray(link.href) ? link.href : [link.href]).map(
                  (href) => (
                    <a
                      href={href}
                      target="_blank"
                      className="ellipsis block cursor-pointer truncate font-medium text-indigo-500 underline hover:text-indigo-400"
                    >
                      {href}
                    </a>
                  )
                )}
              </dd>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
)

export default BookmarksSection
