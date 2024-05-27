# Use uma imagem Node.js como base para construir o frontend
FROM node:latest 

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie o package.json e o package-lock.json para o diretório de trabalho
COPY package.json ./

# Instale as dependências do projeto
RUN npm install

# Copie todo o código fonte para o diretório de trabalho
COPY . .

EXPOSE 8080

# O comando de inicialização do Nginx é gerenciado automaticamente pela imagem base do Nginx e não precisa ser especificado explicitamente.
CMD ["npm","start"]