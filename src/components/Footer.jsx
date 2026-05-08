

function Footer({ clearCompleted, activeTasks, children}) {
  return (
    <footer className="footer">
      <span className="todo-count">{activeTasks} items left</span>

      {children}

      <button className="clear-completed" onClick={()=>{
         console.log("clear-completed btn was clicked");
         clearCompleted()
        
      }}>
       
        
        Clear completed
      </button>
    </footer>
  );
}

export default Footer;
