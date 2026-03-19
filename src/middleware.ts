import { NextRequest, NextResponse } from 'next/server'

// 简单的 session 验证（不使用 JWT，兼容 Edge Runtime）
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // 检查是否是管理后台页面
  if (pathname.startsWith('/admin')) {
    // 登录页面不需要验证
    if (pathname === '/admin/login') {
      return NextResponse.next()
    }

    // 检查 cookie 中的登录状态
    const isLoggedIn = request.cookies.get('admin_logged_in')?.value === 'true'

    if (!isLoggedIn) {
      return NextResponse.redirect(new URL('/admin/login', request.url))
    }

    return NextResponse.next()
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/admin/:path*',
}
