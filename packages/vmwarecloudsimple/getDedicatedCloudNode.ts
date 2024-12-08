import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Returns dedicated cloud node
 * Azure REST API version: 2019-04-01.
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
     * Availability Zone id, e.g. "az1"
     */
    readonly availabilityZoneId: string;
    /**
     * Availability Zone name, e.g. "Availability Zone 1"
     */
    readonly availabilityZoneName: string;
    /**
     * VMWare Cloud Rack Name
     */
    readonly cloudRackName: string;
    /**
     * date time the resource was created
     */
    readonly created: string;
    /**
     * SKU's id
     */
    readonly id: string;
    /**
     * Azure region
     */
    readonly location: string;
    /**
     * SKU's name
     */
    readonly name: string;
    /**
     * count of nodes to create
     */
    readonly nodesCount: number;
    /**
     * Placement Group id, e.g. "n1"
     */
    readonly placementGroupId: string;
    /**
     * Placement Name, e.g. "Placement Group 1"
     */
    readonly placementGroupName: string;
    /**
     * Private Cloud Id
     */
    readonly privateCloudId: string;
    /**
     * Resource Pool Name
     */
    readonly privateCloudName: string;
    /**
     * The provisioning status of the resource
     */
    readonly provisioningState: string;
    /**
     * purchase id
     */
    readonly purchaseId: string;
    /**
     * Dedicated Cloud Nodes SKU
     */
    readonly sku?: types.outputs.SkuResponse;
    /**
     * Node status, indicates is private cloud set up on this node or not
     */
    readonly status: string;
    /**
     * Dedicated Cloud Nodes tags
     */
    readonly tags?: {[key: string]: string};
    /**
     * {resourceProviderNamespace}/{resourceType}
     */
    readonly type: string;
    /**
     * VMWare Cluster Name
     */
    readonly vmwareClusterName: string;
}
/**
 * Returns dedicated cloud node
 * Azure REST API version: 2019-04-01.
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