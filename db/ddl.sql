CREATE EXTENSION IF NOT EXISTS pgcrypto WITH SCHEMA public;
COMMENT ON EXTENSION pgcrypto IS 'cryptographic functions';

DROP TABLE IF EXISTS projects;
DROP TABLE IF EXISTS charges;

CREATE TABLE projects (
  id uuid DEFAULT gen_random_uuid() NOT NULL,
  name text NOT NULL,
  created_at timestamp with time zone DEFAULT now()
);

CREATE TABLE charges (
  id uuid DEFAULT gen_random_uuid() NOT NULL,
  amount integer NOT NULL,
  date VARCHAR (255) NOT NULL,
  name text NOT NULL,
  description text NOT NULL,
  type text NOT NULL,
  created_at timestamp with time zone DEFAULT now()
);

-- SELECT 'chance';
-- INSERT INTO projects(name)

-- INSERT INTO "charges" (amount,date,name,description,type)
-- VALUES 
--   (1000,'2018-01-29T15:38:53-06:00','Sentry','Annual renewal for company licenses.','AP'),
--   (500,'2018-03-31T15:38:53-05:00','AWS','Annual renewal for company licenses.','AP'),
--   (100,'2017-12-14T15:38:53-06:00','Sentry','Annual renewal for company licenses.','AP');