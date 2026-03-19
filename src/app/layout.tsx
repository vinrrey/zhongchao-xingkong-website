import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '湖南中超星空科技有限公司 - 航空科技引领未来',
  description: '湖南中超星空科技有限公司专注于通用航空服务、民用航空器维修培训、卫星遥感测绘、智能无人飞行器研发制造，致力于航空科技领域的创新发展。',
  keywords: '航空服务,航空器维修,无人机,卫星遥感,测绘服务,航空培训,湖南中超星空',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  )
}
