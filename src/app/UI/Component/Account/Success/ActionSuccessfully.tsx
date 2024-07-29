import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const ActionSuccessfully = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 ">
      <div className="bg-white p-4 rounded shadow-lg flex items-center">
        <FaCheckCircle className="text-green-500 mr-2" size={24} />
        <p>{children}</p>
      </div>
    </div>
  );
};

export default ActionSuccessfully;
