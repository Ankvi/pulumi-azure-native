import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the properties of the specified container registry.
 */
export function getRegistry(args: GetRegistryArgs, opts?: pulumi.InvokeOptions): Promise<GetRegistryResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:containerregistry/v20160627preview:getRegistry", {
        "registryName": args.registryName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetRegistryArgs {
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
 * An object that represents a container registry.
 */
export interface GetRegistryResult {
    /**
     * The value that indicates whether the admin user is enabled. This value is false by default.
     */
    readonly adminUserEnabled?: boolean;
    /**
     * The creation date of the container registry in ISO8601 format.
     */
    readonly creationDate: string;
    /**
     * The resource ID.
     */
    readonly id: string;
    /**
     * The location of the resource. This cannot be changed after the resource is created.
     */
    readonly location: string;
    /**
     * The URL that can be used to log into the container registry.
     */
    readonly loginServer: string;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * The properties of the storage account for the container registry. If specified, the storage account must be in the same physical location as the container registry.
     */
    readonly storageAccount: types.outputs.StorageAccountPropertiesResponse;
    /**
     * The tags of the resource.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource.
     */
    readonly type: string;
}
/**
 * Gets the properties of the specified container registry.
 */
export function getRegistryOutput(args: GetRegistryOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetRegistryResult> {
    return pulumi.output(args).apply((a: any) => getRegistry(a, opts))
}

export interface GetRegistryOutputArgs {
    /**
     * The name of the container registry.
     */
    registryName: pulumi.Input<string>;
    /**
     * The name of the resource group to which the container registry belongs.
     */
    resourceGroupName: pulumi.Input<string>;
}
