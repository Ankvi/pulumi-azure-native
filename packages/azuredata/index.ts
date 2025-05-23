import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetSqlServerArgs, GetSqlServerResult, GetSqlServerOutputArgs } from "./getSqlServer";
export const getSqlServer: typeof import("./getSqlServer").getSqlServer = null as any;
export const getSqlServerOutput: typeof import("./getSqlServer").getSqlServerOutput = null as any;
utilities.lazyLoad(exports, ["getSqlServer","getSqlServerOutput"], () => require("./getSqlServer"));

export { GetSqlServerRegistrationArgs, GetSqlServerRegistrationResult, GetSqlServerRegistrationOutputArgs } from "./getSqlServerRegistration";
export const getSqlServerRegistration: typeof import("./getSqlServerRegistration").getSqlServerRegistration = null as any;
export const getSqlServerRegistrationOutput: typeof import("./getSqlServerRegistration").getSqlServerRegistrationOutput = null as any;
utilities.lazyLoad(exports, ["getSqlServerRegistration","getSqlServerRegistrationOutput"], () => require("./getSqlServerRegistration"));

export { SqlServerArgs } from "./sqlServer";
export type SqlServer = import("./sqlServer").SqlServer;
export const SqlServer: typeof import("./sqlServer").SqlServer = null as any;
utilities.lazyLoad(exports, ["SqlServer"], () => require("./sqlServer"));

export { SqlServerRegistrationArgs } from "./sqlServerRegistration";
export type SqlServerRegistration = import("./sqlServerRegistration").SqlServerRegistration;
export const SqlServerRegistration: typeof import("./sqlServerRegistration").SqlServerRegistration = null as any;
utilities.lazyLoad(exports, ["SqlServerRegistration"], () => require("./sqlServerRegistration"));


const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:azuredata:SqlServer":
                return new SqlServer(name, <any>undefined, { urn })
            case "azure-native:azuredata:SqlServerRegistration":
                return new SqlServerRegistration(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "azuredata", _module)