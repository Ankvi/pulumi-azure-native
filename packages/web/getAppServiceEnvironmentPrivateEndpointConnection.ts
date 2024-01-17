import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Description for Gets a private endpoint connection
 * Azure REST API version: 2022-09-01.
 *
 * Other available API versions: 2023-01-01.
 */
export function getAppServiceEnvironmentPrivateEndpointConnection(args: GetAppServiceEnvironmentPrivateEndpointConnectionArgs, opts?: pulumi.InvokeOptions): Promise<GetAppServiceEnvironmentPrivateEndpointConnectionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:web:getAppServiceEnvironmentPrivateEndpointConnection", {
        "name": args.name,
        "privateEndpointConnectionName": args.privateEndpointConnectionName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAppServiceEnvironmentPrivateEndpointConnectionArgs {
    /**
     * Name of the App Service Environment.
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
export interface GetAppServiceEnvironmentPrivateEndpointConnectionResult {
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
 * Other available API versions: 2023-01-01.
 */
export function getAppServiceEnvironmentPrivateEndpointConnectionOutput(args: GetAppServiceEnvironmentPrivateEndpointConnectionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAppServiceEnvironmentPrivateEndpointConnectionResult> {
    return pulumi.output(args).apply((a: any) => getAppServiceEnvironmentPrivateEndpointConnection(a, opts))
}

export interface GetAppServiceEnvironmentPrivateEndpointConnectionOutputArgs {
    /**
     * Name of the App Service Environment.
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