import React from "react";
import { Form } from "react-router-dom";

const GPTSearchBar = () => {
  return (
    <div>
      <div className="pt-[10%] flex justify-center" >
        <Form  className="bg-black w-1/2 grid grid-cols-12 rounded-xl"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            type="text"
            className="p-4 m-4 col-span-9"
            placeholder="what are you planning to watch?"
          ></input>
          <button className="bg-red-700 text-white rounded-xl py-2 px-4 col-span-3 m-4">Search</button>
        </Form>
      </div>
    </div>
  );
};

export default GPTSearchBar;
