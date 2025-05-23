import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetEntityArgs, GetEntityResult, GetEntityOutputArgs } from "./getEntity";
export const getEntity: typeof import("./getEntity").getEntity = null as any;
export const getEntityOutput: typeof import("./getEntity").getEntityOutput = null as any;
utilities.lazyLoad(exports, ["getEntity","getEntityOutput"], () => require("./getEntity"));

export { GetHierarchySettingArgs, GetHierarchySettingResult, GetHierarchySettingOutputArgs } from "./getHierarchySetting";
export const getHierarchySetting: typeof import("./getHierarchySetting").getHierarchySetting = null as any;
export const getHierarchySettingOutput: typeof import("./getHierarchySetting").getHierarchySettingOutput = null as any;
utilities.lazyLoad(exports, ["getHierarchySetting","getHierarchySettingOutput"], () => require("./getHierarchySetting"));

export { GetManagementGroupArgs, GetManagementGroupResult, GetManagementGroupOutputArgs } from "./getManagementGroup";
export const getManagementGroup: typeof import("./getManagementGroup").getManagementGroup = null as any;
export const getManagementGroupOutput: typeof import("./getManagementGroup").getManagementGroupOutput = null as any;
utilities.lazyLoad(exports, ["getManagementGroup","getManagementGroupOutput"], () => require("./getManagementGroup"));

export { GetManagementGroupSubscriptionArgs, GetManagementGroupSubscriptionResult, GetManagementGroupSubscriptionOutputArgs } from "./getManagementGroupSubscription";
export const getManagementGroupSubscription: typeof import("./getManagementGroupSubscription").getManagementGroupSubscription = null as any;
export const getManagementGroupSubscriptionOutput: typeof import("./getManagementGroupSubscription").getManagementGroupSubscriptionOutput = null as any;
utilities.lazyLoad(exports, ["getManagementGroupSubscription","getManagementGroupSubscriptionOutput"], () => require("./getManagementGroupSubscription"));

export { GetServiceGroupArgs, GetServiceGroupResult, GetServiceGroupOutputArgs } from "./getServiceGroup";
export const getServiceGroup: typeof import("./getServiceGroup").getServiceGroup = null as any;
export const getServiceGroupOutput: typeof import("./getServiceGroup").getServiceGroupOutput = null as any;
utilities.lazyLoad(exports, ["getServiceGroup","getServiceGroupOutput"], () => require("./getServiceGroup"));

export { HierarchySettingArgs } from "./hierarchySetting";
export type HierarchySetting = import("./hierarchySetting").HierarchySetting;
export const HierarchySetting: typeof import("./hierarchySetting").HierarchySetting = null as any;
utilities.lazyLoad(exports, ["HierarchySetting"], () => require("./hierarchySetting"));

export { ListServiceGroupAncestorsArgs, ListServiceGroupAncestorsResult, ListServiceGroupAncestorsOutputArgs } from "./listServiceGroupAncestors";
export const listServiceGroupAncestors: typeof import("./listServiceGroupAncestors").listServiceGroupAncestors = null as any;
export const listServiceGroupAncestorsOutput: typeof import("./listServiceGroupAncestors").listServiceGroupAncestorsOutput = null as any;
utilities.lazyLoad(exports, ["listServiceGroupAncestors","listServiceGroupAncestorsOutput"], () => require("./listServiceGroupAncestors"));

export { ManagementGroupArgs } from "./managementGroup";
export type ManagementGroup = import("./managementGroup").ManagementGroup;
export const ManagementGroup: typeof import("./managementGroup").ManagementGroup = null as any;
utilities.lazyLoad(exports, ["ManagementGroup"], () => require("./managementGroup"));

export { ManagementGroupSubscriptionArgs } from "./managementGroupSubscription";
export type ManagementGroupSubscription = import("./managementGroupSubscription").ManagementGroupSubscription;
export const ManagementGroupSubscription: typeof import("./managementGroupSubscription").ManagementGroupSubscription = null as any;
utilities.lazyLoad(exports, ["ManagementGroupSubscription"], () => require("./managementGroupSubscription"));

export { ServiceGroupArgs } from "./serviceGroup";
export type ServiceGroup = import("./serviceGroup").ServiceGroup;
export const ServiceGroup: typeof import("./serviceGroup").ServiceGroup = null as any;
utilities.lazyLoad(exports, ["ServiceGroup"], () => require("./serviceGroup"));


const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:management:HierarchySetting":
                return new HierarchySetting(name, <any>undefined, { urn })
            case "azure-native:management:ManagementGroup":
                return new ManagementGroup(name, <any>undefined, { urn })
            case "azure-native:management:ManagementGroupSubscription":
                return new ManagementGroupSubscription(name, <any>undefined, { urn })
            case "azure-native:management:ServiceGroup":
                return new ServiceGroup(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "management", _module)