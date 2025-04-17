# Node.js公式イメージをベースに
FROM node:22

# 作業ディレクトリ作成
WORKDIR /app

# package.jsonとlockファイルをコピー
COPY package*.json ./

# 依存インストール
RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]

