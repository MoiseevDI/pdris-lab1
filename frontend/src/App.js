import logo from './ddlogo.svg';
import './App.css';
import React from "react"

// function App() {
//   var info = getTable();
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <h1>
//           Test react app for PDRIS          
//         </h1>
//         <p>
//           Get all test strings from DB by fastapi query:
//         </p>
//         <div>
//           {info}
//         </div>
//       </header>
//     </div>
//   );
// }


// function getTable() {
//   return fetch('/api/table', {
//       method: 'GET',
//       headers: {
//           'Content-Type': 'application/json'
//       }
//   })
//       .then(response => response.json())
//       .catch(error => {throw(error)});
// }
// export default App;

class App extends React.Component {

  state = { isLoaded: false, models: [] };

  componentDidMount() {
    fetch("/api/table", {
      method: "GET",
      headers: {
          'Content-Type': 'application/json'
      }
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw Error(res.statusText);
        }
      })
      .then(json => {
        this.setState({
          models: json,
          isLoaded: true
        });
      });
  }

  render() {

    const { isLoaded, models } = this.state;

    console.log(models)
    if (!isLoaded) {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>
              Test react app for PDRIS          
            </h1>
            <p>
              Get all test strings from postgresql DB by fastapi query:
            </p>
            <p>Loading...</p>;
          </header>
        </div>
      );
    }

    console.log(models)
  
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>
            Test react app for PDRIS          
          </h1>
          <div>
            Get all test strings from postgresql DB by fastapi query:
          </div>
          <div>{models.message.toString()}</div>
        </header>
      </div>
    )
  }
}

export default App;
