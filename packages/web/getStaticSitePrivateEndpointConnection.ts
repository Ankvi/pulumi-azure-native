import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Description for Gets a private endpoint connection
 * Azure REST API version: 2022-09-01.
 *
 * Other available API versions: 2023-01-01, 2023-12-01.
 */
export function getStaticSitePrivateEndpointConnection(args: GetStaticSitePrivateEndpointConnectionArgs, opts?: pulumi.InvokeOptions): Promise<GetStaticSitePrivateEndpointConnectionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:web:getStaticSitePrivateEndpointConnection", {
        "name": args.name,
        "privateEndpointConnectionName": args.privateEndpointConnectionName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetStaticSitePrivateEndpointConnectionArgs {
    /**
     * Name of the static site.
     */
    name: string;
    /**
     * Name of the private endpoint connection.
     */
    privateEndpointConnectionName: string;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: string;
}

/**
 * Remote Private Endpoint Connection ARM resource.
 */
export interface GetStaticSitePrivateEndpointConnectionResult {
    /**
     * Resource Id.
     */
    readonly id: string;
    /**
     * Private IPAddresses mapped to the remote private endpoint
     */
    readonly ipAddresses?: string[];
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
     * Resource type.
     */
    readonly type: string;
}
/**
 * Description for Gets a private endpoint connection
 * Azure REST API version: 2022-09-01.
 *
 * Other available API versions: 2023-01-01, 2023-12-01.
 */
export function getStaticSitePrivateEndpointConnectionOutput(args: GetStaticSitePrivateEndpointConnectionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetStaticSitePrivateEndpointConnectionResult> {
    return pulumi.output(args).apply((a: any) => getStaticSitePrivateEndpointConnection(a, opts))
}

export interface GetStaticSitePrivateEndpointConnectionOutputArgs {
    /**
     * Name of the static site.
     */
    name: pulumi.Input<string>;
    /**
     * Name of the private endpoint connection.
     */
    privateEndpointConnectionName: pulumi.Input<string>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
}