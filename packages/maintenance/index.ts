import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { ConfigurationAssignmentArgs } from "./configurationAssignment";
export type ConfigurationAssignment = import("./configurationAssignment").ConfigurationAssignment;
export const ConfigurationAssignment: typeof import("./configurationAssignment").ConfigurationAssignment = null as any;
utilities.lazyLoad(exports, ["ConfigurationAssignment"], () => require("./configurationAssignment"));

export { ConfigurationAssignmentParentArgs } from "./configurationAssignmentParent";
export type ConfigurationAssignmentParent = import("./configurationAssignmentParent").ConfigurationAssignmentParent;
export const ConfigurationAssignmentParent: typeof import("./configurationAssignmentParent").ConfigurationAssignmentParent = null as any;
utilities.lazyLoad(exports, ["ConfigurationAssignmentParent"], () => require("./configurationAssignmentParent"));

export { ConfigurationAssignmentsForResourceGroupArgs } from "./configurationAssignmentsForResourceGroup";
export type ConfigurationAssignmentsForResourceGroup = import("./configurationAssignmentsForResourceGroup").ConfigurationAssignmentsForResourceGroup;
export const ConfigurationAssignmentsForResourceGroup: typeof import("./configurationAssignmentsForResourceGroup").ConfigurationAssignmentsForResourceGroup = null as any;
utilities.lazyLoad(exports, ["ConfigurationAssignmentsForResourceGroup"], () => require("./configurationAssignmentsForResourceGroup"));

export { ConfigurationAssignmentsForSubscriptionArgs } from "./configurationAssignmentsForSubscription";
export type ConfigurationAssignmentsForSubscription = import("./configurationAssignmentsForSubscription").ConfigurationAssignmentsForSubscription;
export const ConfigurationAssignmentsForSubscription: typeof import("./configurationAssignmentsForSubscription").ConfigurationAssignmentsForSubscription = null as any;
utilities.lazyLoad(exports, ["ConfigurationAssignmentsForSubscription"], () => require("./configurationAssignmentsForSubscription"));

export { GetConfigurationAssignmentArgs, GetConfigurationAssignmentResult, GetConfigurationAssignmentOutputArgs } from "./getConfigurationAssignment";
export const getConfigurationAssignment: typeof import("./getConfigurationAssignment").getConfigurationAssignment = null as any;
export const getConfigurationAssignmentOutput: typeof import("./getConfigurationAssignment").getConfigurationAssignmentOutput = null as any;
utilities.lazyLoad(exports, ["getConfigurationAssignment","getConfigurationAssignmentOutput"], () => require("./getConfigurationAssignment"));

export { GetConfigurationAssignmentParentArgs, GetConfigurationAssignmentParentResult, GetConfigurationAssignmentParentOutputArgs } from "./getConfigurationAssignmentParent";
export const getConfigurationAssignmentParent: typeof import("./getConfigurationAssignmentParent").getConfigurationAssignmentParent = null as any;
export const getConfigurationAssignmentParentOutput: typeof import("./getConfigurationAssignmentParent").getConfigurationAssignmentParentOutput = null as any;
utilities.lazyLoad(exports, ["getConfigurationAssignmentParent","getConfigurationAssignmentParentOutput"], () => require("./getConfigurationAssignmentParent"));

export { GetConfigurationAssignmentsForResourceGroupArgs, GetConfigurationAssignmentsForResourceGroupResult, GetConfigurationAssignmentsForResourceGroupOutputArgs } from "./getConfigurationAssignmentsForResourceGroup";
export const getConfigurationAssignmentsForResourceGroup: typeof import("./getConfigurationAssignmentsForResourceGroup").getConfigurationAssignmentsForResourceGroup = null as any;
export const getConfigurationAssignmentsForResourceGroupOutput: typeof import("./getConfigurationAssignmentsForResourceGroup").getConfigurationAssignmentsForResourceGroupOutput = null as any;
utilities.lazyLoad(exports, ["getConfigurationAssignmentsForResourceGroup","getConfigurationAssignmentsForResourceGroupOutput"], () => require("./getConfigurationAssignmentsForResourceGroup"));

export { GetConfigurationAssignmentsForSubscriptionArgs, GetConfigurationAssignmentsForSubscriptionResult, GetConfigurationAssignmentsForSubscriptionOutputArgs } from "./getConfigurationAssignmentsForSubscription";
export const getConfigurationAssignmentsForSubscription: typeof import("./getConfigurationAssignmentsForSubscription").getConfigurationAssignmentsForSubscription = null as any;
export const getConfigurationAssignmentsForSubscriptionOutput: typeof import("./getConfigurationAssignmentsForSubscription").getConfigurationAssignmentsForSubscriptionOutput = null as any;
utilities.lazyLoad(exports, ["getConfigurationAssignmentsForSubscription","getConfigurationAssignmentsForSubscriptionOutput"], () => require("./getConfigurationAssignmentsForSubscription"));

export { GetMaintenanceConfigurationArgs, GetMaintenanceConfigurationResult, GetMaintenanceConfigurationOutputArgs } from "./getMaintenanceConfiguration";
export const getMaintenanceConfiguration: typeof import("./getMaintenanceConfiguration").getMaintenanceConfiguration = null as any;
export const getMaintenanceConfigurationOutput: typeof import("./getMaintenanceConfiguration").getMaintenanceConfigurationOutput = null as any;
utilities.lazyLoad(exports, ["getMaintenanceConfiguration","getMaintenanceConfigurationOutput"], () => require("./getMaintenanceConfiguration"));

export { MaintenanceConfigurationArgs } from "./maintenanceConfiguration";
export type MaintenanceConfiguration = import("./maintenanceConfiguration").MaintenanceConfiguration;
export const MaintenanceConfiguration: typeof import("./maintenanceConfiguration").MaintenanceConfiguration = null as any;
utilities.lazyLoad(exports, ["MaintenanceConfiguration"], () => require("./maintenanceConfiguration"));


// Export enums:
export * from "./types/enums";

// Export sub-modules:
import * as v20221101preview from "./v20221101preview";
import * as v20230401 from "./v20230401";
import * as v20230901preview from "./v20230901preview";

export {
    v20221101preview,
    v20230401,
    v20230901preview,
};

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:maintenance:ConfigurationAssignment":
                return new ConfigurationAssignment(name, <any>undefined, { urn })
            case "azure-native:maintenance:ConfigurationAssignmentParent":
                return new ConfigurationAssignmentParent(name, <any>undefined, { urn })
            case "azure-native:maintenance:ConfigurationAssignmentsForResourceGroup":
                return new ConfigurationAssignmentsForResourceGroup(name, <any>undefined, { urn })
            case "azure-native:maintenance:ConfigurationAssignmentsForSubscription":
                return new ConfigurationAssignmentsForSubscription(name, <any>undefined, { urn })
            case "azure-native:maintenance:MaintenanceConfiguration":
                return new MaintenanceConfiguration(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "maintenance", _module)
