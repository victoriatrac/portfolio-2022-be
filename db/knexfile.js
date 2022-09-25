const sharedConfig = {
    client:'sqlite3',
    useNullAsDefault: true,

migrations:{
    directory:'./data/migrations',
},
seeds:{
    directory:'./data/seeds',
},
pool:{ afterCreate:(conn, done)=>{conn.run('PRAGMA foreign_keys = ON', done)},},
}

module.exports = {
    development:{
        ...sharedConfig, 
        connection: {filename:'db/data/db.sqlite3'}
    },

testing:{
    ...sharedConfig, connection:{filename:'db/data/db.sqlite3'}
},

production:{...sharedConfig,
    connection:{filename:'db/data/db.sqlite3'}
}


}



/*

// const path = require('path');

  const sharedConfig = {
	    client: 'sqlite3',
      useNullAsDefault: true,
	    connection: {
	      filename: './data/db.sqlite3'
      },
      migrations: {
	      directory: './data/migrations'
      },
      seeds: {
        directory: './data/seeds'
      },
  }
  
  // for some reason the client isn't working unless it's stated here and in index.js

  const environment = process.env.NODE_ENV || 'development'
  
	module.exports = {
    // sharedConfig,
    // environment,
	  development: {...sharedConfig},
    production: {...sharedConfig},
    testing: {...sharedConfig}
};

*/