import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get file shares limits.
 *
 * Uses Azure REST API version 2025-06-01-preview.
 */
export function getFileShareLimits(args: GetFileShareLimitsArgs, opts?: pulumi.InvokeOptions): Promise<GetFileShareLimitsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:fileshares:getFileShareLimits", {
        "location": args.location,
    }, opts);
}

export interface GetFileShareLimitsArgs {
    /**
     * The name of the Azure region.
     */
    location: string;
}

/**
 * Response structure for file share limits API.
 */
export interface GetFileShareLimitsResult {
    /**
     * The properties of the file share limits.
     */
    readonly properties: types.outputs.FileShareLimitsOutputResponse;
}
/**
 * Get file shares limits.
 *
 * Uses Azure REST API version 2025-06-01-preview.
 */
export function getFileShareLimitsOutput(args: GetFileShareLimitsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetFileShareLimitsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:fileshares:getFileShareLimits", {
        "location": args.location,
    }, opts);
}

export interface GetFileShareLimitsOutputArgs {
    /**
     * The name of the Azure region.
     */
    location: pulumi.Input<string>;
}