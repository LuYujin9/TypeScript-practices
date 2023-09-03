type ListProps<T> = {
  //加入T来做parameter
  items: T[]; //当value有多种type
  onClick: (value: T) => void;
};
const List = <T extends string | number>({ items, onClick }: ListProps<T>) => {
  //定义T  <T extends {}> 表示所有数据类型, 不是最优解. 可以用
  //为了定义更加细节的情况,可以定义具体的key <T extends {id:number}> , items的里面就必须有id
  return (
    <div>
      <h2>List of items</h2>
      {items.map((item, index) => {
        return (
          <div key={index} onClick={() => onClick(item)}>
            {item}
          </div>
        );
      })}
    </div>
  );
};
export default List;
