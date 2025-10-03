import React from "react";

interface BackgroundLayoutProps {
  backgroundImage: string;
  children: React.ReactNode;
}

const BackgroundLayout: React.FC<BackgroundLayoutProps> = ({
  backgroundImage,
  children,
}) => {
  const style: React.CSSProperties = {
    position: "relative",
    width: "100%",
    minHeight: "100vh",
    color: "#fff",
    background: `linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(${backgroundImage}) center/cover no-repeat`,
  };

  return (
    <div style={style}>
      <div style={{ position: "absolute", top: 20, left: 20, zIndex: 10 }}>
        <h1>KORD</h1>
        <h2>POLLETO</h2>
      </div>
      <div style={{ position: "relative", zIndex: 5 }}>{children}</div>
    </div>
  );
};

export default BackgroundLayout;
