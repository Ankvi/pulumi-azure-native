import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Static Site Database Connection resource.
 */
export function getStaticSiteBuildDatabaseConnection(args: GetStaticSiteBuildDatabaseConnectionArgs, opts?: pulumi.InvokeOptions): Promise<GetStaticSiteBuildDatabaseConnectionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:web/v20220901:getStaticSiteBuildDatabaseConnection", {
        "databaseConnectionName": args.databaseConnectionName,
        "environmentName": args.environmentName,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetStaticSiteBuildDatabaseConnectionArgs {
    /**
     * Name of the database connection.
     */
    databaseConnectionName: string;
    /**
     * The stage site identifier.
     */
    environmentName: string;
    /**
     * Name of the static site
     */
    name: string;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: string;
}

/**
 * Static Site Database Connection resource.
 */
export interface GetStaticSiteBuildDatabaseConnectionResult {
    /**
     * A list of configuration files associated with this database connection.
     */
    readonly configurationFiles: types.outputs.StaticSiteDatabaseConnectionConfigurationFileOverviewResponse[];
    /**
     * If present, the identity is used in conjunction with connection string to connect to the database. Use of the system-assigned managed identity is indicated with the string 'SystemAssigned', while use of a user-assigned managed identity is indicated with the resource id of the managed identity resource.
     */
    readonly connectionIdentity?: string;
    /**
     * The connection string to use to connect to the database.
     */
    readonly connectionString?: string;
    /**
     * Resource Id.
     */
    readonly id: string;
    /**
     * Kind of resource.
     */
    readonly kind?: string;
    /**
     * Resource Name.
     */
    readonly name: string;
    /**
     * The region of the database resource.
     */
    readonly region: string;
    /**
     * The resource id of the database.
     */
    readonly resourceId: string;
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Static Site Database Connection resource.
 */
export function getStaticSiteBuildDatabaseConnectionOutput(args: GetStaticSiteBuildDatabaseConnectionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetStaticSiteBuildDatabaseConnectionResult> {
    return pulumi.output(args).apply((a: any) => getStaticSiteBuildDatabaseConnection(a, opts))
}

export interface GetStaticSiteBuildDatabaseConnectionOutputArgs {
    /**
     * Name of the database connection.
     */
    databaseConnectionName: pulumi.Input<string>;
    /**
     * The stage site identifier.
     */
    environmentName: pulumi.Input<string>;
    /**
     * Name of the static site
     */
    name: pulumi.Input<string>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
}