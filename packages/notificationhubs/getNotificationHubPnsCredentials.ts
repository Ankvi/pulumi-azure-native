import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Description of a NotificationHub PNS Credentials. This is a response of the POST requests that return namespace or hubs
 * PNS credentials.
 *
 * Uses Azure REST API version 2023-01-01-preview.
 *
 * Other available API versions: 2017-04-01, 2023-09-01, 2023-10-01-preview.
 */
export function getNotificationHubPnsCredentials(args: GetNotificationHubPnsCredentialsArgs, opts?: pulumi.InvokeOptions): Promise<GetNotificationHubPnsCredentialsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:notificationhubs:getNotificationHubPnsCredentials", {
        "namespaceName": args.namespaceName,
        "notificationHubName": args.notificationHubName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetNotificationHubPnsCredentialsArgs {
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
 * Description of a NotificationHub PNS Credentials. This is a response of the POST requests that return namespace or hubs
 * PNS credentials.
 */
export interface GetNotificationHubPnsCredentialsResult {
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * Deprecated - only for compatibility.
     */
    readonly location?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Collection of Notification Hub or Notification Hub Namespace PNS credentials.
     */
    readonly properties: types.outputs.PnsCredentialsResponse;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Deprecated - only for compatibility.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Description of a NotificationHub PNS Credentials. This is a response of the POST requests that return namespace or hubs
 * PNS credentials.
 *
 * Uses Azure REST API version 2023-01-01-preview.
 *
 * Other available API versions: 2017-04-01, 2023-09-01, 2023-10-01-preview.
 */
export function getNotificationHubPnsCredentialsOutput(args: GetNotificationHubPnsCredentialsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetNotificationHubPnsCredentialsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:notificationhubs:getNotificationHubPnsCredentials", {
        "namespaceName": args.namespaceName,
        "notificationHubName": args.notificationHubName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetNotificationHubPnsCredentialsOutputArgs {
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