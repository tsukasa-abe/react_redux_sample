import React from 'react';

// function App() {
//   return(
//     <React.Fragment>
//       <label htmlFor="bar">bar</label>
//       <input type="text" onChange={() => {console.log("ホゲ太郎です！")}} />
//     </React.Fragment>
//   )
// }

const App = () => {
  return (
    <div>
      <Cat />
      <Cat />
      <Cat />
      <Cat />
    </div>
  )
}

const Cat = () => {
  return <div>にゃ〜！</div>
}

export default App;
