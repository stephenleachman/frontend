import { ThemeToggler } from "@/app/_global_components";

export default function Header() {
  return (
    
    <div className="fixed w-full top-0 rounded-b-xl shadow ring-1 ring-custom-gray-1 dark:ring-custom-dark-2 bg-white dark:bg-custom-dark-3  flex flex-col-reverse xl:flex-row p-5 overflow-hidden z-50">
      <div className="flex flex-row justify-between ">
        <ThemeToggler />
      </div>
    
    </div>
  )
}
