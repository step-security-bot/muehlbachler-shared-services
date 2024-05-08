import { AWSRdsConfig } from './rds';

/**
 * Defines AWS data.
 */
export interface AWSData {
  readonly postgres: AWSRdsConfig;
}

/**
 * Defines AWS VPC data.
 */
export interface AWSVpcData {
  readonly cidr: string;
  readonly ipv6Only: boolean;
}
