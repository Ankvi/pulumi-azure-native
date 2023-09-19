import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetRemediationAtManagementGroupArgs, GetRemediationAtManagementGroupResult, GetRemediationAtManagementGroupOutputArgs } from "./getRemediationAtManagementGroup";
export const getRemediationAtManagementGroup: typeof import("./getRemediationAtManagementGroup").getRemediationAtManagementGroup = null as any;
export const getRemediationAtManagementGroupOutput: typeof import("./getRemediationAtManagementGroup").getRemediationAtManagementGroupOutput = null as any;
utilities.lazyLoad(exports, ["getRemediationAtManagementGroup","getRemediationAtManagementGroupOutput"], () => require("./getRemediationAtManagementGroup"));

export { GetRemediationAtResourceArgs, GetRemediationAtResourceResult, GetRemediationAtResourceOutputArgs } from "./getRemediationAtResource";
export const getRemediationAtResource: typeof import("./getRemediationAtResource").getRemediationAtResource = null as any;
export const getRemediationAtResourceOutput: typeof import("./getRemediationAtResource").getRemediationAtResourceOutput = null as any;
utilities.lazyLoad(exports, ["getRemediationAtResource","getRemediationAtResourceOutput"], () => require("./getRemediationAtResource"));

export { GetRemediationAtResourceGroupArgs, GetRemediationAtResourceGroupResult, GetRemediationAtResourceGroupOutputArgs } from "./getRemediationAtResourceGroup";
export const getRemediationAtResourceGroup: typeof import("./getRemediationAtResourceGroup").getRemediationAtResourceGroup = null as any;
export const getRemediationAtResourceGroupOutput: typeof import("./getRemediationAtResourceGroup").getRemediationAtResourceGroupOutput = null as any;
utilities.lazyLoad(exports, ["getRemediationAtResourceGroup","getRemediationAtResourceGroupOutput"], () => require("./getRemediationAtResourceGroup"));

export { GetRemediationAtSubscriptionArgs, GetRemediationAtSubscriptionResult, GetRemediationAtSubscriptionOutputArgs } from "./getRemediationAtSubscription";
export const getRemediationAtSubscription: typeof import("./getRemediationAtSubscription").getRemediationAtSubscription = null as any;
export const getRemediationAtSubscriptionOutput: typeof import("./getRemediationAtSubscription").getRemediationAtSubscriptionOutput = null as any;
utilities.lazyLoad(exports, ["getRemediationAtSubscription","getRemediationAtSubscriptionOutput"], () => require("./getRemediationAtSubscription"));

export { ListRemediationDeploymentsAtManagementGroupArgs, ListRemediationDeploymentsAtManagementGroupResult, ListRemediationDeploymentsAtManagementGroupOutputArgs } from "./listRemediationDeploymentsAtManagementGroup";
export const listRemediationDeploymentsAtManagementGroup: typeof import("./listRemediationDeploymentsAtManagementGroup").listRemediationDeploymentsAtManagementGroup = null as any;
export const listRemediationDeploymentsAtManagementGroupOutput: typeof import("./listRemediationDeploymentsAtManagementGroup").listRemediationDeploymentsAtManagementGroupOutput = null as any;
utilities.lazyLoad(exports, ["listRemediationDeploymentsAtManagementGroup","listRemediationDeploymentsAtManagementGroupOutput"], () => require("./listRemediationDeploymentsAtManagementGroup"));

export { ListRemediationDeploymentsAtResourceArgs, ListRemediationDeploymentsAtResourceResult, ListRemediationDeploymentsAtResourceOutputArgs } from "./listRemediationDeploymentsAtResource";
export const listRemediationDeploymentsAtResource: typeof import("./listRemediationDeploymentsAtResource").listRemediationDeploymentsAtResource = null as any;
export const listRemediationDeploymentsAtResourceOutput: typeof import("./listRemediationDeploymentsAtResource").listRemediationDeploymentsAtResourceOutput = null as any;
utilities.lazyLoad(exports, ["listRemediationDeploymentsAtResource","listRemediationDeploymentsAtResourceOutput"], () => require("./listRemediationDeploymentsAtResource"));

export { ListRemediationDeploymentsAtResourceGroupArgs, ListRemediationDeploymentsAtResourceGroupResult, ListRemediationDeploymentsAtResourceGroupOutputArgs } from "./listRemediationDeploymentsAtResourceGroup";
export const listRemediationDeploymentsAtResourceGroup: typeof import("./listRemediationDeploymentsAtResourceGroup").listRemediationDeploymentsAtResourceGroup = null as any;
export const listRemediationDeploymentsAtResourceGroupOutput: typeof import("./listRemediationDeploymentsAtResourceGroup").listRemediationDeploymentsAtResourceGroupOutput = null as any;
utilities.lazyLoad(exports, ["listRemediationDeploymentsAtResourceGroup","listRemediationDeploymentsAtResourceGroupOutput"], () => require("./listRemediationDeploymentsAtResourceGroup"));

export { ListRemediationDeploymentsAtSubscriptionArgs, ListRemediationDeploymentsAtSubscriptionResult, ListRemediationDeploymentsAtSubscriptionOutputArgs } from "./listRemediationDeploymentsAtSubscription";
export const listRemediationDeploymentsAtSubscription: typeof import("./listRemediationDeploymentsAtSubscription").listRemediationDeploymentsAtSubscription = null as any;
export const listRemediationDeploymentsAtSubscriptionOutput: typeof import("./listRemediationDeploymentsAtSubscription").listRemediationDeploymentsAtSubscriptionOutput = null as any;
utilities.lazyLoad(exports, ["listRemediationDeploymentsAtSubscription","listRemediationDeploymentsAtSubscriptionOutput"], () => require("./listRemediationDeploymentsAtSubscription"));

export { RemediationAtManagementGroupArgs } from "./remediationAtManagementGroup";
export type RemediationAtManagementGroup = import("./remediationAtManagementGroup").RemediationAtManagementGroup;
export const RemediationAtManagementGroup: typeof import("./remediationAtManagementGroup").RemediationAtManagementGroup = null as any;
utilities.lazyLoad(exports, ["RemediationAtManagementGroup"], () => require("./remediationAtManagementGroup"));

export { RemediationAtResourceArgs } from "./remediationAtResource";
export type RemediationAtResource = import("./remediationAtResource").RemediationAtResource;
export const RemediationAtResource: typeof import("./remediationAtResource").RemediationAtResource = null as any;
utilities.lazyLoad(exports, ["RemediationAtResource"], () => require("./remediationAtResource"));

export { RemediationAtResourceGroupArgs } from "./remediationAtResourceGroup";
export type RemediationAtResourceGroup = import("./remediationAtResourceGroup").RemediationAtResourceGroup;
export const RemediationAtResourceGroup: typeof import("./remediationAtResourceGroup").RemediationAtResourceGroup = null as any;
utilities.lazyLoad(exports, ["RemediationAtResourceGroup"], () => require("./remediationAtResourceGroup"));

export { RemediationAtSubscriptionArgs } from "./remediationAtSubscription";
export type RemediationAtSubscription = import("./remediationAtSubscription").RemediationAtSubscription;
export const RemediationAtSubscription: typeof import("./remediationAtSubscription").RemediationAtSubscription = null as any;
utilities.lazyLoad(exports, ["RemediationAtSubscription"], () => require("./remediationAtSubscription"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:policyinsights/v20211001:RemediationAtManagementGroup":
                return new RemediationAtManagementGroup(name, <any>undefined, { urn })
            case "azure-native:policyinsights/v20211001:RemediationAtResource":
                return new RemediationAtResource(name, <any>undefined, { urn })
            case "azure-native:policyinsights/v20211001:RemediationAtResourceGroup":
                return new RemediationAtResourceGroup(name, <any>undefined, { urn })
            case "azure-native:policyinsights/v20211001:RemediationAtSubscription":
                return new RemediationAtSubscription(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "policyinsights/v20211001", _module)
