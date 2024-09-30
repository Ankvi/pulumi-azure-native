import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Primary and secondary connection strings to the hybrid connection.
 * Azure REST API version: 2021-11-01.
 *
 * Other available API versions: 2024-01-01.
 */
export function listHybridConnectionKeys(args: ListHybridConnectionKeysArgs, opts?: pulumi.InvokeOptions): Promise<ListHybridConnectionKeysResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:relay:listHybridConnectionKeys", {
        "authorizationRuleName": args.authorizationRuleName,
        "hybridConnectionName": args.hybridConnectionName,
        "namespaceName": args.namespaceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListHybridConnectionKeysArgs {
    /**
     * The authorization rule name.
     */
    authorizationRuleName: string;
    /**
     * The hybrid connection name.
     */
    hybridConnectionName: string;
    /**
     * The namespace name
     */
    namespaceName: string;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    resourceGroupName: string;
}

/**
 * Namespace/Relay Connection String
 */
export interface ListHybridConnectionKeysResult {
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
 * Primary and secondary connection strings to the hybrid connection.
 * Azure REST API version: 2021-11-01.
 *
 * Other available API versions: 2024-01-01.
 */
export function listHybridConnectionKeysOutput(args: ListHybridConnectionKeysOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListHybridConnectionKeysResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:relay:listHybridConnectionKeys", {
        "authorizationRuleName": args.authorizationRuleName,
        "hybridConnectionName": args.hybridConnectionName,
        "namespaceName": args.namespaceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListHybridConnectionKeysOutputArgs {
    /**
     * The authorization rule name.
     */
    authorizationRuleName: pulumi.Input<string>;
    /**
     * The hybrid connection name.
     */
    hybridConnectionName: pulumi.Input<string>;
    /**
     * The namespace name
     */
    namespaceName: pulumi.Input<string>;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    resourceGroupName: pulumi.Input<string>;
}