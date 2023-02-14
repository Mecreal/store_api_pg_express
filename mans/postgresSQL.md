# 1. SQL starting commandees 
To start the service : 

    sudo systemctl start postgresql.service
    
To open the psql :

    sudo -i -u postgres
    psql


To exit : 
    
    \q
    

    
## Creating User
To create new user :
    
    createuser --interactive

You can get more control by passing some additional flags. Check out the options by looking at the man page:

    man createuser

## DB manupilation

You can create the appropriate database with the createdb command.

To create a database :

    create database <name of db>
    
to connect to a database : 

    \c <name of db>
    
### Tables manupilation 
Create table :

    CREATE TABLE <name of Tab> (name_col1 type(size1), name_col2 type(size2));
    
Example : 
    
        CREATE TABLE playground (
        equip_id serial PRIMARY KEY,
        type varchar (50) NOT NULL,
        color varchar (25) NOT NULL,
        location varchar(25) check (location in ('north', 'south', 'west', 'east', 'northeast', 'southeast', 'southwest', 'northwest')),
        install_date date
    );



Command to list database tables is 
    
    '\dt'
    
## Foreign key 
    
    CREATE TABLE animals ( id SERIAL PRIMARY KEY, region_id REFERENCES regions(id)...);
# 2. More Meta commands in PSQL

Meta commands are a feature that psql has which allows the user to do powerful operations without querying a database. There are lots of metacommands. Here is a list of some of the more common meta commands along with a very brief description:

- \c [database name] - connect to a specified database
- \l - list all databases
- \d - display tables, views, and sequences
    \dt - display just tables
    \dv - display views
    \dm - display materialized views
    \di - display indexes
    \dn - display schemas
    \dT - display data types
        Etc.
- \sv [view name] - show a views definition
- \x - toggle expanded display. Useful for tables with a lot of columns being accessed
    - Can be toggled on/off or set to auto
- \set - list all internal variables
    - \set [Name] [Value] - set new internal variable
- \unset [Name] - delete internal variable
- \cd - change the directory that psql is working in
- \\! [Command] - execute shell command
    - Ex. \\! ls or \\! pwd
- \timing - toggles timing on queries
- \echo [message] - print the message to the console
- \copy - copies to a file
- \i [filename] - execute commands from a file
- \o [file] - writes output to file instead of console
- \q - exits psql

## Advanced Meta Command Techniques
### Multiple Meta Commands

Multiple meta commands can be used in one line. For example you could use \dt\di to list all tables and then list all indexes with additional technical information on the indexes.

### Extra Details

Adding + to the end of the meta command that lists items will provide a small amount of extra technical information. This will work on any \d commands as well as some others.

results of running \dt\di+
Common Error

Meta commands are delimited by a new line as opposed to a ;. This means that you would never see a meta command look like this: \x; The semicolon at the end is unnecessary and will throw an error:

### More Meta Commands

There are quite a few more meta commands that were not listed as they were for relatively niche usages and not as commonly used. For a full list of meta commands use \?. This will bring up the meta command help page with a full list of every meta command and a brief description of its functionality.


This image shows the first commands from \? There are 102 commands in total.

## Summary

- Meta commands are useful commands that can be run from a psql client.
- All metacommands begin with \
- Adding + will provide extra detail on certain metacommands
- For a full list of meta commands use \? in psql
- Do not end meta commands with ;

[Source](https://dataschool.com/learn-sql/meta-commands-in-psql/)


# 3. Adding for the project

## In a terminal tab, create and run the database:

- switch to the postgres user su postgres
- start psql psql postgres
- in psql run the following:
    - CREATE USER shopping_user WITH PASSWORD 'password123';
    - CREATE DATABASE shopping;
    - \c shopping
    - GRANT ALL PRIVILEGES ON DATABASE shopping TO shopping_user;
- to test that it is working run \dt and it should output "No relations found."

## In the 2nd terminal:

- install yarn npm install yarn -g
- install db-migrate on the machine for terminal commands npm install db-migrate -g
- check node version node -v - it needs to be 10 or 12 level
- IF node was not 10 or 12 level, run
    - npm install -g n
    - n 10.18.0
    - PATH="$PATH"
    - node -v to check that the version is 10 or 12
- install all project dependencies yarn
- to test that it is working, run yarn watch should show an app starting on 0.0.0.0:3000

