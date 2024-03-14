import Link from "next/link";
import React from "react";

function Meal() {
  return (
    <div>
      <h2>Good meal with iya junior</h2>
      <p>
        <Link href='/meals/share-1'>share 1</Link>
      </p>
      <h2>Good meal with iya Segun</h2>
      <p>
        <Link href='/meals/share-2'>share 2</Link>
      </p>
    </div>
  );
}

export default Meal;
