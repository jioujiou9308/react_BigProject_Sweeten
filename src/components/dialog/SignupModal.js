import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { openSignup } from "../../utils/redux/modalSlice";
import Signup from "./Signup";
const SignupModal = () => {
  const modal = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const handleOpen = () => dispatch(openSignup());

  return (
    <>
      {modal.signup && (
        <>
          <div
            className="fixed inset-0 transition-opacity bg-[#000] z-50 bg-opacity-60"
            onClick={handleOpen}
          ></div>
          <motion.div
            initial={{ top: "30%", opacity: 0 }}
            animate={{ top: "40%", opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="fixed z-50 flex flex-col items-center justify-between w-full -translate-x-1/2 -translate-y-1/2 bg-white md:rounded md:w-3/4 xl:w-1/2 inset-x-1/2 "
          >
            <Signup />
          </motion.div>
        </>
      )}
    </>
  );
};

export default SignupModal;
