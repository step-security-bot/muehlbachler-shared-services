import { AWSRdsConfig } from './rds';

/**
 * Defines AWS data.
 */
export type AWSData = {
  readonly postgres: AWSRdsConfig;
};

/**
 * Defines AWS VPC data.
 */
export type AWSVpcData = {
  readonly cidr: string;
  readonly ipv6Only: boolean;
};
