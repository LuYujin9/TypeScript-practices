type HorizentalPostion = "left" | "center" | "right";
type VerticalPostion = "top" | "center" | "bottom"; //分开定义可以减少定义的量, 不需要写9种排列组合

type ToastProps = {
  position:
    | Exclude<`${HorizentalPostion}-${VerticalPostion}`, "center-center">
    | "center"; //exclude center-center 取代为 center
};

const Toast = ({ position }: ToastProps) => {
  return <div>Toast Notification Position - {position}</div>;
};

export default Toast;
