import * as React from 'react';
import './index.less';
import classnames from 'classnames';

export class Button extends React.Component<any, any> {
  public render() {
    const btnClass = classnames({
      'class-name-primary': this.props.type === 'primary'
    });
    return <button className={btnClass}>{this.props.children}</button>;
  }
}
