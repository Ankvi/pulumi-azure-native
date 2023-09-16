import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { BigDataPoolArgs } from "./bigDataPool";
export type BigDataPool = import("./bigDataPool").BigDataPool;
export const BigDataPool: typeof import("./bigDataPool").BigDataPool = null as any;
utilities.lazyLoad(exports, ["BigDataPool"], () => require("./bigDataPool"));

export { GetBigDataPoolArgs, GetBigDataPoolResult, GetBigDataPoolOutputArgs } from "./getBigDataPool";
export const getBigDataPool: typeof import("./getBigDataPool").getBigDataPool = null as any;
export const getBigDataPoolOutput: typeof import("./getBigDataPool").getBigDataPoolOutput = null as any;
utilities.lazyLoad(exports, ["getBigDataPool","getBigDataPoolOutput"], () => require("./getBigDataPool"));

export { GetSqlPoolArgs, GetSqlPoolResult, GetSqlPoolOutputArgs } from "./getSqlPool";
export const getSqlPool: typeof import("./getSqlPool").getSqlPool = null as any;
export const getSqlPoolOutput: typeof import("./getSqlPool").getSqlPoolOutput = null as any;
utilities.lazyLoad(exports, ["getSqlPool","getSqlPoolOutput"], () => require("./getSqlPool"));

export { GetWorkspaceArgs, GetWorkspaceResult, GetWorkspaceOutputArgs } from "./getWorkspace";
export const getWorkspace: typeof import("./getWorkspace").getWorkspace = null as any;
export const getWorkspaceOutput: typeof import("./getWorkspace").getWorkspaceOutput = null as any;
utilities.lazyLoad(exports, ["getWorkspace","getWorkspaceOutput"], () => require("./getWorkspace"));

export { SqlPoolArgs } from "./sqlPool";
export type SqlPool = import("./sqlPool").SqlPool;
export const SqlPool: typeof import("./sqlPool").SqlPool = null as any;
utilities.lazyLoad(exports, ["SqlPool"], () => require("./sqlPool"));

export { WorkspaceArgs } from "./workspace";
export type Workspace = import("./workspace").Workspace;
export const Workspace: typeof import("./workspace").Workspace = null as any;
utilities.lazyLoad(exports, ["Workspace"], () => require("./workspace"));


// Export enums:
export * from "../types/enums/v20210501";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:synapse/v20210501:BigDataPool":
                return new BigDataPool(name, <any>undefined, { urn })
            case "azure-native:synapse/v20210501:SqlPool":
                return new SqlPool(name, <any>undefined, { urn })
            case "azure-native:synapse/v20210501:Workspace":
                return new Workspace(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "synapse/v20210501", _module)
