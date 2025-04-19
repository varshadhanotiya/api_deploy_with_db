const mongoose = require('mongoose');

const connectDB = async () => {
  console.log(process.env.MONGO_URI);
  console.log(process.env.NODE_ENV);
  console.log(process.env.PORT);
  try {
    const conn = await mongoose.connect('mongodb+srv://varshadhanotiya7026:admin@cluster0.qi1l7.mongodb.net/api_deployment?retryWrites=true&w=majority&appName=Cluster0', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB; 