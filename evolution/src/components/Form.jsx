import { useState } from "react";
export const Form = () => {
  const [form, setForm] = useState({
    title: "",
  });
  const handlechange = () => {};
  return (
    <div>
      <form onSubmit={handleclick}>
        <input
          onChange={handlechange}
          name="title"
          type="text"
          placeholder="enter receipe"
        />
        <input
          onChange={handlechange}
          name="ingredients"
          type="text"
          placeholder="enter ingredients"
        />
        <input
          onChange={handlechange}
          name="timing"
          type="text"
          placeholder="time to cook"
        />
        <input type="file" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
