import React from "react";
import { Button } from "../Constants/style";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Save({ handleSave }) {
  return (
    <div>
      <div style={{ borderTop: "1px dashed #DEDEDE", marginTop: "20px" }}>
        <Button onClick={handleSave} backgroundColor="#BE9CFF" margin="10px 0 40px 0" style={{ float: "right" }}>
          저장
        </Button>
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default Save;
