import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets the accessProfile for the specified role name of the managed cluster with a specified resource group and name.
 */
export function listManagedClusterAccessProfile(args: ListManagedClusterAccessProfileArgs, opts?: pulumi.InvokeOptions): Promise<ListManagedClusterAccessProfileResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:containerservice/v20190601:listManagedClusterAccessProfile", {
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
 */
export function listManagedClusterAccessProfileOutput(args: ListManagedClusterAccessProfileOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListManagedClusterAccessProfileResult> {
    return pulumi.output(args).apply((a: any) => listManagedClusterAccessProfile(a, opts))
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
