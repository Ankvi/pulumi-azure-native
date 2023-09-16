import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Primary and secondary connection strings to the namespace.
 */
export function listNamespaceKeys(args: ListNamespaceKeysArgs, opts?: pulumi.InvokeOptions): Promise<ListNamespaceKeysResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:relay/v20211101:listNamespaceKeys", {
        "authorizationRuleName": args.authorizationRuleName,
        "namespaceName": args.namespaceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListNamespaceKeysArgs {
    /**
     * The authorization rule name.
     */
    authorizationRuleName: string;
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
export interface ListNamespaceKeysResult {
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
 * Primary and secondary connection strings to the namespace.
 */
export function listNamespaceKeysOutput(args: ListNamespaceKeysOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListNamespaceKeysResult> {
    return pulumi.output(args).apply((a: any) => listNamespaceKeys(a, opts))
}

export interface ListNamespaceKeysOutputArgs {
    /**
     * The authorization rule name.
     */
    authorizationRuleName: pulumi.Input<string>;
    /**
     * The namespace name
     */
    namespaceName: pulumi.Input<string>;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    resourceGroupName: pulumi.Input<string>;
}
