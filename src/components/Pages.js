import AboutPage from "./about/AboutPage";
import BlogPage from "./blogs/BlogPage";
import ServicePage from "./services/ServicePage";
import React from "react";
export default function Pages() {
  const pages = [
    {
      id: 0,
      name: "Services",
      element: <ServicePage />,
      path: "/services",
      exact: false,
    },
    {
      id: 1,
      name: "About",
      element: <AboutPage />,
      path: "/about",
      exact: false,
    },
    {
      id: 2,
      name: "Blogs",
      element: <BlogPage />,
      path: "/blogs",
      exact: false,
    },
  ];
  return pages;
}
