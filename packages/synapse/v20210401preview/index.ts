import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { DatabasePrincipalAssignmentArgs } from "./databasePrincipalAssignment";
export type DatabasePrincipalAssignment = import("./databasePrincipalAssignment").DatabasePrincipalAssignment;
export const DatabasePrincipalAssignment: typeof import("./databasePrincipalAssignment").DatabasePrincipalAssignment = null as any;
utilities.lazyLoad(exports, ["DatabasePrincipalAssignment"], () => require("./databasePrincipalAssignment"));

export { GetDatabasePrincipalAssignmentArgs, GetDatabasePrincipalAssignmentResult, GetDatabasePrincipalAssignmentOutputArgs } from "./getDatabasePrincipalAssignment";
export const getDatabasePrincipalAssignment: typeof import("./getDatabasePrincipalAssignment").getDatabasePrincipalAssignment = null as any;
export const getDatabasePrincipalAssignmentOutput: typeof import("./getDatabasePrincipalAssignment").getDatabasePrincipalAssignmentOutput = null as any;
utilities.lazyLoad(exports, ["getDatabasePrincipalAssignment","getDatabasePrincipalAssignmentOutput"], () => require("./getDatabasePrincipalAssignment"));

export { GetKustoPoolArgs, GetKustoPoolResult, GetKustoPoolOutputArgs } from "./getKustoPool";
export const getKustoPool: typeof import("./getKustoPool").getKustoPool = null as any;
export const getKustoPoolOutput: typeof import("./getKustoPool").getKustoPoolOutput = null as any;
utilities.lazyLoad(exports, ["getKustoPool","getKustoPoolOutput"], () => require("./getKustoPool"));

export { KustoPoolArgs } from "./kustoPool";
export type KustoPool = import("./kustoPool").KustoPool;
export const KustoPool: typeof import("./kustoPool").KustoPool = null as any;
utilities.lazyLoad(exports, ["KustoPool"], () => require("./kustoPool"));


// Export enums:
export * from "../types/enums/v20210401preview";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:synapse/v20210401preview:DatabasePrincipalAssignment":
                return new DatabasePrincipalAssignment(name, <any>undefined, { urn })
            case "azure-native:synapse/v20210401preview:KustoPool":
                return new KustoPool(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "synapse/v20210401preview", _module)
