import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * The properties of a data store.
 */
export interface DatastoreArgs {
    /**
     * The Azure resource ID of an Azure Data Explorer cluster.
     */
    adxClusterResourceId?: pulumi.Input<string>;
    /**
     * The Kusto cluster display name.
     */
    kustoClusterDisplayName?: pulumi.Input<string>;
    /**
     * The Kusto cluster URI.
     */
    kustoClusterUri: pulumi.Input<string>;
    /**
     * The Kusto data ingestion URI.
     */
    kustoDataIngestionUri: pulumi.Input<string>;
    /**
     * The name of a Kusto database.
     */
    kustoDatabaseName: pulumi.Input<string>;
    /**
     * The Kusto management URL.
     */
    kustoManagementUrl: pulumi.Input<string>;
    /**
     * The type of a Kusto offering.
     */
    kustoOfferingType: pulumi.Input<string | enums.KustoOfferingType>;
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
 * The vault specific details required if using SQL authentication to connect to a target.
 */
export interface VaultSecretArgs {
    /**
     * The Azure resource ID of the Key Vault instance storing database authentication secrets.
     */
    akvResourceId?: pulumi.Input<string>;
    /**
     * The path to the Key Vault secret storing the password for authentication to a target.
     */
    akvTargetPassword?: pulumi.Input<string>;
    /**
     * The path to the Key Vault secret storing the login name (aka user name, aka account name) for authentication to a target.
     */
    akvTargetUser?: pulumi.Input<string>;
}
