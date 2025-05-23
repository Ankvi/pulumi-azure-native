import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Primary and secondary connection strings to the WCF relay.
 *
 * Uses Azure REST API version 2024-01-01.
 *
 * Other available API versions: 2021-11-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native relay [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listWCFRelayKeys(args: ListWCFRelayKeysArgs, opts?: pulumi.InvokeOptions): Promise<ListWCFRelayKeysResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:relay:listWCFRelayKeys", {
        "authorizationRuleName": args.authorizationRuleName,
        "namespaceName": args.namespaceName,
        "relayName": args.relayName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListWCFRelayKeysArgs {
    /**
     * The authorization rule name.
     */
    authorizationRuleName: string;
    /**
     * The namespace name
     */
    namespaceName: string;
    /**
     * The relay name.
     */
    relayName: string;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    resourceGroupName: string;
}

/**
 * Namespace/Relay Connection String
 */
export interface ListWCFRelayKeysResult {
    /**
     * A string that describes the authorization rule.
     */
    readonly keyName?: string;
    /**
     * Primary connection string of the created namespace authorization rule.
     */
    readonly primaryConnectionString?: string;
    /**
     * A base64-encoded 256-bit primary key for signing and validating the SAS token.
     */
    readonly primaryKey?: string;
    /**
     * Secondary connection string of the created namespace authorization rule.
     */
    readonly secondaryConnectionString?: string;
    /**
     * A base64-encoded 256-bit secondary key for signing and validating the SAS token.
     */
    readonly secondaryKey?: string;
}
/**
 * Primary and secondary connection strings to the WCF relay.
 *
 * Uses Azure REST API version 2024-01-01.
 *
 * Other available API versions: 2021-11-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native relay [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listWCFRelayKeysOutput(args: ListWCFRelayKeysOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListWCFRelayKeysResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:relay:listWCFRelayKeys", {
        "authorizationRuleName": args.authorizationRuleName,
        "namespaceName": args.namespaceName,
        "relayName": args.relayName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListWCFRelayKeysOutputArgs {
    /**
     * The authorization rule name.
     */
    authorizationRuleName: pulumi.Input<string>;
    /**
     * The namespace name
     */
    namespaceName: pulumi.Input<string>;
    /**
     * The relay name.
     */
    relayName: pulumi.Input<string>;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    resourceGroupName: pulumi.Input<string>;
}