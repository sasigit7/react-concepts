import './App.css';
import style from "./style.js";

// ------------------------------------- Welcome message from React --------------------------------
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//        <h1>Hello, I am React!</h1>
//       </header>
//     </div>
//   );
// }

//  export default App;

// Output: Hello React!

// ------------------------------------- JSX Syntax --------------------------------
// function App() {
// // Declare a variable and assign an element to it as a value
//   let hello = <h1>I am JSX Syntax!</h1>;
//   return (
//     <div className="App">
//       <header className="App-header">
//         {/* store above variable in flower brackets */}
//        {hello} 
//       </header>
//     </div>
//   );
// }

// export default App;

// Output: I am JSX Syntax!

// ------------------------------------- Babel Syntax --------------------------------
// Must import React from react library
// import React from "react";
// function App() {
//   // To create an element, use this syntax: React.createElement(component, props, ...children) and save it in a variable. 
//   let hello = React.createElement("h1", null, "I am Babel Syntax!");
//   return (
//     <div className="App">
//       <header className="App-header">
//         {/* store the variable in flower brackets */}
//        {hello} 
//       </header>
//     </div>
//   );
// }

// export default App;

// Output: I am Babel Syntax!


// ------------------------------------- Functional Component --------------------------------
// import FunctionalComponent from "./components/FunctionalComponent.js";
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//        <FunctionalComponent/>
//       </header>
//     </div>
//   );
// }

// export default App;

// Output: I am a Functional Component

// ------------------------------------- Class Component --------------------------------
// import ClassComponent from "./components/ClassComponent.js";
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//        <ClassComponent/>
//       </header>
//     </div>
//   );
// }

// export default App;

//Output: I am a Class Component

// ------------------------------------- Props --------------------------------
// import React from "react";
// import Props from "./Props.js";
// function App() {
//   let topic = "This is how Props work!";
//   let name = "Shash";
//   let job = "Web Developer";
//   let location = "Manchester";
//   return(
//     <div className="App">
//       <header className="App-header">
//        <Props topic={topic}/>
//        <Props title="Mr"/>
//        <Props name={name}/>
//        <Props job={job}/>
//        <Props location={location}/>
//       </header>
//      </div>
//   );
// }

// export default App;

// Output: 
// Mr
// Shash
// Web Developer
// Manchester

// ------------------------------------- State In Class Component --------------------------------
// import StateInClassComponent from "./StateInClassComponent";
// function  App() {
//   return (
//         <div className="App">
//           <header className="App-header">
//            <StateInClassComponent/>
//           </header>
//         </div>
//       );
//     }

// export default App;

// Output: I am a State in class component!

// ------------------------------------- Update State In Class Component --------------------------------
// import UpdateStateInClassComponent from "./UpdateStateInClassComponent";
// function  App() {
//   return (
//         <div className="App">
//           <header className="App-header">
//            <UpdateStateInClassComponent/>
//           </header>
//         </div>
//       );
//     }

// export default App;

// Output(Updated state): I am an updated State in class component!

// ------------------------------------- State In Functional Component --------------------------------
// import StateInFunctionalComponent from "./StateInFunctionalComponent";
// function  App() {
//   return (
//         <div className="App">
//           <header className="App-header">
//            <StateInFunctionalComponent/>
//           </header>
//         </div>
//       );
//     }

// export default App;

// Output: I am a State in functional component!

// ------------------------------------- Update State In Functional Component --------------------------------
// import UpdateStateInFunctionalComponent from "./UpdateStateInFunctionalComponent";
// function  App() {
//   return (
//         <div className="App">
//           <header className="App-header">
//            <UpdateStateInFunctionalComponent/>
//           </header>
//         </div>
//       );
//     }

// export default App;

// Output(Updated state): I am an updated State in functional component!

// ------------------------------------- Styling React Using style.css --------------------------------
// // Import styles from external stylesheet like style.css and must give an extension when importing
// import "./style.css"; 
// function  App() {
//   return (
//         <div className="App">
//           <header className="App-header">
//            {/* 
//               >> Siblings must be wrapped in a parent element
//               >> We can wrap sibling elements either in <React.Fragment></React.Fragment> or <div></div> or <></>
//           */}
//            <div>
//             {/* 
//                >> Inline styles in elements doesn't work in react 
//                >> Eg. <h1 style="color:blue">React</h1>, Error: Style prop value must be an object
//                >> Use className attribute in an element and get the styles from external stylesheet like style.css
//             */}
//              <h1 className="heading">React</h1>
//              <p className="para">Styling Using style.css</p>
//            </div>
//           </header>
//         </div>
//       );
//     }

// export default App;

// ------------------------------------- Styling React Using style.js --------------------------------
// Import styles from external stylesheet like style.js and must give an extension when importing
// import style from "./style.js"; 
// This should be declared at the top of the file otherwse we will get an error "Import in body of module; reorder to top  import/first"
// We get this error if we declared a variable in between imports

// function  App() {
//   return (
//         <div className="App">
//           <header className="App-header">
//             {/* 
//               >> Siblings must be wrapped in a parent element
//               >> We can wrap sibling elements either in <React.Fragment></React.Fragment> or <div></div> or <></>
//             */}
//            <div>
//              {/* 
//                >> Can use style attribute in an element and get the styles from external stylesheet like style.js
//              */}
//              <h1 style={{...style, ...style.heading}}>React</h1>
//              <p style={{...style, ...style.para}}>Styling Using style.js</p>
//            </div>
//           </header>
//         </div>
//       );
//     }

// export default App; 

// ------------------------------------- Life Cycle Methods in Class --------------------------------
// ------------------------ React component has three life cycle methods:       
// 1. Mounting (Putting elements into the DOM)
// 2. Updating (When component is updated)
// 3. Unmounting (When component is removed from the DOM)

// -------------------------------- Mounting 
// Mounting: has the below order of execution
// 1. constructor() -> optional
// 2. getDerivedStateFromProps() -> optional
// 3. render() -> Mandatory
// 4. componentDidMount() -> optional

// Shortcut to load a react component is: rce and press tab
// Mounting eg.,
// import React, { Component } from 'react';

// class App extends Component {
//   // 1. constructor() -> optional
//   constructor(props) {
//     console.log("in Constructor");
//     // There might be a warning "deprecated" with a line across when using super(props), to remove that - Use: npm install @types/react 
//     super(props);
//     this.state ={

//     }
//   }
  
//   // 2. getDerivedStateFromProps() -> optional
//     static getDerivedStateFromProps(props, state) {
//       console.log("in StateFromProps");
//       return state; // return new state 
//     }

//   // 4. componentDidMount() -> optional
//   componentDidMount() {
//     console.log("in DidMount");
//   }

//   // 3. render() -> Mandatory
//   render() {
//     console.log("in Render");
//     return (
//       <div className="App">
//         <header className="App-header">
//          <div>
//            <h2>Mounting Method Order Of Execution:</h2>
//            <p>Check Console for the order</p>
//           </div>
//         </header>         
//       </div>
//     )
//   }
// }
// export default App;

// Output: 
// in Constructor
// in StateFromProps
// in Render
// in DidMount

// -------------------------------- Updating 
// Updating: has the below order of execution
// 1. getDerivedStateFromProps() -> optional
// 2. shouldComponentUpdate() -> optional
// 3. render() -> Mandatory
// 4. getSnapshotBeforeUpdate() -> optional
// 5. componentDidUpdate() -> optional

// Updating e.g,
// import React, { Component } from 'react'

// export class App extends Component {
//    // 1. getDerivedStateFromProps() -> optional
//     static getDerivedStateFromProps(props, state) {
//       console.log("in StateFromProps");
//       return state; // return new state 
//     }

//   // 2. shouldComponentUpdate() -> optional  
//     shouldComponentUpdate(nextProps, nextState) {
//       console.log("should component update?");
//     }

//   // 4. getSnapshotBeforeUpdate() -> optional
//     getSnapshotBeforeUpdate(prevProps, prevState) {
//       console.log("Get snapshot before update");
//     }

//   // 5. componentDidUpdate() -> optional
//     componentDidUpdate(prevProps, prevState, snapshot) {
//       console.log("component did update");
//     }

//     // The main difference is getSnapshotBeforeUpdate runs before the update, componentDidUpdate runs after

//   // 3. render() -> Mandatory
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <div>
//             <h2>Updating Method Order Of Execution:</h2>
//             <p>Check Console for the order</p>
//            </div>
//          </header>         
//        </div>
//     )
//   }
// }

// export default App;

// -------------------------------- Unmounting
// Unmounting: has only one method 
// import React, { Component } from 'react';

// export class App extends Component {
//     componentWillUnmount() {
    
//     }

// render() {
//       return (
//         <div className="App">
//           <header className="App-header">
//             <div>
//               <h2>Unmounting</h2>
//               <p>Check Console</p>
//              </div>
//            </header>         
//          </div>
//       )
//     }
//   }
// export default App;

// ------------------------------------- Life Cycle Methods in Functional Component --------------------------------
// The below useEffect hook will be used for all the three lifecycle phases
  // useEffect(() => {
  //   effect
  //   return () => {
  //     cleanup
  //   }
  // }, [input])

// ------------------------------------- Event Handling --------------------------------
// When user performs any action, it should be considered as an event
// onClick button, onChange dropdown values, onCheck checkbox etc.,

// import React, { Component } from 'react';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       title: "submit"
//     }

//   // Use bind method for older react codebase
//    // this.submit = this.submit.bind(this);
//   }

//   submit() {
//     alert("Success");
//   }
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <div>
//             <button onClick={this.submit}>Click Here</button>
//           </div>
//         </header>
//       </div>
//     )
//   }
// }

// export default App;

// ------------------------------------- Event Handling with Inline Binding 
// import React, { Component } from 'react';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       title: "submit"
//     }
//   }

//   submit() {
//     alert("Success");
//   }
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <div>
//             <button onClick={this.submit.bind(this)}>Click Here</button>
//           </div>
//         </header>
//       </div>
//     )
//   }
// }

// export default App;


// ------------------------------------- Event Handling using ES6 Arrow function
// Eg.1 
// import React, { Component } from 'react';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       title: "Submit"
//     }
//   }

//   submit = () => {
//     alert("Success");
//   }
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <div>
//             <button onClick={this.submit}>Click Here</button>
//           </div>
//         </header>
//       </div>
//     )
//   }
// }

// export default App;

// Eg.2
// import React, { Component } from 'react';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       title: "Submit"
//     }
//   }

//   submit() {
//     alert("Success");
//   }
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <div>
//             <button onClick={() => this.submit()}>Click Here</button>
//           </div>
//         </header>
//       </div>
//     )
//   }
// }

// export default App;

// ------------------------------------- Conditional Rendering --------------------------------
// import React, { Component } from 'react';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       logical: true, // change to false, logical button will hide
//       ternary: true // change to false, ternary button will hide
//     }

//   }

//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <div>  
//            {this.state.logical && <button>Logical Button</button>} {/* Using Logical Operator */}
//            {this.state.ternary ? <button>Ternary Button</button> : ""} {/* Using Ternary Operator */}
//           </div>
//         </header>
//       </div>
//     )
//   }
// }

// export default App;

// ------------------------------------- Lists --------------------------------
// import React, { Component } from 'react'

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       title: "React Lists",
//       firstNames: [{firstname: "Shash"}, {firstname: "Jhan"}],
//       lastNames: [{lastname: "Mand"}, {lastname: "Chal"}],
//       middleNames: [{middlename: "lozu"}, {middlename: "oju"}, {middlename: "oju"}],
//       locations: [{id:1, city: "london"}, {id:2, city: "manchester"}, {id:3, city: "manchester"}],
//     }
//   }
//   render() {
//      return (
//       <div className="App">
//          <header className="App-header">
//            <div>  
//             <p>{this.state.title}</p> 
//              {this.state.firstNames.map(firstName => ( 
//                <p>{firstName.firstname}</p> // Console Warning: Each child in a list should have a unique "key" prop
//              ))}
//              {this.state.lastNames.map(lastName => ( 
//                <p key={lastName.lastname}>{lastName.lastname}</p> // Assigned unique "key" prop
//              ))}
//              {this.state.middleNames.map(middleName => (
//                <p key={middleName.middlename}>{middleName.middlename}</p> // Duplicate middlenames rendered
//              ))}
//              {/* To avoid this duplicity, we usually assign identifiers for each property like below */}
//              {this.state.locations.map(location => (
//                <p key={location.id}>{location.city}</p> // every property has it's own identifier now
//              ))}
//              {/* Above can also be re-written using index parameter but with some limitations
//                >> Can use index in particaluar conditions like data should be static and
//                >> Cannot use index in filtering 
//              */}
//              {this.state.locations.map((location, index) => (
//                <p key={index}>{index}{location.city}</p> // every property has it's own identifier now
//              ))}
//            </div>
//          </header>
//        </div>
//     )
//   }
// }

// export default App;

// ------------------------------------- Forms --------------------------------
// import React, { Component } from 'react'

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       username: "",
//       password: ""
//     }
//   }
//   login = (e) => {
//     e.preventDefault();
//     // Use API to fetch data from external source
//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then(response=>response.json())
//     .then(result => {
//       console.log(result); // full user data will render in the console 

//       // To render only specific data, we can use filter method
//       if(result.filter(user=>user.username===this.state.username).length>0) {
//         alert("Login Successful");
//       } else {
//         alert("Incorrect Login Details");
//       }
      
//     });
    
//     // Form validation check using if/else condition 
//     // if(this.state.username === "admin" && this.state.password === "admin") {
//     //   alert("Login Successful");
//     // } else {
//     //   alert("Incorrect Login Details");
//     // }
//   }

//   // onChangeUsername(e) {
//   //   this.setState({ username: e.target.value})
//   // }

//   // onChangeUsername(username) {
//   //   this.setState({ username: username})
//   // }

//   onChangeUsername(username) {
//     this.setState({username})
//   }

//   onChangePassword(password) {
//     this.setState({password});
//   }
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <div style={{textAlign: 'center'}}>
//             <form onSubmit={this.login}>
//               <input type="text" value={this.state.username} onChange={(e) => this.onChangeUsername(e.target.value)} placeholder="Username"/>
//               <br/>
//               <input type="password" value={this.state.password} onChange={(e) => this.onChangePassword(e.target.value)} placeholder="Password"/>
//               <br/>
//               <input type="submit" value="Login"/>
//             </form>
//           </div>
//         </header>
//       </div>
//     )
//   }
// }

// export default App





