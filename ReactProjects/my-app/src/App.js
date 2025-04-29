import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [Name, SetName] = useState("");
  const [Arr, setArr] = useState([]);
  const [Len, setLen] = useState(false);

  // Add New Student on First Index
  function AdddataonTop() {
    if (!Len && Arr.length >= 5) {
      let ress = window.confirm("are you confirm to increase the length");
      if (ress) {
        Arr.unshift(Name);
        SetName("");
        setLen(true);

        return;
      } else {
        SetName("");

        return;
      }
    } else {
      Arr.unshift(Name);
      SetName("");
    }
  }
  // Add Data in The Last index
  function Adddata() {
    if (Arr?.includes(Name) || Name?.trim() == "") {
      alert("this name is alredy exits");
      SetName("");
      return;
    }

    if (!Len && Arr.length >= 5) {
      let ress = window.confirm("are you confirm to increase the length");
      if (ress) {
        // setArr((m) => m.push(Name));
        Arr.push(Name);
        SetName("");
        setLen(true);

        return;
      } else {
        SetName("");

        return;
      }
    }

    Arr.push(Name);
    SetName("");
    console.log(Arr);
  }
  // Remove data With Name
  function Removedata() {
    console.log(performance.now());

    if (!Arr.includes(Name) || Name?.trim() == "") {
      alert("This Name is Not Exits");
      return;
    }

    setArr(
      Arr.filter((m) => {
        if (m != Name) return m;
      })
    );
    alert(`sucsessfully Deleted ${Name}`);
    SetName("");
    console.log(performance.now());
  }
  // Remove first index element
  function RemoveFirstElement() {
    let res = Arr.shift();
    alert(`sucsessfully Deleted ${res}`);

    console.log(Arr);
  }
  return (
    <div className="w-[100vw] h-[100vh]  flex justify-center items-center">
      <div className="w-[70%]  h-[20%] flex-col justify-center items-center">
        <div className="  p-5">
          <label name="inp" className="mr-2">
            Add Student
          </label>
          <input
            type="text"
            id="inp"
            value={Name}
            required={true}
            placeholder="AddStudent"
            onChange={(e) => SetName(e.target.value)}
            className="p-2 rounded-lg border-2"
          />
        </div>{" "}
        <div className="mb-2">
          <p>Length : {Arr?.length}</p>
        </div>
        <div className="flex">
          <button
            onClick={Adddata}
            className="rounded-md mr-3 p-2 bg-green-600 "
          >
            Add Student
          </button>
          <button
            onClick={AdddataonTop}
            className="rounded-md mr-3 p-2 bg-green-600 "
          >
            Add on Top
          </button>
          <button
            onClick={Removedata}
            className="rounded-md p-2 mr-3 bg-red-500 "
          >
            Remove Student
          </button>
          <button
            onClick={RemoveFirstElement}
            className="rounded-md p-2 bg-red-500 "
          >
            Remove FirstElement
          </button>
        </div>
      </div>
    </div>
  );
}
export default App;
