import { useRef, useEffect } from "react";

const DomRef = () => {
  const inputRef = useRef<HTMLInputElement>(null!); //specify the type of Dom; null! 当值为null的时候, current出现错误提示.如果确认不会为null,就写为null!

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  );
};
export default DomRef;
