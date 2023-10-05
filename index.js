const express = require('express');
const app = express();
// Create an instance of a Router
const router = express.Router();
// Configure JSON parsing in body of request object
app.use(express.json());

const port = 3000;

// Mount routes from modules
router.use('/product', require('./routes/product'));

// Configure router so all routes are prefixed with /api
app.use('/api', router);

let server = app.listen(port, function() {
	console.log(`AdWorksAPI is running on http://localhost:${port}.`);
});
