#!/bin/bash

# 安装必要的依赖
apt-get update
apt-get install -y \
  gconf-service \
  libasound2 \
  libatk1.0-0 \
  libcups2 \
  libdbus-1-3 \
  libgconf-2-4 \
  libgbm-dev \
  libgtk-3-0 \
  libnspr4 \
  libnss3 \
  libxss1 \
  libxtst6 \
  ca-certificates \
  fonts-liberation \
  lsb-release \
  xdg-utils \
  wget

# 继续进行常规的 npm 构建
npm install
npm run build
