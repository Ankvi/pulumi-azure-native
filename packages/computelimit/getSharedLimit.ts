import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the properties of a compute limit shared by the host subscription with its guest subscriptions.
 *
 * Uses Azure REST API version 2025-08-15.
 */
export function getSharedLimit(args: GetSharedLimitArgs, opts?: pulumi.InvokeOptions): Promise<GetSharedLimitResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:computelimit:getSharedLimit", {
        "location": args.location,
        "name": args.name,
    }, opts);
}

export interface GetSharedLimitArgs {
    /**
     * The name of the Azure region.
     */
    location: string;
    /**
     * The name of the SharedLimit
     */
    name: string;
}

/**
 * Compute limits shared by the subscription.
 */
export interface GetSharedLimitResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The maximum permitted usage of the resource.
     */
    readonly limit: number;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The provisioning state of the resource.
     */
    readonly provisioningState: string;
    /**
     * The limit name properties.
     */
    readonly resourceName: types.outputs.LimitNameResponse;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * The quota units, such as Count.
     */
    readonly unit: string;
}
/**
 * Gets the properties of a compute limit shared by the host subscription with its guest subscriptions.
 *
 * Uses Azure REST API version 2025-08-15.
 */
export function getSharedLimitOutput(args: GetSharedLimitOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSharedLimitResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:computelimit:getSharedLimit", {
        "location": args.location,
        "name": args.name,
    }, opts);
}

export interface GetSharedLimitOutputArgs {
    /**
     * The name of the Azure region.
     */
    location: pulumi.Input<string>;
    /**
     * The name of the SharedLimit
     */
    name: pulumi.Input<string>;
}