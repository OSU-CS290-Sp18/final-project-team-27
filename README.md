# Game World



Pull mongo.init.json to osu flip and push to mongo server first!

mongoimport --host classmongo.engr.oregonstate.edu \
  --username YOUR_MONGODB_USERNAME                 \
  --db YOUR_MONGODB_DB_NAME                        \
  --password YOUR_MONGODB_PASSWORD                 \
  --collection commentsDB --jsonArray  mongo-db-init.json

Also remember to add global variable in your git bash terminal!

 export MONGO_HOST="classmongo.engr.oregonstate.edu"
 export MONGO_USER="cs290_xxx"
 export MONGO_DB_NAME="cs290_xxx"
 export MONGO_PASSWORD="cs290_lxxx"
 master
