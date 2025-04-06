import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Returns dedicated cloud node
 *
 * Uses Azure REST API version 2019-04-01.
 */
export function getDedicatedCloudNode(args: GetDedicatedCloudNodeArgs, opts?: pulumi.InvokeOptions): Promise<GetDedicatedCloudNodeResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:vmwarecloudsimple:getDedicatedCloudNode", {
        "dedicatedCloudNodeName": args.dedicatedCloudNodeName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDedicatedCloudNodeArgs {
    /**
     * dedicated cloud node name
     */
    dedicatedCloudNodeName: string;
    /**
     * The name of the resource group
     */
    resourceGroupName: string;
}

/**
 * Dedicated cloud node model
 */
export interface GetDedicatedCloudNodeResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/dedicatedCloudNodes/{dedicatedCloudNodeName}
     */
    readonly id: string;
    /**
     * Azure region
     */
    readonly location: string;
    /**
     * {dedicatedCloudNodeName}
     */
    readonly name: string;
    /**
     * Dedicated Cloud Nodes properties
     */
    readonly properties: types.outputs.DedicatedCloudNodePropertiesResponse;
    /**
     * Dedicated Cloud Nodes SKU
     */
    readonly sku?: types.outputs.SkuResponse;
    /**
     * Dedicated Cloud Nodes tags
     */
    readonly tags?: {[key: string]: string};
    /**
     * {resourceProviderNamespace}/{resourceType}
     */
    readonly type: string;
}
/**
 * Returns dedicated cloud node
 *
 * Uses Azure REST API version 2019-04-01.
 */
export function getDedicatedCloudNodeOutput(args: GetDedicatedCloudNodeOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDedicatedCloudNodeResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:vmwarecloudsimple:getDedicatedCloudNode", {
        "dedicatedCloudNodeName": args.dedicatedCloudNodeName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDedicatedCloudNodeOutputArgs {
    /**
     * dedicated cloud node name
     */
    dedicatedCloudNodeName: pulumi.Input<string>;
    /**
     * The name of the resource group
     */
    resourceGroupName: pulumi.Input<string>;
}