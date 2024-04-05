import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Lists the login credentials for the specified container registry.
 */
export function listRegistryCredentials(args: ListRegistryCredentialsArgs, opts?: pulumi.InvokeOptions): Promise<ListRegistryCredentialsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:containerregistry/v20230701:listRegistryCredentials", {
        "registryName": args.registryName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface ListRegistryCredentialsArgs {
    /**
     * The name of the container registry.
     */
    registryName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * The response from the ListCredentials operation.
 */
export interface ListRegistryCredentialsResult {
    /**
     * The list of passwords for a container registry.
     */
    readonly passwords?: types.outputs.RegistryPasswordResponse[];
    /**
     * The username for a container registry.
     */
    readonly username?: string;
}
/**
 * Lists the login credentials for the specified container registry.
 */
export function listRegistryCredentialsOutput(args: ListRegistryCredentialsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListRegistryCredentialsResult> {
    return pulumi.output(args).apply((a: any) => listRegistryCredentials(a, opts))
}

export interface ListRegistryCredentialsOutputArgs {
    /**
     * The name of the container registry.
     */
    registryName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}