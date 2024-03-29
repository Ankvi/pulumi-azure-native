import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the Dashboard.
 * Azure REST API version: 2020-09-01-preview.
 *
 * Other available API versions: 2019-01-01-preview.
 */
export function getDashboard(args: GetDashboardArgs, opts?: pulumi.InvokeOptions): Promise<GetDashboardResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:portal:getDashboard", {
        "dashboardName": args.dashboardName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDashboardArgs {
    /**
     * The name of the dashboard.
     */
    dashboardName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * The shared dashboard resource definition.
 */
export interface GetDashboardResult {
    /**
     * Resource Id
     */
    readonly id: string;
    /**
     * The dashboard lenses.
     */
    readonly lenses?: types.outputs.DashboardLensResponse[];
    /**
     * Resource location
     */
    readonly location: string;
    /**
     * The dashboard metadata.
     */
    readonly metadata?: {[key: string]: any};
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * Resource tags
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type
     */
    readonly type: string;
}
/**
 * Gets the Dashboard.
 * Azure REST API version: 2020-09-01-preview.
 *
 * Other available API versions: 2019-01-01-preview.
 */
export function getDashboardOutput(args: GetDashboardOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDashboardResult> {
    return pulumi.output(args).apply((a: any) => getDashboard(a, opts))
}

export interface GetDashboardOutputArgs {
    /**
     * The name of the dashboard.
     */
    dashboardName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}