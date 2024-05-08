import * as aws from '@pulumi/aws';

/**
 * Defines AWS VPC data.
 */
export interface AWSVpcData {
  readonly vpc: aws.ec2.Vpc;
  readonly subnets: readonly aws.ec2.Subnet[];
}
