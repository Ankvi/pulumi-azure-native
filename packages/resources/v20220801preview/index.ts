import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { DeploymentStackAtManagementGroupArgs } from "./deploymentStackAtManagementGroup";
export type DeploymentStackAtManagementGroup = import("./deploymentStackAtManagementGroup").DeploymentStackAtManagementGroup;
export const DeploymentStackAtManagementGroup: typeof import("./deploymentStackAtManagementGroup").DeploymentStackAtManagementGroup = null as any;
utilities.lazyLoad(exports, ["DeploymentStackAtManagementGroup"], () => require("./deploymentStackAtManagementGroup"));

export { DeploymentStackAtResourceGroupArgs } from "./deploymentStackAtResourceGroup";
export type DeploymentStackAtResourceGroup = import("./deploymentStackAtResourceGroup").DeploymentStackAtResourceGroup;
export const DeploymentStackAtResourceGroup: typeof import("./deploymentStackAtResourceGroup").DeploymentStackAtResourceGroup = null as any;
utilities.lazyLoad(exports, ["DeploymentStackAtResourceGroup"], () => require("./deploymentStackAtResourceGroup"));

export { DeploymentStackAtSubscriptionArgs } from "./deploymentStackAtSubscription";
export type DeploymentStackAtSubscription = import("./deploymentStackAtSubscription").DeploymentStackAtSubscription;
export const DeploymentStackAtSubscription: typeof import("./deploymentStackAtSubscription").DeploymentStackAtSubscription = null as any;
utilities.lazyLoad(exports, ["DeploymentStackAtSubscription"], () => require("./deploymentStackAtSubscription"));

export { GetDeploymentStackAtManagementGroupArgs, GetDeploymentStackAtManagementGroupResult, GetDeploymentStackAtManagementGroupOutputArgs } from "./getDeploymentStackAtManagementGroup";
export const getDeploymentStackAtManagementGroup: typeof import("./getDeploymentStackAtManagementGroup").getDeploymentStackAtManagementGroup = null as any;
export const getDeploymentStackAtManagementGroupOutput: typeof import("./getDeploymentStackAtManagementGroup").getDeploymentStackAtManagementGroupOutput = null as any;
utilities.lazyLoad(exports, ["getDeploymentStackAtManagementGroup","getDeploymentStackAtManagementGroupOutput"], () => require("./getDeploymentStackAtManagementGroup"));

export { GetDeploymentStackAtResourceGroupArgs, GetDeploymentStackAtResourceGroupResult, GetDeploymentStackAtResourceGroupOutputArgs } from "./getDeploymentStackAtResourceGroup";
export const getDeploymentStackAtResourceGroup: typeof import("./getDeploymentStackAtResourceGroup").getDeploymentStackAtResourceGroup = null as any;
export const getDeploymentStackAtResourceGroupOutput: typeof import("./getDeploymentStackAtResourceGroup").getDeploymentStackAtResourceGroupOutput = null as any;
utilities.lazyLoad(exports, ["getDeploymentStackAtResourceGroup","getDeploymentStackAtResourceGroupOutput"], () => require("./getDeploymentStackAtResourceGroup"));

export { GetDeploymentStackAtSubscriptionArgs, GetDeploymentStackAtSubscriptionResult, GetDeploymentStackAtSubscriptionOutputArgs } from "./getDeploymentStackAtSubscription";
export const getDeploymentStackAtSubscription: typeof import("./getDeploymentStackAtSubscription").getDeploymentStackAtSubscription = null as any;
export const getDeploymentStackAtSubscriptionOutput: typeof import("./getDeploymentStackAtSubscription").getDeploymentStackAtSubscriptionOutput = null as any;
utilities.lazyLoad(exports, ["getDeploymentStackAtSubscription","getDeploymentStackAtSubscriptionOutput"], () => require("./getDeploymentStackAtSubscription"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:resources/v20220801preview:DeploymentStackAtManagementGroup":
                return new DeploymentStackAtManagementGroup(name, <any>undefined, { urn })
            case "azure-native:resources/v20220801preview:DeploymentStackAtResourceGroup":
                return new DeploymentStackAtResourceGroup(name, <any>undefined, { urn })
            case "azure-native:resources/v20220801preview:DeploymentStackAtSubscription":
                return new DeploymentStackAtSubscription(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "resources/v20220801preview", _module)
