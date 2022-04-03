import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
// import NavBar from "./component/NavBar";
// import TodoTable from "./component/TodoTable";
// import TodoTable2 from "./component/TodoTable2";
// import TodoSlider from "./component/TodoSlider";
// import Todocount from "./component/Todocount";
// import ST_hook from "./component/ST_hook";
// import Cards from "./component/Cards";
// import Todocreate from "./component/Todocreate";
// import Todoput from "./component/Todoput";
import Myindex from "./component/myindex";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Myindex />} />
        {/* <Route path="/create" element={<Todocreate />} />
    		<Route path="/put/:id" element={<Todoput />} />
    		<Route path="/Cards" element={<Cards />} /> */}
      </Routes>
    </BrowserRouter>

    // <div className="App">
    //   <header className="App-header">
    //     <div>
    //       {/* <ClassST /> */}
    //       {/* <NavBar /> */}
    //       {/* <TodoTable/> */}
    //       {/* <TodoTable2/> */}
    //       {/* <Todocreate/> */}
    //       {/* <TodoSlider/> */}
    //       {/* <Cards/> */}
    //       {/* <ST_hook id='a'/> */}
    //       {/* <Todocount/> */}
    //     </div>
    //   </header>
    // </div>
  );
}

export default App;
