const express = require('express');
const fs = require('fs');
const jwt = require('jsonwebtoken');
const path = require('path');
const cors = require('cors')
const app = express();
const PORT = 8000;

app.use(express.json());

app.use(cors({
	// TODO добавить в env
	origin: 'http://localhost:3000'
}));
app.use(async (req, res, next) => {
	await new Promise((resolve) => {
		setTimeout(resolve, 800);
	});
	next();
});

app.use(async (req, res, next) => {
	if (!req.headers.authorization) {
		return res.status(403).json({ message: 'AUTH ERROR' });
	}
	next();
});

const dbFilePath = path.resolve(__dirname, 'db.json');

app.post('/login', (req, res) => {
	const { username, password } = req.body;
	console.log('log password', username, password)
	const db = JSON.parse(fs.readFileSync(dbFilePath, 'UTF-8'));
	const { users } = db;

	const userFromDb = users.find((user) => {
		return user.username === username && user.password === password;
	});

	if (userFromDb) {
		return res.json(userFromDb);
	}

	return res.status(403).json({ message: 'AUTH ERROR' });
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
