import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Returns ServiceEndpoint resources for a given name.
 */
export function getServiceEndpoint(args: GetServiceEndpointArgs, opts?: pulumi.InvokeOptions): Promise<GetServiceEndpointResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:recommendationsservice/v20220201:getServiceEndpoint", {
        "accountName": args.accountName,
        "resourceGroupName": args.resourceGroupName,
        "serviceEndpointName": args.serviceEndpointName,
    }, opts);
}

export interface GetServiceEndpointArgs {
    /**
     * The name of the RecommendationsService Account resource.
     */
    accountName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the ServiceEndpoint resource.
     */
    serviceEndpointName: string;
}

/**
 * ServiceEndpoint resource details.
 */
export interface GetServiceEndpointResult {
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
     * ServiceEndpoint resource properties.
     */
    readonly properties: types.outputs.ServiceEndpointResourceResponseProperties;
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
 * Returns ServiceEndpoint resources for a given name.
 */
export function getServiceEndpointOutput(args: GetServiceEndpointOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetServiceEndpointResult> {
    return pulumi.output(args).apply((a: any) => getServiceEndpoint(a, opts))
}

export interface GetServiceEndpointOutputArgs {
    /**
     * The name of the RecommendationsService Account resource.
     */
    accountName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the ServiceEndpoint resource.
     */
    serviceEndpointName: pulumi.Input<string>;
}
