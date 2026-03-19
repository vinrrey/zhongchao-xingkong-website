'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

interface DashboardStats {
  totalVisits: number
  todayVisits: number
  contactMessages: number
  services: number
}

export default function AdminDashboard() {
  const router = useRouter()
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [stats] = useState<DashboardStats>({
    totalVisits: 1234,
    todayVisits: 56,
    contactMessages: 8,
    services: 6,
  })

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' })
    router.push('/admin/login')
  }

  const menuItems = [
    { icon: '📊', label: '数据概览', href: '/admin', active: true },
    { icon: '🏢', label: '公司信息', href: '/admin/company' },
    { icon: '💼', label: '业务管理', href: '/admin/services' },
    { icon: '📰', label: '新闻动态', href: '/admin/news' },
    { icon: '📨', label: '留言管理', href: '/admin/messages' },
    { icon: '⚙️', label: '系统设置', href: '/admin/settings' },
  ]

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className={`fixed left-0 top-0 h-full bg-gray-900 text-white transition-all duration-300 z-50 ${
        sidebarOpen ? 'w-64' : 'w-20'
      }`}>
        {/* Logo */}
        <div className="flex items-center justify-between p-4 border-b border-gray-800">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
              <span className="font-bold text-lg">星</span>
            </div>
            {sidebarOpen && <span className="font-bold">中超星空</span>}
          </div>
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-gray-400 hover:text-white">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </div>

        {/* Menu */}
        <nav className="p-4 space-y-2">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-colors ${
                item.active
                  ? 'bg-primary-600 text-white'
                  : 'text-gray-400 hover:bg-gray-800 hover:text-white'
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              {sidebarOpen && <span>{item.label}</span>}
            </Link>
          ))}
        </nav>

        {/* Logout */}
        <div className="absolute bottom-4 left-4 right-4">
          <button
            onClick={handleLogout}
            className="flex items-center space-x-3 px-4 py-3 w-full rounded-xl text-gray-400 hover:bg-red-600/20 hover:text-red-400 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>
            </svg>
            {sidebarOpen && <span>退出登录</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className={`transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-20'}`}>
        {/* Header */}
        <header className="bg-white shadow-sm px-8 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-gray-900">数据概览</h1>
            <p className="text-gray-500 text-sm">欢迎回来，管理员</p>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/" target="_blank" className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm">
              查看网站
            </Link>
          </div>
        </header>

        {/* Content */}
        <div className="p-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              { label: '总访问量', value: stats.totalVisits, icon: '👁️', color: 'from-blue-500 to-blue-600' },
              { label: '今日访问', value: stats.todayVisits, icon: '📈', color: 'from-green-500 to-green-600' },
              { label: '留言数量', value: stats.contactMessages, icon: '💬', color: 'from-purple-500 to-purple-600' },
              { label: '业务数量', value: stats.services, icon: '💼', color: 'from-orange-500 to-orange-600' },
            ].map((stat, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{stat.icon}</span>
                  <div className={`w-10 h-10 bg-gradient-to-br ${stat.color} rounded-lg opacity-20`}></div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-gray-500 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-2xl p-6 shadow-sm mb-8">
            <h2 className="text-lg font-bold text-gray-900 mb-4">快捷操作</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: '编辑公司信息', icon: '🏢', href: '/admin/company' },
                { label: '管理业务', icon: '💼', href: '/admin/services' },
                { label: '发布新闻', icon: '📰', href: '/admin/news' },
                { label: '查看留言', icon: '📨', href: '/admin/messages' },
              ].map((action, index) => (
                <Link
                  key={index}
                  href={action.href}
                  className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group"
                >
                  <span className="text-4xl mb-2 group-hover:scale-110 transition-transform">{action.icon}</span>
                  <span className="text-gray-700 font-medium">{action.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Recent Messages */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="text-lg font-bold text-gray-900 mb-4">最近留言</h2>
            <div className="space-y-4">
              {[
                { name: '张先生', company: 'XX航空公司', time: '10分钟前', message: '想了解无人机培训课程...' },
                { name: '李女士', company: 'XX测绘公司', time: '1小时前', message: '咨询测绘服务价格...' },
                { name: '王经理', company: 'XX科技', time: '3小时前', message: '寻求技术合作机会...' },
              ].map((msg, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-bold">
                    {msg.name[0]}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium text-gray-900">{msg.name}</span>
                      <span className="text-gray-400 text-sm">{msg.time}</span>
                    </div>
                    <div className="text-gray-500 text-sm mb-1">{msg.company}</div>
                    <div className="text-gray-600 text-sm truncate">{msg.message}</div>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/admin/messages" className="block mt-4 text-center text-primary-600 hover:text-primary-700 font-medium">
              查看全部留言 →
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
