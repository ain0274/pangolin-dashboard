import { useNavigate, useParams } from "react-router-dom"
import { useBoard } from "@/components/context/BoardContext";
import styles from "./BoardDetail.module.scss"

export default function BoardDetail(){
  const { id } = useParams<{id : string}>();
  const { getPost, deletePost } = useBoard();
  const navigate = useNavigate();

  const post = getPost(Number(id));

  if (!post) {
    return (
      <section className={styles.boardDetail}>
        <div className={styles.boardDetail__header}>
          <p>존재하지 않는 게시글입니다.</p>
        </div>
        <button onClick={() => navigate("/board")}>목록</button>
      </section>
    );
  }

  const handleDelete = () => {
    if( !confirm("게시글을 삭제하시겠습니까?")) return;
    deletePost(post.id);
    navigate("/board");
  }

  return (
    <section className={styles.boardDetail}>
      <div className={styles.boardDetail__header}>
        <h2>{post.title}</h2>
        <div className={styles.meta}>
          <span>{post.author}</span>
          <span>{post.createdAt}</span>
          <span>조회 {post.views}</span>
        </div>
      </div>
      <div className={styles.boardDetail__content}>{post.content}</div>
      <div className={styles.boardDetail__actions}>
        <button onClick={() => navigate("/board")}>목록</button>
        <button onClick={handleDelete}>삭제</button>
      </div>
    </section>
  );
}

