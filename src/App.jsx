import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { store } from "./features/store";
import Layout from "./layout/Layout";
import routes from "./routes/routes";

function App() {
  return (
    <Provider store={store}>
      <Layout>
        <Routes>
          {routes.map((route, i) => (
            <Route key={i} {...route} />
          ))}
        </Routes>
      </Layout>
    </Provider>
  );
}

export default App;
