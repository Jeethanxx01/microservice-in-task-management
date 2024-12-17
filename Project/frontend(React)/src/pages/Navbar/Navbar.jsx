import React from "react";
import "./Navbar.css";
import { Avatar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const dispatch=useDispatch()
  const {auth}=useSelector(store=>store)
  return (
    <div className="container z-10 sticky left-0 right-0 top-0 py-3 px-5 lg:px-10 flex justify-between items-center">
      <p className="font-bold text-lg">SJEC TEAM M-BAJA</p>
      <div className="flex items-center gap-5">
        <p className="font-semibold text-lgx">{auth.user.fullName}</p>
        <Avatar
          alt="Remy Sharp"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXdF5C2lOWqFR1M6v_FZtYzr5MLpESDFMfnw&s"
        />
      </div>
    </div>
  );
};

export default Navbar;
