//task import hook
import { useState } from "react"

//task import data
import articoli from "./data/articoli"


function App() {

  //task article hook stato iniziale => array articoli!!!
  const [article, setArticle] = useState(articoli);

  //task newArticle hook
  const [newArticle, setNewArticle] = useState('');


  return (
    <>

      {/* //task ul di articoli mappati, con key= index del map stesso  */}
      <ul>

        {articoli.map((art, index) => {
          return <li key={index}> <button className="btn btn-danger" onClick={() => removeArticle(index)}></button>  </li>
        })}
      </ul>

      <h1>ciao</h1>
    </>
  )
}

export default App
