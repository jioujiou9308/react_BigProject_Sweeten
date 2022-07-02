import React from 'react';
import { RiCustomerService2Fill } from 'react-icons/ri';
import { IconButton } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';

const FloatingBt = () => {
    const navigate = useNavigate();
  return (
    <div className="h-full">
      <IconButton type="file" variant="text" className=" mt-10 mx-32 float-left"  onClick={() => {
                  navigate('/main/customerService');
                }}>
        <RiCustomerService2Fill className="icon-lg" color="gray" />
      </IconButton>
    </div>
  );
};

export default FloatingBt;
