import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets the administrator login credentials for the specified container registry.
 */
export function getRegistryCredentials(args: GetRegistryCredentialsArgs, opts?: pulumi.InvokeOptions): Promise<GetRegistryCredentialsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:containerregistry/v20160627preview:getRegistryCredentials", {
        "registryName": args.registryName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetRegistryCredentialsArgs {
    /**
     * The name of the container registry.
     */
    registryName: string;
    /**
     * The name of the resource group to which the container registry belongs.
     */
    resourceGroupName: string;
}

/**
 * The result of a request to get the administrator login credentials for a container registry.
 */
export interface GetRegistryCredentialsResult {
    /**
     * The administrator password.
     */
    readonly password?: string;
    /**
     * The administrator username.
     */
    readonly username?: string;
}
/**
 * Gets the administrator login credentials for the specified container registry.
 */
export function getRegistryCredentialsOutput(args: GetRegistryCredentialsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetRegistryCredentialsResult> {
    return pulumi.output(args).apply((a: any) => getRegistryCredentials(a, opts))
}

export interface GetRegistryCredentialsOutputArgs {
    /**
     * The name of the container registry.
     */
    registryName: pulumi.Input<string>;
    /**
     * The name of the resource group to which the container registry belongs.
     */
    resourceGroupName: pulumi.Input<string>;
}
