import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets an instance of LaunchBulkInstancesOperations.
 *
 * Uses Azure REST API version 2026-02-01-preview.
 */
export function getBulkAction(args: GetBulkActionArgs, opts?: pulumi.InvokeOptions): Promise<GetBulkActionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:computebulkactions:getBulkAction", {
        "location": args.location,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetBulkActionArgs {
    /**
     * The location name.
     */
    location: string;
    /**
     * The name of the LaunchBulkInstancesOperation.
     */
    name: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Location based type.
 */
export interface GetBulkActionResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The managed service identities assigned to this resource.
     */
    readonly identity?: types.outputs.ManagedServiceIdentityResponse;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Details of the resource plan.
     */
    readonly plan?: types.outputs.PlanResponse;
    /**
     * The resource-specific properties for this resource.
     */
    readonly properties: types.outputs.LaunchBulkInstancesOperationPropertiesResponse;
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
    /**
     * Zones in which the LaunchBulkInstancesOperation is available
     */
    readonly zones?: string[];
}
/**
 * Gets an instance of LaunchBulkInstancesOperations.
 *
 * Uses Azure REST API version 2026-02-01-preview.
 */
export function getBulkActionOutput(args: GetBulkActionOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetBulkActionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:computebulkactions:getBulkAction", {
        "location": args.location,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetBulkActionOutputArgs {
    /**
     * The location name.
     */
    location: pulumi.Input<string>;
    /**
     * The name of the LaunchBulkInstancesOperation.
     */
    name: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}