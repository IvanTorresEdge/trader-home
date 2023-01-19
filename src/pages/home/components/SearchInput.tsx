import * as React from "react"
import { ChangeEvent, FormEvent, useState } from "react"

const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState("")

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    window.location.href = `https://www.google.com/search?q=${searchTerm}`
  }

  return (
    <div className="p-24 px-12 mx-auto max-w-7xl rounded-md border-gray-200 bg-white border my-6">
      <form className="w-full flex justify-center" onSubmit={handleSubmit}>
        <input
          id="search"
          name="search"
          type="text"
          required
          autoComplete="on"
          className="rounded-md border border-gray-300 px-5 py-3 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 w-2/3"
          placeholder="Google search..."
          onChange={handleChange}
        />
        <div className="ml-3 rounded-md shadow flex-shrink">
          <button
            type="submit"
            className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-5 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 max-w-2xl"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  )
}

export default SearchInput
