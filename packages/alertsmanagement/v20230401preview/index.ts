import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetTenantActivityLogAlertArgs, GetTenantActivityLogAlertResult, GetTenantActivityLogAlertOutputArgs } from "./getTenantActivityLogAlert";
export const getTenantActivityLogAlert: typeof import("./getTenantActivityLogAlert").getTenantActivityLogAlert = null as any;
export const getTenantActivityLogAlertOutput: typeof import("./getTenantActivityLogAlert").getTenantActivityLogAlertOutput = null as any;
utilities.lazyLoad(exports, ["getTenantActivityLogAlert","getTenantActivityLogAlertOutput"], () => require("./getTenantActivityLogAlert"));

export { TenantActivityLogAlertArgs } from "./tenantActivityLogAlert";
export type TenantActivityLogAlert = import("./tenantActivityLogAlert").TenantActivityLogAlert;
export const TenantActivityLogAlert: typeof import("./tenantActivityLogAlert").TenantActivityLogAlert = null as any;
utilities.lazyLoad(exports, ["TenantActivityLogAlert"], () => require("./tenantActivityLogAlert"));


const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:alertsmanagement/v20230401preview:TenantActivityLogAlert":
                return new TenantActivityLogAlert(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "alertsmanagement/v20230401preview", _module)