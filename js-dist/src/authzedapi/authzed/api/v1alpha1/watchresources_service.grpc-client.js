"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WatchResourcesServiceClient = void 0;
// @generated by protobuf-ts 2.0.7 with parameter generate_dependencies,long_type_string,client_grpc1
// @generated from protobuf file "authzed/api/v1alpha1/watchresources_service.proto" (package "authzed.api.v1alpha1", syntax proto3)
// tslint:disable
const watchresources_service_1 = require("./watchresources_service");
const grpc = __importStar(require("@grpc/grpc-js"));
/**
 * WatchResourcesService is used to receive a stream of updates for resources of a
 * specific (resource type, permission, subject) combination.
 *
 * @generated from protobuf service authzed.api.v1alpha1.WatchResourcesService
 */
class WatchResourcesServiceClient extends grpc.Client {
    constructor(address, credentials, options = {}, binaryOptions = {}) {
        super(address, credentials, options);
        this._binaryOptions = binaryOptions;
    }
    /**
     * WatchResources initiates a watch for permission changes for the provided
     * (resource type, permission, subject) pair.
     *
     * @generated from protobuf rpc: WatchResources(authzed.api.v1alpha1.WatchResourcesRequest) returns (stream authzed.api.v1alpha1.WatchResourcesResponse);
     */
    watchResources(input, metadata, options) {
        const method = watchresources_service_1.WatchResourcesService.methods[0];
        return this.makeServerStreamRequest(`/${watchresources_service_1.WatchResourcesService.typeName}/${method.name}`, (value) => Buffer.from(method.I.toBinary(value, this._binaryOptions)), (value) => method.O.fromBinary(value, this._binaryOptions), input, metadata, options);
    }
}
exports.WatchResourcesServiceClient = WatchResourcesServiceClient;
//# sourceMappingURL=watchresources_service.grpc-client.js.map