# CRUD POSTGRESSQL

## CREAT 

We use insert into like 
    
    INSERT INTO Tab_name(col1,col2,col3) VALUES ('VAL1','VAL2','VAL3')
    
## READ

Select :
    
    Select * from table_name
    
## update 

    UPDATE Tab_name SET col_name = 'new value' WHERE id=5;
    
## Delete

    DELETE FROM Tab_name WHERE condition;
    
# Filter 

- where 
    - IS NULL / IS NOT NULL
    - LIKE 
- LIMIT 
- BETWEEN 'value1' AND 'value2'

# 2. Migration 

Creating the files :

    db-migrate create shopy-node-first --sql-file   


## Instructions to install db-migrate

1. Install the global package npm install -g db-migrate
2. Install the package to the project yarn add db-migrate db-migrate-pg
3. Add a database.json reference file in the root of the project. Later, when we are working with multiple databases - this will allow us to specify what database we want to run migrations on. Here is an example database.json, you will just need to change the database names:

    {
    "dev": {
        "driver": "pg",
        "host": "127.0.0.1",
        "database": "fantasy_worlds",
        "user": "magical_user",
        "password": "password123"
    },
    "test": {
        "driver": "pg",
        "host": "127.0.0.1",
        "database": "fantasy_worlds_test",
        "user": "test_user",
        "password": "password123"
    }
    }

4. Create a migration db-migrate create mythical-worlds-table --sql-file
5. Add the SQL you need to the up and down sql files
6. Bring the migration up db-migrate up
7. Bring the migration down db-migrate down


