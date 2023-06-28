import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";
import SimpleCounter from "./SimpleCounter/SimpleCounter";
import { ReduxCounter } from "./ReduxCounter/ReduxCounter";
import { ChangeCounter } from "./ChangeCounter/ChangeCounter";
import { Provider } from "react-redux";
import { reduxCounterStore } from "./ReduxCounter/redux/ReduxStoreCounter";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ChangeCounter />} />
        <Route path="/simple-counter" element={<SimpleCounter />} />

        <Route
          path="/redux-counter"
          element={
            <Provider store={reduxCounterStore}>
              <ReduxCounter />
            </Provider>
          }
        />
      </Routes>
    </>
  );
}

export default App;
