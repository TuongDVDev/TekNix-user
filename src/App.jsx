import React, {Suspense, useState} from "react";
import ReactDOM from "react-dom";
import CustomButton from "home/CustomButton";
import { showAlert } from "home/utils";

import "./index.scss";
const Header = React.lazy(()=>import("home/Header"));
import Footer from "home/Footer";

const App = () => {
  const [show,setShow] = useState(false)
  return(
    <div className="text-center mt-10 text-3xl mx-auto max-w-6xl">
      {show && <Suspense fallback={<div>Wait ...</div>}>
      <Header />
      </Suspense>}
       <CustomButton />
       <div class="text-center">
      <img
        src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
        class="rounded-full w-32 mb-4 mx-auto"
        alt="Avatar"
      />
      <h5 class="text-xl font-medium leading-tight mb-2">John Doe</h5>
      <p class="text-gray-500">Web designer</p>
    </div>
      <button onClick={() => {
        setShow(true)
        showAlert("TekNix")
      }}>Clickme</button>
      <Footer />
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById("app"));
