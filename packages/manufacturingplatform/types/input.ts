import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * The properties related to CMK
 */
export interface CmkProfileArgs {
    /**
     * URI of Key in AKV
     */
    keyUri: pulumi.Input<string>;
}

/**
 * The properties related to Deny Assignment Exclusions
 */
export interface DenyAssignmentExclusionArgs {
    /**
     * Object Id of Identity
     */
    id: pulumi.Input<string>;
    /**
     * Type of Identity
     */
    type: pulumi.Input<string>;
}

/**
 * The properties related to Fabric
 */
export interface FabricProfileArgs {
    /**
     * Azure Key Vault Uri
     */
    keyUri: pulumi.Input<string>;
    /**
     * One Lake Path
     */
    oneLakePath: pulumi.Input<string>;
    /**
     * URI of One Lake
     */
    oneLakeUri: pulumi.Input<string>;
}

/**
 * Managed service identity (system assigned and/or user assigned identities)
 */
export interface ManagedServiceIdentityArgs {
    /**
     * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
     */
    type: pulumi.Input<string | enums.ManagedServiceIdentityType>;
    /**
     * The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.
     */
    userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * Details of the ManufacturingPlatform MdsResource.
 */
export interface MdsResourcePropertiesArgs {
    /**
     * AAD Application Id.
     */
    aadApplicationId: pulumi.Input<string>;
    /**
     * AKS Admin Group Id.
     */
    aksAdminGroupId?: pulumi.Input<string>;
    /**
     * Profile of CMK Settings.
     */
    cmkProfile?: pulumi.Input<CmkProfileArgs>;
    /**
     * Deny Assignments exclusion list.
     */
    denyAssignmentExclusions?: pulumi.Input<pulumi.Input<DenyAssignmentExclusionArgs>[]>;
    /**
     * Enable Copilot.
     */
    enableCopilot?: pulumi.Input<boolean>;
    /**
     * Enable Diagnostic Settings.
     */
    enableDiagnosticSettings?: pulumi.Input<boolean>;
    /**
     * Profile of Fabric resources.
     */
    fabricProfile?: pulumi.Input<FabricProfileArgs>;
    /**
     * Profile of OpenAI Resource.
     */
    openAIProfile?: pulumi.Input<OpenAIProfileArgs>;
    /**
     * Zone redundancy state for resources
     */
    redundancyState?: pulumi.Input<string | enums.RedundancyState>;
    /**
     * State of the resource
     */
    resourceState?: pulumi.Input<string | enums.ResourceState>;
    /**
     * Profile of User Managed OpenAI Resource.
     */
    userManagedOpenAIProfile?: pulumi.Input<UserManagedOpenAIProfileArgs>;
    /**
     * Mds Resource Version.
     */
    version?: pulumi.Input<string>;
}
/**
 * mdsResourcePropertiesArgsProvideDefaults sets the appropriate defaults for MdsResourcePropertiesArgs
 */
export function mdsResourcePropertiesArgsProvideDefaults(val: MdsResourcePropertiesArgs): MdsResourcePropertiesArgs {
    return {
        ...val,
        aksAdminGroupId: (val.aksAdminGroupId) ?? "00000000-0000-0000-0000-000000000000",
    };
}

/**
 * The properties related to OpenAI Resource
 */
export interface OpenAIProfileArgs {
    /**
     * Embedding Model Capacity
     */
    embeddingModelCapacity?: pulumi.Input<number>;
    /**
     * Embedding Model Name
     */
    embeddingModelName?: pulumi.Input<string>;
    /**
     * Embedding Model SKU Name
     */
    embeddingModelSkuName?: pulumi.Input<string>;
    /**
     * Embedding Model Version
     */
    embeddingModelVersion?: pulumi.Input<string>;
    /**
     * GPT Model Capacity
     */
    gptModelCapacity?: pulumi.Input<number>;
    /**
     * GPT Model Name
     */
    gptModelName?: pulumi.Input<string>;
    /**
     * GPT Model SKU Name
     */
    gptModelSkuName?: pulumi.Input<string>;
    /**
     * GPT Model Version
     */
    gptModelVersion?: pulumi.Input<string>;
}

/**
 * The resource model definition representing SKU
 */
export interface SkuArgs {
    /**
     * If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted.
     */
    capacity?: pulumi.Input<number>;
    /**
     * If the service has different generations of hardware, for the same SKU, then that can be captured here.
     */
    family?: pulumi.Input<string>;
    /**
     * The name of the SKU. E.g. P3. It is typically a letter+number code
     */
    name: pulumi.Input<string>;
    /**
     * The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code. 
     */
    size?: pulumi.Input<string>;
    /**
     * This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT.
     */
    tier?: pulumi.Input<enums.SkuTier>;
}

/**
 * The properties related to User Managed OpenAI Resource
 */
export interface UserManagedOpenAIProfileArgs {
    /**
     * Embedding Model Deployment Name
     */
    embeddingModelDeploymentName: pulumi.Input<string>;
    /**
     * GPT Model Deployment Name
     */
    gptModelDeploymentName: pulumi.Input<string>;
    /**
     * Resource Id of OpenAI Resource
     */
    id: pulumi.Input<string>;
}
