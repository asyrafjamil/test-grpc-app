const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const PROTO_PATH = './proto/jardis.proto';

const options = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
};

const packageDefinition = protoLoader.loadSync(PROTO_PATH, options);

const JardisService = grpc.
    loadPackageDefinition(packageDefinition).JardisService;

const client = new JardisService(
    'localhost:50051',
    grpc.credentials.createInsecure(),
);

module.exports = client;
