/**
 * Defines MongoDB Cluster data.
 */
export interface MongoDBClusterConfig {
  readonly name: string;
  readonly projectId: string;
  readonly provider: string;
  readonly region: string;
  readonly size: string;
}
