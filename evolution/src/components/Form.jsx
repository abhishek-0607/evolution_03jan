import { useState, useRef, useEffect } from "react";
import { styled } from "styled-components";
export const Form = () => {
  const [form, setForm] = useState(null);
  const [data, setData] = useState([]);
  const ref = useRef(null);
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch("http://localhost:3001/receipes")
      .then((d) => {
        d.json();
      })
      .then((res) => {
        setData(res);
      });
  };

  const handleChange = (e) => {
    console.log(ref.current.files);
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const addData = (e) => {
    e.preventDefault();
    const payload = form;
    fetch("http://localhost:3001/receipes", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "content-type": "application/json",
      },
    }).then(() => {
      getData();
      setForm(null);
    });
  };
  return (
    <div>
      <form onSubmit={addData}>
        <input
          onChange={handleChange}
          name="title"
          type="text"
          placeholder="enter receipe"
        />
        <input
          onChange={handleChange}
          name="ingredients"
          type="text"
          placeholder="enter ingredients"
        />
        <input
          onChange={handleChange}
          name="timing"
          type="text"
          placeholder="time to cook"
        />
        <input onChange={handleChange} ref={ref} name="image" type="file" />
        <input type="submit" value="Submit" />
      </form>

      {/* {data.map((e) => (
        <div>{e.title}</div>
      ))} */}
      <div>{data}</div>
    </div>
  );
};
