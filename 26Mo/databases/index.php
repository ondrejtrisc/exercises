students
--------
id: INT(11), Primary Key
name: VARCHAR(127)
date_of_birth: DATE
major_id: INT(11)
description: TEXT
gender: VARCHAR(32)
email: VARCHAR(127)
last_login: DATETIME
height: DECIMAL(15, 4)


majors
------
id: INT(11), Primary Key
name: VARCHAR(127)