import * as mongodbatlas from '@pulumi/mongodbatlas';

/**
 * Defines MongoDB Cluster data.
 */
export interface MongoDBClusterData {
  readonly cluster: mongodbatlas.AdvancedCluster;
}
