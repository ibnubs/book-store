// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


// import React from 'react';

// //jika pakai class
// class App extends React.Component {
//     render (){
//       return (
//         <div>
//             <h1 class="">Hello World</h1>
//         </div>

//       )
//     }
// }

// export default App;.





// import React from 'react';

// //jika pakai function declaration
// function App() {
//   return (
//     <div>
//       <h1 class="">Hello World</h1>
//     </div>
//   )
// }

// export default App;


// import React from 'react';
// //jika pakai function expression
// const App = function () {
//   return (
//     <div>
//       <h1 class="">Hello World</h1>
//     </div>
//   )
// }
// export default App;




import React from 'react';
import Nav from './components/Nav';
import Maintitle from './components/Maintitle';
import Booklist from './components/BookList';
import './assets/style/Main.css'

class App extends React.Component {
  render (){
    return (
      <div className="container">
          <Nav />    
          <Maintitle/>
          <Booklist/>
      </div>
    )
  }
}



export default App;
