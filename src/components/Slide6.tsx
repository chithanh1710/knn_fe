import React from "react";
import OnClickInsulin from "./OnClickInsulin";
import Animation from "./Animation";

export default function Slide6() {
  return (
    <>
      <Animation>
        <h2 className="text-#323F70 text-6xl font-extrabold p-2">
          Nồng độ Insulin
        </h2>
      </Animation>
      <OnClickInsulin />
    </>
  );
}
