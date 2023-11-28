import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the properties of the specified IoT Connector.
 * Azure REST API version: 2023-02-28.
 *
 * Other available API versions: 2023-09-06, 2023-11-01.
 */
export function getIotConnector(args: GetIotConnectorArgs, opts?: pulumi.InvokeOptions): Promise<GetIotConnectorResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:healthcareapis:getIotConnector", {
        "iotConnectorName": args.iotConnectorName,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetIotConnectorArgs {
    /**
     * The name of IoT Connector resource.
     */
    iotConnectorName: string;
    /**
     * The name of the resource group that contains the service instance.
     */
    resourceGroupName: string;
    /**
     * The name of workspace resource.
     */
    workspaceName: string;
}

/**
 * IoT Connector definition.
 */
export interface GetIotConnectorResult {
    /**
     * Device Mappings.
     */
    readonly deviceMapping?: types.outputs.IotMappingPropertiesResponse;
    /**
     * An etag associated with the resource, used for optimistic concurrency when editing it.
     */
    readonly etag?: string;
    /**
     * The resource identifier.
     */
    readonly id: string;
    /**
     * Setting indicating whether the service has a managed identity associated with it.
     */
    readonly identity?: types.outputs.ServiceManagedIdentityResponseIdentity;
    /**
     * Source configuration.
     */
    readonly ingestionEndpointConfiguration?: types.outputs.IotEventHubIngestionEndpointConfigurationResponse;
    /**
     * The resource location.
     */
    readonly location?: string;
    /**
     * The resource name.
     */
    readonly name: string;
    /**
     * The provisioning state.
     */
    readonly provisioningState: string;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The resource type.
     */
    readonly type: string;
}
/**
 * Gets the properties of the specified IoT Connector.
 * Azure REST API version: 2023-02-28.
 *
 * Other available API versions: 2023-09-06, 2023-11-01.
 */
export function getIotConnectorOutput(args: GetIotConnectorOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetIotConnectorResult> {
    return pulumi.output(args).apply((a: any) => getIotConnector(a, opts))
}

export interface GetIotConnectorOutputArgs {
    /**
     * The name of IoT Connector resource.
     */
    iotConnectorName: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the service instance.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of workspace resource.
     */
    workspaceName: pulumi.Input<string>;
}
