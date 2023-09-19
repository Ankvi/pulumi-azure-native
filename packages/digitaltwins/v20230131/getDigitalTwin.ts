import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get DigitalTwinsInstances resource.
 */
export function getDigitalTwin(args: GetDigitalTwinArgs, opts?: pulumi.InvokeOptions): Promise<GetDigitalTwinResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:digitaltwins/v20230131:getDigitalTwin", {
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetDigitalTwinArgs {
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
 * The description of the DigitalTwins service.
 */
export interface GetDigitalTwinResult {
    /**
     * Time when DigitalTwinsInstance was created.
     */
    readonly createdTime: string;
    /**
     * Api endpoint to work with DigitalTwinsInstance.
     */
    readonly hostName: string;
    /**
     * The resource identifier.
     */
    readonly id: string;
    /**
     * The managed identity for the DigitalTwinsInstance.
     */
    readonly identity?: types.outputs.DigitalTwinsIdentityResponse;
    /**
     * Time when DigitalTwinsInstance was updated.
     */
    readonly lastUpdatedTime: string;
    /**
     * The resource location.
     */
    readonly location: string;
    /**
     * The resource name.
     */
    readonly name: string;
    /**
     * The private endpoint connections.
     */
    readonly privateEndpointConnections?: types.outputs.PrivateEndpointConnectionResponse[];
    /**
     * The provisioning state.
     */
    readonly provisioningState: string;
    /**
     * Public network access for the DigitalTwinsInstance.
     */
    readonly publicNetworkAccess?: string;
    /**
     * Metadata pertaining to creation and last modification of the DigitalTwinsInstance.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The resource type.
     */
    readonly type: string;
}
/**
 * Get DigitalTwinsInstances resource.
 */
export function getDigitalTwinOutput(args: GetDigitalTwinOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDigitalTwinResult> {
    return pulumi.output(args).apply((a: any) => getDigitalTwin(a, opts))
}

export interface GetDigitalTwinOutputArgs {
    /**
     * The name of the resource group that contains the DigitalTwinsInstance.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the DigitalTwinsInstance.
     */
    resourceName: pulumi.Input<string>;
}
