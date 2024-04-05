import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets information about the specified networkFunctionDefinition group.
 */
export function getNetworkFunctionDefinitionGroup(args: GetNetworkFunctionDefinitionGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetNetworkFunctionDefinitionGroupResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:hybridnetwork/v20230901:getNetworkFunctionDefinitionGroup", {
        "networkFunctionDefinitionGroupName": args.networkFunctionDefinitionGroupName,
        "publisherName": args.publisherName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetNetworkFunctionDefinitionGroupArgs {
    /**
     * The name of the network function definition group.
     */
    networkFunctionDefinitionGroupName: string;
    /**
     * The name of the publisher.
     */
    publisherName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Network function definition group resource.
 */
export interface GetNetworkFunctionDefinitionGroupResult {
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
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
     * Network function definition group properties.
     */
    readonly properties: types.outputs.NetworkFunctionDefinitionGroupPropertiesFormatResponse;
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
 * Gets information about the specified networkFunctionDefinition group.
 */
export function getNetworkFunctionDefinitionGroupOutput(args: GetNetworkFunctionDefinitionGroupOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetNetworkFunctionDefinitionGroupResult> {
    return pulumi.output(args).apply((a: any) => getNetworkFunctionDefinitionGroup(a, opts))
}

export interface GetNetworkFunctionDefinitionGroupOutputArgs {
    /**
     * The name of the network function definition group.
     */
    networkFunctionDefinitionGroupName: pulumi.Input<string>;
    /**
     * The name of the publisher.
     */
    publisherName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}