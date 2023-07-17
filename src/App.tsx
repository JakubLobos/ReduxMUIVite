import Layout from "./modules/common/layout/Layout";
import { Route, Routes } from "react-router-dom";
import Home from "./modules/pages/home/Home";
import Login from "./modules/pages/login/Login";
import MyAccount from "./modules/pages/myAccount/MyAccount";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/myAccount" element={<MyAccount />} />
        <Route path="*" element={<h1>Page not found!!</h1>} />
      </Routes>
    </Layout>
  );
}

export default App;
