import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a specified connection created by this management group.
 * Azure REST API version: 2023-02-01.
 *
 * Other available API versions: 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01, 2024-05-01.
 */
export function getManagementGroupNetworkManagerConnection(args: GetManagementGroupNetworkManagerConnectionArgs, opts?: pulumi.InvokeOptions): Promise<GetManagementGroupNetworkManagerConnectionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network:getManagementGroupNetworkManagerConnection", {
        "managementGroupId": args.managementGroupId,
        "networkManagerConnectionName": args.networkManagerConnectionName,
    }, opts);
}

export interface GetManagementGroupNetworkManagerConnectionArgs {
    /**
     * The management group Id which uniquely identify the Microsoft Azure management group.
     */
    managementGroupId: string;
    /**
     * Name for the network manager connection.
     */
    networkManagerConnectionName: string;
}

/**
 * The Network Manager Connection resource
 */
export interface GetManagementGroupNetworkManagerConnectionResult {
    /**
     * A description of the network manager connection.
     */
    readonly description?: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Network Manager Id.
     */
    readonly networkManagerId?: string;
    /**
     * The system metadata related to this resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Get a specified connection created by this management group.
 * Azure REST API version: 2023-02-01.
 *
 * Other available API versions: 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01, 2024-05-01.
 */
export function getManagementGroupNetworkManagerConnectionOutput(args: GetManagementGroupNetworkManagerConnectionOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetManagementGroupNetworkManagerConnectionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:network:getManagementGroupNetworkManagerConnection", {
        "managementGroupId": args.managementGroupId,
        "networkManagerConnectionName": args.networkManagerConnectionName,
    }, opts);
}

export interface GetManagementGroupNetworkManagerConnectionOutputArgs {
    /**
     * The management group Id which uniquely identify the Microsoft Azure management group.
     */
    managementGroupId: pulumi.Input<string>;
    /**
     * Name for the network manager connection.
     */
    networkManagerConnectionName: pulumi.Input<string>;
}