import { ArrowDownIcon, ChevronDownIcon } from '@radix-ui/react-icons'
import Link from 'next/link'

export default function MonoPage() {
  return (
    <div className="min-h-screen bg-[#1C1C1C]">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-2 bg-[#262626]">
        <div className="flex items-center gap-4">
          <button className="text-gray-300">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <h1 className="text-white text-xl font-semibold">
            Mogakko Developer Community
          </h1>
        </div>
        <div className="flex items-center gap-4">
          <Link href="#" className="text-white">
            Docs
          </Link>
          <Link href="#" className="text-white">
            API
          </Link>
          <Link href="#" className="text-white">
            Support
          </Link>
          <button className="bg-[#E3F2F7] px-4 py-1 rounded-md text-black">
            Sign Up
          </button>
          <button className="bg-[#0EA5E9] px-4 py-1 rounded-md text-white">
            Log In
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-[#262626] min-h-screen p-4">
          <nav className="space-y-4">
            <div className="text-gray-400 text-sm border-b border-gray-700 pb-4">
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="text-xs font-semibold">RESOURCES</h3>
                  <ChevronDownIcon className="w-5 h-5" />
                </div>
              </div>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-300">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300">
                    API reference
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300">
                    Help center
                  </Link>
                </li>
              </ul>
            </div>
            <div className="text-gray-400 text-sm border-b border-gray-700 pb-4">
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="text-xs font-semibold">CATEGORIES</h3>
                  <ChevronDownIcon className="w-5 h-5" />
                </div>
              </div>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-300">
                    Announcements
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300">
                    API
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300">
                    Prompting
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300">
                    Plugins / Actions builder
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 p-6">
          <div className="bg-[#1E3A8A] p-6 rounded-lg mb-6">
            <h2 className="text-white text-lg mb-4">
              Welcome to the Mogakko Developer Forum!
            </h2>
            <p className="text-white mb-2">
              What to know before posting a new question:
            </p>
            <ol className="text-white list-decimal pl-6">
              <li className="mb-2">
                Search the forum for similar topics - the question might have
                been discussed before.
              </li>
              <li className="mb-2">
                If the question relates account issues (e.g., billing and login
                issues), please contact us through our Help Center.
              </li>
              <li>Please be kind and helpful in conversations!</li>
            </ol>
          </div>

          <div className="flex gap-4 mb-6">
            <button className="px-4 py-2 text-gray-300 hover:bg-gray-700 rounded-md">
              categories
            </button>
            <button className="px-4 py-2 text-gray-300 hover:bg-gray-700 rounded-md">
              tags
            </button>
            <button className="px-4 py-2 text-blue-400">Latest</button>
            <button className="px-4 py-2 text-gray-300">Top</button>
            <button className="px-4 py-2 text-gray-300">Hot</button>
            <button className="px-4 py-2 text-gray-300">Categories</button>
          </div>

          {/* Community Posts */}
          <div className="space-y-4">
            {/* Pinned Post */}
            <div className="bg-[#262626] rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-gray-400">📌</span>
                <span className="text-gray-400 text-sm">공지사항</span>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-white text-lg mb-2">
                    게시글 작성 전 읽어주세요
                  </h3>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="bg-blue-600 text-white px-2 py-0.5 rounded">
                      API
                    </span>
                    <span className="text-gray-400">10</span>
                    <span className="text-gray-400">조회수 99.9k</span>
                    <span className="text-gray-400">24일 전</span>
                  </div>
                </div>
                <div className="flex -space-x-2">
                  <div className="w-6 h-6 rounded-full bg-purple-500"></div>
                  <div className="w-6 h-6 rounded-full bg-green-500"></div>
                  <div className="w-6 h-6 rounded-full bg-orange-500"></div>
                </div>
              </div>
            </div>

            {/* Regular Post */}
            <div className="bg-[#262626] rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-white text-lg mb-2">
                    모각코 커뮤니티에 오신 것을 환영합니다!
                  </h3>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="bg-red-600 text-white px-2 py-0.5 rounded">
                      Announcements
                    </span>
                    <span className="text-gray-400">1</span>
                    <span className="text-gray-400">조회수 26.8k</span>
                    <span className="text-gray-400">2023년 8월</span>
                  </div>
                </div>
                <div className="flex -space-x-2">
                  <div className="w-6 h-6 rounded-full bg-blue-500"></div>
                </div>
              </div>
            </div>

            {/* Another Post */}
            <div className="bg-[#262626] rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-white text-lg mb-2">
                    새로운 기능 업데이트 안내
                  </h3>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="bg-gray-600 text-white px-2 py-0.5 rounded">
                      Community
                    </span>
                    <span className="text-gray-400">25</span>
                    <span className="text-gray-400">조회수 7.1k</span>
                    <span className="text-gray-400">2시간 전</span>
                  </div>
                </div>
                <div className="flex -space-x-2">
                  <div className="w-6 h-6 rounded-full bg-yellow-500"></div>
                  <div className="w-6 h-6 rounded-full bg-red-500"></div>
                  <div className="w-6 h-6 rounded-full bg-indigo-500"></div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
