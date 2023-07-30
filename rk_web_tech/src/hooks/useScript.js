import { useEffect } from "react";

export const useScript = (text, depen) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.textContent = `${text}`;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, [depen]);
};
