FROM node:6.9.1

ADD . /opt/heracles-server

WORKDIR /opt/heracles-server

CMD ['node ./bin/www']

