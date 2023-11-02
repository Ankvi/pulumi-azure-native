import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get specified scope connection created by this Network Manager.
 * Azure REST API version: 2023-02-01.
 *
 * Other available API versions: 2023-04-01, 2023-05-01.
 */
export function getScopeConnection(args: GetScopeConnectionArgs, opts?: pulumi.InvokeOptions): Promise<GetScopeConnectionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network:getScopeConnection", {
        "networkManagerName": args.networkManagerName,
        "resourceGroupName": args.resourceGroupName,
        "scopeConnectionName": args.scopeConnectionName,
    }, opts);
}

export interface GetScopeConnectionArgs {
    /**
     * The name of the network manager.
     */
    networkManagerName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
    /**
     * Name for the cross-tenant connection.
     */
    scopeConnectionName: string;
}

/**
 * The Scope Connections resource
 */
export interface GetScopeConnectionResult {
    /**
     * A description of the scope connection.
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
     * Resource ID.
     */
    readonly resourceId?: string;
    /**
     * The system metadata related to this resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Tenant ID.
     */
    readonly tenantId?: string;
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Get specified scope connection created by this Network Manager.
 * Azure REST API version: 2023-02-01.
 *
 * Other available API versions: 2023-04-01, 2023-05-01.
 */
export function getScopeConnectionOutput(args: GetScopeConnectionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetScopeConnectionResult> {
    return pulumi.output(args).apply((a: any) => getScopeConnection(a, opts))
}

export interface GetScopeConnectionOutputArgs {
    /**
     * The name of the network manager.
     */
    networkManagerName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name for the cross-tenant connection.
     */
    scopeConnectionName: pulumi.Input<string>;
}
