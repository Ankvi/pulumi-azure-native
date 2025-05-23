import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a LambdaFunctionCodeLocation
 *
 * Uses Azure REST API version 2024-12-01.
 */
export function getLambdaFunctionCodeLocation(args: GetLambdaFunctionCodeLocationArgs, opts?: pulumi.InvokeOptions): Promise<GetLambdaFunctionCodeLocationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:awsconnector:getLambdaFunctionCodeLocation", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetLambdaFunctionCodeLocationArgs {
    /**
     * Name of LambdaFunctionCodeLocation
     */
    name: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * A Microsoft.AwsConnector resource
 */
export interface GetLambdaFunctionCodeLocationResult {
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
    readonly properties: types.outputs.LambdaFunctionCodeLocationPropertiesResponse;
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
 * Get a LambdaFunctionCodeLocation
 *
 * Uses Azure REST API version 2024-12-01.
 */
export function getLambdaFunctionCodeLocationOutput(args: GetLambdaFunctionCodeLocationOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetLambdaFunctionCodeLocationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:awsconnector:getLambdaFunctionCodeLocation", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetLambdaFunctionCodeLocationOutputArgs {
    /**
     * Name of LambdaFunctionCodeLocation
     */
    name: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}