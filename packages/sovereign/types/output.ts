import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * The details for the custom naming convention override for a specific resource type.
 */
export interface CustomNamingConventionResponse {
    /**
     * The custom naming formula for the resource type.
     */
    formula: string;
    /**
     * The type of the resource.
     */
    resourceType: string;
}

/**
 * The 'Decommissioned' management group properties.
 */
export interface DecommissionedManagementGroupPropertiesResponse {
    /**
     * This parameter determines whether the 'Decommissioned' management group will be created. If set to true, the group will be created; if set to false, it will not be created. The default value is false.
     */
    create: boolean;
    /**
     * Array of policy initiatives applied to the management group.
     */
    policyInitiativesAssignmentProperties: PolicyInitiativeAssignmentPropertiesResponse[];
}

/**
 * The properties of landing zone account resource type.
 */
export interface LandingZoneAccountResourcePropertiesResponse {
    /**
     * The state that reflects the current stage in the creation, updating, or deletion process of the landing zone account.
     */
    provisioningState: string;
    /**
     * The storage account that will host the generated infrastructure as code (IaC) for a landing zone deployment.
     */
    storageAccount: string;
}

/**
 * The properties of landing zone configuration resource type.
 */
export interface LandingZoneConfigurationResourcePropertiesResponse {
    /**
     * The status that indicates the current phase of the configuration process for a deployment.
     */
    authoringStatus: string;
    /**
     * Parameter used to deploy a Bastion: Select 'Yes' to enable deployment, 'No' to skip it, or 'Existing' to reuse an existing Bastion.
     */
    azureBastionCreationOption: string;
    /**
     * The Bastion subnet address. Specify the address using IPv4 CIDR notation.
     */
    azureBastionSubnetCidrBlock?: string;
    /**
     * The custom naming convention applied to specific resource types for this landing zone configuration, which overrides the default naming convention for those resource types. Example - 'customNamingConvention': [{'resourceType': 'azureFirewalls', 'formula': '{DeploymentPrefix}-afwl-{DeploymentSuffix}'}]
     */
    customNamingConvention?: CustomNamingConventionResponse[];
    /**
     * Parameter used to deploy a DDoS protection plan: Select 'Yes' to enable deployment, 'No' to skip it, or 'Existing' to reuse an existing DDoS protection plan.
     */
    ddosProtectionCreationOption: string;
    /**
     * The assigned policies of the 'Decommissioned' management group and indicator to create it or not.
     */
    decommissionedMgMetadata?: DecommissionedManagementGroupPropertiesResponse;
    /**
     * The resource ID of the Bastion when reusing an existing one.
     */
    existingAzureBastionId?: string;
    /**
     * The resource ID of the DDoS protection plan when reusing an existing one.
     */
    existingDdosProtectionId?: string;
    /**
     * The resource ID of the log analytics workspace when reusing an existing one.
     */
    existingLogAnalyticsWorkspaceId?: string;
    /**
     * Parameter used for deploying a Firewall: Select 'No' to skip deployment, 'Standard' to deploy the Standard SKU, or 'Premium' to deploy the Premium SKU.
     */
    firewallCreationOption: string;
    /**
     * The Firewall subnet address used for deploying a firewall. Specify the Firewall subnet using IPv4 CIDR notation.
     */
    firewallSubnetCidrBlock?: string;
    /**
     * The gateway subnet address used for deploying a virtual network. Specify the subnet using IPv4 CIDR notation.
     */
    gatewaySubnetCidrBlock: string;
    /**
     * The Virtual Network address. Specify the address using IPv4 CIDR notation.
     */
    hubNetworkCidrBlock: string;
    /**
     * The child management groups of 'Landing Zones' management group and their assigned policies.
     */
    landingZonesMgChildren?: LandingZoneManagementGroupPropertiesResponse[];
    /**
     * The assigned policies of the 'Landing Zones' management group.
     */
    landingZonesMgMetadata?: ManagementGroupPropertiesResponse;
    /**
     * Parameter used to deploy a log analytics workspace: Select 'Yes' to enable deployment, 'No' to skip it, or 'Existing' to reuse an existing log analytics workspace.
     */
    logAnalyticsWorkspaceCreationOption: string;
    /**
     * Parameter to define the retention period for logs, in days. The minimum duration is 30 days and the maximum is 730 days.
     */
    logRetentionInDays: number;
    /**
     * The managed identity to be assigned to this landing zone configuration.
     */
    managedIdentity: ManagedIdentityPropertiesResponse;
    /**
     * The default naming convention applied to all resources for this landing zone configuration. Example - {DeploymentPrefix}-Contoso-{ResourceTypeAbbreviation}{DeploymentSuffix}-{Environment}-testing
     */
    namingConventionFormula?: string;
    /**
     * The assigned policies of the 'Connectivity' management group under 'Platform' management group.
     */
    platformConnectivityMgMetadata?: ManagementGroupPropertiesResponse;
    /**
     * The assigned policies of the 'Identity' management group under 'Platform' management group.
     */
    platformIdentityMgMetadata?: ManagementGroupPropertiesResponse;
    /**
     * The assigned policies of the 'Management' management group under 'Platform' management group.
     */
    platformManagementMgMetadata?: ManagementGroupPropertiesResponse;
    /**
     * The names of the 'Platform' child management groups and their assigned policies, excluding the default ones: 'Connectivity', 'Identity', and 'Management'
     */
    platformMgChildren?: PlatformManagementGroupPropertiesResponse[];
    /**
     * The assigned policies of the 'Platform' management group.
     */
    platformMgMetadata?: ManagementGroupPropertiesResponse;
    /**
     * The state that reflects the current stage in the creation, updating, or deletion process of the landing zone configuration.
     */
    provisioningState: string;
    /**
     * The assigned policies of the 'Sandbox' management group and indicator to create it or not.
     */
    sandboxMgMetadata?: SandboxManagementGroupPropertiesResponse;
    /**
     * Tags are key-value pairs that can be assigned to a resource to organize and manage it more effectively. Example: {'name': 'a tag name', 'value': 'a tag value'}
     */
    tags?: TagsResponse[];
    /**
     * The assigned policies of the parent management group.
     */
    topLevelMgMetadata?: ManagementGroupPropertiesResponse;
}

/**
 * The 'Landing Zones' management group properties..
 */
export interface LandingZoneManagementGroupPropertiesResponse {
    /**
     * Management group name.
     */
    name: string;
    /**
     * Array of policy initiatives applied to the management group.
     */
    policyInitiativesAssignmentProperties: PolicyInitiativeAssignmentPropertiesResponse[];
}

/**
 * The properties of landing zone registration resource type.
 */
export interface LandingZoneRegistrationResourcePropertiesResponse {
    /**
     * The resource id of the associated landing zone configuration.
     */
    existingLandingZoneConfigurationId: string;
    /**
     * The resource id of the top level management group
     */
    existingTopLevelMgId: string;
    /**
     * The managed identity to be assigned to this landing zone registration.
     */
    managedIdentity?: ManagedIdentityPropertiesResponse;
    /**
     * The state that reflects the current stage in the creation, updating, or deletion process of the landing zone registration resource type.
     */
    provisioningState: string;
}

/**
 * The properties of managed identity, specifically including type and resource ID.
 */
export interface ManagedIdentityPropertiesResponse {
    /**
     * The type of managed identity.
     */
    type: string;
    /**
     * The resource id of the managed identity.
     */
    userAssignedIdentityResourceId?: string;
}

/**
 * Managed service identity (system assigned and/or user assigned identities)
 */
export interface ManagedServiceIdentityResponse {
    /**
     * The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
     */
    principalId: string;
    /**
     * The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
     */
    tenantId: string;
    /**
     * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
     */
    type: string;
    /**
     * The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.
     */
    userAssignedIdentities?: {[key: string]: UserAssignedIdentityResponse};
}

/**
 * The properties of policy initiatives applied to the management group.
 */
export interface ManagementGroupPropertiesResponse {
    /**
     * Array of policy initiatives applied to the management group.
     */
    policyInitiativesAssignmentProperties: PolicyInitiativeAssignmentPropertiesResponse[];
}

/**
 * The 'Platform' management group properties.
 */
export interface PlatformManagementGroupPropertiesResponse {
    /**
     * Management group name.
     */
    name: string;
    /**
     * Array of policy initiatives applied to the management group.
     */
    policyInitiativesAssignmentProperties: PolicyInitiativeAssignmentPropertiesResponse[];
}

/**
 * The properties of assigned policy initiatives.
 */
export interface PolicyInitiativeAssignmentPropertiesResponse {
    /**
     * The parameters of the assigned policy initiative.
     */
    assignmentParameters: any;
    /**
     * The fully qualified id of the policy initiative.
     */
    policyInitiativeId: string;
}

/**
 * The 'Sandbox' management group properties.
 */
export interface SandboxManagementGroupPropertiesResponse {
    /**
     * This parameter determines whether the 'Sandbox' management group will be created. If set to true, the group will be created; if set to false, it will not be created. The default value is false.
     */
    create: boolean;
    /**
     * Array of policy initiatives applied to the management group.
     */
    policyInitiativesAssignmentProperties: PolicyInitiativeAssignmentPropertiesResponse[];
}

/**
 * Metadata pertaining to creation and last modification of the resource.
 */
export interface SystemDataResponse {
    /**
     * The timestamp of resource creation (UTC).
     */
    createdAt?: string;
    /**
     * The identity that created the resource.
     */
    createdBy?: string;
    /**
     * The type of identity that created the resource.
     */
    createdByType?: string;
    /**
     * The timestamp of resource last modification (UTC)
     */
    lastModifiedAt?: string;
    /**
     * The identity that last modified the resource.
     */
    lastModifiedBy?: string;
    /**
     * The type of identity that last modified the resource.
     */
    lastModifiedByType?: string;
}

/**
 * Key-value pairs that can be assigned to this resource.
 */
export interface TagsResponse {
    /**
     * A tag name.
     */
    name: string;
    /**
     * A tag value.
     */
    value?: string;
}

/**
 * User assigned identity properties
 */
export interface UserAssignedIdentityResponse {
    /**
     * The client ID of the assigned identity.
     */
    clientId: string;
    /**
     * The principal ID of the assigned identity.
     */
    principalId: string;
}
