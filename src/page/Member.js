import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles.css";
import { useState } from "react";

const items = [
  {
    id: 1,
    subtitle: "subtitle",
    title: "title",
  },
  {
    id: 2,
    subtitle: "subtitle",
    title: "title",
  },
  {
    id: 3,
    subtitle: "subtitle",
    title: "title",
  },
];

function Member() {
  const [selectedId, setSelectedId] = useState(null);
  return (
    <div className="border-2 ">
      {items.map((item) => (
        <motion.div layoutId={item.id} onClick={() => setSelectedId(item.id)}>
          <motion.h5>{item.subtitle}</motion.h5>
          <motion.h2>{item.title}</motion.h2>
        </motion.div>
      ))}

      <AnimatePresence>
        {selectedId && (
          <motion.div layoutId={selectedId}>
            <motion.h5></motion.h5>
            <motion.h2>=123</motion.h2>
            <motion.button onClick={() => setSelectedId(null)}>x</motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Member;
