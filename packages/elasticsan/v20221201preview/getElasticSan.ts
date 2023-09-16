import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Get a ElasticSan.
 */
export function getElasticSan(args: GetElasticSanArgs, opts?: pulumi.InvokeOptions): Promise<GetElasticSanResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:elasticsan/v20221201preview:getElasticSan", {
        "elasticSanName": args.elasticSanName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetElasticSanArgs {
    /**
     * The name of the ElasticSan.
     */
    elasticSanName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Response for ElasticSan request.
 */
export interface GetElasticSanResult {
    /**
     * Logical zone for Elastic San resource; example: ["1"].
     */
    readonly availabilityZones?: string[];
    /**
     * Base size of the Elastic San appliance in TiB.
     */
    readonly baseSizeTiB: number;
    /**
     * Extended size of the Elastic San appliance in TiB.
     */
    readonly extendedCapacitySizeTiB: number;
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
     * The list of Private Endpoint Connections.
     */
    readonly privateEndpointConnections: types.outputs.elasticsan.v20221201preview.PrivateEndpointConnectionResponse[];
    /**
     * State of the operation on the resource.
     */
    readonly provisioningState: string;
    /**
     * resource sku
     */
    readonly sku: types.outputs.elasticsan.v20221201preview.SkuResponse;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.elasticsan.v20221201preview.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Total Provisioned IOPS of the Elastic San appliance.
     */
    readonly totalIops: number;
    /**
     * Total Provisioned MBps Elastic San appliance.
     */
    readonly totalMBps: number;
    /**
     * Total size of the Elastic San appliance in TB.
     */
    readonly totalSizeTiB: number;
    /**
     * Total size of the provisioned Volumes in GiB.
     */
    readonly totalVolumeSizeGiB: number;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * Total number of volume groups in this Elastic San appliance.
     */
    readonly volumeGroupCount: number;
}
/**
 * Get a ElasticSan.
 */
export function getElasticSanOutput(args: GetElasticSanOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetElasticSanResult> {
    return pulumi.output(args).apply((a: any) => getElasticSan(a, opts))
}

export interface GetElasticSanOutputArgs {
    /**
     * The name of the ElasticSan.
     */
    elasticSanName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
