import { useRef, useEffect, useState } from "react";

const MutableRef = () => {
  const [timer, setTimer] = useState(0);
  const interValRef = useRef<number | undefined>(undefined); //?此处使用null会示错

  const stopTimer = () => {
    window.clearInterval(interValRef.current);
    console.log("clicked");
  };

  useEffect(() => {
    interValRef.current = window.setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
    return () => {
      stopTimer();
    };
  }, []);
  //每秒增加一次次数

  return (
    <div>
      HookTimer-{timer}-<button onClick={() => stopTimer()}>Stop Timer</button>
    </div>
  );
};
export default MutableRef;
