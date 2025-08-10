# 🐳 Usa imagem oficial do Node.js com versão LTS
FROM node:14-alpine

# 📁 Define diretório de trabalho
WORKDIR /app

# 📦 Copia apenas os arquivos de dependência
COPY package*.json ./

# 🚀 Instala dependências com cache otimizado
RUN npm ci --only=production

# 📂 Copia o restante do projeto
COPY . .

# 🔓 Expõe a porta da aplicação
EXPOSE 3000

# ▶️ Comando para iniciar o app
CMD ["node", "index.js"]
