import React from "react";
import AddComment from "./AddComment";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { openAddComment } from "../../utils/redux/modalSlice";
import { motion } from "framer-motion";

function AddCommentModal() {
  const modal = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const handleOpen = () => dispatch(openAddComment());
  return (
    <>
      {modal.addComment && (
        <>
          <div
            className="fixed inset-0 transition-opacity bg-[#000] z-50 bg-opacity-60"
            onClick={handleOpen}
          ></div>
          <motion.div
            initial={{ top: "30%", opacity: 0 }}
            animate={{ top: "40%", opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="fixed z-50 flex flex-col items-center justify-between w-full overflow-auto -translate-x-1/2 -translate-y-1/2 bg-white max-h-[70vh] md:rounded md:w-3/4 xl:w-1/2 inset-x-1/2 px-10"
          >
            <div>
              <h4 className="pt-5 pb-1 mb-4 border-b h2">已完成訂單</h4>
            </div>
            <AddComment order={modal.payload} />
          </motion.div>
        </>
      )}
    </>
  );
}

export default AddCommentModal;
