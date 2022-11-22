import React from "react";

export default function Loader() {
  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ height: "calc(100vh - 100px)" }}
    >
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}
