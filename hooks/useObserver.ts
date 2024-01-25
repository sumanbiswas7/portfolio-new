import { RefObject, useEffect, useState } from "react";

export default function useObserver(elementRef: RefObject<HTMLElement>) {
   const [visible, setVisible] = useState(false);

   useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
         const entry = entries[0];
         if (entry.isIntersecting) setVisible(true);
         else setVisible(false);
      });
      observer.observe(elementRef.current!);
   }, []);

   return [visible];
}
