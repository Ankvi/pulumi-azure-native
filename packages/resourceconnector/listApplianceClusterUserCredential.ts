import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Returns the cluster user credentials for the dedicated appliance.
 * Azure REST API version: 2022-10-27.
 *
 * Other available API versions: 2021-10-31-preview.
 */
export function listApplianceClusterUserCredential(args: ListApplianceClusterUserCredentialArgs, opts?: pulumi.InvokeOptions): Promise<ListApplianceClusterUserCredentialResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:resourceconnector:listApplianceClusterUserCredential", {
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface ListApplianceClusterUserCredentialArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * Appliances name.
     */
    resourceName: string;
}

/**
 * The List Cluster User Credential appliance.
 */
export interface ListApplianceClusterUserCredentialResult {
    /**
     * Contains the REP (rendezvous endpoint) and “Listener” access token from notification service (NS).
     */
    readonly hybridConnectionConfig: types.outputs.HybridConnectionConfigResponse;
    /**
     * The list of appliance kubeconfigs.
     */
    readonly kubeconfigs: types.outputs.ApplianceCredentialKubeconfigResponse[];
}
/**
 * Returns the cluster user credentials for the dedicated appliance.
 * Azure REST API version: 2022-10-27.
 *
 * Other available API versions: 2021-10-31-preview.
 */
export function listApplianceClusterUserCredentialOutput(args: ListApplianceClusterUserCredentialOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListApplianceClusterUserCredentialResult> {
    return pulumi.output(args).apply((a: any) => listApplianceClusterUserCredential(a, opts))
}

export interface ListApplianceClusterUserCredentialOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Appliances name.
     */
    resourceName: pulumi.Input<string>;
}
