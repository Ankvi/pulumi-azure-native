import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * AAD Profile specifies attributes for Azure Active Directory integration.
 */
export interface AadProfileArgs {
    /**
     * The list of AAD group object IDs that will have admin role of the cluster.
     */
    adminGroupObjectIDs?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Whether to enable Azure RBAC for Kubernetes authorization.
     */
    enableAzureRBAC?: pulumi.Input<boolean>;
    /**
     * The AAD tenant ID to use for authentication. If not specified, will use the tenant of the deployment subscription.
     */
    tenantID?: pulumi.Input<string>;
}

/**
 * Defines the Arc Agent properties for the clusters.
 */
export interface ArcAgentProfileArgs {
    /**
     * Indicates whether the Arc agents on the be upgraded automatically to the latest version. Defaults to Enabled.
     */
    agentAutoUpgrade?: pulumi.Input<string | enums.AutoUpgradeOptions>;
    /**
     * Version of the Arc agents to be installed on the cluster resource
     */
    desiredAgentVersion?: pulumi.Input<string>;
    /**
     * List of system extensions can be installed on the cluster resource.
     */
    systemComponents?: pulumi.Input<pulumi.Input<SystemComponentArgs>[]>;
}
/**
 * arcAgentProfileArgsProvideDefaults sets the appropriate defaults for ArcAgentProfileArgs
 */
export function arcAgentProfileArgsProvideDefaults(val: ArcAgentProfileArgs): ArcAgentProfileArgs {
    return {
        ...val,
        agentAutoUpgrade: (val.agentAutoUpgrade) ?? "Enabled",
    };
}

/**
 * Identity for the connected cluster.
 */
export interface ConnectedClusterIdentityArgs {
    /**
     * The type of identity used for the connected cluster. The type 'SystemAssigned, includes a system created identity. The type 'None' means no identity is assigned to the connected cluster.
     */
    type: pulumi.Input<enums.ResourceIdentityType>;
}
/**
 * connectedClusterIdentityArgsProvideDefaults sets the appropriate defaults for ConnectedClusterIdentityArgs
 */
export function connectedClusterIdentityArgsProvideDefaults(val: ConnectedClusterIdentityArgs): ConnectedClusterIdentityArgs {
    return {
        ...val,
        type: (val.type) ?? "SystemAssigned",
    };
}

/**
 * System Extension and its desired versions to be installed on the cluster resource.
 */
export interface SystemComponentArgs {
    /**
     * Major Version of the system extension to be installed on the cluster resource.
     */
    majorVersion?: pulumi.Input<number>;
    /**
     * Type of the system extension
     */
    type?: pulumi.Input<string>;
    /**
     * Version of the system extension to be installed on the cluster resource.
     */
    userSpecifiedVersion?: pulumi.Input<string>;
}
