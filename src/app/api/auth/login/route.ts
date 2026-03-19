import { NextRequest, NextResponse } from 'next/server'

// 管理员账号密码（明文存储，开发环境使用）
const ADMIN_USER = {
  username: 'admin',
  password: 'admin123'
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { username, password } = body

    console.log('登录尝试:', username, password)

    // 验证用户名和密码
    if (username === ADMIN_USER.username && password === ADMIN_USER.password) {
      console.log('登录成功')

      const response = NextResponse.json({ 
        success: true, 
        message: '登录成功' 
      })
      
      // 设置简单的 cookie（不使用 JWT，兼容 Edge Runtime）
      response.cookies.set('admin_logged_in', 'true', {
        httpOnly: true,
        secure: false,
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 7, // 7天
        path: '/',
      })

      return response
    }

    console.log('登录失败: 用户名或密码错误')
    return NextResponse.json(
      { success: false, message: '用户名或密码错误' },
      { status: 401 }
    )
  } catch (error) {
    console.error('登录错误:', error)
    return NextResponse.json(
      { success: false, message: '服务器错误: ' + String(error) },
      { status: 500 }
    )
  }
}
