require("dotenv").config();

const msalConfig = {
	auth: {
		clientId: process.env.CLIENT_ID,
		authority: process.env.AAD_ENDPOINT + process.env.TENANT_ID,
		clientSecret: process.env.CLIENT_SECRET,
	}
};

const corsOptions = {
	origin: 'http://localhost:3000'
}

module.exports = {
	msalConfig,
	corsOptions
};
