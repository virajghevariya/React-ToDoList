import React, { useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";


const ListComponent = (props) => {

    const [deleteItem, setDeleteItem] = useState(false);

    const deleteBtn = () => {
        setDeleteItem(true);
    }

  return (
    <>
      <div>
        <div style={{ textDecoration: deleteItem ? 'line-through' : 'none' }} onClick={deleteBtn} onDoubleClick={() => {
                props.onSelect(props.id);
            }}  >
          <span>
                <DeleteIcon />
          </span>
          {props.data}
        </div>
      </div>
    </>
  );
};

export default ListComponent;
