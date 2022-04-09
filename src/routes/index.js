const router = require('express').Router();

router.get('/hello-world', (req, res, next) => {
  try {
    return res.send('Hello world');
  } catch (error) {
    next(error);
  }
});

module.exports = router;
