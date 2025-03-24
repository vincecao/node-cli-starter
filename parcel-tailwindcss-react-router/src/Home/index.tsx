import React, { memo } from "react";

function Home() {
  return (
    <div className="home text-center flex flex-col space-y-3">
      <h1 className="font-home">Home</h1>
      <div>
        Welcome to check my template -{" "}
        <a className="text-blue-300 underline" href="https://github.com/vincecao/parcel-tailwindcss-react-router-template" target="_blank">
          <code className="font-mono">parcel-tailwindcss-react-router-template@vincecao</code>
        </a>
      </div>

      <img src="https://placehold.co/800x200?text=Greetings&font=roboto" className="mx-auto" />
      <div>
        Additionally, I like to generate image placeholder @{" "}
        <a className="text-blue-300 underline" href="https://placehold.co/" target="_blank">
          placehold
        </a>
      </div>

      <div>
        And generate Lorem Ipsum @{" "}
        <a className="text-blue-300 underline" href="https://www.lipsum.com/" target="_blank">
          lipsum
        </a>
      </div>
    </div>
  );
}

export default memo(Home);
