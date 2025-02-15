# Digital Clock - React Machine Code

<div align="center">

<img src="https://github.com/user-attachments/assets/eea29477-930c-40b1-976f-9ac387f55294"/>
  
</div>

**Approach:**

- Creating new Date() on 1000ms interval.

**Code:**

```jsx
import { useEffect, useState } from "react";

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  **useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);**

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-white text-4xl font-mono p-6 bg-gray-800 rounded-xl shadow-lg hover:scale-110 transition-all duration-150 ease-in-out">
      **{time.toLocaleTimeString()}**
    </div>
  );
};

export default DigitalClock;

```
