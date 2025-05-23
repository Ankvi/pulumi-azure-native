import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { AzureCliScriptArgs } from "./azureCliScript";
export type AzureCliScript = import("./azureCliScript").AzureCliScript;
export const AzureCliScript: typeof import("./azureCliScript").AzureCliScript = null as any;
utilities.lazyLoad(exports, ["AzureCliScript"], () => require("./azureCliScript"));

export { AzurePowerShellScriptArgs } from "./azurePowerShellScript";
export type AzurePowerShellScript = import("./azurePowerShellScript").AzurePowerShellScript;
export const AzurePowerShellScript: typeof import("./azurePowerShellScript").AzurePowerShellScript = null as any;
utilities.lazyLoad(exports, ["AzurePowerShellScript"], () => require("./azurePowerShellScript"));

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

export { GetAzureCliScriptArgs, GetAzureCliScriptResult, GetAzureCliScriptOutputArgs } from "./getAzureCliScript";
export const getAzureCliScript: typeof import("./getAzureCliScript").getAzureCliScript = null as any;
export const getAzureCliScriptOutput: typeof import("./getAzureCliScript").getAzureCliScriptOutput = null as any;
utilities.lazyLoad(exports, ["getAzureCliScript","getAzureCliScriptOutput"], () => require("./getAzureCliScript"));

export { GetAzurePowerShellScriptArgs, GetAzurePowerShellScriptResult, GetAzurePowerShellScriptOutputArgs } from "./getAzurePowerShellScript";
export const getAzurePowerShellScript: typeof import("./getAzurePowerShellScript").getAzurePowerShellScript = null as any;
export const getAzurePowerShellScriptOutput: typeof import("./getAzurePowerShellScript").getAzurePowerShellScriptOutput = null as any;
utilities.lazyLoad(exports, ["getAzurePowerShellScript","getAzurePowerShellScriptOutput"], () => require("./getAzurePowerShellScript"));

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

export { GetTemplateSpecArgs, GetTemplateSpecResult, GetTemplateSpecOutputArgs } from "./getTemplateSpec";
export const getTemplateSpec: typeof import("./getTemplateSpec").getTemplateSpec = null as any;
export const getTemplateSpecOutput: typeof import("./getTemplateSpec").getTemplateSpecOutput = null as any;
utilities.lazyLoad(exports, ["getTemplateSpec","getTemplateSpecOutput"], () => require("./getTemplateSpec"));

export { GetTemplateSpecVersionArgs, GetTemplateSpecVersionResult, GetTemplateSpecVersionOutputArgs } from "./getTemplateSpecVersion";
export const getTemplateSpecVersion: typeof import("./getTemplateSpecVersion").getTemplateSpecVersion = null as any;
export const getTemplateSpecVersionOutput: typeof import("./getTemplateSpecVersion").getTemplateSpecVersionOutput = null as any;
utilities.lazyLoad(exports, ["getTemplateSpecVersion","getTemplateSpecVersionOutput"], () => require("./getTemplateSpecVersion"));

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

export { TemplateSpecArgs } from "./templateSpec";
export type TemplateSpec = import("./templateSpec").TemplateSpec;
export const TemplateSpec: typeof import("./templateSpec").TemplateSpec = null as any;
utilities.lazyLoad(exports, ["TemplateSpec"], () => require("./templateSpec"));

export { TemplateSpecVersionArgs } from "./templateSpecVersion";
export type TemplateSpecVersion = import("./templateSpecVersion").TemplateSpecVersion;
export const TemplateSpecVersion: typeof import("./templateSpecVersion").TemplateSpecVersion = null as any;
utilities.lazyLoad(exports, ["TemplateSpecVersion"], () => require("./templateSpecVersion"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:resources:AzureCliScript":
                return new AzureCliScript(name, <any>undefined, { urn })
            case "azure-native:resources:AzurePowerShellScript":
                return new AzurePowerShellScript(name, <any>undefined, { urn })
            case "azure-native:resources:Deployment":
                return new Deployment(name, <any>undefined, { urn })
            case "azure-native:resources:DeploymentAtManagementGroupScope":
                return new DeploymentAtManagementGroupScope(name, <any>undefined, { urn })
            case "azure-native:resources:DeploymentAtScope":
                return new DeploymentAtScope(name, <any>undefined, { urn })
            case "azure-native:resources:DeploymentAtSubscriptionScope":
                return new DeploymentAtSubscriptionScope(name, <any>undefined, { urn })
            case "azure-native:resources:DeploymentAtTenantScope":
                return new DeploymentAtTenantScope(name, <any>undefined, { urn })
            case "azure-native:resources:DeploymentStackAtManagementGroup":
                return new DeploymentStackAtManagementGroup(name, <any>undefined, { urn })
            case "azure-native:resources:DeploymentStackAtResourceGroup":
                return new DeploymentStackAtResourceGroup(name, <any>undefined, { urn })
            case "azure-native:resources:DeploymentStackAtSubscription":
                return new DeploymentStackAtSubscription(name, <any>undefined, { urn })
            case "azure-native:resources:Resource":
                return new Resource(name, <any>undefined, { urn })
            case "azure-native:resources:ResourceGroup":
                return new ResourceGroup(name, <any>undefined, { urn })
            case "azure-native:resources:TagAtScope":
                return new TagAtScope(name, <any>undefined, { urn })
            case "azure-native:resources:TemplateSpec":
                return new TemplateSpec(name, <any>undefined, { urn })
            case "azure-native:resources:TemplateSpecVersion":
                return new TemplateSpecVersion(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "resources", _module)