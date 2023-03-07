import React, { useState } from "react";
import EditBook from "../../pages/edit/EditBook";
import "./popup.scss"
function PopupButton(item) {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div>
      <button onClick={() => setShowPopup(true)}>Edit</button>
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
         {item}
            <button onClick={() => setShowPopup(false)}>Close </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default PopupButton;
