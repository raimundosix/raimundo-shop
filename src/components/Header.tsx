import { motion } from "framer-motion";
import Link from "next/link";
import { fadeIn } from "variants";
import { BsWhatsapp } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";

const Header = () => {
  return (
    <motion.nav
      variants={fadeIn("down")}
      initial="initial"
      animate="animate"
      className="header"
    >
      <Link href="/">
        <span className="header-logo cursor-pointer">CASSASIX</span>
      </Link>
      <ul className="font-bold">
        <Link href="/">
          <li className="cursor-pointer hover:text-red-500">ÍNICIO</li>
        </Link>
        <Link href="/paineis">
          <li className="cursor-pointer hover:text-red-500">
            PAINEL DE CONSULTA
          </li>
        </Link>
        <li></li>
      </ul>

      <div className="flex gap-2 items-center">
        <Link href="https://api.whatsapp.com/send?phone=14703333458">
          <a target="_blank">
            <button className="header-whatsapp">
              <BsWhatsapp size={24} />
              <span>ESTOU INTERESSADO</span>
            </button>
          </a>
        </Link>

        <Link href="https://t.me/CassaSixOficial">
          <a target="_blank">
            <button
              className="hidden p-2 md:block md:p-3 rounded-full md:rounded-sm hover:opacity-95 transition-all"
              style={{ backgroundColor: "#0088cc" }}
            >
              <FaTelegramPlane size={24} />
            </button>
          </a>
        </Link>
      </div>

      <div className="flex gap-2 items-center">
        <Link href="/paineis">
          <button className="header-user2 items-center">
            <span className="text-sm">PAINÉIS</span>
          </button>
        </Link>

        <Link href="https://api.whatsapp.com/send?phone=14703333458">
          <a target="_blank">
            <button className="header-user">
              <BsWhatsapp size={24} />
            </button>
          </a>
        </Link>

        <Link href="https://t.me/CassaSixOficial">
          <a target="_blank">
            <button
              className="block p-2 md:hidden md:p-3 rounded-full md:rounded-sm hover:opacity-95 transition-all"
              style={{ backgroundColor: "#0088cc" }}
            >
              <FaTelegramPlane size={24} />
            </button>
          </a>
        </Link>
      </div>
    </motion.nav>
  );
};

export default Header;
