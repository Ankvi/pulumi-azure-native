import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets the accessProfile for the specified role name of the managed cluster with a specified resource group and name.
 *
 * Uses Azure REST API version 2020-03-01.
 *
 * Other available API versions: 2019-11-01, 2020-01-01, 2020-02-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native containerservice [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listManagedClusterAccessProfile(args: ListManagedClusterAccessProfileArgs, opts?: pulumi.InvokeOptions): Promise<ListManagedClusterAccessProfileResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:containerservice:listManagedClusterAccessProfile", {
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
        "roleName": args.roleName,
    }, opts);
}

export interface ListManagedClusterAccessProfileArgs {
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
    /**
     * The name of the managed cluster resource.
     */
    resourceName: string;
    /**
     * The name of the role for managed cluster accessProfile resource.
     */
    roleName: string;
}

/**
 * Managed cluster Access Profile.
 */
export interface ListManagedClusterAccessProfileResult {
    /**
     * Resource Id
     */
    readonly id: string;
    /**
     * Base64-encoded Kubernetes configuration file.
     */
    readonly kubeConfig?: string;
    /**
     * Resource location
     */
    readonly location: string;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * Resource tags
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type
     */
    readonly type: string;
}
/**
 * Gets the accessProfile for the specified role name of the managed cluster with a specified resource group and name.
 *
 * Uses Azure REST API version 2020-03-01.
 *
 * Other available API versions: 2019-11-01, 2020-01-01, 2020-02-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native containerservice [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listManagedClusterAccessProfileOutput(args: ListManagedClusterAccessProfileOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListManagedClusterAccessProfileResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:containerservice:listManagedClusterAccessProfile", {
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
        "roleName": args.roleName,
    }, opts);
}

export interface ListManagedClusterAccessProfileOutputArgs {
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the managed cluster resource.
     */
    resourceName: pulumi.Input<string>;
    /**
     * The name of the role for managed cluster accessProfile resource.
     */
    roleName: pulumi.Input<string>;
}