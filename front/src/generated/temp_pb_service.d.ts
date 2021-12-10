// package: temp
// file: temp.proto

import * as temp_pb from "./temp_pb";
import {grpc} from "@improbable-eng/grpc-web";

type TemperSayHello = {
  readonly methodName: string;
  readonly service: typeof Temper;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof temp_pb.HelloRequest;
  readonly responseType: typeof temp_pb.HelloReply;
};

type TemperSayHello2 = {
  readonly methodName: string;
  readonly service: typeof Temper;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof temp_pb.HelloRequest;
  readonly responseType: typeof temp_pb.HelloReply;
};

export class Temper {
  static readonly serviceName: string;
  static readonly SayHello: TemperSayHello;
  static readonly SayHello2: TemperSayHello2;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class TemperClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  sayHello(
    requestMessage: temp_pb.HelloRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: temp_pb.HelloReply|null) => void
  ): UnaryResponse;
  sayHello(
    requestMessage: temp_pb.HelloRequest,
    callback: (error: ServiceError|null, responseMessage: temp_pb.HelloReply|null) => void
  ): UnaryResponse;
  sayHello2(
    requestMessage: temp_pb.HelloRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: temp_pb.HelloReply|null) => void
  ): UnaryResponse;
  sayHello2(
    requestMessage: temp_pb.HelloRequest,
    callback: (error: ServiceError|null, responseMessage: temp_pb.HelloReply|null) => void
  ): UnaryResponse;
}

