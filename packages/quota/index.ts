import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetGroupQuotaArgs, GetGroupQuotaResult, GetGroupQuotaOutputArgs } from "./getGroupQuota";
export const getGroupQuota: typeof import("./getGroupQuota").getGroupQuota = null as any;
export const getGroupQuotaOutput: typeof import("./getGroupQuota").getGroupQuotaOutput = null as any;
utilities.lazyLoad(exports, ["getGroupQuota","getGroupQuotaOutput"], () => require("./getGroupQuota"));

export { GetGroupQuotaSubscriptionArgs, GetGroupQuotaSubscriptionResult, GetGroupQuotaSubscriptionOutputArgs } from "./getGroupQuotaSubscription";
export const getGroupQuotaSubscription: typeof import("./getGroupQuotaSubscription").getGroupQuotaSubscription = null as any;
export const getGroupQuotaSubscriptionOutput: typeof import("./getGroupQuotaSubscription").getGroupQuotaSubscriptionOutput = null as any;
utilities.lazyLoad(exports, ["getGroupQuotaSubscription","getGroupQuotaSubscriptionOutput"], () => require("./getGroupQuotaSubscription"));

export { GroupQuotaArgs } from "./groupQuota";
export type GroupQuota = import("./groupQuota").GroupQuota;
export const GroupQuota: typeof import("./groupQuota").GroupQuota = null as any;
utilities.lazyLoad(exports, ["GroupQuota"], () => require("./groupQuota"));

export { GroupQuotaSubscriptionArgs } from "./groupQuotaSubscription";
export type GroupQuotaSubscription = import("./groupQuotaSubscription").GroupQuotaSubscription;
export const GroupQuotaSubscription: typeof import("./groupQuotaSubscription").GroupQuotaSubscription = null as any;
utilities.lazyLoad(exports, ["GroupQuotaSubscription"], () => require("./groupQuotaSubscription"));


const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:quota:GroupQuota":
                return new GroupQuota(name, <any>undefined, { urn })
            case "azure-native:quota:GroupQuotaSubscription":
                return new GroupQuotaSubscription(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "quota", _module)