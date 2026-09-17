// pages/BoardList.tsx
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { TbArrowsSort, TbPencil } from "react-icons/tb";
import { useBoard } from "@/components/context/BoardContext";
import styles from "./BoardList.module.scss";

type SortOrder = "desc" | "asc";

export default function BoardList() {
  const { posts } = useBoard();
  const [sortOrder, setSortOrder] = useState<SortOrder>("desc");

  const sortedPosts = useMemo(() => {
    const sorted = [...posts].sort((a, b) => {
      if (a.createdAt !== b.createdAt) {
        return a.createdAt < b.createdAt ? -1 : 1;
      }
      return a.id - b.id;
    });
    return sortOrder === "desc" ? sorted.reverse() : sorted;
  }, [posts, sortOrder]);

  const toggleSortOrder = () => {
    setSortOrder((prev) => (prev === "desc" ? "asc" : "desc"));
  };

  return (
    <div className={styles.boardList}>
      <div className={styles.boardList__header}>
        <h2>게시판</h2>
        <div className={styles.boardList__actions}>
          <button className={styles.sortBtn} onClick={toggleSortOrder}>
            <TbArrowsSort size={18} strokeWidth={2} />
            {sortOrder === "desc" ? "최신순" : "오래된순"}
          </button>
          <Link to="/board/write" className={styles.writeBtn}>
            <TbPencil size={18} strokeWidth={2} />
            글쓰기
          </Link>
        </div>
      </div>

      {sortedPosts.length === 0 ? (
        <div className={styles.boardList__empty}>
          <p>등록된 게시글이 없습니다.</p>
          <Link to="/board/write" className={styles.writeBtn}>첫 게시글 작성하기</Link>
        </div>
      ) : (
        <table className={styles.boardList__table}>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
              <th>작성일</th>
              <th>조회수</th>
            </tr>
          </thead>
          <tbody>
            {sortedPosts.map((post) => (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>
                  <Link to={`/board/${post.id}`}>{post.title}</Link>
                </td>
                <td>{post.author}</td>
                <td>{post.createdAt}</td>
                <td>{post.views}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}