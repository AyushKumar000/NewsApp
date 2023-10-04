import React from "react";

export default function Loading () {
  return (
    <div className="d-flex justify-content-center my-3">
      <div className="spinner-border my-3" role="status">
        <span className="sr-only my-9"></span>
      </div>
    </div>
  );
};
