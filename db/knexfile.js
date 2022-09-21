	// const path = require('path');

  const sharedConfig = {
	    client: 'sqlite3',
      useNullAsDefault: true,
	    connection: {
	      filename: './db.sqlite3'
      },
      migrations: {
	      directory: './migrations'
      },
      seeds: {
        directory: './seeds'
      },
  }
  /* note */
  // for some reason the client isn't working unless it's stated here and in index.js

  const environment = process.env.NODE_ENV || 'development'
  
	module.exports = {
    // sharedConfig,
    // environment,
	  development: {...sharedConfig},
    production: {...sharedConfig},
    testing: {...sharedConfig}
};

