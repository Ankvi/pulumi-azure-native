import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get private endpoint connection properties
 *
 * Uses Azure REST API version 2023-03-01-preview.
 *
 * Other available API versions: 2020-03-01, 2020-09-01-preview, 2021-10-15, 2022-02-05, 2022-12-12, 2025-02-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native deviceprovisioningservices [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getIotDpsResourcePrivateEndpointConnection(args: GetIotDpsResourcePrivateEndpointConnectionArgs, opts?: pulumi.InvokeOptions): Promise<GetIotDpsResourcePrivateEndpointConnectionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:deviceprovisioningservices:getIotDpsResourcePrivateEndpointConnection", {
        "privateEndpointConnectionName": args.privateEndpointConnectionName,
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetIotDpsResourcePrivateEndpointConnectionArgs {
    /**
     * The name of the private endpoint connection
     */
    privateEndpointConnectionName: string;
    /**
     * The name of the resource group that contains the provisioning service.
     */
    resourceGroupName: string;
    /**
     * The name of the provisioning service.
     */
    resourceName: string;
}

/**
 * The private endpoint connection of a provisioning service
 */
export interface GetIotDpsResourcePrivateEndpointConnectionResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The resource identifier.
     */
    readonly id: string;
    /**
     * The resource name.
     */
    readonly name: string;
    /**
     * The properties of a private endpoint connection
     */
    readonly properties: types.outputs.PrivateEndpointConnectionPropertiesResponse;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The resource type.
     */
    readonly type: string;
}
/**
 * Get private endpoint connection properties
 *
 * Uses Azure REST API version 2023-03-01-preview.
 *
 * Other available API versions: 2020-03-01, 2020-09-01-preview, 2021-10-15, 2022-02-05, 2022-12-12, 2025-02-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native deviceprovisioningservices [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getIotDpsResourcePrivateEndpointConnectionOutput(args: GetIotDpsResourcePrivateEndpointConnectionOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetIotDpsResourcePrivateEndpointConnectionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:deviceprovisioningservices:getIotDpsResourcePrivateEndpointConnection", {
        "privateEndpointConnectionName": args.privateEndpointConnectionName,
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetIotDpsResourcePrivateEndpointConnectionOutputArgs {
    /**
     * The name of the private endpoint connection
     */
    privateEndpointConnectionName: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the provisioning service.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the provisioning service.
     */
    resourceName: pulumi.Input<string>;
}