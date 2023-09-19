import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { DataSourceArgs } from "./dataSource";
export type DataSource = import("./dataSource").DataSource;
export const DataSource: typeof import("./dataSource").DataSource = null as any;
utilities.lazyLoad(exports, ["DataSource"], () => require("./dataSource"));

export { GetDataSourceArgs, GetDataSourceResult, GetDataSourceOutputArgs } from "./getDataSource";
export const getDataSource: typeof import("./getDataSource").getDataSource = null as any;
export const getDataSourceOutput: typeof import("./getDataSource").getDataSourceOutput = null as any;
utilities.lazyLoad(exports, ["getDataSource","getDataSourceOutput"], () => require("./getDataSource"));

export { GetLinkedServiceArgs, GetLinkedServiceResult, GetLinkedServiceOutputArgs } from "./getLinkedService";
export const getLinkedService: typeof import("./getLinkedService").getLinkedService = null as any;
export const getLinkedServiceOutput: typeof import("./getLinkedService").getLinkedServiceOutput = null as any;
utilities.lazyLoad(exports, ["getLinkedService","getLinkedServiceOutput"], () => require("./getLinkedService"));

export { GetMachineGroupArgs, GetMachineGroupResult, GetMachineGroupOutputArgs } from "./getMachineGroup";
export const getMachineGroup: typeof import("./getMachineGroup").getMachineGroup = null as any;
export const getMachineGroupOutput: typeof import("./getMachineGroup").getMachineGroupOutput = null as any;
utilities.lazyLoad(exports, ["getMachineGroup","getMachineGroupOutput"], () => require("./getMachineGroup"));

export { GetWorkspaceArgs, GetWorkspaceResult, GetWorkspaceOutputArgs } from "./getWorkspace";
export const getWorkspace: typeof import("./getWorkspace").getWorkspace = null as any;
export const getWorkspaceOutput: typeof import("./getWorkspace").getWorkspaceOutput = null as any;
utilities.lazyLoad(exports, ["getWorkspace","getWorkspaceOutput"], () => require("./getWorkspace"));

export { GetWorkspaceSharedKeysArgs, GetWorkspaceSharedKeysResult, GetWorkspaceSharedKeysOutputArgs } from "./getWorkspaceSharedKeys";
export const getWorkspaceSharedKeys: typeof import("./getWorkspaceSharedKeys").getWorkspaceSharedKeys = null as any;
export const getWorkspaceSharedKeysOutput: typeof import("./getWorkspaceSharedKeys").getWorkspaceSharedKeysOutput = null as any;
utilities.lazyLoad(exports, ["getWorkspaceSharedKeys","getWorkspaceSharedKeysOutput"], () => require("./getWorkspaceSharedKeys"));

export { LinkedServiceArgs } from "./linkedService";
export type LinkedService = import("./linkedService").LinkedService;
export const LinkedService: typeof import("./linkedService").LinkedService = null as any;
utilities.lazyLoad(exports, ["LinkedService"], () => require("./linkedService"));

export { MachineGroupArgs } from "./machineGroup";
export type MachineGroup = import("./machineGroup").MachineGroup;
export const MachineGroup: typeof import("./machineGroup").MachineGroup = null as any;
utilities.lazyLoad(exports, ["MachineGroup"], () => require("./machineGroup"));

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
            case "azure-native:operationalinsights/v20151101preview:DataSource":
                return new DataSource(name, <any>undefined, { urn })
            case "azure-native:operationalinsights/v20151101preview:LinkedService":
                return new LinkedService(name, <any>undefined, { urn })
            case "azure-native:operationalinsights/v20151101preview:MachineGroup":
                return new MachineGroup(name, <any>undefined, { urn })
            case "azure-native:operationalinsights/v20151101preview:Workspace":
                return new Workspace(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "operationalinsights/v20151101preview", _module)
