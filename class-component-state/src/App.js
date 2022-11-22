import React from "react";
import "./app.css";
import Welcome from "./components/Welcome";
import Message from "./components/Message";
import Counter from "./components/Counter";
import Greet from "./components/Greet";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
import Stylesheet from "./components/Stylesheet";
import Inline from "./components/Inline";
import "./appStyles.css";
import styles from "./appStyles.module.css";

function App(props) {
	return (
		<div className="center">
			<h1 className="error">Errorsss</h1>
			<h1 className={styles.success}>Success</h1>
			{/* <Welcome name="Jemala" heroName="superLobio" />
			<Message />
			<Counter />
			<Greet name="Anzora" heroName="superbarana" />
			<FunctionClick />
			<ClassClick /> 
			<EventBind /> 
			<ParentComponent /> 
			<UserGreeting /> 
			<NameList />*/}
			<Stylesheet primary={true} />
			<Inline />
		</div>
	);
}

export default App;
