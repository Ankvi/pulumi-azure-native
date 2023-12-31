import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { DatabaseSecurityAlertPolicyArgs } from "./databaseSecurityAlertPolicy";
export type DatabaseSecurityAlertPolicy = import("./databaseSecurityAlertPolicy").DatabaseSecurityAlertPolicy;
export const DatabaseSecurityAlertPolicy: typeof import("./databaseSecurityAlertPolicy").DatabaseSecurityAlertPolicy = null as any;
utilities.lazyLoad(exports, ["DatabaseSecurityAlertPolicy"], () => require("./databaseSecurityAlertPolicy"));

export { GetDatabaseSecurityAlertPolicyArgs, GetDatabaseSecurityAlertPolicyResult, GetDatabaseSecurityAlertPolicyOutputArgs } from "./getDatabaseSecurityAlertPolicy";
export const getDatabaseSecurityAlertPolicy: typeof import("./getDatabaseSecurityAlertPolicy").getDatabaseSecurityAlertPolicy = null as any;
export const getDatabaseSecurityAlertPolicyOutput: typeof import("./getDatabaseSecurityAlertPolicy").getDatabaseSecurityAlertPolicyOutput = null as any;
utilities.lazyLoad(exports, ["getDatabaseSecurityAlertPolicy","getDatabaseSecurityAlertPolicyOutput"], () => require("./getDatabaseSecurityAlertPolicy"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:sql/v20180601preview:DatabaseSecurityAlertPolicy":
                return new DatabaseSecurityAlertPolicy(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "sql/v20180601preview", _module)
