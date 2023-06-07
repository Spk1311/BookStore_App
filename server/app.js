const EXPRESS = require('express');
const dotenv = require('dotenv');

dotenv.config();
const CONFIG = require('./config/config');

const PORT = 8000 || process.env.PORT ;
let env = 'development';

const APP = EXPRESS();

require('./config/database.config')(CONFIG[env]);
require('./config/express')(APP);
require('./config/routes')(APP);

APP.listen(PORT);
console.log(`Server is listening on port ${PORT}`);