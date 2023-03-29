import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function App() {

  return (
    <>
    <div >
    <NavBar/>
    <ItemListContainer greeting="Hola mundo cruel y despiadado!"/>
    </div>
    </>
  );
}

export default App;
