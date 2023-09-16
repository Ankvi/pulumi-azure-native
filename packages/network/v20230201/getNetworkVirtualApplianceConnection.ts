import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Retrieves the details of specified NVA connection.
 */
export function getNetworkVirtualApplianceConnection(args: GetNetworkVirtualApplianceConnectionArgs, opts?: pulumi.InvokeOptions): Promise<GetNetworkVirtualApplianceConnectionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network/v20230201:getNetworkVirtualApplianceConnection", {
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
    readonly routingConfiguration?: types.outputs.network.v20230201.RoutingConfigurationNfvResponse;
    /**
     * Unique identifier for the connection.
     */
    readonly tunnelIdentifier?: number;
}
/**
 * Retrieves the details of specified NVA connection.
 */
export function getNetworkVirtualApplianceConnectionOutput(args: GetNetworkVirtualApplianceConnectionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetNetworkVirtualApplianceConnectionResult> {
    return pulumi.output(args).apply((a: any) => getNetworkVirtualApplianceConnection(a, opts))
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
