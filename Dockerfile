FROM node:18
ADD . /app/src
WORKDIR /app/src
RUN npm install --omit optional && npm run build --unsafe-perm
ENTRYPOINT ["npm", "start"]
