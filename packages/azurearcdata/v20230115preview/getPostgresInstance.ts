import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieves a postgres Instance resource
 */
export function getPostgresInstance(args: GetPostgresInstanceArgs, opts?: pulumi.InvokeOptions): Promise<GetPostgresInstanceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:azurearcdata/v20230115preview:getPostgresInstance", {
        "postgresInstanceName": args.postgresInstanceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetPostgresInstanceArgs {
    /**
     * Name of Postgres Instance
     */
    postgresInstanceName: string;
    /**
     * The name of the Azure resource group
     */
    resourceGroupName: string;
}

/**
 * A Postgres Instance.
 */
export interface GetPostgresInstanceResult {
    /**
     * The extendedLocation of the resource.
     */
    readonly extendedLocation?: types.outputs.ExtendedLocationResponse;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * null
     */
    readonly properties: types.outputs.PostgresInstancePropertiesResponse;
    /**
     * Resource sku.
     */
    readonly sku?: types.outputs.PostgresInstanceSkuResponse;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Retrieves a postgres Instance resource
 */
export function getPostgresInstanceOutput(args: GetPostgresInstanceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPostgresInstanceResult> {
    return pulumi.output(args).apply((a: any) => getPostgresInstance(a, opts))
}

export interface GetPostgresInstanceOutputArgs {
    /**
     * Name of Postgres Instance
     */
    postgresInstanceName: pulumi.Input<string>;
    /**
     * The name of the Azure resource group
     */
    resourceGroupName: pulumi.Input<string>;
}