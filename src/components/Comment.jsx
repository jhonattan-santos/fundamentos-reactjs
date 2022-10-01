import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

export function Comment({ content, deleteComment }) {
  function handleDeleteComment() {
    deleteComment(content)
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src='https://github.com/wezss.png' />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Jhonattan Santos</strong>
              <time title='27 de Julho às 08:30' dateTime='2022-07-27 08:30:00'>
                Cerca de 1h atrás
              </time>
            </div>

            <button onClick={handleDeleteComment} title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
