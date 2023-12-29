# Description

## Run on Dev

1. Download repository
2. Create a copy of the file `.env.template` and rename to `.env` and change the enviroment variables.
3. Install Dependencies `npm install`
4. Create database `docker compose up -d`
5. Run Migration from prisma `npx prisma migrate dev`
6. Run seed `npm run seed`
7. Run proyect `npm run dev`

## Run on Production
