import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Returns the list of available versions
 *
 * Uses Azure REST API version 2025-03-01.
 */
export function listManufacturingDataServiceAvailableVersions(args: ListManufacturingDataServiceAvailableVersionsArgs, opts?: pulumi.InvokeOptions): Promise<ListManufacturingDataServiceAvailableVersionsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:manufacturingplatform:listManufacturingDataServiceAvailableVersions", {
        "mdsResourceName": args.mdsResourceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListManufacturingDataServiceAvailableVersionsArgs {
    /**
     * Name.
     */
    mdsResourceName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * The list of available versions
 */
export interface ListManufacturingDataServiceAvailableVersionsResult {
    /**
     * The list of versions
     */
    readonly versions: types.outputs.ApplicationVersionResponse[];
}
/**
 * Returns the list of available versions
 *
 * Uses Azure REST API version 2025-03-01.
 */
export function listManufacturingDataServiceAvailableVersionsOutput(args: ListManufacturingDataServiceAvailableVersionsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListManufacturingDataServiceAvailableVersionsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:manufacturingplatform:listManufacturingDataServiceAvailableVersions", {
        "mdsResourceName": args.mdsResourceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListManufacturingDataServiceAvailableVersionsOutputArgs {
    /**
     * Name.
     */
    mdsResourceName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}