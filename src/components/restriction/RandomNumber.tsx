type RandomNumberType = {
  value: number;
};

type PositiveNumber = RandomNumberType & {
  isPositive: boolean;
  isNegative?: never;
  isZero?: never;
}; // isPostive的value 必须为 boolean时, 其他两个值不可以同时具备
type NagtiveNumber = RandomNumberType & {
  isNegative: boolean;
  isPositive?: never;
  isZero?: never;
};
type Zero = RandomNumberType & {
  isZero: boolean;
  isNegative?: never;
  isPositive?: never;
};
/* 
type RandomNumberProps = {
  value: number;
  isPositive?: boolean;
  isNegative?: boolean;
  isZero?: boolean;
}; */
type RandomNumberProps = PositiveNumber | NagtiveNumber | Zero;

const RandomNumber = ({
  value,
  isPositive,
  isNegative,
  isZero,
}: RandomNumberProps) => {
  return (
    <div>
      {value}
      {isPositive && "positive"}
      {isNegative && "negative"}
      {isZero && "zero"}
    </div>
  );
};
export default RandomNumber;
