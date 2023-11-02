import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the properties of the archive.
 * Azure REST API version: 2023-06-01-preview.
 *
 * Other available API versions: 2023-08-01-preview.
 */
export function getArchife(args: GetArchifeArgs, opts?: pulumi.InvokeOptions): Promise<GetArchifeResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:containerregistry:getArchife", {
        "archiveName": args.archiveName,
        "packageType": args.packageType,
        "registryName": args.registryName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetArchifeArgs {
    /**
     * The name of the archive resource.
     */
    archiveName: string;
    /**
     * The type of the package resource.
     */
    packageType: string;
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
 * An object that represents a archive for a container registry.
 */
export interface GetArchifeResult {
    /**
     * The resource ID.
     */
    readonly id: string;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * The package source of the archive.
     */
    readonly packageSource?: types.outputs.ArchivePackageSourcePropertiesResponse;
    /**
     * The provisioning state of the archive at the time the operation was called.
     */
    readonly provisioningState: string;
    /**
     * The published version of the archive.
     */
    readonly publishedVersion?: string;
    readonly repositoryEndpoint: string;
    readonly repositoryEndpointPrefix?: string;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource.
     */
    readonly type: string;
}
/**
 * Gets the properties of the archive.
 * Azure REST API version: 2023-06-01-preview.
 *
 * Other available API versions: 2023-08-01-preview.
 */
export function getArchifeOutput(args: GetArchifeOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetArchifeResult> {
    return pulumi.output(args).apply((a: any) => getArchife(a, opts))
}

export interface GetArchifeOutputArgs {
    /**
     * The name of the archive resource.
     */
    archiveName: pulumi.Input<string>;
    /**
     * The type of the package resource.
     */
    packageType: pulumi.Input<string>;
    /**
     * The name of the container registry.
     */
    registryName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
