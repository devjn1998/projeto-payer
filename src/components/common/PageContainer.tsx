import React from "react";
import { useLocation } from "react-router-dom";

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
}

const PageContainer: React.FC<PageContainerProps> = ({
  children,
  className = "",
}) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className={`${!isHomePage ? "pt-[70px]" : ""} ${className}`}>
      {children}
    </div>
  );
};

export default PageContainer;
