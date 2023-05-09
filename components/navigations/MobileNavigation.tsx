import { ExoticComponent, ReactNode } from "react"
import { Disclosure, Transition } from "@headlessui/react"
import { motion } from "framer-motion"

import { Menu } from "types"

interface Props {
  fragment: ExoticComponent<{
    children?: ReactNode | undefined
  }>
  menu: Menu[]
}
const containerVariants = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
}
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}
export function MobileNavigation({ fragment, menu }: Props) {
  return (
    <>
      <Transition
        as={fragment}
        enter="transition ease-out duration-300"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-300"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Disclosure.Panel className="border-t border-dashed border-gray-600 dark:border-neutral-600 lg:hidden">
          <motion.div
            className="px-3"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {menu.map((item) => (
              <Disclosure.Button key={item.idx} as="a" href={item.url}>
                <motion.div
                  className="group -mx-3 flex items-center gap-x-6 border-b border-dashed border-gray-600 p-3 text-base font-semibold leading-7 text-gray-600 hover:bg-gray-50 hover:text-blue-600 dark:border-neutral-600 dark:text-white dark:hover:bg-neutral-800 dark:hover:text-orange-500"
                  variants={itemVariants}
                >
                  <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white dark:bg-neutral-600 dark:group-hover:bg-neutral-700">
                    <item.icon
                      className="h-6 w-6 text-gray-600 group-hover:text-blue-600 dark:text-white dark:group-hover:text-orange-500"
                      aria-hidden="true"
                    />
                  </div>

                  {item.title}
                </motion.div>
              </Disclosure.Button>
            ))}
          </motion.div>
        </Disclosure.Panel>
      </Transition>
    </>
  )
}