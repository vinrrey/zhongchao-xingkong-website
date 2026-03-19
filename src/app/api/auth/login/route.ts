import { NextRequest, NextResponse } from 'next/server'
import { sign } from 'jsonwebtoken'

const JWT_SECRET = 'zhongchao-xingkong-secret-key-2025'

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
      // 创建 JWT token
      const token = sign(
        { username, role: 'admin' },
        JWT_SECRET,
        { expiresIn: '7d' }
      )

      const response = NextResponse.json({ 
        success: true, 
        message: '登录成功' 
      })
      
      // 设置 cookie
      response.cookies.set('admin_token', token, {
        httpOnly: true,
        secure: false, // 开发环境设为 false
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 7, // 7天
        path: '/',
      })

      console.log('登录成功')
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
