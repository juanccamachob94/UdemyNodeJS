module.exports = {
  create: (req, res) => {
    res.json({ msg: 'create', body: req.body });
  },
  delete: (req, res) => {
    res.json({ msg: 'delete' });
  },
  edit: (req, res) => {
    res.json({ msg: 'edit' });
  },
  index: (req, res) => {
    res.json({ msg: 'index' });
  },
  new: (req, res) => {
    res.json({ msg: 'new' });
  },
  patch: (req, res) => {
    res.json({ msg: 'patch' });
  },
  show: (req, res) => {
    res.json({ msg: 'show', query: req.query });
  },
  update: (req, res) => {
    res.json({ msg: 'update' });
  }
}
