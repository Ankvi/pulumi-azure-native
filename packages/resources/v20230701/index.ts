import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { DeploymentArgs } from "./deployment";
export type Deployment = import("./deployment").Deployment;
export const Deployment: typeof import("./deployment").Deployment = null as any;
utilities.lazyLoad(exports, ["Deployment"], () => require("./deployment"));

export { DeploymentAtManagementGroupScopeArgs } from "./deploymentAtManagementGroupScope";
export type DeploymentAtManagementGroupScope = import("./deploymentAtManagementGroupScope").DeploymentAtManagementGroupScope;
export const DeploymentAtManagementGroupScope: typeof import("./deploymentAtManagementGroupScope").DeploymentAtManagementGroupScope = null as any;
utilities.lazyLoad(exports, ["DeploymentAtManagementGroupScope"], () => require("./deploymentAtManagementGroupScope"));

export { DeploymentAtScopeArgs } from "./deploymentAtScope";
export type DeploymentAtScope = import("./deploymentAtScope").DeploymentAtScope;
export const DeploymentAtScope: typeof import("./deploymentAtScope").DeploymentAtScope = null as any;
utilities.lazyLoad(exports, ["DeploymentAtScope"], () => require("./deploymentAtScope"));

export { DeploymentAtSubscriptionScopeArgs } from "./deploymentAtSubscriptionScope";
export type DeploymentAtSubscriptionScope = import("./deploymentAtSubscriptionScope").DeploymentAtSubscriptionScope;
export const DeploymentAtSubscriptionScope: typeof import("./deploymentAtSubscriptionScope").DeploymentAtSubscriptionScope = null as any;
utilities.lazyLoad(exports, ["DeploymentAtSubscriptionScope"], () => require("./deploymentAtSubscriptionScope"));

export { DeploymentAtTenantScopeArgs } from "./deploymentAtTenantScope";
export type DeploymentAtTenantScope = import("./deploymentAtTenantScope").DeploymentAtTenantScope;
export const DeploymentAtTenantScope: typeof import("./deploymentAtTenantScope").DeploymentAtTenantScope = null as any;
utilities.lazyLoad(exports, ["DeploymentAtTenantScope"], () => require("./deploymentAtTenantScope"));

export { GetDeploymentArgs, GetDeploymentResult, GetDeploymentOutputArgs } from "./getDeployment";
export const getDeployment: typeof import("./getDeployment").getDeployment = null as any;
export const getDeploymentOutput: typeof import("./getDeployment").getDeploymentOutput = null as any;
utilities.lazyLoad(exports, ["getDeployment","getDeploymentOutput"], () => require("./getDeployment"));

export { GetDeploymentAtManagementGroupScopeArgs, GetDeploymentAtManagementGroupScopeResult, GetDeploymentAtManagementGroupScopeOutputArgs } from "./getDeploymentAtManagementGroupScope";
export const getDeploymentAtManagementGroupScope: typeof import("./getDeploymentAtManagementGroupScope").getDeploymentAtManagementGroupScope = null as any;
export const getDeploymentAtManagementGroupScopeOutput: typeof import("./getDeploymentAtManagementGroupScope").getDeploymentAtManagementGroupScopeOutput = null as any;
utilities.lazyLoad(exports, ["getDeploymentAtManagementGroupScope","getDeploymentAtManagementGroupScopeOutput"], () => require("./getDeploymentAtManagementGroupScope"));

export { GetDeploymentAtScopeArgs, GetDeploymentAtScopeResult, GetDeploymentAtScopeOutputArgs } from "./getDeploymentAtScope";
export const getDeploymentAtScope: typeof import("./getDeploymentAtScope").getDeploymentAtScope = null as any;
export const getDeploymentAtScopeOutput: typeof import("./getDeploymentAtScope").getDeploymentAtScopeOutput = null as any;
utilities.lazyLoad(exports, ["getDeploymentAtScope","getDeploymentAtScopeOutput"], () => require("./getDeploymentAtScope"));

export { GetDeploymentAtSubscriptionScopeArgs, GetDeploymentAtSubscriptionScopeResult, GetDeploymentAtSubscriptionScopeOutputArgs } from "./getDeploymentAtSubscriptionScope";
export const getDeploymentAtSubscriptionScope: typeof import("./getDeploymentAtSubscriptionScope").getDeploymentAtSubscriptionScope = null as any;
export const getDeploymentAtSubscriptionScopeOutput: typeof import("./getDeploymentAtSubscriptionScope").getDeploymentAtSubscriptionScopeOutput = null as any;
utilities.lazyLoad(exports, ["getDeploymentAtSubscriptionScope","getDeploymentAtSubscriptionScopeOutput"], () => require("./getDeploymentAtSubscriptionScope"));

export { GetDeploymentAtTenantScopeArgs, GetDeploymentAtTenantScopeResult, GetDeploymentAtTenantScopeOutputArgs } from "./getDeploymentAtTenantScope";
export const getDeploymentAtTenantScope: typeof import("./getDeploymentAtTenantScope").getDeploymentAtTenantScope = null as any;
export const getDeploymentAtTenantScopeOutput: typeof import("./getDeploymentAtTenantScope").getDeploymentAtTenantScopeOutput = null as any;
utilities.lazyLoad(exports, ["getDeploymentAtTenantScope","getDeploymentAtTenantScopeOutput"], () => require("./getDeploymentAtTenantScope"));

export { GetResourceArgs, GetResourceResult, GetResourceOutputArgs } from "./getResource";
export const getResource: typeof import("./getResource").getResource = null as any;
export const getResourceOutput: typeof import("./getResource").getResourceOutput = null as any;
utilities.lazyLoad(exports, ["getResource","getResourceOutput"], () => require("./getResource"));

export { GetResourceGroupArgs, GetResourceGroupResult, GetResourceGroupOutputArgs } from "./getResourceGroup";
export const getResourceGroup: typeof import("./getResourceGroup").getResourceGroup = null as any;
export const getResourceGroupOutput: typeof import("./getResourceGroup").getResourceGroupOutput = null as any;
utilities.lazyLoad(exports, ["getResourceGroup","getResourceGroupOutput"], () => require("./getResourceGroup"));

export { GetTagAtScopeArgs, GetTagAtScopeResult, GetTagAtScopeOutputArgs } from "./getTagAtScope";
export const getTagAtScope: typeof import("./getTagAtScope").getTagAtScope = null as any;
export const getTagAtScopeOutput: typeof import("./getTagAtScope").getTagAtScopeOutput = null as any;
utilities.lazyLoad(exports, ["getTagAtScope","getTagAtScopeOutput"], () => require("./getTagAtScope"));

export { ResourceArgs } from "./resource";
export type Resource = import("./resource").Resource;
export const Resource: typeof import("./resource").Resource = null as any;
utilities.lazyLoad(exports, ["Resource"], () => require("./resource"));

export { ResourceGroupArgs } from "./resourceGroup";
export type ResourceGroup = import("./resourceGroup").ResourceGroup;
export const ResourceGroup: typeof import("./resourceGroup").ResourceGroup = null as any;
utilities.lazyLoad(exports, ["ResourceGroup"], () => require("./resourceGroup"));

export { TagAtScopeArgs } from "./tagAtScope";
export type TagAtScope = import("./tagAtScope").TagAtScope;
export const TagAtScope: typeof import("./tagAtScope").TagAtScope = null as any;
utilities.lazyLoad(exports, ["TagAtScope"], () => require("./tagAtScope"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:resources/v20230701:Deployment":
                return new Deployment(name, <any>undefined, { urn })
            case "azure-native:resources/v20230701:DeploymentAtManagementGroupScope":
                return new DeploymentAtManagementGroupScope(name, <any>undefined, { urn })
            case "azure-native:resources/v20230701:DeploymentAtScope":
                return new DeploymentAtScope(name, <any>undefined, { urn })
            case "azure-native:resources/v20230701:DeploymentAtSubscriptionScope":
                return new DeploymentAtSubscriptionScope(name, <any>undefined, { urn })
            case "azure-native:resources/v20230701:DeploymentAtTenantScope":
                return new DeploymentAtTenantScope(name, <any>undefined, { urn })
            case "azure-native:resources/v20230701:Resource":
                return new Resource(name, <any>undefined, { urn })
            case "azure-native:resources/v20230701:ResourceGroup":
                return new ResourceGroup(name, <any>undefined, { urn })
            case "azure-native:resources/v20230701:TagAtScope":
                return new TagAtScope(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "resources/v20230701", _module)