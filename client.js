const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const PROTO_PATH = './proto/nano.proto';

const options = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
};

const packageDefinition = protoLoader.loadSync(PROTO_PATH, options);

const NanoService = grpc.loadPackageDefinition(packageDefinition).NanoService;

const client = new NanoService(
    'localhost:50051',
    grpc.credentials.createInsecure(),
);

module.exports = client;
