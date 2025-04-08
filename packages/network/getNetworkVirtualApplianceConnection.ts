import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieves the details of specified NVA connection.
 *
 * Uses Azure REST API version 2023-06-01.
 *
 * Other available API versions: 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01, 2024-05-01.
 */
export function getNetworkVirtualApplianceConnection(args: GetNetworkVirtualApplianceConnectionArgs, opts?: pulumi.InvokeOptions): Promise<GetNetworkVirtualApplianceConnectionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network:getNetworkVirtualApplianceConnection", {
        "connectionName": args.connectionName,
        "networkVirtualApplianceName": args.networkVirtualApplianceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetNetworkVirtualApplianceConnectionArgs {
    /**
     * The name of the NVA connection.
     */
    connectionName: string;
    /**
     * The name of the Network Virtual Appliance.
     */
    networkVirtualApplianceName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * NetworkVirtualApplianceConnection resource.
 */
export interface GetNetworkVirtualApplianceConnectionResult {
    /**
     * Network Virtual Appliance ASN.
     */
    readonly asn?: number;
    /**
     * List of bgpPeerAddresses for the NVA instances
     */
    readonly bgpPeerAddress?: string[];
    /**
     * Enable internet security.
     */
    readonly enableInternetSecurity?: boolean;
    /**
     * Resource ID.
     */
    readonly id?: string;
    /**
     * The name of the resource.
     */
    readonly name?: string;
    /**
     * The provisioning state of the NetworkVirtualApplianceConnection resource.
     */
    readonly provisioningState: string;
    /**
     * The Routing Configuration indicating the associated and propagated route tables on this connection.
     */
    readonly routingConfiguration?: types.outputs.RoutingConfigurationResponse;
    /**
     * Unique identifier for the connection.
     */
    readonly tunnelIdentifier?: number;
}
/**
 * Retrieves the details of specified NVA connection.
 *
 * Uses Azure REST API version 2023-06-01.
 *
 * Other available API versions: 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01, 2024-05-01.
 */
export function getNetworkVirtualApplianceConnectionOutput(args: GetNetworkVirtualApplianceConnectionOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetNetworkVirtualApplianceConnectionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:network:getNetworkVirtualApplianceConnection", {
        "connectionName": args.connectionName,
        "networkVirtualApplianceName": args.networkVirtualApplianceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetNetworkVirtualApplianceConnectionOutputArgs {
    /**
     * The name of the NVA connection.
     */
    connectionName: pulumi.Input<string>;
    /**
     * The name of the Network Virtual Appliance.
     */
    networkVirtualApplianceName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}