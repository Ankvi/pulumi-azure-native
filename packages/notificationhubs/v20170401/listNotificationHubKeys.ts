import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets the Primary and Secondary ConnectionStrings to the NotificationHub
 */
export function listNotificationHubKeys(args: ListNotificationHubKeysArgs, opts?: pulumi.InvokeOptions): Promise<ListNotificationHubKeysResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:notificationhubs/v20170401:listNotificationHubKeys", {
        "authorizationRuleName": args.authorizationRuleName,
        "namespaceName": args.namespaceName,
        "notificationHubName": args.notificationHubName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListNotificationHubKeysArgs {
    /**
     * The connection string of the NotificationHub for the specified authorizationRule.
     */
    authorizationRuleName: string;
    /**
     * The namespace name.
     */
    namespaceName: string;
    /**
     * The notification hub name.
     */
    notificationHubName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * Namespace/NotificationHub Connection String
 */
export interface ListNotificationHubKeysResult {
    /**
     * KeyName of the created AuthorizationRule
     */
    readonly keyName?: string;
    /**
     * PrimaryConnectionString of the AuthorizationRule.
     */
    readonly primaryConnectionString?: string;
    /**
     * PrimaryKey of the created AuthorizationRule.
     */
    readonly primaryKey?: string;
    /**
     * SecondaryConnectionString of the created AuthorizationRule
     */
    readonly secondaryConnectionString?: string;
    /**
     * SecondaryKey of the created AuthorizationRule
     */
    readonly secondaryKey?: string;
}
/**
 * Gets the Primary and Secondary ConnectionStrings to the NotificationHub
 */
export function listNotificationHubKeysOutput(args: ListNotificationHubKeysOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListNotificationHubKeysResult> {
    return pulumi.output(args).apply((a: any) => listNotificationHubKeys(a, opts))
}

export interface ListNotificationHubKeysOutputArgs {
    /**
     * The connection string of the NotificationHub for the specified authorizationRule.
     */
    authorizationRuleName: pulumi.Input<string>;
    /**
     * The namespace name.
     */
    namespaceName: pulumi.Input<string>;
    /**
     * The notification hub name.
     */
    notificationHubName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}
