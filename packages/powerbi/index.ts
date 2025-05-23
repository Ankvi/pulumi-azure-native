import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetPrivateEndpointConnectionArgs, GetPrivateEndpointConnectionResult, GetPrivateEndpointConnectionOutputArgs } from "./getPrivateEndpointConnection";
export const getPrivateEndpointConnection: typeof import("./getPrivateEndpointConnection").getPrivateEndpointConnection = null as any;
export const getPrivateEndpointConnectionOutput: typeof import("./getPrivateEndpointConnection").getPrivateEndpointConnectionOutput = null as any;
utilities.lazyLoad(exports, ["getPrivateEndpointConnection","getPrivateEndpointConnectionOutput"], () => require("./getPrivateEndpointConnection"));

export { GetWorkspaceCollectionArgs, GetWorkspaceCollectionResult, GetWorkspaceCollectionOutputArgs } from "./getWorkspaceCollection";
export const getWorkspaceCollection: typeof import("./getWorkspaceCollection").getWorkspaceCollection = null as any;
export const getWorkspaceCollectionOutput: typeof import("./getWorkspaceCollection").getWorkspaceCollectionOutput = null as any;
utilities.lazyLoad(exports, ["getWorkspaceCollection","getWorkspaceCollectionOutput"], () => require("./getWorkspaceCollection"));

export { ListWorkspaceCollectionAccessKeysArgs, ListWorkspaceCollectionAccessKeysResult, ListWorkspaceCollectionAccessKeysOutputArgs } from "./listWorkspaceCollectionAccessKeys";
export const listWorkspaceCollectionAccessKeys: typeof import("./listWorkspaceCollectionAccessKeys").listWorkspaceCollectionAccessKeys = null as any;
export const listWorkspaceCollectionAccessKeysOutput: typeof import("./listWorkspaceCollectionAccessKeys").listWorkspaceCollectionAccessKeysOutput = null as any;
utilities.lazyLoad(exports, ["listWorkspaceCollectionAccessKeys","listWorkspaceCollectionAccessKeysOutput"], () => require("./listWorkspaceCollectionAccessKeys"));

export { PowerBIResourceArgs } from "./powerBIResource";
export type PowerBIResource = import("./powerBIResource").PowerBIResource;
export const PowerBIResource: typeof import("./powerBIResource").PowerBIResource = null as any;
utilities.lazyLoad(exports, ["PowerBIResource"], () => require("./powerBIResource"));

export { PrivateEndpointConnectionArgs } from "./privateEndpointConnection";
export type PrivateEndpointConnection = import("./privateEndpointConnection").PrivateEndpointConnection;
export const PrivateEndpointConnection: typeof import("./privateEndpointConnection").PrivateEndpointConnection = null as any;
utilities.lazyLoad(exports, ["PrivateEndpointConnection"], () => require("./privateEndpointConnection"));

export { WorkspaceCollectionArgs } from "./workspaceCollection";
export type WorkspaceCollection = import("./workspaceCollection").WorkspaceCollection;
export const WorkspaceCollection: typeof import("./workspaceCollection").WorkspaceCollection = null as any;
utilities.lazyLoad(exports, ["WorkspaceCollection"], () => require("./workspaceCollection"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:powerbi:PowerBIResource":
                return new PowerBIResource(name, <any>undefined, { urn })
            case "azure-native:powerbi:PrivateEndpointConnection":
                return new PrivateEndpointConnection(name, <any>undefined, { urn })
            case "azure-native:powerbi:WorkspaceCollection":
                return new WorkspaceCollection(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "powerbi", _module)