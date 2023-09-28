import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a FleetUpdateStrategy
 */
export function getFleetUpdateStrategy(args: GetFleetUpdateStrategyArgs, opts?: pulumi.InvokeOptions): Promise<GetFleetUpdateStrategyResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:containerservice/v20230815preview:getFleetUpdateStrategy", {
        "fleetName": args.fleetName,
        "resourceGroupName": args.resourceGroupName,
        "updateStrategyName": args.updateStrategyName,
    }, opts);
}

export interface GetFleetUpdateStrategyArgs {
    /**
     * The name of the Fleet resource.
     */
    fleetName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the UpdateStrategy resource.
     */
    updateStrategyName: string;
}

/**
 * Defines a multi-stage process to perform update operations across members of a Fleet.
 */
export interface GetFleetUpdateStrategyResult {
    /**
     * If eTag is provided in the response body, it may also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields.
     */
    readonly eTag: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The provisioning state of the UpdateStrategy resource.
     */
    readonly provisioningState: string;
    /**
     * Defines the update sequence of the clusters.
     */
    readonly strategy: types.outputs.UpdateRunStrategyResponse;
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
 * Get a FleetUpdateStrategy
 */
export function getFleetUpdateStrategyOutput(args: GetFleetUpdateStrategyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetFleetUpdateStrategyResult> {
    return pulumi.output(args).apply((a: any) => getFleetUpdateStrategy(a, opts))
}

export interface GetFleetUpdateStrategyOutputArgs {
    /**
     * The name of the Fleet resource.
     */
    fleetName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the UpdateStrategy resource.
     */
    updateStrategyName: pulumi.Input<string>;
}
