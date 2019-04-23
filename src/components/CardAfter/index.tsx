import * as React from 'react';
import * as style from './index.less';
import classnames from 'classnames';

export class CardAfter extends React.Component<{ content: React.ReactNode }> {
  public render() {
    return (
      <div className={style.container}>
        <header className={style.title}>Header</header>
        <main className={style.content}>{this.props.content}</main>
        <footer className={classnames(style.footer, 'buttons')}>
          <button className={style.cardFooterCancel}>取消</button>
          <button className={classnames(style['card-footer-confirm'], 'primary')}>确定</button>
        </footer>
      </div>
    );
  }
}
