import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a resource group.
 *
 * Uses Azure REST API version 2022-09-01.
 *
 * Other available API versions: 2023-07-01, 2024-03-01, 2024-07-01, 2024-11-01.
 */
export function getResourceGroup(args: GetResourceGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetResourceGroupResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:resources:getResourceGroup", {
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetResourceGroupArgs {
    /**
     * The name of the resource group to get. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Resource group information.
 */
export interface GetResourceGroupResult {
    /**
     * The ID of the resource group.
     */
    readonly id: string;
    /**
     * The location of the resource group. It cannot be changed after the resource group has been created. It must be one of the supported Azure locations.
     */
    readonly location: string;
    /**
     * The ID of the resource that manages this resource group.
     */
    readonly managedBy?: string;
    /**
     * The name of the resource group.
     */
    readonly name: string;
    /**
     * The resource group properties.
     */
    readonly properties: types.outputs.ResourceGroupPropertiesResponse;
    /**
     * The tags attached to the resource group.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource group.
     */
    readonly type: string;
}
/**
 * Gets a resource group.
 *
 * Uses Azure REST API version 2022-09-01.
 *
 * Other available API versions: 2023-07-01, 2024-03-01, 2024-07-01, 2024-11-01.
 */
export function getResourceGroupOutput(args: GetResourceGroupOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetResourceGroupResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:resources:getResourceGroup", {
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetResourceGroupOutputArgs {
    /**
     * The name of the resource group to get. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}