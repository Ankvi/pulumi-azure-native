import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * The details for the custom naming convention override for a specific resource type.
 */
export interface CustomNamingConventionArgs {
    /**
     * The custom naming formula for the resource type.
     */
    formula: pulumi.Input<string>;
    /**
     * The type of the resource.
     */
    resourceType: pulumi.Input<string | enums.ResourceType>;
}

/**
 * The 'Decommissioned' management group properties.
 */
export interface DecommissionedManagementGroupPropertiesArgs {
    /**
     * This parameter determines whether the 'Decommissioned' management group will be created. If set to true, the group will be created; if set to false, it will not be created. The default value is false.
     */
    create: pulumi.Input<boolean>;
    /**
     * Array of policy initiatives applied to the management group.
     */
    policyInitiativesAssignmentProperties: pulumi.Input<pulumi.Input<PolicyInitiativeAssignmentPropertiesArgs>[]>;
}

/**
 * The properties of landing zone account resource type.
 */
export interface LandingZoneAccountResourcePropertiesArgs {
    /**
     * The storage account that will host the generated infrastructure as code (IaC) for a landing zone deployment.
     */
    storageAccount: pulumi.Input<string>;
}

/**
 * The properties of landing zone configuration resource type.
 */
export interface LandingZoneConfigurationResourcePropertiesArgs {
    /**
     * Parameter used to deploy a Bastion: Select 'Yes' to enable deployment, 'No' to skip it, or 'Existing' to reuse an existing Bastion.
     */
    azureBastionCreationOption: pulumi.Input<string | enums.ResourceCreationOptions>;
    /**
     * The Bastion subnet address. Specify the address using IPv4 CIDR notation.
     */
    azureBastionSubnetCidrBlock?: pulumi.Input<string>;
    /**
     * The custom naming convention applied to specific resource types for this landing zone configuration, which overrides the default naming convention for those resource types. Example - 'customNamingConvention': [{'resourceType': 'azureFirewalls', 'formula': '{DeploymentPrefix}-afwl-{DeploymentSuffix}'}]
     */
    customNamingConvention?: pulumi.Input<pulumi.Input<CustomNamingConventionArgs>[]>;
    /**
     * Parameter used to deploy a DDoS protection plan: Select 'Yes' to enable deployment, 'No' to skip it, or 'Existing' to reuse an existing DDoS protection plan.
     */
    ddosProtectionCreationOption: pulumi.Input<string | enums.ResourceCreationOptions>;
    /**
     * The assigned policies of the 'Decommissioned' management group and indicator to create it or not.
     */
    decommissionedMgMetadata?: pulumi.Input<DecommissionedManagementGroupPropertiesArgs>;
    /**
     * The resource ID of the Bastion when reusing an existing one.
     */
    existingAzureBastionId?: pulumi.Input<string>;
    /**
     * The resource ID of the DDoS protection plan when reusing an existing one.
     */
    existingDdosProtectionId?: pulumi.Input<string>;
    /**
     * The resource ID of the log analytics workspace when reusing an existing one.
     */
    existingLogAnalyticsWorkspaceId?: pulumi.Input<string>;
    /**
     * Parameter used for deploying a Firewall: Select 'No' to skip deployment, 'Standard' to deploy the Standard SKU, or 'Premium' to deploy the Premium SKU.
     */
    firewallCreationOption: pulumi.Input<string | enums.FirewallCreationOptions>;
    /**
     * The Firewall subnet address used for deploying a firewall. Specify the Firewall subnet using IPv4 CIDR notation.
     */
    firewallSubnetCidrBlock?: pulumi.Input<string>;
    /**
     * The gateway subnet address used for deploying a virtual network. Specify the subnet using IPv4 CIDR notation.
     */
    gatewaySubnetCidrBlock: pulumi.Input<string>;
    /**
     * The Virtual Network address. Specify the address using IPv4 CIDR notation.
     */
    hubNetworkCidrBlock: pulumi.Input<string>;
    /**
     * The child management groups of 'Landing Zones' management group and their assigned policies.
     */
    landingZonesMgChildren?: pulumi.Input<pulumi.Input<LandingZoneManagementGroupPropertiesArgs>[]>;
    /**
     * The assigned policies of the 'Landing Zones' management group.
     */
    landingZonesMgMetadata?: pulumi.Input<ManagementGroupPropertiesArgs>;
    /**
     * Parameter used to deploy a log analytics workspace: Select 'Yes' to enable deployment, 'No' to skip it, or 'Existing' to reuse an existing log analytics workspace.
     */
    logAnalyticsWorkspaceCreationOption: pulumi.Input<string | enums.ResourceCreationOptions>;
    /**
     * Parameter to define the retention period for logs, in days. The minimum duration is 30 days and the maximum is 730 days.
     */
    logRetentionInDays: pulumi.Input<number>;
    /**
     * The managed identity to be assigned to this landing zone configuration.
     */
    managedIdentity: pulumi.Input<ManagedIdentityPropertiesArgs>;
    /**
     * The default naming convention applied to all resources for this landing zone configuration. Example - {DeploymentPrefix}-Contoso-{ResourceTypeAbbreviation}{DeploymentSuffix}-{Environment}-testing
     */
    namingConventionFormula?: pulumi.Input<string>;
    /**
     * The assigned policies of the 'Connectivity' management group under 'Platform' management group.
     */
    platformConnectivityMgMetadata?: pulumi.Input<ManagementGroupPropertiesArgs>;
    /**
     * The assigned policies of the 'Identity' management group under 'Platform' management group.
     */
    platformIdentityMgMetadata?: pulumi.Input<ManagementGroupPropertiesArgs>;
    /**
     * The assigned policies of the 'Management' management group under 'Platform' management group.
     */
    platformManagementMgMetadata?: pulumi.Input<ManagementGroupPropertiesArgs>;
    /**
     * The names of the 'Platform' child management groups and their assigned policies, excluding the default ones: 'Connectivity', 'Identity', and 'Management'
     */
    platformMgChildren?: pulumi.Input<pulumi.Input<PlatformManagementGroupPropertiesArgs>[]>;
    /**
     * The assigned policies of the 'Platform' management group.
     */
    platformMgMetadata?: pulumi.Input<ManagementGroupPropertiesArgs>;
    /**
     * The assigned policies of the 'Sandbox' management group and indicator to create it or not.
     */
    sandboxMgMetadata?: pulumi.Input<SandboxManagementGroupPropertiesArgs>;
    /**
     * Tags are key-value pairs that can be assigned to a resource to organize and manage it more effectively. Example: {'name': 'a tag name', 'value': 'a tag value'}
     */
    tags?: pulumi.Input<pulumi.Input<TagsArgs>[]>;
    /**
     * The assigned policies of the parent management group.
     */
    topLevelMgMetadata?: pulumi.Input<ManagementGroupPropertiesArgs>;
}

/**
 * The 'Landing Zones' management group properties..
 */
export interface LandingZoneManagementGroupPropertiesArgs {
    /**
     * Management group name.
     */
    name: pulumi.Input<string>;
    /**
     * Array of policy initiatives applied to the management group.
     */
    policyInitiativesAssignmentProperties: pulumi.Input<pulumi.Input<PolicyInitiativeAssignmentPropertiesArgs>[]>;
}

/**
 * The properties of landing zone registration resource type.
 */
export interface LandingZoneRegistrationResourcePropertiesArgs {
    /**
     * The resource id of the associated landing zone configuration.
     */
    existingLandingZoneConfigurationId: pulumi.Input<string>;
    /**
     * The resource id of the top level management group
     */
    existingTopLevelMgId: pulumi.Input<string>;
    /**
     * The managed identity to be assigned to this landing zone registration.
     */
    managedIdentity: pulumi.Input<ManagedIdentityPropertiesArgs>;
}

/**
 * The properties of managed identity, specifically including type and resource ID.
 */
export interface ManagedIdentityPropertiesArgs {
    /**
     * The type of managed identity.
     */
    type: pulumi.Input<string | enums.ManagedIdentityResourceType>;
    /**
     * The resource id of the managed identity.
     */
    userAssignedIdentityResourceId?: pulumi.Input<string>;
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
 * The properties of policy initiatives applied to the management group.
 */
export interface ManagementGroupPropertiesArgs {
    /**
     * Array of policy initiatives applied to the management group.
     */
    policyInitiativesAssignmentProperties: pulumi.Input<pulumi.Input<PolicyInitiativeAssignmentPropertiesArgs>[]>;
}

/**
 * The 'Platform' management group properties.
 */
export interface PlatformManagementGroupPropertiesArgs {
    /**
     * Management group name.
     */
    name: pulumi.Input<string>;
    /**
     * Array of policy initiatives applied to the management group.
     */
    policyInitiativesAssignmentProperties: pulumi.Input<pulumi.Input<PolicyInitiativeAssignmentPropertiesArgs>[]>;
}

/**
 * The properties of assigned policy initiatives.
 */
export interface PolicyInitiativeAssignmentPropertiesArgs {
    /**
     * The parameters of the assigned policy initiative.
     */
    assignmentParameters: any;
    /**
     * The fully qualified id of the policy initiative.
     */
    policyInitiativeId: pulumi.Input<string>;
}

/**
 * The 'Sandbox' management group properties.
 */
export interface SandboxManagementGroupPropertiesArgs {
    /**
     * This parameter determines whether the 'Sandbox' management group will be created. If set to true, the group will be created; if set to false, it will not be created. The default value is false.
     */
    create: pulumi.Input<boolean>;
    /**
     * Array of policy initiatives applied to the management group.
     */
    policyInitiativesAssignmentProperties: pulumi.Input<pulumi.Input<PolicyInitiativeAssignmentPropertiesArgs>[]>;
}

/**
 * Key-value pairs that can be assigned to this resource.
 */
export interface TagsArgs {
    /**
     * A tag name.
     */
    name: pulumi.Input<string>;
    /**
     * A tag value.
     */
    value?: pulumi.Input<string>;
}
