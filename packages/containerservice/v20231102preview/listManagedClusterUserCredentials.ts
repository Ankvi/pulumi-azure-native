import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The list credential result response.
 */
export function listManagedClusterUserCredentials(args: ListManagedClusterUserCredentialsArgs, opts?: pulumi.InvokeOptions): Promise<ListManagedClusterUserCredentialsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:containerservice/v20231102preview:listManagedClusterUserCredentials", {
        "format": args.format,
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
        "serverFqdn": args.serverFqdn,
    }, opts);
}

export interface ListManagedClusterUserCredentialsArgs {
    /**
     * Only apply to AAD clusters, specifies the format of returned kubeconfig. Format 'azure' will return azure auth-provider kubeconfig; format 'exec' will return exec format kubeconfig, which requires kubelogin binary in the path.
     */
    format?: string;
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
export interface ListManagedClusterUserCredentialsResult {
    /**
     * Base64-encoded Kubernetes configuration file.
     */
    readonly kubeconfigs: types.outputs.CredentialResultResponse[];
}
/**
 * The list credential result response.
 */
export function listManagedClusterUserCredentialsOutput(args: ListManagedClusterUserCredentialsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListManagedClusterUserCredentialsResult> {
    return pulumi.output(args).apply((a: any) => listManagedClusterUserCredentials(a, opts))
}

export interface ListManagedClusterUserCredentialsOutputArgs {
    /**
     * Only apply to AAD clusters, specifies the format of returned kubeconfig. Format 'azure' will return azure auth-provider kubeconfig; format 'exec' will return exec format kubeconfig, which requires kubelogin binary in the path.
     */
    format?: pulumi.Input<string>;
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