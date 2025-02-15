import { useEffect, useState } from "react";

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-white text-4xl font-mono p-6 bg-gray-800 rounded-xl shadow-lg hover:scale-110 transition-all duration-150 ease-in-out">
      {time.toLocaleTimeString()}
    </div>
  );
};

export default DigitalClock;
