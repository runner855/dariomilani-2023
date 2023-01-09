import { BsGithub } from "react-icons/bs";
import { GrLinkedin } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa"
import { MdEmail } from "react-icons/md"

export const NavElements = [
  {navelement: "About" , to: "/about"},
  {navelement: "Projects", to: "/projects"},
  {navelement: "Contact", to: "/contact"}
]

export const FooterElements = [
  {FooterIcon: BsGithub, to:"https://github.com/runner855"},
  {FooterIcon: GrLinkedin, to:"https://www.linkedin.com/in/dario-milani-302472132/"},
  {FooterIcon: FaTwitter, to: "https://twitter.com/runner855"},
  {FooterIcon: MdEmail, to: "mailto=runner855@icloud.com"}
]