import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * List the admin credentials for the private cloud
 *
 * Uses Azure REST API version 2023-09-01.
 *
 * Other available API versions: 2022-05-01, 2023-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native avs [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
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
 * List the admin credentials for the private cloud
 *
 * Uses Azure REST API version 2023-09-01.
 *
 * Other available API versions: 2022-05-01, 2023-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native avs [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listPrivateCloudAdminCredentialsOutput(args: ListPrivateCloudAdminCredentialsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListPrivateCloudAdminCredentialsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:avs:listPrivateCloudAdminCredentials", {
        "privateCloudName": args.privateCloudName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
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