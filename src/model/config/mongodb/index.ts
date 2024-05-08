import { MongoDBClusterConfig } from './cluster';

/**
 * Defines MongoDB data.
 */
export interface MongoDBData {
  readonly cluster: MongoDBClusterConfig;
}
