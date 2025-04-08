import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieves the details of a RouteTable.
 *
 * Uses Azure REST API version 2024-05-01.
 *
 * Other available API versions: 2020-04-01, 2020-05-01, 2020-06-01, 2020-07-01, 2020-08-01, 2020-11-01, 2021-02-01, 2021-03-01, 2021-05-01, 2021-08-01, 2022-01-01, 2022-05-01, 2022-07-01, 2022-09-01, 2022-11-01, 2023-02-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native network [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getHubRouteTable(args: GetHubRouteTableArgs, opts?: pulumi.InvokeOptions): Promise<GetHubRouteTableResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network:getHubRouteTable", {
        "resourceGroupName": args.resourceGroupName,
        "routeTableName": args.routeTableName,
        "virtualHubName": args.virtualHubName,
    }, opts);
}

export interface GetHubRouteTableArgs {
    /**
     * The resource group name of the VirtualHub.
     */
    resourceGroupName: string;
    /**
     * The name of the RouteTable.
     */
    routeTableName: string;
    /**
     * The name of the VirtualHub.
     */
    virtualHubName: string;
}

/**
 * RouteTable resource in a virtual hub.
 */
export interface GetHubRouteTableResult {
    /**
     * List of all connections associated with this route table.
     */
    readonly associatedConnections: string[];
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * Resource ID.
     */
    readonly id?: string;
    /**
     * List of labels associated with this route table.
     */
    readonly labels?: string[];
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    readonly name?: string;
    /**
     * List of all connections that advertise to this route table.
     */
    readonly propagatingConnections: string[];
    /**
     * The provisioning state of the RouteTable resource.
     */
    readonly provisioningState: string;
    /**
     * List of all routes.
     */
    readonly routes?: types.outputs.HubRouteResponse[];
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Retrieves the details of a RouteTable.
 *
 * Uses Azure REST API version 2024-05-01.
 *
 * Other available API versions: 2020-04-01, 2020-05-01, 2020-06-01, 2020-07-01, 2020-08-01, 2020-11-01, 2021-02-01, 2021-03-01, 2021-05-01, 2021-08-01, 2022-01-01, 2022-05-01, 2022-07-01, 2022-09-01, 2022-11-01, 2023-02-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01, 2023-11-01, 2024-01-01, 2024-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native network [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getHubRouteTableOutput(args: GetHubRouteTableOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetHubRouteTableResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:network:getHubRouteTable", {
        "resourceGroupName": args.resourceGroupName,
        "routeTableName": args.routeTableName,
        "virtualHubName": args.virtualHubName,
    }, opts);
}

export interface GetHubRouteTableOutputArgs {
    /**
     * The resource group name of the VirtualHub.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the RouteTable.
     */
    routeTableName: pulumi.Input<string>;
    /**
     * The name of the VirtualHub.
     */
    virtualHubName: pulumi.Input<string>;
}