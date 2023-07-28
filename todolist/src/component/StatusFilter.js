function StatusFilter({todos, handleClearComplete, filteredTodo, setFilteredTodo}) {
    const handleFilter = (e) => setFilteredTodo(e.target.value);
    
    const btnClear = todos.filter(item => item.status === "complete");

  return (
    <div className='box-filter'>
    {todos.length > 1 ? `${todos.length} items` : `${todos.length} item`}
    <div className='btn-filter'>
        <input type="radio" name='filter' id='all' value="" onChange={handleFilter}/>
        <label htmlFor='all' className={`${!filteredTodo && "filtered"}`}>All</label>
        <input type="radio" name='filter' id='active' value="active" onChange={handleFilter}/>
        <label htmlFor='active' className={`${filteredTodo === "active" && "filtered"}`}>Active</label>
        <input type="radio" name='filter' id='complete' value="complete" onChange={handleFilter}/>
        <label htmlFor='complete' className={`${filteredTodo === "complete" && "filtered"}`}>Complete</label>
    </div>

    {btnClear.length > 0 && <button type='button' className="btn-clear" onClick={handleClearComplete}>clear complete</button>}
</div>
  )
}

export default StatusFilter