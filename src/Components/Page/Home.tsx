import React from "react";

export default function Home() {
  return (
    <div>
      {(() => {
        let temp = [];
        for (let i = 0; i < 1000; i++) {
          temp.push(<p>Hello</p>);
        }
        return temp;
      })()}
    </div>
  );
}
