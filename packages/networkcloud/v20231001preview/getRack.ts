import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get properties of the provided rack.
 */
export function getRack(args: GetRackArgs, opts?: pulumi.InvokeOptions): Promise<GetRackResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:networkcloud/v20231001preview:getRack", {
        "rackName": args.rackName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetRackArgs {
    /**
     * The name of the rack.
     */
    rackName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

export interface GetRackResult {
    /**
     * The value that will be used for machines in this rack to represent the availability zones that can be referenced by Hybrid AKS Clusters for node arrangement.
     */
    readonly availabilityZone: string;
    /**
     * The resource ID of the cluster the rack is created for. This value is set when the rack is created by the cluster.
     */
    readonly clusterId: string;
    /**
     * The more detailed status of the rack.
     */
    readonly detailedStatus: string;
    /**
     * The descriptive message about the current detailed status.
     */
    readonly detailedStatusMessage: string;
    /**
     * The extended location of the cluster associated with the resource.
     */
    readonly extendedLocation: types.outputs.ExtendedLocationResponse;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
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
     * The provisioning state of the rack resource.
     */
    readonly provisioningState: string;
    /**
     * The free-form description of the rack location. (e.g. “DTN Datacenter, Floor 3, Isle 9, Rack 2B”)
     */
    readonly rackLocation: string;
    /**
     * The unique identifier for the rack within Network Cloud cluster. An alternate unique alphanumeric value other than a serial number may be provided if desired.
     */
    readonly rackSerialNumber: string;
    /**
     * The SKU for the rack.
     */
    readonly rackSkuId: string;
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
 * Get properties of the provided rack.
 */
export function getRackOutput(args: GetRackOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetRackResult> {
    return pulumi.output(args).apply((a: any) => getRack(a, opts))
}

export interface GetRackOutputArgs {
    /**
     * The name of the rack.
     */
    rackName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
