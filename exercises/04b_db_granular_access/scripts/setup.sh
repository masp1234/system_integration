#!/bin/bash

# Variables
DB_NAME="postgres"
DB_USER="postgres"
SQL_SCRIPT="setup.sql"

# Run SQL script
psql -h localhost -U "$DB_USER" -d "$DB_NAME" -a -f "$SQL_SCRIPT"