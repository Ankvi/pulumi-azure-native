import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get an VolumeGroups.
 * Azure REST API version: 2021-11-20-preview.
 *
 * Other available API versions: 2022-12-01-preview, 2023-01-01.
 */
export function getVolumeGroup(args: GetVolumeGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetVolumeGroupResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:elasticsan:getVolumeGroup", {
        "elasticSanName": args.elasticSanName,
        "resourceGroupName": args.resourceGroupName,
        "volumeGroupName": args.volumeGroupName,
    }, opts);
}

export interface GetVolumeGroupArgs {
    /**
     * The name of the ElasticSan.
     */
    elasticSanName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the VolumeGroup.
     */
    volumeGroupName: string;
}

/**
 * Response for Volume Group request.
 */
export interface GetVolumeGroupResult {
    /**
     * Type of encryption
     */
    readonly encryption?: string;
    /**
     * Azure resource identifier.
     */
    readonly id: string;
    /**
     * Azure resource name.
     */
    readonly name: string;
    /**
     * A collection of rules governing the accessibility from specific network locations.
     */
    readonly networkAcls?: types.outputs.NetworkRuleSetResponse;
    /**
     * Type of storage target
     */
    readonly protocolType?: string;
    /**
     * State of the operation on the resource.
     */
    readonly provisioningState: string;
    /**
     * Resource metadata required by ARM RPC
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Azure resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Azure resource type.
     */
    readonly type: string;
}
/**
 * Get an VolumeGroups.
 * Azure REST API version: 2021-11-20-preview.
 *
 * Other available API versions: 2022-12-01-preview, 2023-01-01.
 */
export function getVolumeGroupOutput(args: GetVolumeGroupOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVolumeGroupResult> {
    return pulumi.output(args).apply((a: any) => getVolumeGroup(a, opts))
}

export interface GetVolumeGroupOutputArgs {
    /**
     * The name of the ElasticSan.
     */
    elasticSanName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the VolumeGroup.
     */
    volumeGroupName: pulumi.Input<string>;
}