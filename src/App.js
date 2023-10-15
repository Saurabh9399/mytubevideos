import Body from "./components/Body";
import Header from "./components/Header";
import SidePanel from "./components/SidePanel";

function App() {
  return (
    <div className="grid grid-cols-12">
      <Header/>
      <Body/>
    </div>
  );
}

export default App;
