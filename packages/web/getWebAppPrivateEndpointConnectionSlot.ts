import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Description for Gets a private endpoint connection
 *
 * Uses Azure REST API version 2022-09-01.
 *
 * Other available API versions: 2023-01-01, 2023-12-01, 2024-04-01.
 */
export function getWebAppPrivateEndpointConnectionSlot(args: GetWebAppPrivateEndpointConnectionSlotArgs, opts?: pulumi.InvokeOptions): Promise<GetWebAppPrivateEndpointConnectionSlotResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:web:getWebAppPrivateEndpointConnectionSlot", {
        "name": args.name,
        "privateEndpointConnectionName": args.privateEndpointConnectionName,
        "resourceGroupName": args.resourceGroupName,
        "slot": args.slot,
    }, opts);
}

export interface GetWebAppPrivateEndpointConnectionSlotArgs {
    /**
     * Name of the site.
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
    /**
     * Name of the site deployment slot.
     */
    slot: string;
}

/**
 * Remote Private Endpoint Connection ARM resource.
 */
export interface GetWebAppPrivateEndpointConnectionSlotResult {
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
 *
 * Uses Azure REST API version 2022-09-01.
 *
 * Other available API versions: 2023-01-01, 2023-12-01, 2024-04-01.
 */
export function getWebAppPrivateEndpointConnectionSlotOutput(args: GetWebAppPrivateEndpointConnectionSlotOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetWebAppPrivateEndpointConnectionSlotResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:web:getWebAppPrivateEndpointConnectionSlot", {
        "name": args.name,
        "privateEndpointConnectionName": args.privateEndpointConnectionName,
        "resourceGroupName": args.resourceGroupName,
        "slot": args.slot,
    }, opts);
}

export interface GetWebAppPrivateEndpointConnectionSlotOutputArgs {
    /**
     * Name of the site.
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
    /**
     * Name of the site deployment slot.
     */
    slot: pulumi.Input<string>;
}