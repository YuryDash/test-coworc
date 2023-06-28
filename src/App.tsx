import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";
import SimpleCounter from "./SimpleCounter/SimpleCounter";
import { ReduxCounter } from "./ReduxCounter/ReduxCounter";
import { ChangeCounter } from "./ChangeCounter/ChangeCounter";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ChangeCounter />} />
        <Route path="/simple-counter" element={<SimpleCounter />} />
        <Route path="/redux-counter" element={<ReduxCounter />} />
      </Routes>
    </>
  );
}

export default App;
