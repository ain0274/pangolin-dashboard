// App.tsx
import { useState } from "react"
import { Routes, Route } from "react-router-dom"
import CommonHeader from "./components/CommonHeader"
import Sidebar from "./components/Sidebar"
import Dashboard from "./pages/Dashboard"
import BoardList from "./pages/board/BoardList"
import BoardDetail from "./pages/board/BoardDetail"
import BoardWrite from "./pages/board/BoardWrite"
import { BoardProvider } from "./components/context/BoardContext"

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  }

  return (
    <BoardProvider>
      <div style={{ display: 'flex', height: '100vh', width: '100vw', overflow: 'hidden' }}>
        <Sidebar isOpen={isSidebarOpen} />

        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', height: '100vh', overflow: 'hidden', minWidth: 0 }}>
          <CommonHeader onToggle={toggleSidebar} />

          <main style={{ flex: 1, overflowY: 'auto', overflowX: 'hidden', padding: '30px 50px', backgroundColor: '#f5f5f5' }}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/board" element={<BoardList />} />
              <Route path="/board/:id" element={<BoardDetail />} />
              <Route path="/board/write" element={<BoardWrite />} />
            </Routes>
          </main>
        </div>
      </div>
    </BoardProvider>
  )
}

export default App