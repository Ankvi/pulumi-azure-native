import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the specified interface endpoint by resource group.
 *
 * Uses Azure REST API version 2019-02-01.
 *
 * Other available API versions: 2018-08-01, 2018-10-01, 2018-11-01, 2018-12-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native network [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getInterfaceEndpoint(args: GetInterfaceEndpointArgs, opts?: pulumi.InvokeOptions): Promise<GetInterfaceEndpointResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network:getInterfaceEndpoint", {
        "expand": args.expand,
        "interfaceEndpointName": args.interfaceEndpointName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetInterfaceEndpointArgs {
    /**
     * Expands referenced resources.
     */
    expand?: string;
    /**
     * The name of the interface endpoint.
     */
    interfaceEndpointName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * Interface endpoint resource.
 */
export interface GetInterfaceEndpointResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * A reference to the service being brought into the virtual network.
     */
    readonly endpointService?: types.outputs.EndpointServiceResponse;
    /**
     * Gets a unique read-only string that changes whenever the resource is updated.
     */
    readonly etag?: string;
    /**
     * A first-party service's FQDN that is mapped to the private IP allocated via this interface endpoint.
     */
    readonly fqdn?: string;
    /**
     * Resource ID.
     */
    readonly id?: string;
    /**
     * Resource location.
     */
    readonly location?: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Gets an array of references to the network interfaces created for this interface endpoint.
     */
    readonly networkInterfaces: types.outputs.NetworkInterfaceResponse[];
    /**
     * A read-only property that identifies who created this interface endpoint.
     */
    readonly owner: string;
    /**
     * The provisioning state of the interface endpoint. Possible values are: 'Updating', 'Deleting', and 'Failed'.
     */
    readonly provisioningState: string;
    /**
     * The ID of the subnet from which the private IP will be allocated.
     */
    readonly subnet?: types.outputs.SubnetResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Gets the specified interface endpoint by resource group.
 *
 * Uses Azure REST API version 2019-02-01.
 *
 * Other available API versions: 2018-08-01, 2018-10-01, 2018-11-01, 2018-12-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native network [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getInterfaceEndpointOutput(args: GetInterfaceEndpointOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetInterfaceEndpointResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:network:getInterfaceEndpoint", {
        "expand": args.expand,
        "interfaceEndpointName": args.interfaceEndpointName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetInterfaceEndpointOutputArgs {
    /**
     * Expands referenced resources.
     */
    expand?: pulumi.Input<string>;
    /**
     * The name of the interface endpoint.
     */
    interfaceEndpointName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}