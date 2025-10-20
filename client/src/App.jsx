import { useState } from "react";

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import MainWebsite from "./components/layout/MainWebsite";
import Homepage from "./components/pages/Homepage";
import About from "./components/pages/About";
import Articles from "./components/pages/Articles";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import ComponentPreview from "./components/ui/ComponentPreview";

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
			{ path: "component-preview", element: <ComponentPreview /> },

		],
	},
]);
const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />;
		</QueryClientProvider>
	);
}

export default App;
