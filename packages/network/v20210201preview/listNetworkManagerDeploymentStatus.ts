import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Post to List of Network Manager Deployment Status.
 */
export function listNetworkManagerDeploymentStatus(args: ListNetworkManagerDeploymentStatusArgs, opts?: pulumi.InvokeOptions): Promise<ListNetworkManagerDeploymentStatusResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network/v20210201preview:listNetworkManagerDeploymentStatus", {
        "deploymentTypes": args.deploymentTypes,
        "networkManagerName": args.networkManagerName,
        "regions": args.regions,
        "resourceGroupName": args.resourceGroupName,
        "skipToken": args.skipToken,
    }, opts);
}

export interface ListNetworkManagerDeploymentStatusArgs {
    /**
     * List of deployment types.
     */
    deploymentTypes?: (string | types.enums.v20210201preview.ConfigurationType)[];
    /**
     * The name of the network manager.
     */
    networkManagerName: string;
    /**
     * List of locations.
     */
    regions?: string[];
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
    /**
     * Continuation token for pagination, capturing the next page size and offset, as well as the context of the query.
     */
    skipToken?: string;
}

/**
 * A list of Network Manager Deployment Status
 */
export interface ListNetworkManagerDeploymentStatusResult {
    /**
     * When present, the value can be passed to a subsequent query call (together with the same query and scopes used in the current request) to retrieve the next page of data.
     */
    readonly skipToken?: string;
    /**
     * Gets a page of Network Manager Deployment Status
     */
    readonly value?: types.outputs.network.v20210201preview.NetworkManagerDeploymentStatusResponse[];
}
/**
 * Post to List of Network Manager Deployment Status.
 */
export function listNetworkManagerDeploymentStatusOutput(args: ListNetworkManagerDeploymentStatusOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListNetworkManagerDeploymentStatusResult> {
    return pulumi.output(args).apply((a: any) => listNetworkManagerDeploymentStatus(a, opts))
}

export interface ListNetworkManagerDeploymentStatusOutputArgs {
    /**
     * List of deployment types.
     */
    deploymentTypes?: pulumi.Input<pulumi.Input<string | types.enums.v20210201preview.ConfigurationType>[]>;
    /**
     * The name of the network manager.
     */
    networkManagerName: pulumi.Input<string>;
    /**
     * List of locations.
     */
    regions?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Continuation token for pagination, capturing the next page size and offset, as well as the context of the query.
     */
    skipToken?: pulumi.Input<string>;
}
