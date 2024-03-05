import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the status of service.
 * Azure REST API version: 2023-04-15.
 *
 * Other available API versions: 2023-09-15, 2023-09-15-preview, 2023-11-15, 2023-11-15-preview, 2024-02-15-preview.
 */
export function getService(args: GetServiceArgs, opts?: pulumi.InvokeOptions): Promise<GetServiceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:documentdb:getService", {
        "accountName": args.accountName,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
    }, opts);
}

export interface GetServiceArgs {
    /**
     * Cosmos DB database account name.
     */
    accountName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * Cosmos DB service name.
     */
    serviceName: string;
}

/**
 * Properties for the database account.
 */
export interface GetServiceResult {
    /**
     * The unique resource identifier of the database account.
     */
    readonly id: string;
    /**
     * The name of the database account.
     */
    readonly name: string;
    /**
     * Services response resource.
     */
    readonly properties: types.outputs.DataTransferServiceResourcePropertiesResponse | types.outputs.GraphAPIComputeServiceResourcePropertiesResponse | types.outputs.MaterializedViewsBuilderServiceResourcePropertiesResponse | types.outputs.SqlDedicatedGatewayServiceResourcePropertiesResponse;
    /**
     * The type of Azure resource.
     */
    readonly type: string;
}
/**
 * Gets the status of service.
 * Azure REST API version: 2023-04-15.
 *
 * Other available API versions: 2023-09-15, 2023-09-15-preview, 2023-11-15, 2023-11-15-preview, 2024-02-15-preview.
 */
export function getServiceOutput(args: GetServiceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetServiceResult> {
    return pulumi.output(args).apply((a: any) => getService(a, opts))
}

export interface GetServiceOutputArgs {
    /**
     * Cosmos DB database account name.
     */
    accountName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Cosmos DB service name.
     */
    serviceName: pulumi.Input<string>;
}