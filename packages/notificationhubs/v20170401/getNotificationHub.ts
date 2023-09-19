import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Lists the notification hubs associated with a namespace.
 */
export function getNotificationHub(args: GetNotificationHubArgs, opts?: pulumi.InvokeOptions): Promise<GetNotificationHubResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:notificationhubs/v20170401:getNotificationHub", {
        "namespaceName": args.namespaceName,
        "notificationHubName": args.notificationHubName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetNotificationHubArgs {
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
 * Description of a NotificationHub Resource.
 */
export interface GetNotificationHubResult {
    /**
     * The AdmCredential of the created NotificationHub
     */
    readonly admCredential?: types.outputs.AdmCredentialResponse;
    /**
     * The ApnsCredential of the created NotificationHub
     */
    readonly apnsCredential?: types.outputs.ApnsCredentialResponse;
    /**
     * The AuthorizationRules of the created NotificationHub
     */
    readonly authorizationRules?: types.outputs.SharedAccessAuthorizationRulePropertiesResponse[];
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
     * The RegistrationTtl of the created NotificationHub
     */
    readonly registrationTtl?: string;
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
 * Lists the notification hubs associated with a namespace.
 */
export function getNotificationHubOutput(args: GetNotificationHubOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetNotificationHubResult> {
    return pulumi.output(args).apply((a: any) => getNotificationHub(a, opts))
}

export interface GetNotificationHubOutputArgs {
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
