# 湖南中超星空科技 - 部署脚本

# ====== 第1步：在 GitHub 创建空仓库 ======
# 打开 https://github.com/new
# 仓库名: zhongchao-xingkong-website
# 不要勾选任何初始化选项
# 创建后复制仓库 URL

# ====== 第2步：推送代码 ======
cd C:\Users\Administrator\.qclaw\workspace\zhongchao-xingkong-website

git init
git add .
git commit -m "Initial commit"

# 把下面这行替换为你创建的 GitHub 仓库地址
git remote add origin https://github.com/你的用户名/zhongchao-xingkong-website.git

git push -u origin main

# ====== 第3步：Vercel 部署 ======
# 1. 打开 https://vercel.com
# 2. 用 GitHub 登录
# 3. 点击 Add New → Project
# 4. 选择 zhongchao-xingkong-website
# 5. 点击 Deploy

# 部署完成后，Vercel 会给你一个网址，例如：
# https://zhongchao-xingkong-website.vercel.app
