import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";

export interface BoardPost {
  id: number;
  title: string;
  author: string;
  content: string;
  createdAt: string;
  views: number;
}

const STORAGE_KEY = "pangolin_board_posts";

const defaultPosts: BoardPost[] = [
  {
    id: 1,
    title: "게시판 공지사항입니다",
    author: "관리자",
    content: "게시판 이용 시 유의사항을 확인해주세요.",
    createdAt: "2026-09-01",
    views: 12,
  },
  {
    id: 2,
    title: "시스템 점검 안내",
    author: "관리자",
    content: "9월 10일 새벽 2시~4시 점검이 예정되어 있습니다.",
    createdAt: "2026-09-05",
    views: 8,
  },
];

function loadPosts(): BoardPost[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultPosts;
    return JSON.parse(raw) as BoardPost[];
  } catch {
    return defaultPosts;
  }
}

interface BoardContextType {
  posts: BoardPost[];
  getPost: (id: number) => BoardPost | undefined;
  addPost: (post: Omit<BoardPost, "id" | "createdAt" | "views">) => number;
  deletePost: (id: number) => void;
}

const BoardContext = createContext<BoardContextType | null>(null);

export function BoardProvider({ children }: { children: ReactNode }) {
  const [posts, setPosts] = useState<BoardPost[]>(loadPosts);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
  }, [posts]);

  const getPost = (id: number) => posts.find((p) => p.id === id);

  const addPost: BoardContextType["addPost"] = (post) => {
    const newId = posts.length > 0 ? Math.max(...posts.map((p) => p.id)) + 1 : 1;
    const newPost: BoardPost = {
      ...post,
      id: newId,
      createdAt: new Date().toISOString().slice(0, 10),
      views: 0,
    };
    setPosts((prev) => [newPost, ...prev]);
    return newId;
  };

  const deletePost = (id: number) => {
    setPosts((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <BoardContext.Provider value={{ posts, getPost, addPost, deletePost }}>
      {children}
    </BoardContext.Provider>
  );
}

export function useBoard() {
  const ctx = useContext(BoardContext);
  if (!ctx) throw new Error("useBoard는 BoardProvider 안에서만 사용할 수 있습니다.");
  return ctx;
}