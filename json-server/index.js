const fs = require('fs');
// const jwt = require('jsonwebtoken');
const jsonServer = require('json-server');
const path = require('path');
const router = jsonServer.router(path.resolve(__dirname, 'db.json'));
const server = jsonServer.create();

server.use(async (req, res, next) => {
    // eslint-disable-next-line
    await new Promise((res) => {
        setTimeout(res, 800);
    });
    next();
});

server.use((req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(403).json({ message: 'User not found' });
    }
    next();
});

server.use(jsonServer.defaults());
server.use(router);

server.post('/login', (req, res) => {
    const { username, password } = req.body;
    const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'));
    const { users } = db;

    const userFromDb = users.find(
        (user) => user.username === username && user.password === password
    );

    if (userFromDb) {
        return res.json(username)
    }

    return res.status(403).json({ message: 'User error' });
})

server.listen(8000, () => {
    console.log('server is running on 8000 port');
})
