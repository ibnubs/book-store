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
import { BrowserRouter, Route} from 'react-router-dom'
import Nav from './components/Nav';
import Maintitle from './components/Maintitle';
import Booklist from './components/BookList';
import Footer from './components/Footer';
import './assets/style/Main.css'


class App extends React.Component {

  add


  render (){
    return (
      <BrowserRouter>
        <Nav />    
        <Route path="/" exact>
          <div className="container">
              
              <Maintitle/>
              <Booklist/>
              
          </div>
          </Route>
          <Route path="/about" exact>
            <p>test about</p>
          </Route>
          <Footer/>
        </BrowserRouter>  
    )
  }
}



export default App;
