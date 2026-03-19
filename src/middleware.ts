import { NextRequest, NextResponse } from 'next/server'
import { verify } from 'jsonwebtoken'
import { JWT_SECRET } from '@/lib/auth.config'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // 检查是否是管理后台页面
  if (pathname.startsWith('/admin')) {
    // 登录页面不需要验证
    if (pathname === '/admin/login') {
      return NextResponse.next()
    }

    // 检查 token
    const token = request.cookies.get('admin_token')?.value

    if (!token) {
      return NextResponse.redirect(new URL('/admin/login', request.url))
    }

    try {
      verify(token, JWT_SECRET)
      return NextResponse.next()
    } catch {
      return NextResponse.redirect(new URL('/admin/login', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/admin/:path*',
}
