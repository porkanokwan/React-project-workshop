function TodoItem({item, handleClickChangeStatus, handleDeleteTodo}) {
  return (
    <div className='list'>
        <div className='checklist'>
            <input type="checkbox" name="check" checked={item.status === "complete"} onChange={() => handleClickChangeStatus(item.id)}/>
                <p className= {`todo ${item.status === "complete" && "toggle"}`}>{item.todo}</p>
        </div>

        <button type='button' className="btn-cancle" onClick={() => handleDeleteTodo(item.id)}>
            cancle
        </button>
    </div>
  )
}

export default TodoItem