import React from "react";
import Game from "./containers/Game";
import Orientation from "./containers/Orientation";
import RotateInfo from "./components/RotateInfo";

const App = () => <Orientation landscape={Game} portrait={RotateInfo} />;

export default App;
