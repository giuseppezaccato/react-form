//task import hook
import { useState } from "react"

//task import data
import articoli from "./data/articoli"


function App() {

  //task articles hook stato iniziale => array articoli!
  const [articles, setArticles] = useState(articoli);

  //task newArticle hook
  const [newArticle, setNewArticle] = useState('');


  //task funzione add
  const addArticle = (e) => {
    //* blocco preventivo refresh pagina
    e.preventDefault();

    //* rest operator + newArticle passati nella funzione per modificare lo stato iniziale di newArticle
    setArticles([...articles, newArticle.trim()]);

    //task svuoto il campo di value che passo come 
    //task attribute onChange al'input in forndo al form (dopo aver dato enter o cliccato su button)
    setNewArticle('')
  }

  //task funzione delete
  const delArticle = (e) => {
    const newArray = articles.filter((_, index) => index !== e);
    return setArticles(newArray)

  }

  return (
    <div className="container my-5 col-6  card mx-auto">

      {/* //task ul di articoli mappati, con key= index del map stesso  */}
      <ul className="list-group list-group-flush " >
        {articles.map((art, index) => {
          return <li className=" list-group-item " key={index}> {art} <button className=" btn btn-danger btn-sm float-end" onClick={() => delArticle(index)}> - </button> </li>
        })}
      </ul>


      <form className="row-cols-6 input-group my-4" onSubmit={addArticle}>
        <input type="text" className="form-control" placeholder="Aggiungi Articolo" aria-label="cnuovoArticolo" aria-describedby="nuovoArticolo" value={newArticle} onChange={(e) => setNewArticle(e.target.value)} ></input>
        <button className=" btn btn-outline-secondary" id="nuovoArticolo"> + </button>
      </form>

    </div>
  )
}

export default App
