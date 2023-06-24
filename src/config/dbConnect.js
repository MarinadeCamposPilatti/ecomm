import mongoose from 'mongoose';

const connectOption = process.env.SERVER || 'localhost';

mongoose.connect(`mongodb://admin:secret@${connectOption}:27017/ecomm?authSource=admin`);

const db = mongoose.connection;

export default db;
