import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the properties of the archive version.
 * Azure REST API version: 2023-06-01-preview.
 */
export function getArchiveVersion(args: GetArchiveVersionArgs, opts?: pulumi.InvokeOptions): Promise<GetArchiveVersionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:containerregistry:getArchiveVersion", {
        "archiveName": args.archiveName,
        "archiveVersionName": args.archiveVersionName,
        "packageType": args.packageType,
        "registryName": args.registryName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetArchiveVersionArgs {
    /**
     * The name of the archive resource.
     */
    archiveName: string;
    /**
     * The name of the archive version resource.
     */
    archiveVersionName: string;
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
 * An object that represents an export pipeline for a container registry.
 */
export interface GetArchiveVersionResult {
    /**
     * The detailed error message for the archive version in the case of failure.
     */
    readonly archiveVersionErrorMessage?: string;
    /**
     * The resource ID.
     */
    readonly id: string;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * The provisioning state of the archive at the time the operation was called.
     */
    readonly provisioningState: string;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.containerregistry.SystemDataResponse;
    /**
     * The type of the resource.
     */
    readonly type: string;
}
/**
 * Gets the properties of the archive version.
 * Azure REST API version: 2023-06-01-preview.
 */
export function getArchiveVersionOutput(args: GetArchiveVersionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetArchiveVersionResult> {
    return pulumi.output(args).apply((a: any) => getArchiveVersion(a, opts))
}

export interface GetArchiveVersionOutputArgs {
    /**
     * The name of the archive resource.
     */
    archiveName: pulumi.Input<string>;
    /**
     * The name of the archive version resource.
     */
    archiveVersionName: pulumi.Input<string>;
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
