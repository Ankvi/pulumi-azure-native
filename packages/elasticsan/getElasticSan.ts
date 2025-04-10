import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a ElasticSan.
 *
 * Uses Azure REST API version 2021-11-20-preview.
 *
 * Other available API versions: 2022-12-01-preview, 2023-01-01, 2024-05-01, 2024-06-01-preview.
 */
export function getElasticSan(args: GetElasticSanArgs, opts?: pulumi.InvokeOptions): Promise<GetElasticSanResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:elasticsan:getElasticSan", {
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
     * Azure resource identifier.
     */
    readonly id: string;
    /**
     * The geo-location where the resource lives.
     */
    readonly location?: string;
    /**
     * Azure resource name.
     */
    readonly name: string;
    /**
     * State of the operation on the resource.
     */
    readonly provisioningState: string;
    /**
     * resource sku
     */
    readonly sku: types.outputs.SkuResponse;
    /**
     * Resource metadata required by ARM RPC
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Azure resource tags.
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
     * Azure resource type.
     */
    readonly type: string;
    /**
     * Total number of volume groups in this Elastic San appliance.
     */
    readonly volumeGroupCount: number;
}
/**
 * Get a ElasticSan.
 *
 * Uses Azure REST API version 2021-11-20-preview.
 *
 * Other available API versions: 2022-12-01-preview, 2023-01-01, 2024-05-01, 2024-06-01-preview.
 */
export function getElasticSanOutput(args: GetElasticSanOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetElasticSanResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:elasticsan:getElasticSan", {
        "elasticSanName": args.elasticSanName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
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