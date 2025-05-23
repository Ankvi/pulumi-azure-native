import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Returns the cluster user credentials for the dedicated appliance.
 *
 * Uses Azure REST API version 2022-10-27.
 *
 * Other available API versions: 2022-04-15-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native resourceconnector [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
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
 *
 * Uses Azure REST API version 2022-10-27.
 *
 * Other available API versions: 2022-04-15-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native resourceconnector [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listApplianceClusterUserCredentialOutput(args: ListApplianceClusterUserCredentialOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListApplianceClusterUserCredentialResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:resourceconnector:listApplianceClusterUserCredential", {
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
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