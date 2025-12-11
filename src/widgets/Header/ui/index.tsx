import React from "react"
import { MessageSquare } from "lucide-react"
import { Link } from "react-router-dom" // 👈 1. Link 컴포넌트 import

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <MessageSquare className="w-6 h-6" />
          <h1 className="text-xl font-bold">게시물 관리 시스템</h1>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              {/* 👈 2. a 태그 대신 Link 사용 / href 대신 to 사용 */}
              {/* App.tsx의 basename 설정 덕분에 자동으로 /front_.../ 가 붙습니다 */}
              <Link to="/" className="hover:underline">
                홈
              </Link>
            </li>
            <li>
              <Link to="/posts" className="hover:underline">
                게시글 관리
              </Link>
            </li>
            <li>
              <Link to="/dashboard" className="hover:underline">
                대시보드
              </Link>
            </li>
            <li>
              <Link to="/settings" className="hover:underline">
                설정
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
