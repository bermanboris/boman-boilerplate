import mongoose from 'mongoose';

const config = {
  db: 'mongodb://localhost:27017/graphql-backend1'
};

mongoose.Promise = global.Promise;

(async () => {
  try {
    await mongoose.connect(config.db, {
      useMongoClient: true
    });
    console.log('Successfully connected to MongoDB!');
  } catch (err) {
    console.log(
      'Error connecting to MongoDB:',
      err.message
    );
  }
})();

export default {
  User: require('./models/User').default
};
