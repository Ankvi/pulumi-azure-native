import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get DigitalTwinsInstances Endpoint.
 * Azure REST API version: 2023-01-31.
 */
export function getDigitalTwinsEndpoint(args: GetDigitalTwinsEndpointArgs, opts?: pulumi.InvokeOptions): Promise<GetDigitalTwinsEndpointResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:digitaltwins:getDigitalTwinsEndpoint", {
        "endpointName": args.endpointName,
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetDigitalTwinsEndpointArgs {
    /**
     * Name of Endpoint Resource.
     */
    endpointName: string;
    /**
     * The name of the resource group that contains the DigitalTwinsInstance.
     */
    resourceGroupName: string;
    /**
     * The name of the DigitalTwinsInstance.
     */
    resourceName: string;
}

/**
 * DigitalTwinsInstance endpoint resource.
 */
export interface GetDigitalTwinsEndpointResult {
    /**
     * The resource identifier.
     */
    readonly id: string;
    /**
     * Extension resource name.
     */
    readonly name: string;
    /**
     * DigitalTwinsInstance endpoint resource properties.
     */
    readonly properties: types.outputs.digitaltwins.EventGridResponse | types.outputs.digitaltwins.EventHubResponse | types.outputs.digitaltwins.ServiceBusResponse;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.digitaltwins.SystemDataResponse;
    /**
     * The resource type.
     */
    readonly type: string;
}
/**
 * Get DigitalTwinsInstances Endpoint.
 * Azure REST API version: 2023-01-31.
 */
export function getDigitalTwinsEndpointOutput(args: GetDigitalTwinsEndpointOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDigitalTwinsEndpointResult> {
    return pulumi.output(args).apply((a: any) => getDigitalTwinsEndpoint(a, opts))
}

export interface GetDigitalTwinsEndpointOutputArgs {
    /**
     * Name of Endpoint Resource.
     */
    endpointName: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the DigitalTwinsInstance.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the DigitalTwinsInstance.
     */
    resourceName: pulumi.Input<string>;
}
