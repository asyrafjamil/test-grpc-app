const grpc = require('@grpc/grpc-js');
const PROTO_PATH = './proto/jardis.proto';
const protoLoader = require('@grpc/proto-loader');

const options = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
};
const packageDefinition = protoLoader.loadSync(PROTO_PATH, options);
const proto = grpc.loadPackageDefinition(packageDefinition);

const server = new grpc.Server();

server.addService(proto.JardisService.service, {
  checkHealth: (_, callback) => {
    callback(null, {status: 'success', message: 'J.A.R.D.I.S is healthy'});
  },
  getSize: (_, callback) => {
    callback(null, {size: 'S'});
  },
  getImageIndex: (_, callback) => {
    callback(null, {index: 5});
  },
});

server.bindAsync(
    '127.0.0.1:50051',
    grpc.ServerCredentials.createInsecure(),
    (error, port) => {
      console.log('Server at port:', port);
      console.log('Server running at http://127.0.0.1:50051');
      server.start();
    },
);
