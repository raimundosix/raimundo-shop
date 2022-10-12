import { motion } from "framer-motion";
import Link from "next/link";
import { fadeIn, staggerContainer } from "variants";

const TextContainer = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className="textContainer"
    >
      {/* upper */}
      <div className="textContainer-top">
        <motion.span variants={fadeIn()} className="text-yellow-300">
          CONFIRA JÁ NOSSOS PAINÉIS
        </motion.span>
        <motion.span variants={fadeIn()} className="first-letter:text-5xl">
          10 /10
        </motion.span>
      </div>
      {/* //text */}
      <div className="textContainer-middle">
        <motion.span variants={fadeIn()} initial="initial" animate="animate">
          CASSA SIX
        </motion.span>
      </div>
      {/* lower */}
      <div className="textContainer-bottom">
        <Link href="https://api.whatsapp.com/send?phone=14703333458">
          <motion.button variants={fadeIn()}>
            💳 TEMOS +5000 CC 💎
          </motion.button>
        </Link>
        <motion.p variants={fadeIn()}>
          As <span> melhores consultas </span> <br /> apenas aqui!
        </motion.p>
      </div>
    </motion.div>
  );
};

export default TextContainer;
