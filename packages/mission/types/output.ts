import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * ApprovalSettings Properties
 */
export interface ApprovalSettingsResponse {
    /**
     * Approval required for enclave connection creation (Required or NotRequired).
     */
    connectionCreation?: string;
    /**
     * Approval required for enclave connection deletion (Required or NotRequired).
     */
    connectionDeletion?: string;
    /**
     * Approval required for enclave connection update (Required or NotRequired).
     */
    connectionUpdate?: string;
    /**
     * Approval required for virtual enclave creation (Required or NotRequired).
     */
    enclaveCreation?: string;
    /**
     * Approval required for virtual enclave deletion (Required or NotRequired).
     */
    enclaveDeletion?: string;
    /**
     * Approval required for endpoint creation (Required or NotRequired).
     */
    endpointCreation?: string;
    /**
     * Approval required for endpoint deletion (Required or NotRequired).
     */
    endpointDeletion?: string;
    /**
     * Approval required for endpoint update (Required or NotRequired).
     */
    endpointUpdate?: string;
    /**
     * Approval required for toggling maintenance mode (Required or NotRequired).
     */
    maintenanceMode?: string;
    /**
     * List of mandatory approvers for the approval request
     */
    mandatoryApprovers?: MandatoryApproverResponse[];
    /**
     * Minimum number of approvers required for the approval request
     */
    minimumApproversRequired?: number;
    /**
     * Notification will be sent on any action taken (Approve/Reject) on an Approval Request
     */
    notificationOnApprovalAction?: string;
    /**
     * Notification will be sent on creation of an Approval Request
     */
    notificationOnApprovalCreation?: string;
    /**
     * Notification will be sent on deletion of an Approval Request
     */
    notificationOnApprovalDeletion?: string;
    /**
     * Approval required for deploying service catalog templates (Required or NotRequired).
     */
    serviceCatalogDeployment?: string;
}

/**
 * Approver Metadata for approvals request.
 */
export interface ApproverResponse {
    /**
     * Action Performed by approver
     */
    actionPerformed?: string;
    /**
     * Entra ObjectID of the approver
     */
    approverEntraId: string;
    /**
     * approval request last updated at
     */
    lastUpdatedAt: string;
}

/**
 * Base type for destination rules.
 */
export interface CommunityEndpointDestinationRuleResponse {
    /**
     * Destination address. Can include multiple CIDR/IP Addresses or fqdn tags or fqdns (for community endpoint) separated by commas.
     */
    destination?: string;
    /**
     * Destination Type.
     */
    destinationType?: string;
    /**
     * Endpoint Rule Name.
     */
    endpointRuleName?: string;
    /**
     * Port. Can include multiple ports separated by commas or a range indicated by a hyphen.
     */
    ports?: string;
    /**
     * Protocols. Options specified by Endpoint Protocol Enum.
     */
    protocols?: string[];
    /**
     * Transit Hub Resource Id.
     */
    transitHubResourceId?: string;
}

/**
 * Enclave Address Spaces
 */
export interface EnclaveAddressSpacesModelResponse {
    /**
     * Enclave Address Space
     */
    enclaveAddressSpace?: string;
    /**
     * Managed Address Space
     */
    managedAddressSpace?: string;
}

/**
 * Virtual Enclave Default Settings
 */
export interface EnclaveDefaultSettingsModelResponse {
    /**
     * Diagnostic Destination.
     */
    diagnosticDestination?: string;
    /**
     * Key Vault Resource Id.
     */
    keyVaultResourceId: string;
    /**
     * Log Analytics Resource Ids.
     */
    logAnalyticsResourceIdCollection: string[];
    /**
     * Storage Account Resource Id.
     */
    storageAccountResourceId: string;
}
/**
 * enclaveDefaultSettingsModelResponseProvideDefaults sets the appropriate defaults for EnclaveDefaultSettingsModelResponse
 */
export function enclaveDefaultSettingsModelResponseProvideDefaults(val: EnclaveDefaultSettingsModelResponse): EnclaveDefaultSettingsModelResponse {
    return {
        ...val,
        diagnosticDestination: (val.diagnosticDestination) ?? "EnclaveOnly",
    };
}

/**
 * Enclave Endpoint Rule Properties
 */
export interface EnclaveEndpointDestinationRuleResponse {
    /**
     * Destination address. Can include multiple CIDR/IP Addresses or fqdn tags or fqdns (for community endpoint) separated by commas.
     */
    destination?: string;
    /**
     * Endpoint Rule Name.
     */
    endpointRuleName?: string;
    /**
     * Port. Can include multiple ports separated by commas or a range indicated by a hyphen.
     */
    ports?: string;
    /**
     * Protocols. Options specified by Endpoint Protocol Enum.
     */
    protocols?: string[];
}

/**
 * Enclave Virtual Network Properties
 */
export interface EnclaveVirtualNetworkModelResponse {
    /**
     * Allow Subnet Communication.
     */
    allowSubnetCommunication?: boolean;
    /**
     * Custom CIDR Range.
     */
    customCidrRange?: string;
    /**
     * Network Name.
     */
    networkName?: string;
    /**
     * Network Size.
     */
    networkSize?: string;
    /**
     * Subnet Configurations.
     */
    subnetConfigurations?: SubnetConfigurationResponse[];
}
/**
 * enclaveVirtualNetworkModelResponseProvideDefaults sets the appropriate defaults for EnclaveVirtualNetworkModelResponse
 */
export function enclaveVirtualNetworkModelResponseProvideDefaults(val: EnclaveVirtualNetworkModelResponse): EnclaveVirtualNetworkModelResponse {
    return {
        ...val,
        allowSubnetCommunication: (val.allowSubnetCommunication) ?? false,
    };
}

/**
 * GovernedServiceItem Properties
 */
export interface GovernedServiceItemResponse {
    /**
     * Initiative enforcement (Enabled or Disabled).
     */
    enforcement?: string;
    /**
     * Initiatives associated with this service.
     */
    initiatives: string[];
    /**
     * Governance option for this service (Allow, Deny, ExceptionOnly, or NotApplicable).
     */
    option?: string;
    /**
     * Enforcement mode for policy. AuditOnly, Enforce, or None.
     */
    policyAction?: string;
    /**
     * Service ID
     */
    serviceId: string;
    /**
     * Service name.
     */
    serviceName: string;
}

/**
 * Maintenance Mode
 */
export interface MaintenanceModeConfigurationModelResponse {
    /**
     * Justification for entering or exiting Maintenance Mode
     */
    justification?: string;
    /**
     * Current mode of Maintenance Mode Configuration
     */
    mode: string;
    /**
     * The user, group or service principal object affected by Maintenance Mode
     */
    principals?: PrincipalResponse[];
}
/**
 * maintenanceModeConfigurationModelResponseProvideDefaults sets the appropriate defaults for MaintenanceModeConfigurationModelResponse
 */
export function maintenanceModeConfigurationModelResponseProvideDefaults(val: MaintenanceModeConfigurationModelResponse): MaintenanceModeConfigurationModelResponse {
    return {
        ...val,
        justification: (val.justification) ?? "Off",
        mode: (val.mode) ?? "Off",
    };
}

/**
 * Managed-On-Behalf-Of configuration properties. This configuration exists for the resources where a resource provider manages those resources on behalf of the resource owner.
 */
export interface ManagedOnBehalfOfConfigurationResponse {
    /**
     * Managed-On-Behalf-Of broker resources
     */
    moboBrokerResources?: MoboBrokerResourceResponse[];
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
 * Approver Metadata for approvals request.
 */
export interface MandatoryApproverResponse {
    /**
     * EntraId of the approver
     */
    approverEntraId: string;
}

/**
 * Managed-On-Behalf-Of broker resource. This resource is created by the Resource Provider to manage some resources on behalf of the user.
 */
export interface MoboBrokerResourceResponse {
    /**
     * Resource identifier of a Managed-On-Behalf-Of broker resource
     */
    id?: string;
}

/**
 * Principal for maintenance mode or role assignments
 */
export interface PrincipalResponse {
    /**
     * The object id associated with the principal
     */
    id: string;
    /**
     * The type of the object id. We currently allow users, groups, and service principals
     */
    type: string;
}

/**
 * Request Metadata for approvals request.
 */
export interface RequestMetadataResponse {
    /**
     * Payload to be sent upon any action on approval request
     */
    approvalCallbackPayload?: string;
    /**
     * Route name for the approval callback
     */
    approvalCallbackRoute?: string;
    /**
     * Status of the approval. Uses ApprovalStatus enum.
     */
    approvalStatus?: string;
    /**
     * Resource Action of the item being approved or declined.
     */
    resourceAction: string;
}
/**
 * requestMetadataResponseProvideDefaults sets the appropriate defaults for RequestMetadataResponse
 */
export function requestMetadataResponseProvideDefaults(val: RequestMetadataResponse): RequestMetadataResponse {
    return {
        ...val,
        approvalStatus: (val.approvalStatus) ?? "Pending",
    };
}

/**
 * Role assignment item that indicates which principals should be assigned this role definition
 */
export interface RoleAssignmentItemResponse {
    /**
     * List of principal IDs to which to assign this role definition
     */
    principals?: PrincipalResponse[];
    /**
     * Role definition identifier
     */
    roleDefinitionId: string;
}

/**
 * Subnet Configuration
 */
export interface SubnetConfigurationResponse {
    /**
     * Address prefix.
     */
    addressPrefix: string;
    /**
     * Network prefix size.
     */
    networkPrefixSize: number;
    /**
     * Network security group ID.
     */
    networkSecurityGroupResourceId: string;
    /**
     * Subnet delegation.
     */
    subnetDelegation?: string;
    /**
     * Subnet name.
     */
    subnetName: string;
    /**
     * Subnet Resource ID.
     */
    subnetResourceId: string;
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
 * TransitOptionParams Properties
 */
export interface TransitOptionParamsResponse {
    /**
     * Transit Option Params remoteVirtualNetworkId.
     */
    remoteVirtualNetworkId?: string;
    /**
     * Transit Option Params scaleUnits.
     */
    scaleUnits?: number;
}

/**
 * TransitOption Properties
 */
export interface TransitOptionResponse {
    /**
     * Transit Option Params
     */
    params?: TransitOptionParamsResponse;
    /**
     * Transit Option Type.
     */
    type?: string;
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
