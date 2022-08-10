FROM 546412463627.dkr.ecr.us-east-1.amazonaws.com/node:14

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .
RUN npm run build
EXPOSE 3005
CMD [ "npm", "start", "-p", "3006" ]
