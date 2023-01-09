import { FaBeer } from 'react-icons/fa';
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
  {FooterIcon: GrLinkedin, to:""},
  {FooterIcon: FaTwitter, to: ""},
  {FooterIcon: MdEmail, to: ""}
]