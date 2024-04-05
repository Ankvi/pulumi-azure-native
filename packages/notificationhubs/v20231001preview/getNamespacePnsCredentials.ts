import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Description of a NotificationHub PNS Credentials. This is a response of the POST requests that return namespace or hubs
 * PNS credentials.
 */
export function getNamespacePnsCredentials(args: GetNamespacePnsCredentialsArgs, opts?: pulumi.InvokeOptions): Promise<GetNamespacePnsCredentialsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:notificationhubs/v20231001preview:getNamespacePnsCredentials", {
        "namespaceName": args.namespaceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetNamespacePnsCredentialsArgs {
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
 * Description of a NotificationHub PNS Credentials. This is a response of the POST requests that return namespace or hubs
 * PNS credentials.
 */
export interface GetNamespacePnsCredentialsResult {
    /**
     * Description of a NotificationHub AdmCredential.
     */
    readonly admCredential?: types.outputs.AdmCredentialResponse;
    /**
     * Description of a NotificationHub ApnsCredential.
     */
    readonly apnsCredential?: types.outputs.ApnsCredentialResponse;
    /**
     * Description of a NotificationHub BaiduCredential.
     */
    readonly baiduCredential?: types.outputs.BaiduCredentialResponse;
    /**
     * Description of a NotificationHub BrowserCredential.
     */
    readonly browserCredential?: types.outputs.BrowserCredentialResponse;
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
     * Deprecated - only for compatibility.
     */
    readonly location?: string;
    /**
     * Description of a NotificationHub MpnsCredential.
     */
    readonly mpnsCredential?: types.outputs.MpnsCredentialResponse;
    /**
     * The name of the resource
     */
    readonly name: string;
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
 * Description of a NotificationHub PNS Credentials. This is a response of the POST requests that return namespace or hubs
 * PNS credentials.
 */
export function getNamespacePnsCredentialsOutput(args: GetNamespacePnsCredentialsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetNamespacePnsCredentialsResult> {
    return pulumi.output(args).apply((a: any) => getNamespacePnsCredentials(a, opts))
}

export interface GetNamespacePnsCredentialsOutputArgs {
    /**
     * Namespace name
     */
    namespaceName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}