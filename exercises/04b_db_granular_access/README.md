# Required setup

-  Have Docker installed
-  Clone this repository and navigate into the ```04b_db_granular_access``` folder
-  Open a bash shell and run the following commands
    1.  ```sudo bash start-postgres-container.sh```

    2. ```sudo docker exec -it pg bash ```

    3. ```bash /home/db-setup/setup.sh```

    4. ```psql -U rwuser -d postgres```
    
For the 4th command you might need to include ```-h localhost``` at the end of the command.

## After the setup
After these steps a docker container with postgresql installed on it has been created, some tables created, and a user has been created. You'll also be logged in as the user after the setup steps has been completed.

There a 3 tables, all with different permissions set for the user.

Try this command ```\dt``` to see the existing tables

You can also use ```\h``` and ```\?``` to get help using the psql CLI tool.

# Table permissions

When logged in as the "rwuser" you have the following permissions

## Users
- You can read usernames and cities, but not passwords
- You can update the city column but nothing else

## Posts
- You can read everything in this table
- You can insert new entries
- You can update the "text" column

## Comments
- You can read everything in this table
- You can insert new entries
- You can delete entries

# Example commands to try, and their expected results

Remember ```;``` after every query (not needed with with the ```\``` commands eg. ```\dt```)
1. To see all users

    ```SELECT * FROM users;```

    Should give a permission denied error. The table has passwords that are not allowed to be read.

2. To see usernames and cities form the users table
        
    ```SELECT username, city from users;```
    
    Should show usernames and cities for all users.
3. To see all posts

    ```SELECT * FROM posts;```
        
    Should show every entry in the posts table.

4. Deleting an entry from the posts table

    ```DELETE FROM posts WHERE post_id = 1;```
        
    Should give a permission denied error.
        
5. Updating a post

    ```UPDATE posts SET text = 'text changed to this' WHERE post_id = 2;```

    Should update the entry's 'text' column.


        


    

    
