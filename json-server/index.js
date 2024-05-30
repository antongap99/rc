const express = require('express');
const fs = require('fs');
const jwt = require('jsonwebtoken');
const path = require('path');
const cors = require('cors')

const app = express();
const PORT = 5000;

app.use(cors())
app.use(express.json());

app.use(async (req, res, next) => {
	await new Promise((resolve) => {
		setTimeout(resolve, 800);
	});
	next();
});

app.use(async (req, res, next) => {
	console.log('req.headers', req.headers.authorization)
	if (!req.headers.authorization) {
		return res.status(403).json({ message: 'AUTH ERROR' });
	}
	next();
});

const dbFilePath = path.resolve(__dirname, 'db.json');

app.get('/login', (req, res) => {
	const { username, password } = req.body;
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

app.post('/login', (req, res) => {
	const { username, password } = req.body;
	const db = JSON.parse(fs.readFileSync(dbFilePath, 'UTF-8'));
	const { users } = db;

	const userFromDb = users.find((user) => {
		return user.username === username && user.password === password;
	});

	if (userFromDb) {
		return res.json(userFromDb);
	}



	return res.status(200).json({ message: 'ВСЕ НОРМ' });
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
