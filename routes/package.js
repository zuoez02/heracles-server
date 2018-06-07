const fs = require('fs');
const router = require('express').Router();
const mkdirp = require('mkdirp');
const multer = require('multer');
const rimraf = require('rimraf');

const config = require('../config');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const dir = `${config.savePath}/${req.params.repo}/${req.params.name}`;
    mkdirp(dir, function () {
      cb(null, dir);
    });
  },
  filename: function (req, file, cb) {
    console.log(file.mimetype);
    cb(null, `${req.params.tag}`);
  }
});

const upload = multer({ storage });

// get
router.get('/:repo/:name/:tag', (req, res) => {
  const pkgPath = `${config.savePath}/${req.params.repo}/${req.params.name}/${req.params.tag}`;
  if (!fs.existsSync(pkgPath)) {
    return res.status(404).send('Not found');
  }
  res.download(pkgPath);
});

// push
router.post('/:repo/:name/:tag', upload.single('package'), (req, res) => {
  res.status(200).send('success');
});

// delete
router.delete('/:repo/:name/:tag', (req, res) => {
  const pkgPath = `${config.savePath}/${req.params.repo}/${req.params.name}/${req.params.tag}`;
  rimraf(pkgPath, (err) => {
    if (err) {
      return res.status(500).send('Delete failed:' + err);
    }
    return res.status(200).send('success');
  });
});

module.exports = router;