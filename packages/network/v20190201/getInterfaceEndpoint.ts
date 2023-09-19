import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the specified interface endpoint by resource group.
 */
export function getInterfaceEndpoint(args: GetInterfaceEndpointArgs, opts?: pulumi.InvokeOptions): Promise<GetInterfaceEndpointResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network/v20190201:getInterfaceEndpoint", {
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
 */
export function getInterfaceEndpointOutput(args: GetInterfaceEndpointOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetInterfaceEndpointResult> {
    return pulumi.output(args).apply((a: any) => getInterfaceEndpoint(a, opts))
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
