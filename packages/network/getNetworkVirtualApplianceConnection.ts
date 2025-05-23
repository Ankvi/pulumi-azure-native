import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieves the details of specified NVA connection.
 *
 * Uses Azure REST API version 2024-05-01.
 *
 * Other available API versions: 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native network [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
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
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Resource ID.
     */
    readonly id?: string;
    /**
     * The name of the resource.
     */
    readonly name?: string;
    /**
     * Properties of the express route connection.
     */
    readonly properties: types.outputs.NetworkVirtualApplianceConnectionPropertiesResponse;
}
/**
 * Retrieves the details of specified NVA connection.
 *
 * Uses Azure REST API version 2024-05-01.
 *
 * Other available API versions: 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native network [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
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