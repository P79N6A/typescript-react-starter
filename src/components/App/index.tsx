import * as React from 'react';
import * as style from './index.scss';
import logo from 'assets/logo.svg';
import { Toast } from '../Toast';

interface IAppState {
  showToast: boolean;
}

class App extends React.Component<any, IAppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      showToast: false
    };
  }
  public toggleToast = () => {
    this.setState({
      showToast: !this.state.showToast
    });
  };
  public render() {
    return (
      <div className={style.app}>
        <header className={style.appHeader}>
          <img src={logo} className={style.appLogo} alt="logo" />
          <h1 className={style.appTitle}>Welcome to React</h1>
        </header>
        <p className={style.appIntro}>
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button onClick={this.toggleToast}>click me</button>
        {this.state.showToast && (
          <Toast text="哈哈哈哈哈哈，打不过我吧，没有办法，我就是这么强大" />
        )}
      </div>
    );
  }
}

export default App;
