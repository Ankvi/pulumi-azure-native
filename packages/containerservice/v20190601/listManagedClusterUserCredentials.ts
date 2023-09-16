import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Gets cluster user credential of the managed cluster with a specified resource group and name.
 */
export function listManagedClusterUserCredentials(args: ListManagedClusterUserCredentialsArgs, opts?: pulumi.InvokeOptions): Promise<ListManagedClusterUserCredentialsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:containerservice/v20190601:listManagedClusterUserCredentials", {
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface ListManagedClusterUserCredentialsArgs {
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
export interface ListManagedClusterUserCredentialsResult {
    /**
     * Base64-encoded Kubernetes configuration file.
     */
    readonly kubeconfigs: types.outputs.containerservice.v20190601.CredentialResultResponse[];
}
/**
 * Gets cluster user credential of the managed cluster with a specified resource group and name.
 */
export function listManagedClusterUserCredentialsOutput(args: ListManagedClusterUserCredentialsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListManagedClusterUserCredentialsResult> {
    return pulumi.output(args).apply((a: any) => listManagedClusterUserCredentials(a, opts))
}

export interface ListManagedClusterUserCredentialsOutputArgs {
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the managed cluster resource.
     */
    resourceName: pulumi.Input<string>;
}
