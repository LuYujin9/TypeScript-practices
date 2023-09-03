export type Pets = {
  cat: string;
  dog: string;
};
//也可以导入其他的

export type GreetProps = {
  name: string;
  messageCount: number;
  isLoggedIn: boolean;
  pets: Pets; //使用Pets
  // petsOffriends?: { cat: string; dog: string }[]; //array with object. 加上问号表示optical
  petsOffriends?: Pets[]; //array with object. 加上问号表示optical,
  status: "loading" | "success" | "error";
};
