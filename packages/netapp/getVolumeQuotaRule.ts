import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get details of the specified quota rule
 * Azure REST API version: 2022-11-01.
 *
 * Other available API versions: 2022-11-01-preview, 2023-05-01, 2023-05-01-preview, 2023-07-01.
 */
export function getVolumeQuotaRule(args: GetVolumeQuotaRuleArgs, opts?: pulumi.InvokeOptions): Promise<GetVolumeQuotaRuleResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:netapp:getVolumeQuotaRule", {
        "accountName": args.accountName,
        "poolName": args.poolName,
        "resourceGroupName": args.resourceGroupName,
        "volumeName": args.volumeName,
        "volumeQuotaRuleName": args.volumeQuotaRuleName,
    }, opts);
}

export interface GetVolumeQuotaRuleArgs {
    /**
     * The name of the NetApp account
     */
    accountName: string;
    /**
     * The name of the capacity pool
     */
    poolName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the volume
     */
    volumeName: string;
    /**
     * The name of volume quota rule
     */
    volumeQuotaRuleName: string;
}

/**
 * Quota Rule of a Volume
 */
export interface GetVolumeQuotaRuleResult {
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Gets the status of the VolumeQuotaRule at the time the operation was called.
     */
    readonly provisioningState: string;
    /**
     * Size of quota
     */
    readonly quotaSizeInKiBs?: number;
    /**
     * UserID/GroupID/SID based on the quota target type. UserID and groupID can be found by running ‘id’ or ‘getent’ command for the user or group and SID can be found by running <wmic useraccount where name='user-name' get sid>
     */
    readonly quotaTarget?: string;
    /**
     * Type of quota
     */
    readonly quotaType?: string;
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
}
/**
 * Get details of the specified quota rule
 * Azure REST API version: 2022-11-01.
 *
 * Other available API versions: 2022-11-01-preview, 2023-05-01, 2023-05-01-preview, 2023-07-01.
 */
export function getVolumeQuotaRuleOutput(args: GetVolumeQuotaRuleOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVolumeQuotaRuleResult> {
    return pulumi.output(args).apply((a: any) => getVolumeQuotaRule(a, opts))
}

export interface GetVolumeQuotaRuleOutputArgs {
    /**
     * The name of the NetApp account
     */
    accountName: pulumi.Input<string>;
    /**
     * The name of the capacity pool
     */
    poolName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the volume
     */
    volumeName: pulumi.Input<string>;
    /**
     * The name of volume quota rule
     */
    volumeQuotaRuleName: pulumi.Input<string>;
}
