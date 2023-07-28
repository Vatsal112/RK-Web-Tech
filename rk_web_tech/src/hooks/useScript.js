import { useEffect } from "react";

export const useScript = (text, depen) => {
  useEffect(() => {
    console.log("mounted");
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.textContent = `${text}`;
    document.body.appendChild(script);
    return () => {
      console.log("unmounted");
      document.body.removeChild(script);
      console.log(script);
    };
  }, [depen && depen]);
};
