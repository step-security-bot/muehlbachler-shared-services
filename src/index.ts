import { createRDSInstance } from './lib/aws/rds/create';
import { awsConfig } from './lib/configuration';

export = async () => {
  const awsRdsPostgresql = await createRDSInstance(awsConfig.postgres);

  return {
    aws: {
      postgresql: {
        id: awsRdsPostgresql.rds.id,
        address: awsRdsPostgresql.rds.address,
        port: awsRdsPostgresql.rds.port,
        endpoint: awsRdsPostgresql.rds.endpoint,
        username: awsRdsPostgresql.rds.username,
        password: awsRdsPostgresql.password.password,
      },
    },
  };
};
