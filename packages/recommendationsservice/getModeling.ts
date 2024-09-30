import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Returns Modeling resources for a given name.
 * Azure REST API version: 2022-02-01.
 *
 * Other available API versions: 2022-03-01-preview.
 */
export function getModeling(args: GetModelingArgs, opts?: pulumi.InvokeOptions): Promise<GetModelingResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:recommendationsservice:getModeling", {
        "accountName": args.accountName,
        "modelingName": args.modelingName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetModelingArgs {
    /**
     * The name of the RecommendationsService Account resource.
     */
    accountName: string;
    /**
     * The name of the Modeling resource.
     */
    modelingName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Modeling resource details.
 */
export interface GetModelingResult {
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
     * Modeling resource properties.
     */
    readonly properties: types.outputs.ModelingResourceResponseProperties;
    /**
     * Metadata pertaining to creation and last modification of the resource.
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
 * Returns Modeling resources for a given name.
 * Azure REST API version: 2022-02-01.
 *
 * Other available API versions: 2022-03-01-preview.
 */
export function getModelingOutput(args: GetModelingOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetModelingResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:recommendationsservice:getModeling", {
        "accountName": args.accountName,
        "modelingName": args.modelingName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetModelingOutputArgs {
    /**
     * The name of the RecommendationsService Account resource.
     */
    accountName: pulumi.Input<string>;
    /**
     * The name of the Modeling resource.
     */
    modelingName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}