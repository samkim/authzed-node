// @generated by protobuf-ts 2.0.7 with parameter generate_dependencies,long_type_string,client_grpc1
// @generated from protobuf file "authzed/api/v1alpha1/watchresources_service.proto" (package "authzed.api.v1alpha1", syntax proto3)
// tslint:disable
import { WatchResourcesService } from "./watchresources_service";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { WatchResourcesResponse } from "./watchresources_service";
import type { WatchResourcesRequest } from "./watchresources_service";
import * as grpc from "@grpc/grpc-js";
/**
 * WatchResourcesService is used to receive a stream of updates for resources of a
 * specific (resource type, permission, subject) combination.
 *
 * @generated from protobuf service authzed.api.v1alpha1.WatchResourcesService
 */
export interface IWatchResourcesServiceClient {
    /**
     * WatchResources initiates a watch for permission changes for the provided
     * (resource type, permission, subject) pair.
     *
     * @generated from protobuf rpc: WatchResources(authzed.api.v1alpha1.WatchResourcesRequest) returns (stream authzed.api.v1alpha1.WatchResourcesResponse);
     */
    watchResources(input: WatchResourcesRequest, metadata?: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<WatchResourcesResponse>;
    watchResources(input: WatchResourcesRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<WatchResourcesResponse>;
}
/**
 * WatchResourcesService is used to receive a stream of updates for resources of a
 * specific (resource type, permission, subject) combination.
 *
 * @generated from protobuf service authzed.api.v1alpha1.WatchResourcesService
 */
export class WatchResourcesServiceClient extends grpc.Client implements IWatchResourcesServiceClient {
    private readonly _binaryOptions: Partial<BinaryReadOptions & BinaryWriteOptions>;
    constructor(address: string, credentials: grpc.ChannelCredentials, options: grpc.ClientOptions = {}, binaryOptions: Partial<BinaryReadOptions & BinaryWriteOptions> = {}) {
        super(address, credentials, options);
        this._binaryOptions = binaryOptions;
    }
    /**
     * WatchResources initiates a watch for permission changes for the provided
     * (resource type, permission, subject) pair.
     *
     * @generated from protobuf rpc: WatchResources(authzed.api.v1alpha1.WatchResourcesRequest) returns (stream authzed.api.v1alpha1.WatchResourcesResponse);
     */
    watchResources(input: WatchResourcesRequest, metadata?: grpc.Metadata | grpc.CallOptions, options?: grpc.CallOptions): grpc.ClientReadableStream<WatchResourcesResponse> {
        const method = WatchResourcesService.methods[0];
        return this.makeServerStreamRequest<WatchResourcesRequest, WatchResourcesResponse>(`/${WatchResourcesService.typeName}/${method.name}`, (value: WatchResourcesRequest): Buffer => Buffer.from(method.I.toBinary(value, this._binaryOptions)), (value: Buffer): WatchResourcesResponse => method.O.fromBinary(value, this._binaryOptions), input, (metadata as any), options);
    }
}
