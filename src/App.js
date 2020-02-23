import React, { useState, useEffect } from "react";
import { useInfiniteScroll } from "./useInfiniteScroll";

const App = () => {
  // Assign the value returned by the custom hook to a variable
  let infiniteScroll = useInfiniteScroll();
  //Declaring the state
  const [tableContent, setTableConent] = useState([]);

  // useEffect with an empty dependecy array [] to run only once
  // This works like componentDidMount()
  useEffect(() => {
    // Fetching fake data from an online API
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then(response => response.json())
      .then(json => setTableConent(json));
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <table>
        <thead>
          <tr>
            <th>User ID</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {tableContent.slice(0, infiniteScroll).map(content => {
            return (
              <tr key={content.id}>
                <td style={{ paddingTop: "10px" }}>{content.userId}</td>
                <td style={{ paddingTop: "10px" }}>{content.title}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default App;