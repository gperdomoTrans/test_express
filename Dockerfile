FROM registry.access.redhat.com/ubi8/nodejs-20-minimal:latest

COPY . /opt/app-root/src/

ENV NODE_ENV=production

CMD ["npm", "start"]
