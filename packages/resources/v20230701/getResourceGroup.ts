import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a resource group.
 */
export function getResourceGroup(args: GetResourceGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetResourceGroupResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:resources/v20230701:getResourceGroup", {
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
 */
export function getResourceGroupOutput(args: GetResourceGroupOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetResourceGroupResult> {
    return pulumi.output(args).apply((a: any) => getResourceGroup(a, opts))
}

export interface GetResourceGroupOutputArgs {
    /**
     * The name of the resource group to get. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}