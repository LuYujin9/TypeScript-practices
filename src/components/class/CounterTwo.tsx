import { Component, ReactNode } from "react";

type CounterTwoProps = {
  message: string;
};

type CounterState = {
  count: number;
};

export class CounterTwo extends Component<CounterTwoProps, CounterState> {
  //设置type
  state = {
    count: 0,
  };

  handleClick = () => {
    this.setState((prevstate) => ({ count: prevstate.count + 1 }));
  }; //类似useState 的效果

  render(): ReactNode {
    return (
      <div>
        <button onClick={this.handleClick}>Increment</button>
        {this.props.message}
        {this.state.count}
      </div>
    );
  }
}
