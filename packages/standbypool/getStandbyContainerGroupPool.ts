import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a StandbyContainerGroupPoolResource
 * Azure REST API version: 2023-12-01-preview.
 *
 * Other available API versions: 2024-03-01, 2024-03-01-preview.
 */
export function getStandbyContainerGroupPool(args: GetStandbyContainerGroupPoolArgs, opts?: pulumi.InvokeOptions): Promise<GetStandbyContainerGroupPoolResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:standbypool:getStandbyContainerGroupPool", {
        "resourceGroupName": args.resourceGroupName,
        "standbyContainerGroupPoolName": args.standbyContainerGroupPoolName,
    }, opts);
}

export interface GetStandbyContainerGroupPoolArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * Name of the standby container group pool
     */
    standbyContainerGroupPoolName: string;
}

/**
 * A StandbyContainerGroupPoolResource.
 */
export interface GetStandbyContainerGroupPoolResult {
    /**
     * Specifies container group properties of standby container group pools.
     */
    readonly containerGroupProperties: types.outputs.ContainerGroupPropertiesResponse;
    /**
     * Specifies elasticity profile of standby container group pools.
     */
    readonly elasticityProfile: types.outputs.StandbyContainerGroupPoolElasticityProfileResponse;
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
     * The status of the last operation.
     */
    readonly provisioningState: string;
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
 * Get a StandbyContainerGroupPoolResource
 * Azure REST API version: 2023-12-01-preview.
 *
 * Other available API versions: 2024-03-01, 2024-03-01-preview.
 */
export function getStandbyContainerGroupPoolOutput(args: GetStandbyContainerGroupPoolOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetStandbyContainerGroupPoolResult> {
    return pulumi.output(args).apply((a: any) => getStandbyContainerGroupPool(a, opts))
}

export interface GetStandbyContainerGroupPoolOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the standby container group pool
     */
    standbyContainerGroupPoolName: pulumi.Input<string>;
}