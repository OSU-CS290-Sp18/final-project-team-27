# Game World




Use the below to initilize your database.
Server currently uses a 'commentsDB' collection name.
```
mongoimport --host classmongo.engr.oregonstate.edu \
  --username YOUR_MONGODB_USERNAME                 \
  --db YOUR_MONGODB_DB_NAME                        \
  --password YOUR_MONGODB_PASSWORD                 \
  --collection people --jsonArray  mongo-db-init.json
```
