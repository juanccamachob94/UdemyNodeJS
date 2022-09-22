router.get('/status', (req, res) => {
  res.status(403).json({ msg: 'API' });
});

router.get('/json', (req, res) => {
  res.json({ msg: 'API' });
});

router.get('/basic', (req, res) => {
  res.send('Hello world');
});
