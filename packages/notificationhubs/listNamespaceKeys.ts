import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Response for the POST request that returns Namespace or NotificationHub access keys (connection strings).
 * Azure REST API version: 2023-01-01-preview.
 *
 * Other available API versions: 2017-04-01, 2023-09-01, 2023-10-01-preview.
 */
export function listNamespaceKeys(args: ListNamespaceKeysArgs, opts?: pulumi.InvokeOptions): Promise<ListNamespaceKeysResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:notificationhubs:listNamespaceKeys", {
        "authorizationRuleName": args.authorizationRuleName,
        "namespaceName": args.namespaceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListNamespaceKeysArgs {
    /**
     * Authorization Rule Name
     */
    authorizationRuleName: string;
    /**
     * Namespace name
     */
    namespaceName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Response for the POST request that returns Namespace or NotificationHub access keys (connection strings).
 */
export interface ListNamespaceKeysResult {
    /**
     * Gets or sets keyName of the created AuthorizationRule
     */
    readonly keyName: string;
    /**
     * Gets or sets primaryConnectionString of the AuthorizationRule.
     */
    readonly primaryConnectionString: string;
    /**
     * Gets or sets primaryKey of the created AuthorizationRule.
     */
    readonly primaryKey: string;
    /**
     * Gets or sets secondaryConnectionString of the created
     * AuthorizationRule
     */
    readonly secondaryConnectionString: string;
    /**
     * Gets or sets secondaryKey of the created AuthorizationRule
     */
    readonly secondaryKey: string;
}
/**
 * Response for the POST request that returns Namespace or NotificationHub access keys (connection strings).
 * Azure REST API version: 2023-01-01-preview.
 *
 * Other available API versions: 2017-04-01, 2023-09-01, 2023-10-01-preview.
 */
export function listNamespaceKeysOutput(args: ListNamespaceKeysOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListNamespaceKeysResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:notificationhubs:listNamespaceKeys", {
        "authorizationRuleName": args.authorizationRuleName,
        "namespaceName": args.namespaceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListNamespaceKeysOutputArgs {
    /**
     * Authorization Rule Name
     */
    authorizationRuleName: pulumi.Input<string>;
    /**
     * Namespace name
     */
    namespaceName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}