import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetTenantActionGroupArgs, GetTenantActionGroupResult, GetTenantActionGroupOutputArgs } from "./getTenantActionGroup";
export const getTenantActionGroup: typeof import("./getTenantActionGroup").getTenantActionGroup = null as any;
export const getTenantActionGroupOutput: typeof import("./getTenantActionGroup").getTenantActionGroupOutput = null as any;
utilities.lazyLoad(exports, ["getTenantActionGroup","getTenantActionGroupOutput"], () => require("./getTenantActionGroup"));

export { TenantActionGroupArgs } from "./tenantActionGroup";
export type TenantActionGroup = import("./tenantActionGroup").TenantActionGroup;
export const TenantActionGroup: typeof import("./tenantActionGroup").TenantActionGroup = null as any;
utilities.lazyLoad(exports, ["TenantActionGroup"], () => require("./tenantActionGroup"));


const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:insights/v20230501preview:TenantActionGroup":
                return new TenantActionGroup(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "insights/v20230501preview", _module)
