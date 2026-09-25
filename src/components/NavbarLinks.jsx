import { CodeXml, FolderOpenDot, House, Mail, UserRound } from "lucide-react";
const navLinks = [
  {
    id: 1,
    name: "Home",
    icon: <House />,
    path: "#hero",
  },
  {
    id: 2,
    name: "About",
    icon: <UserRound />,
    path: "#about",
  },
  {
    id: 3,
    name: "Skills",
    icon: <CodeXml />,
    path: "#skills",
  },
  {
    id: 4,
    name: "Projects",
    icon: <FolderOpenDot />,
    path: "#projects",
  },
  {
    id: 5,
    name: "Contact",
    icon: <Mail />,
    path: "#contact",
  },
];

export default navLinks;
