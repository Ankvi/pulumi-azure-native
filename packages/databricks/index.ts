import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { AccessConnectorArgs } from "./accessConnector";
export type AccessConnector = import("./accessConnector").AccessConnector;
export const AccessConnector: typeof import("./accessConnector").AccessConnector = null as any;
utilities.lazyLoad(exports, ["AccessConnector"], () => require("./accessConnector"));

export { GetAccessConnectorArgs, GetAccessConnectorResult, GetAccessConnectorOutputArgs } from "./getAccessConnector";
export const getAccessConnector: typeof import("./getAccessConnector").getAccessConnector = null as any;
export const getAccessConnectorOutput: typeof import("./getAccessConnector").getAccessConnectorOutput = null as any;
utilities.lazyLoad(exports, ["getAccessConnector","getAccessConnectorOutput"], () => require("./getAccessConnector"));

export { GetPrivateEndpointConnectionArgs, GetPrivateEndpointConnectionResult, GetPrivateEndpointConnectionOutputArgs } from "./getPrivateEndpointConnection";
export const getPrivateEndpointConnection: typeof import("./getPrivateEndpointConnection").getPrivateEndpointConnection = null as any;
export const getPrivateEndpointConnectionOutput: typeof import("./getPrivateEndpointConnection").getPrivateEndpointConnectionOutput = null as any;
utilities.lazyLoad(exports, ["getPrivateEndpointConnection","getPrivateEndpointConnectionOutput"], () => require("./getPrivateEndpointConnection"));

export { GetVNetPeeringArgs, GetVNetPeeringResult, GetVNetPeeringOutputArgs } from "./getVNetPeering";
export const getVNetPeering: typeof import("./getVNetPeering").getVNetPeering = null as any;
export const getVNetPeeringOutput: typeof import("./getVNetPeering").getVNetPeeringOutput = null as any;
utilities.lazyLoad(exports, ["getVNetPeering","getVNetPeeringOutput"], () => require("./getVNetPeering"));

export { GetWorkspaceArgs, GetWorkspaceResult, GetWorkspaceOutputArgs } from "./getWorkspace";
export const getWorkspace: typeof import("./getWorkspace").getWorkspace = null as any;
export const getWorkspaceOutput: typeof import("./getWorkspace").getWorkspaceOutput = null as any;
utilities.lazyLoad(exports, ["getWorkspace","getWorkspaceOutput"], () => require("./getWorkspace"));

export { PrivateEndpointConnectionArgs } from "./privateEndpointConnection";
export type PrivateEndpointConnection = import("./privateEndpointConnection").PrivateEndpointConnection;
export const PrivateEndpointConnection: typeof import("./privateEndpointConnection").PrivateEndpointConnection = null as any;
utilities.lazyLoad(exports, ["PrivateEndpointConnection"], () => require("./privateEndpointConnection"));

export { VNetPeeringArgs } from "./vnetPeering";
export type VNetPeering = import("./vnetPeering").VNetPeering;
export const VNetPeering: typeof import("./vnetPeering").VNetPeering = null as any;
utilities.lazyLoad(exports, ["VNetPeering"], () => require("./vnetPeering"));

export { WorkspaceArgs } from "./workspace";
export type Workspace = import("./workspace").Workspace;
export const Workspace: typeof import("./workspace").Workspace = null as any;
utilities.lazyLoad(exports, ["Workspace"], () => require("./workspace"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:databricks:AccessConnector":
                return new AccessConnector(name, <any>undefined, { urn })
            case "azure-native:databricks:PrivateEndpointConnection":
                return new PrivateEndpointConnection(name, <any>undefined, { urn })
            case "azure-native:databricks:VNetPeering":
                return new VNetPeering(name, <any>undefined, { urn })
            case "azure-native:databricks:Workspace":
                return new Workspace(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "databricks", _module)