import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import authServie from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Header, Footer } from "./components";
import "./App.css";

function App() {
  const [loding, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authServie
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return !loding ? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-100">
      <div className="w-full block">
        <Header />
        <main>{/* <Outlet /> */}</main>
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;
