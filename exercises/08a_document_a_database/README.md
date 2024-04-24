### Example documentation

https://dbdocs.io/masp1234/webshop

### Setting up the MySQL database

Run the setup-and-dump-mysql script ```bash setup-and-dump.mysql.sh```

The script will create a docker container with MySQL installed, run a setup file to create a database and add some tables to that database. After the database creation is done, a .sql dump file is created from that database.

This is not needed, as you could just convert the setup.sql file to .dbml instead of doing all the above first, but it was to demonstrate doing it on an already created database.

### Converting a .sql file to .dbml

For the global ``` npm install -g``` commands, you may need to run as ```sudo```

Install dbml first ```npm install -g @dbml/cli```

Now convert the dump.sql file to .dbml ```sql2dbml --mysql dump.sql --out-file  webshop.dbml```


### Creating documentation from .dbml

install dbdocs ```npm install -g dbdocs```

If you don't have an account already, go to https://dbdocs.io/ to sign up

If you are not already authenticated you need to log in ```dbdocs login```

Build the documentation ```dbdocs build webshop.dbml```

Input a project name and visit the url that is logged to the console to see the documentation. 

Alternatively, go to your account page on https://dbdocs.io/ to see a list of your projects.
