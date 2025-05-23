import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Returns Intune iOS policies.
 *
 * Uses Azure REST API version 2015-01-14-preview.
 */
export function getIoMAMPolicyByName(args: GetIoMAMPolicyByNameArgs, opts?: pulumi.InvokeOptions): Promise<GetIoMAMPolicyByNameResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:intune:getIoMAMPolicyByName", {
        "hostName": args.hostName,
        "policyName": args.policyName,
        "select": args.select,
    }, opts);
}

export interface GetIoMAMPolicyByNameArgs {
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
 * iOS Policy entity for Intune MAM.
 */
export interface GetIoMAMPolicyByNameResult {
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
    readonly fileEncryptionLevel?: string;
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
    /**
     * Resource Tags
     */
    readonly tags?: {[key: string]: string};
    readonly touchId?: string;
    /**
     * Resource type
     */
    readonly type: string;
}
/**
 * Returns Intune iOS policies.
 *
 * Uses Azure REST API version 2015-01-14-preview.
 */
export function getIoMAMPolicyByNameOutput(args: GetIoMAMPolicyByNameOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetIoMAMPolicyByNameResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:intune:getIoMAMPolicyByName", {
        "hostName": args.hostName,
        "policyName": args.policyName,
        "select": args.select,
    }, opts);
}

export interface GetIoMAMPolicyByNameOutputArgs {
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