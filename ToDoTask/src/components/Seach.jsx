
const Seach = ({seach, setSeach}) => {
  return (
    <div className="seach">
        <h2>Pesquisar</h2>
        <input 
        type="text"
        value={seach} 
        onClick={(e) => setSeach(e.target.value)} 
        placeholder="Digite para pesquisar..."  />
        </div>
  )
}

export default Seach