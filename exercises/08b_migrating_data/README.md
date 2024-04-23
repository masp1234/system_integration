## Set up test containers

### MongoDB container

Go into the mongodb folder 
```cd scripts/mongodb```

Run the setup script ```bash setup-mongodb.sh```

The script will set up a mongodb Docker container and map it to port ```27018``` on the host by default

The script will also create the database, some collections and insert some data.

### MySQL container

Go into the mysql folder cd ```../mysql```

Run the setup script ```bash setup-mysql.sh```

The script will setup a MySQL Docker container and map it to port ```3306``` on the host by default.

The script will also create the database, some tables, but no rows will be inserted into the tables.

## Migrating the data from MongoDB to MySQL

After setting up the containers, you can run the ```migrate.js``` script by running the command ```node migrate.js```

If the migration completed succesfully, you will get a message indicating that. If not, you will get a message that indicates that a database transaction was rolled back.






