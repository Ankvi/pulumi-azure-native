import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The list credential result response.
 */
export function listManagedClusterAdminCredentials(args: ListManagedClusterAdminCredentialsArgs, opts?: pulumi.InvokeOptions): Promise<ListManagedClusterAdminCredentialsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:containerservice/v20230602preview:listManagedClusterAdminCredentials", {
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
        "serverFqdn": args.serverFqdn,
    }, opts);
}

export interface ListManagedClusterAdminCredentialsArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the managed cluster resource.
     */
    resourceName: string;
    /**
     * server fqdn type for credentials to be returned
     */
    serverFqdn?: string;
}

/**
 * The list credential result response.
 */
export interface ListManagedClusterAdminCredentialsResult {
    /**
     * Base64-encoded Kubernetes configuration file.
     */
    readonly kubeconfigs: types.outputs.CredentialResultResponse[];
}
/**
 * The list credential result response.
 */
export function listManagedClusterAdminCredentialsOutput(args: ListManagedClusterAdminCredentialsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListManagedClusterAdminCredentialsResult> {
    return pulumi.output(args).apply((a: any) => listManagedClusterAdminCredentials(a, opts))
}

export interface ListManagedClusterAdminCredentialsOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the managed cluster resource.
     */
    resourceName: pulumi.Input<string>;
    /**
     * server fqdn type for credentials to be returned
     */
    serverFqdn?: pulumi.Input<string>;
}
