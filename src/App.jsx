// import { useState } from "react"

import Input from "./main";
import cities from "./cities.json"

function App() {
   // const [value, setValue] = useState("")

   // const handleChange = () => {

   // }

   return <div>
      <Input cities={cities}  />
   </div>
}

export default App;
