import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Implements cluster GET method.
 * Azure REST API version: 2022-07-15-preview.
 *
 * Other available API versions: 2023-03-01-preview, 2023-10-01, 2023-12-01.
 */
export function getCluster(args: GetClusterArgs, opts?: pulumi.InvokeOptions): Promise<GetClusterResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:connectedvmwarevsphere:getCluster", {
        "clusterName": args.clusterName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetClusterArgs {
    /**
     * Name of the cluster.
     */
    clusterName: string;
    /**
     * The Resource Group Name.
     */
    resourceGroupName: string;
}

/**
 * Define the cluster.
 */
export interface GetClusterResult {
    /**
     * Gets the name of the corresponding resource in Kubernetes.
     */
    readonly customResourceName: string;
    /**
     * Gets or sets the datastore ARM ids.
     */
    readonly datastoreIds: string[];
    /**
     * Gets or sets the extended location.
     */
    readonly extendedLocation?: types.outputs.ExtendedLocationResponse;
    /**
     * Gets or sets the Id.
     */
    readonly id: string;
    /**
     * Gets or sets the inventory Item ID for the cluster.
     */
    readonly inventoryItemId?: string;
    /**
     * Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type; e.g. ApiApps are a kind of Microsoft.Web/sites type.  If supported, the resource provider must validate and persist this value.
     */
    readonly kind?: string;
    /**
     * Gets or sets the location.
     */
    readonly location: string;
    /**
     * Gets or sets the vCenter Managed Object name for the cluster.
     */
    readonly moName: string;
    /**
     * Gets or sets the vCenter MoRef (Managed Object Reference) ID for the cluster.
     */
    readonly moRefId?: string;
    /**
     * Gets or sets the name.
     */
    readonly name: string;
    /**
     * Gets or sets the network ARM ids.
     */
    readonly networkIds: string[];
    /**
     * Gets or sets the provisioning state.
     */
    readonly provisioningState: string;
    /**
     * The resource status information.
     */
    readonly statuses: types.outputs.ResourceStatusResponse[];
    /**
     * The system data.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Gets or sets the Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Gets or sets the type of the resource.
     */
    readonly type: string;
    /**
     * Gets or sets a unique identifier for this resource.
     */
    readonly uuid: string;
    /**
     * Gets or sets the ARM Id of the vCenter resource in which this cluster resides.
     */
    readonly vCenterId?: string;
}
/**
 * Implements cluster GET method.
 * Azure REST API version: 2022-07-15-preview.
 *
 * Other available API versions: 2023-03-01-preview, 2023-10-01, 2023-12-01.
 */
export function getClusterOutput(args: GetClusterOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetClusterResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:connectedvmwarevsphere:getCluster", {
        "clusterName": args.clusterName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetClusterOutputArgs {
    /**
     * Name of the cluster.
     */
    clusterName: pulumi.Input<string>;
    /**
     * The Resource Group Name.
     */
    resourceGroupName: pulumi.Input<string>;
}