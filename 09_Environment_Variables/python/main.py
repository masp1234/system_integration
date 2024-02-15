from dotenv import load_dotenv, dotenv_values

# Example 1

environment_variables = dotenv_values()
print(environment_variables)
print(environment_variables["MYSQL_PASSWORD"])
load_dotenv()

# Example 2

import os

load_dotenv()
print(os.getenv("MYSQL_PASSWORD"))