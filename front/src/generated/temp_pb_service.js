// package: temp
// file: temp.proto

var temp_pb = require("./temp_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Temper = (function () {
  function Temper() {}
  Temper.serviceName = "temp.Temper";
  return Temper;
}());

Temper.SayHello = {
  methodName: "SayHello",
  service: Temper,
  requestStream: false,
  responseStream: false,
  requestType: temp_pb.HelloRequest,
  responseType: temp_pb.HelloReply
};

Temper.SayHello2 = {
  methodName: "SayHello2",
  service: Temper,
  requestStream: false,
  responseStream: false,
  requestType: temp_pb.HelloRequest,
  responseType: temp_pb.HelloReply
};

exports.Temper = Temper;

function TemperClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

TemperClient.prototype.sayHello = function sayHello(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Temper.SayHello, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

TemperClient.prototype.sayHello2 = function sayHello2(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Temper.SayHello2, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.TemperClient = TemperClient;

