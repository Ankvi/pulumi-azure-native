import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * Details of the Agriculture AgriDataManager.
 */
export interface AgriServiceResourcePropertiesArgs {
    /**
     * Data connector credentials of AgriService instance.
     */
    dataConnectorCredentials?: pulumi.Input<pulumi.Input<DataConnectorCredentialMapArgs>[]>;
    /**
     * AgriService installed solutions.
     */
    installedSolutions?: pulumi.Input<pulumi.Input<InstalledSolutionMapArgs>[]>;
}

/**
 * Mapping of data connector credentials.
 */
export interface DataConnectorCredentialMapArgs {
    /**
     * The key representing the credential.
     */
    key: pulumi.Input<string>;
    /**
     * The data connector credential value.
     */
    value: pulumi.Input<DataConnectorCredentialsArgs>;
}

/**
 * The properties related to an AgriService data connector.
 */
export interface DataConnectorCredentialsArgs {
    /**
     * Client Id associated with the provider, if type of credentials is OAuthClientCredentials.
     */
    clientId?: pulumi.Input<string>;
    /**
     * Name of the key vault key.
     */
    keyName?: pulumi.Input<string>;
    /**
     * Uri of the key vault
     */
    keyVaultUri?: pulumi.Input<string>;
    /**
     * Version of the key vault key.
     */
    keyVersion?: pulumi.Input<string>;
    /**
     * Type of credential.
     */
    kind?: pulumi.Input<string | enums.AuthCredentialsKind>;
}

/**
 * Mapping of installed solutions.
 */
export interface InstalledSolutionMapArgs {
    /**
     * The key representing the installed solution.
     */
    key: pulumi.Input<string>;
    /**
     * The installed solution value.
     */
    value: pulumi.Input<SolutionArgs>;
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
 * Installed data manager for Agriculture solution detail.
 */
export interface SolutionArgs {
    /**
     * Application name of the solution.
     */
    applicationName?: pulumi.Input<string>;
    /**
     * Marketplace publisher Id.
     */
    marketPlacePublisherId?: pulumi.Input<string>;
    /**
     * Partner Id.
     */
    partnerId?: pulumi.Input<string>;
    /**
     * Plan Id.
     */
    planId?: pulumi.Input<string>;
    /**
     * Saas subscription Id.
     */
    saasSubscriptionId?: pulumi.Input<string>;
    /**
     * Saas subscription name.
     */
    saasSubscriptionName?: pulumi.Input<string>;
}
