// import React, { useState } from "react";
// import ToDoList from "./ToDoList";

// function App() {
//   const [item, setItem] = useState();
//   const [itemNew, setItemNew] = useState([]);

//   const itemChange = (event) => {
//     setItem(event.target.value);
//   };

//   const addItem = () => {
//     setItemNew((oldItem) => {
//       return [...oldItem, item];
//     });
//     return setItem("");
//   };

//   const deleteItems = (id) => {
//     console.log("deleted");

//     setItemNew((oldItem) => {
//       return oldItem.filter((elem, index) => {
//         return index !== id;
//       })
//     })
//   }

//   return (
//     <>
//       <div className="main_div">
//         <div className="central_div">
//           <h1>ToDo List</h1> <br />
//           <input
//             type="text"
//             placeholder="Enter a Text"
//             value={item}
//             onChange={itemChange}
//           />
//           <button onClick={addItem}> + </button>
//           <ul>
//             {itemNew.map((value, index) => {
//               return <ToDoList text={value} key={index} id={index} onSelect={deleteItems}/>;
//             })}
//           </ul>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;
