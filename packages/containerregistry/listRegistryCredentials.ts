import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Lists the login credentials for the specified container registry.
 *
 * Uses Azure REST API version 2022-12-01.
 *
 * Other available API versions: 2017-03-01, 2019-05-01, 2023-01-01-preview, 2023-06-01-preview, 2023-07-01, 2023-08-01-preview, 2023-11-01-preview, 2024-11-01-preview.
 */
export function listRegistryCredentials(args: ListRegistryCredentialsArgs, opts?: pulumi.InvokeOptions): Promise<ListRegistryCredentialsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:containerregistry:listRegistryCredentials", {
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
 *
 * Uses Azure REST API version 2022-12-01.
 *
 * Other available API versions: 2017-03-01, 2019-05-01, 2023-01-01-preview, 2023-06-01-preview, 2023-07-01, 2023-08-01-preview, 2023-11-01-preview, 2024-11-01-preview.
 */
export function listRegistryCredentialsOutput(args: ListRegistryCredentialsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListRegistryCredentialsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:containerregistry:listRegistryCredentials", {
        "registryName": args.registryName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
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