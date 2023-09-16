import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets a datasource instance.
 */
export function getDataSource(args: GetDataSourceArgs, opts?: pulumi.InvokeOptions): Promise<GetDataSourceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:operationalinsights/v20151101preview:getDataSource", {
        "dataSourceName": args.dataSourceName,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetDataSourceArgs {
    /**
     * Name of the datasource
     */
    dataSourceName: string;
    /**
     * The name of the resource group to get. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * Name of the Log Analytics Workspace that contains the datasource.
     */
    workspaceName: string;
}

/**
 * Datasources under OMS Workspace.
 */
export interface GetDataSourceResult {
    /**
     * The ETag of the data source.
     */
    readonly eTag?: string;
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * The kind of the DataSource.
     */
    readonly kind: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * The data source properties in raw json format, each kind of data source have it's own schema.
     */
    readonly properties: any;
    /**
     * Resource tags
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Gets a datasource instance.
 */
export function getDataSourceOutput(args: GetDataSourceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDataSourceResult> {
    return pulumi.output(args).apply((a: any) => getDataSource(a, opts))
}

export interface GetDataSourceOutputArgs {
    /**
     * Name of the datasource
     */
    dataSourceName: pulumi.Input<string>;
    /**
     * The name of the resource group to get. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the Log Analytics Workspace that contains the datasource.
     */
    workspaceName: pulumi.Input<string>;
}
