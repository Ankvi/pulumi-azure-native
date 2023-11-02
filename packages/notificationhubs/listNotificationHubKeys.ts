import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Response for the POST request that returns Namespace or NotificationHub access keys (connection strings).
 * Azure REST API version: 2023-01-01-preview.
 *
 * Other available API versions: 2014-09-01, 2016-03-01, 2017-04-01, 2023-09-01.
 */
export function listNotificationHubKeys(args: ListNotificationHubKeysArgs, opts?: pulumi.InvokeOptions): Promise<ListNotificationHubKeysResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:notificationhubs:listNotificationHubKeys", {
        "authorizationRuleName": args.authorizationRuleName,
        "namespaceName": args.namespaceName,
        "notificationHubName": args.notificationHubName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListNotificationHubKeysArgs {
    /**
     * Authorization Rule Name
     */
    authorizationRuleName: string;
    /**
     * Namespace name
     */
    namespaceName: string;
    /**
     * Notification Hub name
     */
    notificationHubName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Response for the POST request that returns Namespace or NotificationHub access keys (connection strings).
 */
export interface ListNotificationHubKeysResult {
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
 * Other available API versions: 2014-09-01, 2016-03-01, 2017-04-01, 2023-09-01.
 */
export function listNotificationHubKeysOutput(args: ListNotificationHubKeysOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListNotificationHubKeysResult> {
    return pulumi.output(args).apply((a: any) => listNotificationHubKeys(a, opts))
}

export interface ListNotificationHubKeysOutputArgs {
    /**
     * Authorization Rule Name
     */
    authorizationRuleName: pulumi.Input<string>;
    /**
     * Namespace name
     */
    namespaceName: pulumi.Input<string>;
    /**
     * Notification Hub name
     */
    notificationHubName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
