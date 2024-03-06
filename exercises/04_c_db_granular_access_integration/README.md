# Integrating https://github.com/RenasAli/Database-granular-access

## Student table

### Selecting students
![student rows](images/select-students.png)

Works as documented.



### Deleting a student
![delete student error](images/delete-student.png)

Also works as expected; receiving a permission denied error.

### Inserting a student
![insert student error](images/insert-student.png)

Also gives a permission denied error.

## Updating a student
![update student error](images/update-student.png)¨

Also not allowed.


## Admin table

### Deleting an admin
![insert student error](images/delete-admin.png)

Works as advertised.

## User table

### Selecting users

![selecting users error](images/select-users.png)

Also works as advertised - not allowed to select everything from this table

### Selecting only user_name and user_address

![selecting user_name and user_address](images/select-user-name-and-user-address.png)

Does not work as advertised. Should be possible to select these.

### Creating a table

![create table error](images/create-table.png)

Was not mentioned in the documentation, but it is not allowed as well.















