import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Returns the cluster customer user credentials for the dedicated appliance.
 *
 * Uses Azure REST API version 2022-04-15-preview.
 */
export function listApplianceClusterCustomerUserCredential(args: ListApplianceClusterCustomerUserCredentialArgs, opts?: pulumi.InvokeOptions): Promise<ListApplianceClusterCustomerUserCredentialResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:resourceconnector:listApplianceClusterCustomerUserCredential", {
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface ListApplianceClusterCustomerUserCredentialArgs {
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
 * The List Cluster Customer User Credential Results appliance.
 */
export interface ListApplianceClusterCustomerUserCredentialResult {
    /**
     * The list of appliance kubeconfigs.
     */
    readonly kubeconfigs: types.outputs.ApplianceCredentialKubeconfigResponse[];
    /**
     * Map of Customer User Public and Private SSH Keys
     */
    readonly sshKeys: {[key: string]: types.outputs.SSHKeyResponse};
}
/**
 * Returns the cluster customer user credentials for the dedicated appliance.
 *
 * Uses Azure REST API version 2022-04-15-preview.
 */
export function listApplianceClusterCustomerUserCredentialOutput(args: ListApplianceClusterCustomerUserCredentialOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListApplianceClusterCustomerUserCredentialResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:resourceconnector:listApplianceClusterCustomerUserCredential", {
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface ListApplianceClusterCustomerUserCredentialOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Appliances name.
     */
    resourceName: pulumi.Input<string>;
}