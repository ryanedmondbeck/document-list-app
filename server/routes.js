const fetch = require("node-fetch");
const path  = require('path');

const PORT = process.env.PORT || 5000;
const ENV  = process.env.NODE_ENV;

const routes = {
    init: (app) => {
      console.log("Initializing routes")

      app.get('/*', (req, res, next) => {
        const isProd = ENV === 'production';
        const isWww  = req.headers.host.match(/^www/) == null;

        if (isProd && isWww) {
          res.redirect('http://www.' + req.headers.host + req.url, 301);
        } else {
          next();
        }
      });

      app.get('/api/query', (req, res) => {
          res.set({'Content-Type': 'application/json'});
          console.log("!")
          // if (!url) throw error;

          // getData(dynamoUrl).then((v) => {
              // let data = JSON.stringify({"data": v});
              // res.status(200).send(data);
          // }).catch((e) => {
              // console.log('error', e)
          // });
      });

      app.get('/api/command', (req, res) => {
          // Call your api
          res.set('Content-Type', 'application/json');
          res.status(200).send(JSON.stringify({"data":"ok"}));
      });

      app.get('/api/ip', (req, res) => {
          const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
          res.set('Content-Type', 'application/json');
          res.status(200).send(JSON.stringify({"ip": ip}));
      });

      // All remaining requests return the compiled static React app, so it can handle routing.
      app.get('*', (req, res, next) => {
        res.sendFile(path.resolve(__dirname, '../ui/build', 'index.html'));
      });

      return app;
    }
}

module.exports = routes;
