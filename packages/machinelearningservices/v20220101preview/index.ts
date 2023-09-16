import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { ComputeArgs } from "./compute";
export type Compute = import("./compute").Compute;
export const Compute: typeof import("./compute").Compute = null as any;
utilities.lazyLoad(exports, ["Compute"], () => require("./compute"));

export { GetComputeArgs, GetComputeResult, GetComputeOutputArgs } from "./getCompute";
export const getCompute: typeof import("./getCompute").getCompute = null as any;
export const getComputeOutput: typeof import("./getCompute").getComputeOutput = null as any;
utilities.lazyLoad(exports, ["getCompute","getComputeOutput"], () => require("./getCompute"));

export { GetPrivateEndpointConnectionArgs, GetPrivateEndpointConnectionResult, GetPrivateEndpointConnectionOutputArgs } from "./getPrivateEndpointConnection";
export const getPrivateEndpointConnection: typeof import("./getPrivateEndpointConnection").getPrivateEndpointConnection = null as any;
export const getPrivateEndpointConnectionOutput: typeof import("./getPrivateEndpointConnection").getPrivateEndpointConnectionOutput = null as any;
utilities.lazyLoad(exports, ["getPrivateEndpointConnection","getPrivateEndpointConnectionOutput"], () => require("./getPrivateEndpointConnection"));

export { GetWorkspaceArgs, GetWorkspaceResult, GetWorkspaceOutputArgs } from "./getWorkspace";
export const getWorkspace: typeof import("./getWorkspace").getWorkspace = null as any;
export const getWorkspaceOutput: typeof import("./getWorkspace").getWorkspaceOutput = null as any;
utilities.lazyLoad(exports, ["getWorkspace","getWorkspaceOutput"], () => require("./getWorkspace"));

export { ListComputeKeysArgs, ListComputeKeysResult, ListComputeKeysOutputArgs } from "./listComputeKeys";
export const listComputeKeys: typeof import("./listComputeKeys").listComputeKeys = null as any;
export const listComputeKeysOutput: typeof import("./listComputeKeys").listComputeKeysOutput = null as any;
utilities.lazyLoad(exports, ["listComputeKeys","listComputeKeysOutput"], () => require("./listComputeKeys"));

export { ListComputeNodesArgs, ListComputeNodesResult, ListComputeNodesOutputArgs } from "./listComputeNodes";
export const listComputeNodes: typeof import("./listComputeNodes").listComputeNodes = null as any;
export const listComputeNodesOutput: typeof import("./listComputeNodes").listComputeNodesOutput = null as any;
utilities.lazyLoad(exports, ["listComputeNodes","listComputeNodesOutput"], () => require("./listComputeNodes"));

export { ListWorkspaceKeysArgs, ListWorkspaceKeysResult, ListWorkspaceKeysOutputArgs } from "./listWorkspaceKeys";
export const listWorkspaceKeys: typeof import("./listWorkspaceKeys").listWorkspaceKeys = null as any;
export const listWorkspaceKeysOutput: typeof import("./listWorkspaceKeys").listWorkspaceKeysOutput = null as any;
utilities.lazyLoad(exports, ["listWorkspaceKeys","listWorkspaceKeysOutput"], () => require("./listWorkspaceKeys"));

export { ListWorkspaceNotebookAccessTokenArgs, ListWorkspaceNotebookAccessTokenResult, ListWorkspaceNotebookAccessTokenOutputArgs } from "./listWorkspaceNotebookAccessToken";
export const listWorkspaceNotebookAccessToken: typeof import("./listWorkspaceNotebookAccessToken").listWorkspaceNotebookAccessToken = null as any;
export const listWorkspaceNotebookAccessTokenOutput: typeof import("./listWorkspaceNotebookAccessToken").listWorkspaceNotebookAccessTokenOutput = null as any;
utilities.lazyLoad(exports, ["listWorkspaceNotebookAccessToken","listWorkspaceNotebookAccessTokenOutput"], () => require("./listWorkspaceNotebookAccessToken"));

export { ListWorkspaceNotebookKeysArgs, ListWorkspaceNotebookKeysResult, ListWorkspaceNotebookKeysOutputArgs } from "./listWorkspaceNotebookKeys";
export const listWorkspaceNotebookKeys: typeof import("./listWorkspaceNotebookKeys").listWorkspaceNotebookKeys = null as any;
export const listWorkspaceNotebookKeysOutput: typeof import("./listWorkspaceNotebookKeys").listWorkspaceNotebookKeysOutput = null as any;
utilities.lazyLoad(exports, ["listWorkspaceNotebookKeys","listWorkspaceNotebookKeysOutput"], () => require("./listWorkspaceNotebookKeys"));

export { ListWorkspaceStorageAccountKeysArgs, ListWorkspaceStorageAccountKeysResult, ListWorkspaceStorageAccountKeysOutputArgs } from "./listWorkspaceStorageAccountKeys";
export const listWorkspaceStorageAccountKeys: typeof import("./listWorkspaceStorageAccountKeys").listWorkspaceStorageAccountKeys = null as any;
export const listWorkspaceStorageAccountKeysOutput: typeof import("./listWorkspaceStorageAccountKeys").listWorkspaceStorageAccountKeysOutput = null as any;
utilities.lazyLoad(exports, ["listWorkspaceStorageAccountKeys","listWorkspaceStorageAccountKeysOutput"], () => require("./listWorkspaceStorageAccountKeys"));

export { PrivateEndpointConnectionArgs } from "./privateEndpointConnection";
export type PrivateEndpointConnection = import("./privateEndpointConnection").PrivateEndpointConnection;
export const PrivateEndpointConnection: typeof import("./privateEndpointConnection").PrivateEndpointConnection = null as any;
utilities.lazyLoad(exports, ["PrivateEndpointConnection"], () => require("./privateEndpointConnection"));

export { WorkspaceArgs } from "./workspace";
export type Workspace = import("./workspace").Workspace;
export const Workspace: typeof import("./workspace").Workspace = null as any;
utilities.lazyLoad(exports, ["Workspace"], () => require("./workspace"));


// Export enums:
export * from "../types/enums/v20220101preview";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:machinelearningservices/v20220101preview:Compute":
                return new Compute(name, <any>undefined, { urn })
            case "azure-native:machinelearningservices/v20220101preview:PrivateEndpointConnection":
                return new PrivateEndpointConnection(name, <any>undefined, { urn })
            case "azure-native:machinelearningservices/v20220101preview:Workspace":
                return new Workspace(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "machinelearningservices/v20220101preview", _module)
