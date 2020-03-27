import React, { useEffect, useState } from "react";
import Meta from "../components/Meta";

export default () => {
  const [height, setHeight] = useState("100vh" as any);
  useEffect(() => {
    setHeight(window.innerHeight);
  }, []);

  return (
    <div className="w-screen" style={{ height }}>
      <Meta />
      <iframe
        width="100%"
        height="100%"
        src="https://co-confines.ushahidi.io/views/map"
        frameBorder={0}
        allowFullScreen={true}
      ></iframe>
    </div>
  );
};
