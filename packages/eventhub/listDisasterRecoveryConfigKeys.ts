import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets the primary and secondary connection strings for the Namespace.
 * Azure REST API version: 2022-10-01-preview.
 *
 * Other available API versions: 2023-01-01-preview, 2024-01-01.
 */
export function listDisasterRecoveryConfigKeys(args: ListDisasterRecoveryConfigKeysArgs, opts?: pulumi.InvokeOptions): Promise<ListDisasterRecoveryConfigKeysResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:eventhub:listDisasterRecoveryConfigKeys", {
        "alias": args.alias,
        "authorizationRuleName": args.authorizationRuleName,
        "namespaceName": args.namespaceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListDisasterRecoveryConfigKeysArgs {
    /**
     * The Disaster Recovery configuration name
     */
    alias: string;
    /**
     * The authorization rule name.
     */
    authorizationRuleName: string;
    /**
     * The Namespace name
     */
    namespaceName: string;
    /**
     * Name of the resource group within the azure subscription.
     */
    resourceGroupName: string;
}

/**
 * Namespace/EventHub Connection String
 */
export interface ListDisasterRecoveryConfigKeysResult {
    /**
     * Primary connection string of the alias if GEO DR is enabled
     */
    readonly aliasPrimaryConnectionString: string;
    /**
     * Secondary  connection string of the alias if GEO DR is enabled
     */
    readonly aliasSecondaryConnectionString: string;
    /**
     * A string that describes the AuthorizationRule.
     */
    readonly keyName: string;
    /**
     * Primary connection string of the created namespace AuthorizationRule.
     */
    readonly primaryConnectionString: string;
    /**
     * A base64-encoded 256-bit primary key for signing and validating the SAS token.
     */
    readonly primaryKey: string;
    /**
     * Secondary connection string of the created namespace AuthorizationRule.
     */
    readonly secondaryConnectionString: string;
    /**
     * A base64-encoded 256-bit primary key for signing and validating the SAS token.
     */
    readonly secondaryKey: string;
}
/**
 * Gets the primary and secondary connection strings for the Namespace.
 * Azure REST API version: 2022-10-01-preview.
 *
 * Other available API versions: 2023-01-01-preview, 2024-01-01.
 */
export function listDisasterRecoveryConfigKeysOutput(args: ListDisasterRecoveryConfigKeysOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListDisasterRecoveryConfigKeysResult> {
    return pulumi.output(args).apply((a: any) => listDisasterRecoveryConfigKeys(a, opts))
}

export interface ListDisasterRecoveryConfigKeysOutputArgs {
    /**
     * The Disaster Recovery configuration name
     */
    alias: pulumi.Input<string>;
    /**
     * The authorization rule name.
     */
    authorizationRuleName: pulumi.Input<string>;
    /**
     * The Namespace name
     */
    namespaceName: pulumi.Input<string>;
    /**
     * Name of the resource group within the azure subscription.
     */
    resourceGroupName: pulumi.Input<string>;
}