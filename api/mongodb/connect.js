import {MongoClient, ObjectID} from 'mongodb';
import config from '../config';

const {user, password, uri} = config.get('store');

export const mogolabEndpoint = uri.replace('<dbuser>', user).replace('<dbpassword>', password);

export const connect = endpoint => MongoClient.connect(endpoint);

export const close = db => db && db.close();

export const createId = ObjectID;
