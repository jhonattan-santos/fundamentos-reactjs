import { format } from "date-fns";
import ptBr from "date-fns/locale/pt-BR";

import { Avatar } from "./Avatar";
import { Comment } from "./Comment";

import styles from "./Post.module.css";

export function Post({ author, publishedAt }) {
  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' H:mm'h'",
    { locale: ptBr }
  );
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />

          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title='27 de Julho às 08:30' dateTime='2022-07-27 08:30:00'>
          {publishedDateFormatted}
        </time>
      </header>

      <div className={styles.content}>
        <p>
          Fala galeraa <i className={styles.iconRight}>👋</i>
        </p>

        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>

        <p>
          <i className={styles.iconLeft}>👉</i>{" "}
          <a href=''>jane.design/doctorcare</a>
        </p>

        <p>
          <a href='#'>#novoprojeto</a>
          <a href='#'>#nlw</a>
          <a href='#'>#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder='Deixe um comentário' />

        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
