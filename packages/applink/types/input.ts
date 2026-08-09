import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * AppLink Member properties
 */
export interface AppLinkMemberPropertiesArgs {
    /**
     * Cluster type
     */
    clusterType?: pulumi.Input<string | enums.ClusterType | undefined>;
    /**
     * Connectivity profile.
     */
    connectivityProfile?: pulumi.Input<ConnectivityProfileArgs | undefined>;
    /**
     * AppLink Member Metadata
     */
    metadata: pulumi.Input<MetadataArgs>;
    /**
     * Upgrade profile.
     */
    upgradeProfile?: pulumi.Input<UpgradeProfileArgs | undefined>;
}

/**
 * AppLinkMember connectivity profile.
 */
export interface ConnectivityProfileArgs {
    /**
     * East-West gateway profile.
     */
    eastWestGateway?: pulumi.Input<EastWestGatewayProfileArgs | undefined>;
    /**
     * Private connect profile.
     */
    privateConnect?: pulumi.Input<PrivateConnectProfileArgs | undefined>;
}

/**
 * AppLinkMember east-west gateway profile.
 */
export interface EastWestGatewayProfileArgs {
    /**
     * East-West gateway visibility.
     */
    visibility: pulumi.Input<string | enums.EastWestGatewayVisibility>;
}

/**
 * AppLinkMember fully managed upgrade profile
 */
export interface FullyManagedUpgradeProfileArgs {
    /**
     * Release channel
     */
    releaseChannel: pulumi.Input<string | enums.UpgradeReleaseChannel>;
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
    userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[] | undefined>;
}

/**
 * AppLinkMember metadata
 */
export interface MetadataArgs {
    /**
     * Resource ID
     */
    resourceId: pulumi.Input<string>;
}

/**
 * AppLinkMember private connect profile.
 */
export interface PrivateConnectProfileArgs {
    /**
     * Delegated Subnet to AppLink.
     */
    subnetResourceId: pulumi.Input<string>;
}

/**
 * AppLinkMember self managed upgrade profile
 */
export interface SelfManagedUpgradeProfileArgs {
    /**
     * Istio version
     */
    version: pulumi.Input<string>;
}

/**
 * AppLinkMember upgrade profile.
 */
export interface UpgradeProfileArgs {
    /**
     * Fully managed upgrade profile.
     */
    fullyManagedUpgradeProfile?: pulumi.Input<FullyManagedUpgradeProfileArgs | undefined>;
    /**
     * Upgrade mode.
     */
    mode: pulumi.Input<string | enums.UpgradeMode>;
    /**
     * Self managed upgrade profile.
     */
    selfManagedUpgradeProfile?: pulumi.Input<SelfManagedUpgradeProfileArgs | undefined>;
}
