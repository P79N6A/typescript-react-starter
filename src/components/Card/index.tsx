import * as React from 'react';
import './index.less';

export class Card extends React.Component<{ content: React.ReactNode }> {
  public render() {
    return (
      <div className="card-container">
        <header className="card-title">Header</header>
        <main className="card-content">{this.props.content}</main>
        <footer className="card-footer">
          <button className="card-footer-cancel">取消</button>
          <button className="card-footer-confirm primary">确定</button>
        </footer>
      </div>
    );
  }
}
