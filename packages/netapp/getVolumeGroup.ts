import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get details of the specified volume group
 * Azure REST API version: 2022-11-01.
 *
 * Other available API versions: 2021-10-01, 2022-11-01-preview, 2023-05-01, 2023-05-01-preview.
 */
export function getVolumeGroup(args: GetVolumeGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetVolumeGroupResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:netapp:getVolumeGroup", {
        "accountName": args.accountName,
        "resourceGroupName": args.resourceGroupName,
        "volumeGroupName": args.volumeGroupName,
    }, opts);
}

export interface GetVolumeGroupArgs {
    /**
     * The name of the NetApp account
     */
    accountName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the volumeGroup
     */
    volumeGroupName: string;
}

/**
 * Volume group resource for create
 */
export interface GetVolumeGroupResult {
    /**
     * Volume group details
     */
    readonly groupMetaData?: types.outputs.VolumeGroupMetaDataResponse;
    /**
     * Resource Id
     */
    readonly id: string;
    /**
     * Resource location
     */
    readonly location?: string;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * Azure lifecycle management
     */
    readonly provisioningState: string;
    /**
     * Resource type
     */
    readonly type: string;
    /**
     * List of volumes from group
     */
    readonly volumes?: types.outputs.VolumeGroupVolumePropertiesResponse[];
}
/**
 * Get details of the specified volume group
 * Azure REST API version: 2022-11-01.
 *
 * Other available API versions: 2021-10-01, 2022-11-01-preview, 2023-05-01, 2023-05-01-preview.
 */
export function getVolumeGroupOutput(args: GetVolumeGroupOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVolumeGroupResult> {
    return pulumi.output(args).apply((a: any) => getVolumeGroup(a, opts))
}

export interface GetVolumeGroupOutputArgs {
    /**
     * The name of the NetApp account
     */
    accountName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the volumeGroup
     */
    volumeGroupName: pulumi.Input<string>;
}
