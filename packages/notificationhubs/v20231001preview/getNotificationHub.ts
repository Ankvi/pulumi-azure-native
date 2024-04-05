import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Notification Hub Resource.
 */
export function getNotificationHub(args: GetNotificationHubArgs, opts?: pulumi.InvokeOptions): Promise<GetNotificationHubResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:notificationhubs/v20231001preview:getNotificationHub", {
        "namespaceName": args.namespaceName,
        "notificationHubName": args.notificationHubName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetNotificationHubArgs {
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
 * Notification Hub Resource.
 */
export interface GetNotificationHubResult {
    /**
     * Description of a NotificationHub AdmCredential.
     */
    readonly admCredential?: types.outputs.AdmCredentialResponse;
    /**
     * Description of a NotificationHub ApnsCredential.
     */
    readonly apnsCredential?: types.outputs.ApnsCredentialResponse;
    /**
     * Gets or sets the AuthorizationRules of the created NotificationHub
     */
    readonly authorizationRules: types.outputs.SharedAccessAuthorizationRulePropertiesResponse[];
    /**
     * Description of a NotificationHub BaiduCredential.
     */
    readonly baiduCredential?: types.outputs.BaiduCredentialResponse;
    /**
     * Description of a NotificationHub BrowserCredential.
     */
    readonly browserCredential?: types.outputs.BrowserCredentialResponse;
    readonly dailyMaxActiveDevices: number;
    /**
     * Description of a NotificationHub FcmV1Credential.
     */
    readonly fcmV1Credential?: types.outputs.FcmV1CredentialResponse;
    /**
     * Description of a NotificationHub GcmCredential.
     */
    readonly gcmCredential?: types.outputs.GcmCredentialResponse;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * Description of a NotificationHub MpnsCredential.
     */
    readonly mpnsCredential?: types.outputs.MpnsCredentialResponse;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Gets or sets the RegistrationTtl of the created NotificationHub
     */
    readonly registrationTtl?: string;
    /**
     * The Sku description for a namespace
     */
    readonly sku?: types.outputs.SkuResponse;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * Description of a NotificationHub WnsCredential.
     */
    readonly wnsCredential?: types.outputs.WnsCredentialResponse;
    /**
     * Description of a NotificationHub XiaomiCredential.
     */
    readonly xiaomiCredential?: types.outputs.XiaomiCredentialResponse;
}
/**
 * Notification Hub Resource.
 */
export function getNotificationHubOutput(args: GetNotificationHubOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetNotificationHubResult> {
    return pulumi.output(args).apply((a: any) => getNotificationHub(a, opts))
}

export interface GetNotificationHubOutputArgs {
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