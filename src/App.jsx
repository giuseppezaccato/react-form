//task import hook
import { useState } from "react"

//task import data
import articoli from "./data/articoli"


function App() {

  //task articles hook stato iniziale => array articoli!
  const [articles, setArticles] = useState(articoli);

  //task newArticle hook
  const [newArticle, setNewArticle] = useState('');

  //? funzione di gestione di onChange
  const handleArticle = (e) => {
    setNewArticle(e.target.value)
  }

  //? funzione add che gestisce l'onSubmit del form
  const addArticle = (e) => {
    //* blocco preventivo refresh pagina
    e.preventDefault();

    //* rest operator + newArticle passati nella funzione per modificare lo stato iniziale di newArticle
    setArticles([...articles, newArticle.trim()]);

    //task svuoto il campo di input che passo come 
    setNewArticle('')
  }

  //? funzione delete onClick inline al button in ogni <li>
  const delArticle = (e) => {
    const newArray = articles.filter((_, index) => index !== e);
    return setArticles(newArray)

    //* abbreviando solo con arrow function ==> passo il filter direttamente come argomento alla funzione che modifica articles, cioè setArticles!!
    // setArticles( (num) => articles.filter ((element,index) => index !== num )

  }

  return (
    <div className="container my-5 col-6 card mx-auto">

      {/* //task ul di articoli mappati, con key= index del map stesso  */}
      <ul className="list-group list-group-flush " >
        {articles.map((art, index) => {
          return <li className=" list-group-item " key={index}> {art} <button className=" btn btn-danger btn-sm float-end" onClick={() => delArticle(index)}> - </button> </li>
        })}
      </ul>


      <form className="row-cols-5 input-group my-4" onSubmit={addArticle}>
        <input type="text" className="form-control" placeholder="Aggiungi Articolo" aria-label="cnuovoArticolo" aria-describedby="nuovoArticolo" value={newArticle} onChange={handleArticle} ></input>
        <button className=" btn btn-outline-secondary" id="nuovoArticolo"> + </button>
      </form>

    </div>
  )
}

export default App
