import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Returns oep resource for a given name.
 *
 * Uses Azure REST API version 2022-04-04-preview.
 */
export function getEnergyService(args: GetEnergyServiceArgs, opts?: pulumi.InvokeOptions): Promise<GetEnergyServiceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:openenergyplatform:getEnergyService", {
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetEnergyServiceArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The resource name.
     */
    resourceName: string;
}

export interface GetEnergyServiceResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Geo-location where the resource lives.
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    readonly properties: types.outputs.EnergyServicePropertiesResponse;
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
 * Returns oep resource for a given name.
 *
 * Uses Azure REST API version 2022-04-04-preview.
 */
export function getEnergyServiceOutput(args: GetEnergyServiceOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetEnergyServiceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:openenergyplatform:getEnergyService", {
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetEnergyServiceOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The resource name.
     */
    resourceName: pulumi.Input<string>;
}