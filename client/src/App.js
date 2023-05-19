import {useState} from 'react' ;
import Selector from './Components.js/Selector';
import UpdateURL from './Components.js/UpdateURL';
import GenerateURL from './Components.js/GenerateURL' ;
import DeleteURL from './Components.js/DeleteURL';
import CustomURL from './Components.js/CustomURL';

function App() {
  
  const [tab , setTab] = useState('generate') ;
  return (
    <div className="">
      <Selector setTab={setTab}/>
      {tab === "generate" && <GenerateURL/>}
      {tab === "custom" && <CustomURL/>}
      {tab === "update" && <UpdateURL/>}
      {tab === "delete" && <DeleteURL/>}
      
    </div>
  );
}

export default App;
