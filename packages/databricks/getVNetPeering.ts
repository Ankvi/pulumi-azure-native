import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the workspace vNet Peering.
 *
 * Uses Azure REST API version 2024-05-01.
 *
 * Other available API versions: 2023-02-01, 2023-09-15-preview, 2024-09-01-preview, 2025-03-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native databricks [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getVNetPeering(args: GetVNetPeeringArgs, opts?: pulumi.InvokeOptions): Promise<GetVNetPeeringResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:databricks:getVNetPeering", {
        "peeringName": args.peeringName,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetVNetPeeringArgs {
    /**
     * The name of the workspace vNet peering.
     */
    peeringName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the workspace.
     */
    workspaceName: string;
}

/**
 * Peerings in a VirtualNetwork resource
 */
export interface GetVNetPeeringResult {
    /**
     * Whether the forwarded traffic from the VMs in the local virtual network will be allowed/disallowed in remote virtual network.
     */
    readonly allowForwardedTraffic?: boolean;
    /**
     * If gateway links can be used in remote virtual networking to link to this virtual network.
     */
    readonly allowGatewayTransit?: boolean;
    /**
     * Whether the VMs in the local virtual network space would be able to access the VMs in remote virtual network space.
     */
    readonly allowVirtualNetworkAccess?: boolean;
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The reference to the databricks virtual network address space.
     */
    readonly databricksAddressSpace?: types.outputs.AddressSpaceResponse;
    /**
     *  The remote virtual network should be in the same region. See here to learn more (https://docs.microsoft.com/en-us/azure/databricks/administration-guide/cloud-configurations/azure/vnet-peering).
     */
    readonly databricksVirtualNetwork?: types.outputs.VirtualNetworkPeeringPropertiesFormatResponseDatabricksVirtualNetwork;
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Name of the virtual network peering resource
     */
    readonly name: string;
    /**
     * The status of the virtual network peering.
     */
    readonly peeringState: string;
    /**
     * The provisioning state of the virtual network peering resource.
     */
    readonly provisioningState: string;
    /**
     * The reference to the remote virtual network address space.
     */
    readonly remoteAddressSpace?: types.outputs.AddressSpaceResponse;
    /**
     *  The remote virtual network should be in the same region. See here to learn more (https://docs.microsoft.com/en-us/azure/databricks/administration-guide/cloud-configurations/azure/vnet-peering).
     */
    readonly remoteVirtualNetwork: types.outputs.VirtualNetworkPeeringPropertiesFormatResponseRemoteVirtualNetwork;
    /**
     * type of the virtual network peering resource
     */
    readonly type: string;
    /**
     * If remote gateways can be used on this virtual network. If the flag is set to true, and allowGatewayTransit on remote peering is also true, virtual network will use gateways of remote virtual network for transit. Only one peering can have this flag set to true. This flag cannot be set if virtual network already has a gateway.
     */
    readonly useRemoteGateways?: boolean;
}
/**
 * Gets the workspace vNet Peering.
 *
 * Uses Azure REST API version 2024-05-01.
 *
 * Other available API versions: 2023-02-01, 2023-09-15-preview, 2024-09-01-preview, 2025-03-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native databricks [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getVNetPeeringOutput(args: GetVNetPeeringOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetVNetPeeringResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:databricks:getVNetPeering", {
        "peeringName": args.peeringName,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetVNetPeeringOutputArgs {
    /**
     * The name of the workspace vNet peering.
     */
    peeringName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}