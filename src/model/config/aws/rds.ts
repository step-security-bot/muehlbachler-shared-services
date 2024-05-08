import { AWSVpcData } from '.';

/**
 * Defines AWS RDS data.
 */
export interface AWSRdsConfig {
  readonly name: string;
  readonly vpc: AWSVpcData;
  readonly instanceClass: string;
  readonly storage: AWSRdsStorageData;
  readonly engine: string;
  readonly engineVersion: string;
  readonly dbAdminUser: string;
  readonly backupRetention: number;
  readonly deletionProtection: boolean;
}

/**
 * Defines AWS RDS storage data.
 */
export interface AWSRdsStorageData {
  readonly allocated: number;
  readonly maximum: number;
}
