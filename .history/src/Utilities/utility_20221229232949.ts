import { BsGithub } from "react-icons/bs";
import { GrLinkedin } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa"
import { MdEmail } from "react-icons/md";
import { mailto } from "react-mailto";
import { RiHome2Fill } from "react-icons/ri";


export const NavElements = [
  {navelement: RiHome2Fill, to:"/"},
  {navelement: "About" , to: "/about"},
  {navelement: "Projects", to: "/projects"},
  {navelement: "Contact", to: "/contact"}
]

export const FooterElements = [
  {FooterIcon: BsGithub, href:"https://github.com/runner855"},
  {FooterIcon: GrLinkedin, href:"https://www.linkedin.com/in/dario-milani-302472132/"},
  {FooterIcon: FaTwitter, href: "https://twitter.com/runner855"},
  {FooterIcon: MdEmail, href: "mailto:runner855@icloud.com"}
]