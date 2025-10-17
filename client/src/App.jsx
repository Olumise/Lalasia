import { useState } from "react";

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import MainWebsite from "./components/layout/MainWebsite";
import Homepage from "./components/pages/Homepage";
import About from "./components/pages/About";
import Articles from "./components/pages/Articles";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";


const router = createBrowserRouter([
		{
			path: "/",
			element: <MainWebsite />,
			children: [
				{
					index: true,
					element: <Homepage />,
				},
				{ path: "home", element: <Homepage /> },
				{ path: "about", element: <About /> },
				{ path: "articles", element: <Articles /> },
				{ path: "services", element: <Services /> },
				{ path: "products", element: <Products /> },
				
        
			],
		},
	]);


function App() {
	
	return <RouterProvider router={router}  />;
}

export default App;
