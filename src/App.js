import Home from "./routes/home/home.componet";
import { Route, Routes } from "react-router-dom";
import Naviagtion from "./routes/navigation/navigation.componet";
import SignIn from "./routes/sign-in/sign-in.componet";
const Shop = () => {
  return (
    <h2>Shop</h2>
  );
};
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Naviagtion/>}>
        <Route path="/shop" element={<Shop />} />
        <Route index element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
     </Route>
    </Routes>
  );
}

export default App;