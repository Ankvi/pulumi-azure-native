import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a Supercomputer
 *
 * Uses Azure REST API version 2026-02-01-preview.
 */
export function getSupercomputer(args: GetSupercomputerArgs, opts?: pulumi.InvokeOptions): Promise<GetSupercomputerResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:discovery:getSupercomputer", {
        "resourceGroupName": args.resourceGroupName,
        "supercomputerName": args.supercomputerName,
    }, opts);
}

export interface GetSupercomputerArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the Supercomputer
     */
    supercomputerName: string;
}

/**
 * Supercomputer tracked resource
 */
export interface GetSupercomputerResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
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
     * The resource-specific properties for this resource.
     */
    readonly properties: types.outputs.SupercomputerPropertiesResponse;
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
 * Get a Supercomputer
 *
 * Uses Azure REST API version 2026-02-01-preview.
 */
export function getSupercomputerOutput(args: GetSupercomputerOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSupercomputerResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:discovery:getSupercomputer", {
        "resourceGroupName": args.resourceGroupName,
        "supercomputerName": args.supercomputerName,
    }, opts);
}

export interface GetSupercomputerOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Supercomputer
     */
    supercomputerName: pulumi.Input<string>;
}