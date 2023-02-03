import { LinkIcon } from "@heroicons/react/24/outline"
import * as React from "react"

const news = [
  {
    name: "Bloomberg",
    href: "https://www.bloomberg.com",
  },
  {
    name: "Decrypt",
    href: "https://decrypt.co/",
  },
  {
    name: "CoinTelegraph",
    href: "https://cointelegraph.com/",
  },
  {
    name: "CoinDesk",
    href: "https://www.coindesk.com/",
  },
]

const NewsSection = () => (
  <div className="p-24 px-12 mx-auto max-w-7xl rounded-md border-gray-200 bg-white border mb-6">
    <div className="grid grid-cols-8 gap-12">
      <h2 className="col-span-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        The News.
      </h2>
      <div className="col-span-6">
        <div className="grid grid-cols-2">
          {news.map((site) => (
            <div key={site.name} className="mb-6">
              <dt>
                <LinkIcon
                  className="absolute mt-1 h-6 w-6 text-indigo-600"
                  aria-hidden="true"
                />
                <p className="ml-10 text-lg font-medium leading-8 text-gray-900">
                  {site.name}
                </p>
              </dt>
              <dd className="ml-10 text-base leading-7 text-gray-600">
                {(Array.isArray(site.href) ? site.href : [site.href]).map(
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

export default NewsSection
