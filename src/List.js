import React, { useState } from "react";
import ListComponent from "./ListComponent";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';


const List = () => {
  const [item, setItem] = useState();
  const [list, setList] = useState([]);

  const handleChange = (event) => {
    setItem(event.target.value);
  };

  const addBtn = () => {
    setList((preValue) => {
      return [...preValue, item];
    });
    setItem("");
  };

  const removeItem = (id) => {
    setList((preValue) => {
      return preValue.filter((elem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="main_div">
        <div className="central_div">
          <h1> ToDoList </h1> <br />
          <TextField
            id="outlined-helperText"
            label="Enter a text"
            variant="outlined"
            type="text"
            // placeholder="Enter a Text"
            value={item}
            onChange={handleChange}
          />
          <Button onClick={addBtn}>
            <AddIcon />
          </Button>
          <ol>
            {list.map((val, index) => {
              return (
                <ListComponent
                  key={index}
                  id={index}
                  data={val}
                  onSelect={removeItem}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default List;
