# @lut0/heracles-server

> A http based web file server

## Install

```sh
git clone https://github.com/zuoez02/heracles-server
yarn install
```

## Config
Edit the config in config/index.js. 
```javascript
const config = {
    savePath: '/home/developer/.heracles/',  // where the files are saved
    port: 8080                               // exposed port
};
```

## Start
`yarn start` or `npm start`

## Usage
You need to use @lut0/heracles as a command line client. `npm install -g @lut0/heracles` and use command `heracles` for use. More detail at [@lut0/heracles](https://github.com/zuoez02/heracles).

## Docker
I have build a docker image for easily use. Checkout the `docker-compose.yml` and use it. Enjoy yourself.