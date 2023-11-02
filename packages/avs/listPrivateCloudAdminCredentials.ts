import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Administrative credentials for accessing vCenter and NSX-T
 * Azure REST API version: 2022-05-01.
 *
 * Other available API versions: 2023-03-01.
 */
export function listPrivateCloudAdminCredentials(args: ListPrivateCloudAdminCredentialsArgs, opts?: pulumi.InvokeOptions): Promise<ListPrivateCloudAdminCredentialsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:avs:listPrivateCloudAdminCredentials", {
        "privateCloudName": args.privateCloudName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListPrivateCloudAdminCredentialsArgs {
    /**
     * Name of the private cloud
     */
    privateCloudName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Administrative credentials for accessing vCenter and NSX-T
 */
export interface ListPrivateCloudAdminCredentialsResult {
    /**
     * NSX-T Manager password
     */
    readonly nsxtPassword: string;
    /**
     * NSX-T Manager username
     */
    readonly nsxtUsername: string;
    /**
     * vCenter admin password
     */
    readonly vcenterPassword: string;
    /**
     * vCenter admin username
     */
    readonly vcenterUsername: string;
}
/**
 * Administrative credentials for accessing vCenter and NSX-T
 * Azure REST API version: 2022-05-01.
 *
 * Other available API versions: 2023-03-01.
 */
export function listPrivateCloudAdminCredentialsOutput(args: ListPrivateCloudAdminCredentialsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListPrivateCloudAdminCredentialsResult> {
    return pulumi.output(args).apply((a: any) => listPrivateCloudAdminCredentials(a, opts))
}

export interface ListPrivateCloudAdminCredentialsOutputArgs {
    /**
     * Name of the private cloud
     */
    privateCloudName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
