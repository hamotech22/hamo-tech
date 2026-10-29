import { motion } from "framer-motion";

const motionElements = {
  article: motion.article,
  div: motion.div,
  header: motion.header,
  h1: motion.h1,
  p: motion.p,
  section: motion.section,
};

export default function Reveal({
  as = "div",
  delay = 0,
  duration = 0.5,
  offset = 10,
  children,
  ...props
}) {
  const MotionElement = motionElements[as];

  if (!MotionElement) {
    throw new Error(`Unsupported reveal element: ${as}`);
  }

  return (
    <MotionElement
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: false,
        amount: "some",
        margin: `0px 0px -${offset}px 0px`,
      }}
      transition={{ duration, ease: [0.33, 1, 0.68, 1], delay }}
      {...props}
    >
      {children}
    </MotionElement>
  );
}
