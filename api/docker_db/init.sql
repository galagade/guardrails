CREATE USER 'guardrail'@'%' IDENTIFIED BY 'password';

CREATE SCHEMA `guardrail` DEFAULT CHARACTER SET utf8;

GRANT INSERT, CREATE, ALTER, UPDATE, SELECT, REFERENCES on guardrail.*
TO 'guardrail'@'%' IDENTIFIED BY 'password'
WITH GRANT OPTION;
