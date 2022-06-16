import React, { useState } from "react";
const Modal = () => {
  const [show, setShow] = useState(true);
  return (
    <div>
      <div>
        {show && (
          <div
            className="absolute top-0 bottom-0 left-0 right-0 z-10 py-12 transition duration-150 ease-in-out bg-gray-700 dark:bg-gray-900"
            id="modal"
          >
            <div
              role="alert"
              className="container w-11/12 max-w-lg mx-auto md:w-2/3"
            >
              <div className="relative px-8 py-8 bg-white border border-gray-400 rounded shadow-md md:px-16 dark:bg-gray-800 dark:border-gray-700">
                <div className="flex justify-center w-full mb-4 text-green-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-circle-check"
                    width={56}
                    height={56}
                    viewBox="0 0 24 24"
                    strokeWidth={1}
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <circle cx={12} cy={12} r={9} />
                    <path d="M9 12l2 2l4 -4" />
                  </svg>
                </div>
                <h1 className="mb-4 font-bold leading-tight tracking-normal text-center text-gray-800 dark:text-gray-100 font-lg">
                  Payment Processing Successful
                </h1>
                <p className="mb-5 text-sm font-normal text-center text-gray-600 dark:text-gray-400">
                  Thank you for your payment. An automated payment receipt will
                  be sent to your email. Check the action below for more
                  details.
                </p>
                <div className="flex items-center justify-center w-full">
                  <button className="px-4 py-2 text-xs text-white transition duration-150 ease-in-out bg-indigo-700 rounded focus:outline-none hover:bg-indigo-600 sm:px-8 sm:text-sm">
                    Manage Plan
                  </button>
                  <button
                    className="px-8 py-2 ml-3 text-sm text-gray-600 transition duration-150 ease-in-out bg-gray-100 border rounded focus:outline-none dark:bg-gray-700 dark:border-gray-700 dark:hover:bg-gray-600 dark:text-gray-400 hover:border-gray-400 hover:bg-gray-300"
                    onClick={() => setShow(!show)}
                  >
                    Cancel
                  </button>
                </div>
                <div
                  className="absolute top-0 right-0 mt-4 mr-5 text-gray-400 transition duration-150 ease-in-out cursor-pointer hover:text-gray-600 dark:hover:text-gray-500"
                  onClick={() => setShow(!show)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="Close"
                    className="icon icon-tabler icon-tabler-x"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <line x1={18} y1={6} x2={6} y2={18} />
                    <line x1={6} y1={6} x2={18} y2={18} />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="flex justify-center w-full py-12" id="button">
          <button
            className="px-4 py-2 mx-auto text-xs text-white transition duration-150 ease-in-out bg-indigo-700 rounded focus:outline-none hover:bg-indigo-600 sm:px-8 sm:text-sm"
            onClick={() => setShow(!show)}
          >
            Open Modal
          </button>
        </div>
      </div>
    </div>
  );
};
export default Modal;
