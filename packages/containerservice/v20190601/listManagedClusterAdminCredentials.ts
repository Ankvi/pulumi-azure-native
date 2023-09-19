import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets cluster admin credential of the managed cluster with a specified resource group and name.
 */
export function listManagedClusterAdminCredentials(args: ListManagedClusterAdminCredentialsArgs, opts?: pulumi.InvokeOptions): Promise<ListManagedClusterAdminCredentialsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:containerservice/v20190601:listManagedClusterAdminCredentials", {
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface ListManagedClusterAdminCredentialsArgs {
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
    /**
     * The name of the managed cluster resource.
     */
    resourceName: string;
}

/**
 * The list of credential result response.
 */
export interface ListManagedClusterAdminCredentialsResult {
    /**
     * Base64-encoded Kubernetes configuration file.
     */
    readonly kubeconfigs: types.outputs.CredentialResultResponse[];
}
/**
 * Gets cluster admin credential of the managed cluster with a specified resource group and name.
 */
export function listManagedClusterAdminCredentialsOutput(args: ListManagedClusterAdminCredentialsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListManagedClusterAdminCredentialsResult> {
    return pulumi.output(args).apply((a: any) => listManagedClusterAdminCredentials(a, opts))
}

export interface ListManagedClusterAdminCredentialsOutputArgs {
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the managed cluster resource.
     */
    resourceName: pulumi.Input<string>;
}
