import { useEffect, useRef } from "react";

type Props = {
  color: string;
};

const BackgroundChanger: React.FC<Props> = ({ color }) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight / 2;

        if (isVisible) {
          document.documentElement.style.setProperty("--bg-color1", color);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <div ref={sectionRef} className="trigger"></div>
    </div>
  );
};

export default BackgroundChanger;
