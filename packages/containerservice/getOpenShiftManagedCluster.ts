import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the details of the managed OpenShift cluster with a specified resource group and name.
 *
 * Uses Azure REST API version 2019-10-27-preview.
 */
export function getOpenShiftManagedCluster(args: GetOpenShiftManagedClusterArgs, opts?: pulumi.InvokeOptions): Promise<GetOpenShiftManagedClusterResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:containerservice:getOpenShiftManagedCluster", {
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetOpenShiftManagedClusterArgs {
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
    /**
     * The name of the OpenShift managed cluster resource.
     */
    resourceName: string;
}

/**
 * OpenShift Managed cluster.
 */
export interface GetOpenShiftManagedClusterResult {
    /**
     * Configuration of OpenShift cluster VMs.
     */
    readonly agentPoolProfiles?: types.outputs.OpenShiftManagedClusterAgentPoolProfileResponse[];
    /**
     * Configures OpenShift authentication.
     */
    readonly authProfile?: types.outputs.OpenShiftManagedClusterAuthProfileResponse;
    /**
     * Version of OpenShift specified when creating the cluster.
     */
    readonly clusterVersion: string;
    /**
     * Service generated FQDN for OpenShift API server loadbalancer internal hostname.
     */
    readonly fqdn: string;
    /**
     * Resource Id
     */
    readonly id: string;
    /**
     * Resource location
     */
    readonly location: string;
    /**
     * Configuration for OpenShift master VMs.
     */
    readonly masterPoolProfile?: types.outputs.OpenShiftManagedClusterMasterPoolProfileResponse;
    /**
     * Configures Log Analytics integration.
     */
    readonly monitorProfile?: types.outputs.OpenShiftManagedClusterMonitorProfileResponse;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * Configuration for OpenShift networking.
     */
    readonly networkProfile?: types.outputs.NetworkProfileResponse;
    /**
     * Version of OpenShift specified when creating the cluster.
     */
    readonly openShiftVersion: string;
    /**
     * Define the resource plan as required by ARM for billing purposes
     */
    readonly plan?: types.outputs.PurchasePlanResponse;
    /**
     * The current deployment or provisioning state, which only appears in the response.
     */
    readonly provisioningState: string;
    /**
     * Service generated FQDN or private IP for OpenShift API server.
     */
    readonly publicHostname: string;
    /**
     * Allows node rotation
     */
    readonly refreshCluster?: boolean;
    /**
     * Configuration for OpenShift router(s).
     */
    readonly routerProfiles?: types.outputs.OpenShiftRouterProfileResponse[];
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
 * Gets the details of the managed OpenShift cluster with a specified resource group and name.
 *
 * Uses Azure REST API version 2019-10-27-preview.
 */
export function getOpenShiftManagedClusterOutput(args: GetOpenShiftManagedClusterOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetOpenShiftManagedClusterResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:containerservice:getOpenShiftManagedCluster", {
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetOpenShiftManagedClusterOutputArgs {
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the OpenShift managed cluster resource.
     */
    resourceName: pulumi.Input<string>;
}