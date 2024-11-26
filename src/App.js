import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "bootstrap/dist/css/bootstrap-utilities.min.css";
import "primereact/resources/themes/bootstrap4-light-blue/theme.css";
import Topbar from "./components/Topbar";
import ContentWindow from "./components/ContentWindow";
import SideMenu from "./components/SideMenu";
import "primeicons/primeicons.css";

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

//Toggle sidebar by changing the state of isSidebarOpen
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };



  return (
    <div className="layout-container">
      {/* Container */}
      
        {/* Sidebar */}
        <SideMenu isOpen={isSidebarOpen}></SideMenu>

        {/* Content Window */}
       
        <main className= {`d-block   layout-content-wrapper ${isSidebarOpen ? 'layout-content-wrapper-sidebar-open' : 'layout-content-wrapper-sidebar-closed'}`} >
          <div className="d-flex flex-column col-12">
            <Topbar toggleSidebar={toggleSidebar}></Topbar>
          <ContentWindow></ContentWindow>
          </div>
          
        </main>


    </div>

    // <div className="App">

    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
