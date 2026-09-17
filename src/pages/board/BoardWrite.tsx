import { useBoard } from "@/components/context/BoardContext"
import { useNavigate } from "react-router-dom";
import { useState, type FormEvent } from "react";
import styles from "./BoardWrite.module.scss"

export default function BoardWrite() {
  const { addPost } = useBoard();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    const newId = addPost({title, author: author || "익명", content});
    navigate(`/board/${newId}`);
  };

  return (
    <section className={styles.boardWrite}>
      <h2>게시글 작성</h2>

      <form onSubmit={handleSubmit}>
        <div className={styles.boardWrite__input}>
          <input
            type="text"
            placeholder="제목"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="작성자"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>

        <textarea
          placeholder="내용을 입력하세요."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={10}
        />
        
        <div className={styles.boardWrite__actions}>
          <button type="button" onClick={() => navigate("/board")}>취소</button>
          <button type="submit">등록</button>
        </div>
      </form>

    </section>
  )
}