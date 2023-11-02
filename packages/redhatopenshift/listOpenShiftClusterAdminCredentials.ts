import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * The operation returns the admin kubeconfig.
 * Azure REST API version: 2022-09-04.
 *
 * Other available API versions: 2023-04-01, 2023-07-01-preview, 2023-09-04.
 */
export function listOpenShiftClusterAdminCredentials(args: ListOpenShiftClusterAdminCredentialsArgs, opts?: pulumi.InvokeOptions): Promise<ListOpenShiftClusterAdminCredentialsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:redhatopenshift:listOpenShiftClusterAdminCredentials", {
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface ListOpenShiftClusterAdminCredentialsArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the OpenShift cluster resource.
     */
    resourceName: string;
}

/**
 * OpenShiftClusterAdminKubeconfig represents an OpenShift cluster's admin kubeconfig.
 */
export interface ListOpenShiftClusterAdminCredentialsResult {
    /**
     * The base64-encoded kubeconfig file.
     */
    readonly kubeconfig?: string;
}
/**
 * The operation returns the admin kubeconfig.
 * Azure REST API version: 2022-09-04.
 *
 * Other available API versions: 2023-04-01, 2023-07-01-preview, 2023-09-04.
 */
export function listOpenShiftClusterAdminCredentialsOutput(args: ListOpenShiftClusterAdminCredentialsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListOpenShiftClusterAdminCredentialsResult> {
    return pulumi.output(args).apply((a: any) => listOpenShiftClusterAdminCredentials(a, opts))
}

export interface ListOpenShiftClusterAdminCredentialsOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the OpenShift cluster resource.
     */
    resourceName: pulumi.Input<string>;
}
