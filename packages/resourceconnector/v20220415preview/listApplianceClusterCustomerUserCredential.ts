import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Returns the cluster customer user credentials for the dedicated appliance.
 */
export function listApplianceClusterCustomerUserCredential(args: ListApplianceClusterCustomerUserCredentialArgs, opts?: pulumi.InvokeOptions): Promise<ListApplianceClusterCustomerUserCredentialResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:resourceconnector/v20220415preview:listApplianceClusterCustomerUserCredential", {
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
    readonly kubeconfigs: types.outputs.resourceconnector.v20220415preview.ApplianceCredentialKubeconfigResponse[];
    /**
     * Map of Customer User Public and Private SSH Keys
     */
    readonly sshKeys: {[key: string]: types.outputs.resourceconnector.v20220415preview.SSHKeyResponse};
}
/**
 * Returns the cluster customer user credentials for the dedicated appliance.
 */
export function listApplianceClusterCustomerUserCredentialOutput(args: ListApplianceClusterCustomerUserCredentialOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListApplianceClusterCustomerUserCredentialResult> {
    return pulumi.output(args).apply((a: any) => listApplianceClusterCustomerUserCredential(a, opts))
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
