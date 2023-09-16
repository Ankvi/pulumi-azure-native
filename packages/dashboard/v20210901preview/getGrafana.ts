import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * The grafana resource type.
 */
export function getGrafana(args: GetGrafanaArgs, opts?: pulumi.InvokeOptions): Promise<GetGrafanaResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:dashboard/v20210901preview:getGrafana", {
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetGrafanaArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The workspace name of Azure Managed Grafana.
     */
    workspaceName: string;
}

/**
 * The grafana resource type.
 */
export interface GetGrafanaResult {
    /**
     * ARM id of the grafana resource
     */
    readonly id: string;
    /**
     * The managed identity of the grafana resource.
     */
    readonly identity?: types.outputs.dashboard.v20210901preview.ManagedIdentityResponse;
    /**
     * The geo-location where the grafana resource lives
     */
    readonly location?: string;
    /**
     * Name of the grafana resource.
     */
    readonly name: string;
    /**
     * Properties specific to the grafana resource.
     */
    readonly properties: types.outputs.dashboard.v20210901preview.ManagedGrafanaPropertiesResponse;
    /**
     * The Sku of the grafana resource.
     */
    readonly sku?: types.outputs.dashboard.v20210901preview.ResourceSkuResponse;
    /**
     * The system meta data relating to this grafana resource.
     */
    readonly systemData: types.outputs.dashboard.v20210901preview.SystemDataResponse;
    /**
     * The tags for grafana resource.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the grafana resource.
     */
    readonly type: string;
}
/**
 * The grafana resource type.
 */
export function getGrafanaOutput(args: GetGrafanaOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetGrafanaResult> {
    return pulumi.output(args).apply((a: any) => getGrafana(a, opts))
}

export interface GetGrafanaOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The workspace name of Azure Managed Grafana.
     */
    workspaceName: pulumi.Input<string>;
}
