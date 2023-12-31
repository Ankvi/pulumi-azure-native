import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The list credential result response.
 */
export function listManagedClusterMonitoringUserCredentials(args: ListManagedClusterMonitoringUserCredentialsArgs, opts?: pulumi.InvokeOptions): Promise<ListManagedClusterMonitoringUserCredentialsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:containerservice/v20230802preview:listManagedClusterMonitoringUserCredentials", {
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
        "serverFqdn": args.serverFqdn,
    }, opts);
}

export interface ListManagedClusterMonitoringUserCredentialsArgs {
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
export interface ListManagedClusterMonitoringUserCredentialsResult {
    /**
     * Base64-encoded Kubernetes configuration file.
     */
    readonly kubeconfigs: types.outputs.CredentialResultResponse[];
}
/**
 * The list credential result response.
 */
export function listManagedClusterMonitoringUserCredentialsOutput(args: ListManagedClusterMonitoringUserCredentialsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListManagedClusterMonitoringUserCredentialsResult> {
    return pulumi.output(args).apply((a: any) => listManagedClusterMonitoringUserCredentials(a, opts))
}

export interface ListManagedClusterMonitoringUserCredentialsOutputArgs {
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
