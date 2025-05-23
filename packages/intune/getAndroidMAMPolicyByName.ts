import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Returns AndroidMAMPolicy with given name.
 *
 * Uses Azure REST API version 2015-01-14-preview.
 */
export function getAndroidMAMPolicyByName(args: GetAndroidMAMPolicyByNameArgs, opts?: pulumi.InvokeOptions): Promise<GetAndroidMAMPolicyByNameResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:intune:getAndroidMAMPolicyByName", {
        "hostName": args.hostName,
        "policyName": args.policyName,
        "select": args.select,
    }, opts);
}

export interface GetAndroidMAMPolicyByNameArgs {
    /**
     * Location hostName for the tenant
     */
    hostName: string;
    /**
     * Unique name for the policy
     */
    policyName: string;
    /**
     * select specific fields in entity.
     */
    select?: string;
}

/**
 * Android Policy entity for Intune MAM.
 */
export interface GetAndroidMAMPolicyByNameResult {
    readonly accessRecheckOfflineTimeout?: string;
    readonly accessRecheckOnlineTimeout?: string;
    readonly appSharingFromLevel?: string;
    readonly appSharingToLevel?: string;
    readonly authentication?: string;
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    readonly clipboardSharingLevel?: string;
    readonly dataBackup?: string;
    readonly description?: string;
    readonly deviceCompliance?: string;
    readonly fileEncryption?: string;
    readonly fileSharingSaveAs?: string;
    readonly friendlyName: string;
    readonly groupStatus: string;
    /**
     * Resource Id
     */
    readonly id: string;
    readonly lastModifiedTime: string;
    /**
     * Resource Location
     */
    readonly location?: string;
    readonly managedBrowser?: string;
    /**
     * Resource name
     */
    readonly name: string;
    readonly numOfApps: number;
    readonly offlineWipeTimeout?: string;
    readonly pin?: string;
    readonly pinNumRetry?: number;
    readonly screenCapture?: string;
    /**
     * Resource Tags
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type
     */
    readonly type: string;
}
/**
 * Returns AndroidMAMPolicy with given name.
 *
 * Uses Azure REST API version 2015-01-14-preview.
 */
export function getAndroidMAMPolicyByNameOutput(args: GetAndroidMAMPolicyByNameOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetAndroidMAMPolicyByNameResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:intune:getAndroidMAMPolicyByName", {
        "hostName": args.hostName,
        "policyName": args.policyName,
        "select": args.select,
    }, opts);
}

export interface GetAndroidMAMPolicyByNameOutputArgs {
    /**
     * Location hostName for the tenant
     */
    hostName: pulumi.Input<string>;
    /**
     * Unique name for the policy
     */
    policyName: pulumi.Input<string>;
    /**
     * select specific fields in entity.
     */
    select?: pulumi.Input<string>;
}