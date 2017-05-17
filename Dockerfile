FROM ubuntu:latest

RUN apt-get update && apt-get install -y -q curl vim

RUN curl -sL https://deb.nodesource.com/setup_7.x | bash -

# install nodejs, npm and git 
RUN apt-get install -y -q \
            nodejs \
            git \
            && apt-get -y autoclean \
            && rm -rf /var/lib/apt/lists/*

# install ionic, cordova, typescript, gulp
RUN npm install -g -y ionic
RUN npm install -g -y cordova
RUN npm install -g -y typescript
RUN npm install -g -y gulp
RUN npm install -g -y node-gyp

RUN mkdir -p /opt/ruxup/

ADD package.json /opt/ruxup/

RUN npm rebuild node-sass

WORKDIR /opt/ruxup/

RUN npm install && npm cache clean

ADD . /opt/ruxup

EXPOSE 8100 35729 53703

CMD ["ionic", "serve", "--nobrowser", "-c", "-s", "-w", "127.0.0.1"]
