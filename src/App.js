import "./App.css";
import { MyProvider } from "./Storage/Storage.tsx";
import Loader from "./Components/Loader/Loader.tsx";

function App() {
  return (
    <MyProvider>
      <Loader />
    </MyProvider>
  );
}

export default App;
