import React from 'react';
import { RiCustomerService2Fill } from 'react-icons/ri';
import { IconButton } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';

const FloatingBt = () => {
  const navigate = useNavigate();
  return (
    <div className=" fixed bottom-3 bg-primary rounded-full right-3 ">
      <IconButton
        type="file"
        variant="text"
        onClick={() => {
          navigate('/main/customerService');
        }}
      >
        <RiCustomerService2Fill className="icon-lg" color="gray" />
      </IconButton>
    </div>
  );
};

export default FloatingBt;
