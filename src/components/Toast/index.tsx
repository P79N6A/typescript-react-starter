import * as React from 'react';
import './index.scss';

interface IKVMap {
  [key: string]: any;
}

interface IToastProps {
  text: string;
  position?:
    | 'top'
    | 'bottom'
    | 'left'
    | 'right'
    | 'topLeft'
    | 'topRight'
    | 'bottomLeft'
    | 'bottomRight';
  duration?: number; // default is 3 (s)
  style?: IKVMap;
}

class Toast extends React.Component<IToastProps, any> {
  constructor(props: IToastProps) {
    super(props);
  }
  public render() {
    return <div className="toast-container">{this.props.text}</div>;
  }
}

export { Toast, IToastProps };
