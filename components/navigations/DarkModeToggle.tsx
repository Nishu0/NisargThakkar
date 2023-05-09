"use client"

import React from "react"
import { Switch } from "@headlessui/react"

import { cn } from "@libs/utils"

export function DarkModeToggle() {
  const [darkMode, setDarkMode] = React.useState(false)
  React.useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme:dark)").matches)
    ) {
      document.documentElement.classList.add("dark")
      localStorage.theme = "dark"
      setDarkMode(!darkMode)
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.theme = "light"
    }
  }, [])

  const changeTheme = () => {
    localStorage.theme = darkMode ? "light" : "dark"
    setDarkMode(!darkMode)
    if (darkMode) {
      document.documentElement.classList.remove("dark")
    } else {
      document.documentElement.classList.add("dark")
    }
  }

  return (
    <div className="relative flex items-center space-x-4">
      <Switch
        onChange={changeTheme}
        checked={darkMode ? true : false}
        className={cn(
          "relative inline-flex items-center rounded-full py-1.5 px-2 shadow-sm shadow-gray-400/50 transition-colors duration-500 focus:outline-none focus-visible:ring-2",
          { "bg-neutral-600 focus-visible:ring-orange-500": darkMode },
          {
            "bg-white ring-1 ring-gray-200/50 focus-visible:ring-blue-500":
              !darkMode,
          }
        )}
      >
        <span className="sr-only">Disable dark mode</span>
        <svg
          width="24"
          height="24"
          fill="none"
          aria-hidden="true"
          className={cn(
            "text-white transition-transform duration-500",
            { "scale-100": darkMode },
            { "scale-0": !darkMode }
          )}
        >
          <path
            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M12 4v1M18 6l-1 1M20 12h-1M18 18l-1-1M12 19v1M7 17l-1 1M5 12H4M7 7 6 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>

        <svg
          width="24"
          height="24"
          fill="none"
          aria-hidden="true"
          className={cn(
            "ml-3.5 text-gray-400 transition-transform duration-500",
            { "scale-0": darkMode },
            { "scale-100": !darkMode }
          )}
        >
          <path
            d="M18 15.63c-.977.52-1.945.481-3.13.481A6.981 6.981 0 0 1 7.89 9.13c0-1.185-.04-2.153.481-3.13C6.166 7.174 5 9.347 5 12.018A6.981 6.981 0 0 0 11.982 19c2.67 0 4.844-1.166 6.018-3.37ZM16 5c0 2.08-.96 4-3 4 2.04 0 3 .92 3 3 0-2.08.96-3 3-3-2.04 0-3-1.92-3-4Z"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
        <span
          className={cn(
            "absolute top-0.5 left-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm shadow-gray-400/80 transition duration-500",
            { "translate-x-[2.625rem]": darkMode }
          )}
        >
          <svg
            width="24"
            height="24"
            fill="none"
            aria-hidden="true"
            className={cn(
              "flex-none text-gray-500 transition duration-300",
              { "scale-0 opacity-0": darkMode },
              { "scale-100 opacity-100": !darkMode }
            )}
          >
            <path
              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M12 4v1M18 6l-1 1M20 12h-1M18 18l-1-1M12 19v1M7 17l-1 1M5 12H4M7 7 6 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
          <svg
            width="24"
            height="24"
            fill="none"
            aria-hidden="true"
            className={cn(
              "-ml-6 flex-none text-neutral-600 transition duration-500",
              { "scale-100 opacity-100": darkMode },
              { "scale-0 opacity-0": !darkMode }
            )}
          >
            <path
              d="M18 15.63c-.977.52-1.945.481-3.13.481A6.981 6.981 0 0 1 7.89 9.13c0-1.185-.04-2.153.481-3.13C6.166 7.174 5 9.347 5 12.018A6.981 6.981 0 0 0 11.982 19c2.67 0 4.844-1.166 6.018-3.37ZM16 5c0 2.08-.96 4-3 4 2.04 0 3 .92 3 3 0-2.08.96-3 3-3-2.04 0-3-1.92-3-4Z"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </span>
      </Switch>
    </div>
  )
}