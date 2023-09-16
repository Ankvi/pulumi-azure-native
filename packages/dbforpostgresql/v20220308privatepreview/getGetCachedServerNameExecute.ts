import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Get available cached server name for fast provisioning
 */
export function getGetCachedServerNameExecute(args: GetGetCachedServerNameExecuteArgs, opts?: pulumi.InvokeOptions): Promise<GetGetCachedServerNameExecuteResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:dbforpostgresql/v20220308privatepreview:getGetCachedServerNameExecute", {
        "locationName": args.locationName,
        "resourceGroupName": args.resourceGroupName,
        "sku": args.sku,
        "storage": args.storage,
        "version": args.version,
    }, opts);
}

export interface GetGetCachedServerNameExecuteArgs {
    /**
     * The name of the location.
     */
    locationName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The SKU (pricing tier) of the server.
     */
    sku: types.inputs.dbforpostgresql.v20220308privatepreview.Sku;
    /**
     * Storage properties of a server.
     */
    storage: types.inputs.dbforpostgresql.v20220308privatepreview.Storage;
    /**
     * PostgreSQL Server version.
     */
    version: string | types.enums.v20220308privatepreview.ServerVersion;
}

/**
 * Represents a resource name of a cached server
 */
export interface GetGetCachedServerNameExecuteResult {
    /**
     * The name of available cached server
     */
    readonly name: string;
}
/**
 * Get available cached server name for fast provisioning
 */
export function getGetCachedServerNameExecuteOutput(args: GetGetCachedServerNameExecuteOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetGetCachedServerNameExecuteResult> {
    return pulumi.output(args).apply((a: any) => getGetCachedServerNameExecute(a, opts))
}

export interface GetGetCachedServerNameExecuteOutputArgs {
    /**
     * The name of the location.
     */
    locationName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The SKU (pricing tier) of the server.
     */
    sku: pulumi.Input<types.inputs.dbforpostgresql.v20220308privatepreview.SkuArgs>;
    /**
     * Storage properties of a server.
     */
    storage: pulumi.Input<types.inputs.dbforpostgresql.v20220308privatepreview.StorageArgs>;
    /**
     * PostgreSQL Server version.
     */
    version: pulumi.Input<string | types.enums.v20220308privatepreview.ServerVersion>;
}
