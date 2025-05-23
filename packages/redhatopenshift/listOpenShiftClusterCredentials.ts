import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * The operation returns the credentials.
 *
 * Uses Azure REST API version 2023-11-22.
 *
 * Other available API versions: 2022-09-04, 2023-04-01, 2023-07-01-preview, 2023-09-04, 2024-08-12-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native redhatopenshift [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listOpenShiftClusterCredentials(args: ListOpenShiftClusterCredentialsArgs, opts?: pulumi.InvokeOptions): Promise<ListOpenShiftClusterCredentialsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:redhatopenshift:listOpenShiftClusterCredentials", {
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface ListOpenShiftClusterCredentialsArgs {
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
 * OpenShiftClusterCredentials represents an OpenShift cluster's credentials.
 */
export interface ListOpenShiftClusterCredentialsResult {
    /**
     * The password for the kubeadmin user.
     */
    readonly kubeadminPassword?: string;
    /**
     * The username for the kubeadmin user.
     */
    readonly kubeadminUsername?: string;
}
/**
 * The operation returns the credentials.
 *
 * Uses Azure REST API version 2023-11-22.
 *
 * Other available API versions: 2022-09-04, 2023-04-01, 2023-07-01-preview, 2023-09-04, 2024-08-12-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native redhatopenshift [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listOpenShiftClusterCredentialsOutput(args: ListOpenShiftClusterCredentialsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListOpenShiftClusterCredentialsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:redhatopenshift:listOpenShiftClusterCredentials", {
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface ListOpenShiftClusterCredentialsOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the OpenShift cluster resource.
     */
    resourceName: pulumi.Input<string>;
}