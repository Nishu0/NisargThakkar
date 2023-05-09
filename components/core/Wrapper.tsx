import { FC, ReactNode } from "react"
import { cn } from "@/libs/utils"

interface WrapperProps {
  children: ReactNode
  className?: string
}

const Wrapper: FC<WrapperProps> = ({ children, className = "" }) => {
  return (
    <>
      <div
        className={cn(
          "min-h-full bg-white font-sans antialiased selection:bg-blue-500/10 selection:text-blue-500 dark:bg-slate-800 dark:selection:bg-sky-500/10 dark:selection:text-sky-500",
          className
        )}
      >
        {children}
      </div>
    </>
  )
}

export default Wrapper
