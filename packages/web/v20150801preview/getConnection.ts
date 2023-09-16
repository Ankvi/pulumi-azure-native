import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Gets a connection.
 */
export function getConnection(args: GetConnectionArgs, opts?: pulumi.InvokeOptions): Promise<GetConnectionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:web/v20150801preview:getConnection", {
        "connectionName": args.connectionName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetConnectionArgs {
    /**
     * The connection name.
     */
    connectionName: string;
    /**
     * The resource group name.
     */
    resourceGroupName: string;
}

/**
 * API Connection
 */
export interface GetConnectionResult {
    /**
     * expanded connection provider name
     */
    readonly api?: types.outputs.web.v20150801preview.ExpandedParentApiEntityResponse;
    /**
     * Timestamp of last connection change.
     */
    readonly changedTime?: string;
    /**
     * Timestamp of the connection creation
     */
    readonly createdTime?: string;
    /**
     * Custom login setting values.
     */
    readonly customParameterValues?: {[key: string]: types.outputs.web.v20150801preview.ParameterCustomLoginSettingValuesResponse};
    /**
     * display name
     */
    readonly displayName?: string;
    /**
     * Time in UTC when the first expiration of OAuth tokens
     */
    readonly firstExpirationTime?: string;
    /**
     * Resource Id
     */
    readonly id?: string;
    /**
     * List of Keywords that tag the acl
     */
    readonly keywords?: string[];
    /**
     * Kind of resource
     */
    readonly kind?: string;
    /**
     * Resource Location
     */
    readonly location: string;
    readonly metadata?: any;
    /**
     * Resource Name
     */
    readonly name?: string;
    /**
     * Tokens/Claim
     */
    readonly nonSecretParameterValues?: {[key: string]: any};
    /**
     * Tokens/Claim
     */
    readonly parameterValues?: {[key: string]: any};
    /**
     * Status of the connection
     */
    readonly statuses?: types.outputs.web.v20150801preview.ConnectionStatusResponse[];
    /**
     * Resource tags
     */
    readonly tags?: {[key: string]: string};
    readonly tenantId?: string;
    /**
     * Resource type
     */
    readonly type?: string;
}
/**
 * Gets a connection.
 */
export function getConnectionOutput(args: GetConnectionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetConnectionResult> {
    return pulumi.output(args).apply((a: any) => getConnection(a, opts))
}

export interface GetConnectionOutputArgs {
    /**
     * The connection name.
     */
    connectionName: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
}
