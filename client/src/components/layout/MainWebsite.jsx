import React from "react";
import { Outlet, useNavigation } from "react-router";
import Navbar from "../ui/Navbar";
import { Toaster } from "@/components/ui/sonner"

const MainWebsite = () => {
	return (
		<div className=" bg-screen-100 w-full">
      <Toaster position="top-center" />
			<Navbar />
			<Outlet />
       
		</div>
	);
};

export default MainWebsite;
