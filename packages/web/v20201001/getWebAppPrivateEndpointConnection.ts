import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a private endpoint connection
 */
export function getWebAppPrivateEndpointConnection(args: GetWebAppPrivateEndpointConnectionArgs, opts?: pulumi.InvokeOptions): Promise<GetWebAppPrivateEndpointConnectionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:web/v20201001:getWebAppPrivateEndpointConnection", {
        "name": args.name,
        "privateEndpointConnectionName": args.privateEndpointConnectionName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetWebAppPrivateEndpointConnectionArgs {
    /**
     * Name of the site.
     */
    name: string;
    privateEndpointConnectionName: string;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: string;
}

/**
 * Private Endpoint Connection ARM resource.
 */
export interface GetWebAppPrivateEndpointConnectionResult {
    /**
     * Resource Id.
     */
    readonly id: string;
    /**
     * Kind of resource.
     */
    readonly kind?: string;
    /**
     * Resource Name.
     */
    readonly name: string;
    /**
     * PrivateEndpoint of a remote private endpoint connection
     */
    readonly privateEndpoint?: types.outputs.ArmIdWrapperResponse;
    /**
     * The state of a private link connection
     */
    readonly privateLinkServiceConnectionState?: types.outputs.PrivateLinkConnectionStateResponse;
    readonly provisioningState: string;
    /**
     * The system metadata relating to this resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Gets a private endpoint connection
 */
export function getWebAppPrivateEndpointConnectionOutput(args: GetWebAppPrivateEndpointConnectionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetWebAppPrivateEndpointConnectionResult> {
    return pulumi.output(args).apply((a: any) => getWebAppPrivateEndpointConnection(a, opts))
}

export interface GetWebAppPrivateEndpointConnectionOutputArgs {
    /**
     * Name of the site.
     */
    name: pulumi.Input<string>;
    privateEndpointConnectionName: pulumi.Input<string>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
}
