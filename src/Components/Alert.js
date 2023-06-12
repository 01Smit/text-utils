import React from "react";

export default function Alert(props) {
    const captalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    props.alert && <div className="container">
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show my-3`}
        role="alert">
        <strong>{captalize(props.alert.type)}</strong> {props.alert.message}
        {/* <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button> */}
      </div>
    </div>
  );
}
