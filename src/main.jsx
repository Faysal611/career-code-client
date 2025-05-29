import { createRoot } from "react-dom/client";
import Layout from "./Layout";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./Home";
import Alljobs from "./Alljobs";
import Contact from "./Contact";
import About from "./About";

const router = createBrowserRouter([
    {
        Component: Layout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: "/alljobs",
                Component: Alljobs
            },
            {
                path: "/contact",
                Component: Contact
            },
            {
                path: "/aboutus",
                Component: About
            }
        ]
    }
])

createRoot(document.getElementById("root")).render(
    <RouterProvider router={router}></RouterProvider>
)