import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get an VolumeGroups.
 */
export function getVolumeGroup(args: GetVolumeGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetVolumeGroupResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:elasticsan/v20221201preview:getVolumeGroup", {
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
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * A collection of rules governing the accessibility from specific network locations.
     */
    readonly networkAcls?: types.outputs.NetworkRuleSetResponse;
    /**
     * The list of Private Endpoint Connections.
     */
    readonly privateEndpointConnections: types.outputs.PrivateEndpointConnectionResponse[];
    /**
     * Type of storage target
     */
    readonly protocolType?: string;
    /**
     * State of the operation on the resource.
     */
    readonly provisioningState: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Get an VolumeGroups.
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