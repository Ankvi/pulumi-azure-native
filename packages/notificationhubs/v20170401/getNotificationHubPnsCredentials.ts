import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Lists the PNS Credentials associated with a notification hub .
 */
export function getNotificationHubPnsCredentials(args: GetNotificationHubPnsCredentialsArgs, opts?: pulumi.InvokeOptions): Promise<GetNotificationHubPnsCredentialsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:notificationhubs/v20170401:getNotificationHubPnsCredentials", {
        "namespaceName": args.namespaceName,
        "notificationHubName": args.notificationHubName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetNotificationHubPnsCredentialsArgs {
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
 * Description of a NotificationHub PNS Credentials.
 */
export interface GetNotificationHubPnsCredentialsResult {
    /**
     * The AdmCredential of the created NotificationHub
     */
    readonly admCredential?: types.outputs.AdmCredentialResponse;
    /**
     * The ApnsCredential of the created NotificationHub
     */
    readonly apnsCredential?: types.outputs.ApnsCredentialResponse;
    /**
     * The BaiduCredential of the created NotificationHub
     */
    readonly baiduCredential?: types.outputs.BaiduCredentialResponse;
    /**
     * The GcmCredential of the created NotificationHub
     */
    readonly gcmCredential?: types.outputs.GcmCredentialResponse;
    /**
     * Resource Id
     */
    readonly id: string;
    /**
     * Resource location
     */
    readonly location?: string;
    /**
     * The MpnsCredential of the created NotificationHub
     */
    readonly mpnsCredential?: types.outputs.MpnsCredentialResponse;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * The sku of the created namespace
     */
    readonly sku?: types.outputs.SkuResponse;
    /**
     * Resource tags
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type
     */
    readonly type: string;
    /**
     * The WnsCredential of the created NotificationHub
     */
    readonly wnsCredential?: types.outputs.WnsCredentialResponse;
}
/**
 * Lists the PNS Credentials associated with a notification hub .
 */
export function getNotificationHubPnsCredentialsOutput(args: GetNotificationHubPnsCredentialsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetNotificationHubPnsCredentialsResult> {
    return pulumi.output(args).apply((a: any) => getNotificationHubPnsCredentials(a, opts))
}

export interface GetNotificationHubPnsCredentialsOutputArgs {
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
