import styles from "./Sidebar.module.css";
import { PencilLine } from "phosphor-react"
import { Avatar } from "./Avatar";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src='https://images.unsplash.com/photo-1604307410297-081e0677d3fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQ3fHxkZXZlbG9wZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=50'
      />

      <div className={styles.profile}>
        <Avatar src="https://github.com/jhonattanwesleysantos.png"/>

        <strong>Jhonattan Santos</strong>
        <span>Web Developer</span>
      </div>

      <footer>        
        <a href='#'> 
          <PencilLine size={20} className={styles.icon} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
