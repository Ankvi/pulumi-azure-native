import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a FleetUpdateStrategy
 *
 * Uses Azure REST API version 2024-05-02-preview.
 *
 * Other available API versions: 2023-08-15-preview, 2023-10-15, 2024-02-02-preview, 2024-04-01, 2025-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native containerservice [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getFleetUpdateStrategy(args: GetFleetUpdateStrategyArgs, opts?: pulumi.InvokeOptions): Promise<GetFleetUpdateStrategyResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:containerservice:getFleetUpdateStrategy", {
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
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
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
 *
 * Uses Azure REST API version 2024-05-02-preview.
 *
 * Other available API versions: 2023-08-15-preview, 2023-10-15, 2024-02-02-preview, 2024-04-01, 2025-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native containerservice [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getFleetUpdateStrategyOutput(args: GetFleetUpdateStrategyOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetFleetUpdateStrategyResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:containerservice:getFleetUpdateStrategy", {
        "fleetName": args.fleetName,
        "resourceGroupName": args.resourceGroupName,
        "updateStrategyName": args.updateStrategyName,
    }, opts);
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