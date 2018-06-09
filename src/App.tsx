import * as React from "react";
import "./App.css";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <div className="nav">
          <a className="nav-link" href="index.html">
            <span className="link-text">Home</span>
            <span className="bottom-dot">&#9679;</span>
          </a>
          <a className="nav-link" href="history.html">
            <span className="link-text">History</span>
            <span className="bottom-dot">&#9676;</span>
          </a>
          <a className="nav-link" href="profile.html">
            <span className="link-text">Profile</span>
            <span className="bottom-dot">&#9676;</span>
          </a>
        </div>
        <div className="content boxshadow">
          <div className="status">
            <div className="money">- 500,95 &euro;</div>
          </div>
          <div className="btn-row">
            <button className="btn plus">&plus; Income</button>
            <button className="btn minus">&minus; Expense</button>
          </div>
          <div className="title">Recent activity</div>
          <div className="transactions">
            <div className="transaction">
              <span className="value negative">100,00&euro;</span>
              <span className="date">25.9.2017 18:02</span>
            </div>
            <div className="transaction">
              <span className="value negative">9,95&euro;</span>
              <span className="date">23.9.2017 12:55</span>
            </div>
            <div className="transaction">
              <span className="value positive">20,00&euro;</span>
              <span className="date">23.9.2017 11:42</span>
            </div>
            <div className="transaction">
              <span className="value negative">200,00&euro;</span>
              <span className="date">22.9.2017 23:02</span>
            </div>
            <div className="transaction">
              <span className="value negative">100,00&euro;</span>
              <span className="date">22.9.2017 22:58</span>
            </div>
            <div className="transaction">
              <span className="value negative">100,00&euro;</span>
              <span className="date">22.9.2017 21:04</span>
            </div>
            <div className="transaction">
              <span className="value negative">100,00&euro;</span>
              <span className="date">18.9.2017 09:44</span>
            </div>
            <div className="transaction">
              <span className="value negative">100,00&euro;</span>
              <span className="date">18.9.2017 09:39</span>
            </div>
            <div className="transaction">
              <span className="value negative">100,00&euro;</span>
              <span className="date">10.9.2017 09:32</span>
            </div>
            <div className="transaction">
              <span className="value negative">100,00&euro;</span>
              <span className="date">8.9.2017 17:55</span>
            </div>
          </div>
        </div>
        <div className="footer">Copyright &copy; 2018 alehuo</div>
      </div>
    );
  }
}

export default App;
