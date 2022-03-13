import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './component/NavBar'
import TOdoTable from './component/TOdoTable';
import TodoSlider from './component/TodoSlider';
import TodoCard from './component/TodoCard';
import Todocount from './component/Todocount';


function App() {
	return (
		<div className="App">
			<header className="App-header">
				<div>
					<NavBar />
					{/* <TOdoTable/> */}
					{/* <TodoSlider/> */}
					<TodoCard/>
					{/* <Todocount/> */}
				</div>
			</header>
		</div>
	);
}

export default App;
