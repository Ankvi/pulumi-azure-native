import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * ApprovalSettings Properties
 */
export interface ApprovalSettingsArgs {
    /**
     * Approval required for enclave connection creation (Required or NotRequired).
     */
    connectionCreation?: pulumi.Input<string | enums.ApprovalPolicy>;
    /**
     * Approval required for enclave connection deletion (Required or NotRequired).
     */
    connectionDeletion?: pulumi.Input<string | enums.ApprovalPolicy>;
    /**
     * Approval required for enclave connection update (Required or NotRequired).
     */
    connectionUpdate?: pulumi.Input<string | enums.ApprovalPolicy>;
    /**
     * Approval required for virtual enclave creation (Required or NotRequired).
     */
    enclaveCreation?: pulumi.Input<string | enums.ApprovalPolicy>;
    /**
     * Approval required for virtual enclave deletion (Required or NotRequired).
     */
    enclaveDeletion?: pulumi.Input<string | enums.ApprovalPolicy>;
    /**
     * Approval required for endpoint creation (Required or NotRequired).
     */
    endpointCreation?: pulumi.Input<string | enums.ApprovalPolicy>;
    /**
     * Approval required for endpoint deletion (Required or NotRequired).
     */
    endpointDeletion?: pulumi.Input<string | enums.ApprovalPolicy>;
    /**
     * Approval required for endpoint update (Required or NotRequired).
     */
    endpointUpdate?: pulumi.Input<string | enums.ApprovalPolicy>;
    /**
     * Approval required for toggling maintenance mode (Required or NotRequired).
     */
    maintenanceMode?: pulumi.Input<string | enums.ApprovalPolicy>;
    /**
     * List of mandatory approvers for the approval request
     */
    mandatoryApprovers?: pulumi.Input<pulumi.Input<MandatoryApproverArgs>[]>;
    /**
     * Minimum number of approvers required for the approval request
     */
    minimumApproversRequired?: pulumi.Input<number>;
    /**
     * Notification will be sent on any action taken (Approve/Reject) on an Approval Request
     */
    notificationOnApprovalAction?: pulumi.Input<string | enums.ApprovalPolicy>;
    /**
     * Notification will be sent on creation of an Approval Request
     */
    notificationOnApprovalCreation?: pulumi.Input<string | enums.ApprovalPolicy>;
    /**
     * Notification will be sent on deletion of an Approval Request
     */
    notificationOnApprovalDeletion?: pulumi.Input<string | enums.ApprovalPolicy>;
    /**
     * Approval required for deploying service catalog templates (Required or NotRequired).
     */
    serviceCatalogDeployment?: pulumi.Input<string | enums.ApprovalPolicy>;
}

/**
 * Approver Metadata for approvals request.
 */
export interface ApproverArgs {
    /**
     * Action Performed by approver
     */
    actionPerformed?: pulumi.Input<string | enums.ActionPerformed>;
    /**
     * Entra ObjectID of the approver
     */
    approverEntraId: pulumi.Input<string>;
    /**
     * approval request last updated at
     */
    lastUpdatedAt: pulumi.Input<string>;
}

/**
 * Base type for destination rules.
 */
export interface CommunityEndpointDestinationRuleArgs {
    /**
     * Destination address. Can include multiple CIDR/IP Addresses or fqdn tags or fqdns (for community endpoint) separated by commas.
     */
    destination?: pulumi.Input<string>;
    /**
     * Destination Type.
     */
    destinationType?: pulumi.Input<string | enums.DestinationType>;
    /**
     * Endpoint Rule Name.
     */
    endpointRuleName?: pulumi.Input<string>;
    /**
     * Port. Can include multiple ports separated by commas or a range indicated by a hyphen.
     */
    ports?: pulumi.Input<string>;
    /**
     * Protocols. Options specified by Endpoint Protocol Enum.
     */
    protocols?: pulumi.Input<pulumi.Input<string | enums.CommunityEndpointProtocol>[]>;
    /**
     * Transit Hub Resource Id.
     */
    transitHubResourceId?: pulumi.Input<string>;
}

/**
 * Virtual Enclave Default Settings
 */
export interface EnclaveDefaultSettingsModelArgs {
    /**
     * Diagnostic Destination.
     */
    diagnosticDestination?: pulumi.Input<string | enums.DiagnosticDestination>;
}
/**
 * enclaveDefaultSettingsModelArgsProvideDefaults sets the appropriate defaults for EnclaveDefaultSettingsModelArgs
 */
export function enclaveDefaultSettingsModelArgsProvideDefaults(val: EnclaveDefaultSettingsModelArgs): EnclaveDefaultSettingsModelArgs {
    return {
        ...val,
        diagnosticDestination: (val.diagnosticDestination) ?? "EnclaveOnly",
    };
}

/**
 * Enclave Endpoint Rule Properties
 */
export interface EnclaveEndpointDestinationRuleArgs {
    /**
     * Destination address. Can include multiple CIDR/IP Addresses or fqdn tags or fqdns (for community endpoint) separated by commas.
     */
    destination?: pulumi.Input<string>;
    /**
     * Endpoint Rule Name.
     */
    endpointRuleName?: pulumi.Input<string>;
    /**
     * Port. Can include multiple ports separated by commas or a range indicated by a hyphen.
     */
    ports?: pulumi.Input<string>;
    /**
     * Protocols. Options specified by Endpoint Protocol Enum.
     */
    protocols?: pulumi.Input<pulumi.Input<string | enums.EnclaveEndpointProtocol>[]>;
}

/**
 * Enclave Virtual Network Properties
 */
export interface EnclaveVirtualNetworkModelArgs {
    /**
     * Allow Subnet Communication.
     */
    allowSubnetCommunication?: pulumi.Input<boolean>;
    /**
     * Custom CIDR Range.
     */
    customCidrRange?: pulumi.Input<string>;
    /**
     * Network Name.
     */
    networkName?: pulumi.Input<string>;
    /**
     * Network Size.
     */
    networkSize?: pulumi.Input<string>;
    /**
     * Subnet Configurations.
     */
    subnetConfigurations?: pulumi.Input<pulumi.Input<SubnetConfigurationArgs>[]>;
}
/**
 * enclaveVirtualNetworkModelArgsProvideDefaults sets the appropriate defaults for EnclaveVirtualNetworkModelArgs
 */
export function enclaveVirtualNetworkModelArgsProvideDefaults(val: EnclaveVirtualNetworkModelArgs): EnclaveVirtualNetworkModelArgs {
    return {
        ...val,
        allowSubnetCommunication: (val.allowSubnetCommunication) ?? false,
    };
}

/**
 * GovernedServiceItem Properties
 */
export interface GovernedServiceItemArgs {
    /**
     * Initiative enforcement (Enabled or Disabled).
     */
    enforcement?: pulumi.Input<string | enums.Enforcement>;
    /**
     * Governance option for this service (Allow, Deny, ExceptionOnly, or NotApplicable).
     */
    option?: pulumi.Input<string | enums.Option>;
    /**
     * Enforcement mode for policy. AuditOnly, Enforce, or None.
     */
    policyAction?: pulumi.Input<string | enums.PolicyAction>;
    /**
     * Service ID
     */
    serviceId: pulumi.Input<string | enums.ServiceIdentifier>;
}

/**
 * Maintenance Mode
 */
export interface MaintenanceModeConfigurationModelArgs {
    /**
     * Justification for entering or exiting Maintenance Mode
     */
    justification?: pulumi.Input<string | enums.Justification>;
    /**
     * Current mode of Maintenance Mode Configuration
     */
    mode: pulumi.Input<string | enums.Mode>;
    /**
     * The user, group or service principal object affected by Maintenance Mode
     */
    principals?: pulumi.Input<pulumi.Input<PrincipalArgs>[]>;
}
/**
 * maintenanceModeConfigurationModelArgsProvideDefaults sets the appropriate defaults for MaintenanceModeConfigurationModelArgs
 */
export function maintenanceModeConfigurationModelArgsProvideDefaults(val: MaintenanceModeConfigurationModelArgs): MaintenanceModeConfigurationModelArgs {
    return {
        ...val,
        justification: (val.justification) ?? "Off",
        mode: (val.mode) ?? "Off",
    };
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
 * Approver Metadata for approvals request.
 */
export interface MandatoryApproverArgs {
    /**
     * EntraId of the approver
     */
    approverEntraId: pulumi.Input<string>;
}

/**
 * Principal for maintenance mode or role assignments
 */
export interface PrincipalArgs {
    /**
     * The object id associated with the principal
     */
    id: pulumi.Input<string>;
    /**
     * The type of the object id. We currently allow users, groups, and service principals
     */
    type: pulumi.Input<string | enums.Type>;
}

/**
 * Request Metadata for approvals request.
 */
export interface RequestMetadataArgs {
    /**
     * Payload to be sent upon any action on approval request
     */
    approvalCallbackPayload?: pulumi.Input<string>;
    /**
     * Route name for the approval callback
     */
    approvalCallbackRoute?: pulumi.Input<string>;
    /**
     * Status of the approval. Uses ApprovalStatus enum.
     */
    approvalStatus?: pulumi.Input<string | enums.ApprovalStatus>;
    /**
     * Resource Action of the item being approved or declined.
     */
    resourceAction: pulumi.Input<string>;
}
/**
 * requestMetadataArgsProvideDefaults sets the appropriate defaults for RequestMetadataArgs
 */
export function requestMetadataArgsProvideDefaults(val: RequestMetadataArgs): RequestMetadataArgs {
    return {
        ...val,
        approvalStatus: (val.approvalStatus) ?? "Pending",
    };
}

/**
 * Role assignment item that indicates which principals should be assigned this role definition
 */
export interface RoleAssignmentItemArgs {
    /**
     * List of principal IDs to which to assign this role definition
     */
    principals?: pulumi.Input<pulumi.Input<PrincipalArgs>[]>;
    /**
     * Role definition identifier
     */
    roleDefinitionId: pulumi.Input<string>;
}

/**
 * Subnet Configuration
 */
export interface SubnetConfigurationArgs {
    /**
     * Network prefix size.
     */
    networkPrefixSize: pulumi.Input<number>;
    /**
     * Subnet delegation.
     */
    subnetDelegation?: pulumi.Input<string>;
    /**
     * Subnet name.
     */
    subnetName: pulumi.Input<string>;
}

/**
 * TransitOption Properties
 */
export interface TransitOptionArgs {
    /**
     * Transit Option Params
     */
    params?: pulumi.Input<TransitOptionParamsArgs>;
    /**
     * Transit Option Type.
     */
    type?: pulumi.Input<string | enums.TransitOptionType>;
}

/**
 * TransitOptionParams Properties
 */
export interface TransitOptionParamsArgs {
    /**
     * Transit Option Params remoteVirtualNetworkId.
     */
    remoteVirtualNetworkId?: pulumi.Input<string>;
    /**
     * Transit Option Params scaleUnits.
     */
    scaleUnits?: pulumi.Input<number>;
}
