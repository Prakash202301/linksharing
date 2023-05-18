// import React, { Component } from "react";
// import Homepage from "./Components/Homepage";
// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <Homepage />
//       </div>
//     );
//   }
// }

// import React, { Component } from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import Homepage from "./Components/Homepage";
// import Login from "./Components/Login";
// import Signup from "./Components/Signup";

// export default class App extends Component {
//   render() {
//     return (
//       <Router>
//         {/* <Switch> */}
//         <Route exact path="/" component={Homepage} />
//         <Route path="/login" component={Login} />
//         <Route path="/signup" component={Signup} />
//         {/* </Switch> */}
//       </Router>
//     );
//   }
// }

// import React, { Component } from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Homepage from "./Components/Homepage";
// import Login from "./Components/Login";
// import Signup from "./Components/Signup";

// export default class App extends Component {
//   render() {
//     return (
//       <Router>
//         <div>
//           <Switch>
//             <Route exact path="/" component={Homepage} />
//             <Route path="/login" component={Login} />
//             <Route path="/signup" component={Signup} />
//           </Switch>
//         </div>
//       </Router>
//     );
//   }
// }

import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./Components/Homepage";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Navbar from "./Components/Navbar";
import Dashboard from "./Components/Dashbooard/DashboardPage";
export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/navbar" element={<Navbar />} />

            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </Router>
    );
  }
}
