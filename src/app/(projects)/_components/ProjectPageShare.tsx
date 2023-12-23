import { ButtonThemed } from "@/app/_global_components";
import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin, FaXTwitter, FaFacebook } from "react-icons/fa6";

export default function ProjectPageShare(project: any) {
  return (
    <div className="rounded-xl max-w-full bg-white dark:bg-custom-dark-3 overflow-hidden shadow ring-1 ring-custom-gray-1 dark:ring-custom-dark-2 p-5">
      <h2 className="text-md font-normal leading-relaxed text-custom-dark-2 dark:text-gray-50">Share This Project</h2>
      <ul className="flex flex-row py-5 border-b border-custom-dark-link dark:border-custom-dark-1">
        <li className="text-2xl mr-7 hover:text-custom-blue transition ease delay-100 dark:hover:text-custom-blue dark:text-custom-dark-text text-custom-gray-link">
          <Link href={""}>
            <FaLinkedin />
          </Link>
        </li>
        <li className="text-2xl mr-7 hover:text-custom-blue transition ease delay-100 dark:hover:text-custom-blue dark:text-custom-dark-text text-custom-gray-link">
          <Link href={""}>
            <FaFacebook />
          </Link>
        </li>
        <li className="text-2xl mr-7 hover:text-custom-blue transition ease delay-100 dark:hover:text-custom-blue dark:text-custom-dark-text text-custom-gray-link">
          <Link href={""}>
            <FaXTwitter />
          </Link>
        </li>
      </ul>
        <ButtonThemed 
            color="gray" 
            size="md"
            as={Link}
            radius="sm"
            href="/projects"
            className="w-full mt-4"
            >
            Back To All Projects
        </ButtonThemed>
    </div>
  )
}
