import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets information about a disk access resource.
 *
 * Uses Azure REST API version 2024-03-02.
 *
 * Other available API versions: 2022-07-02, 2023-01-02, 2023-04-02, 2023-10-02. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native compute [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getDiskAccess(args: GetDiskAccessArgs, opts?: pulumi.InvokeOptions): Promise<GetDiskAccessResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:compute:getDiskAccess", {
        "diskAccessName": args.diskAccessName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDiskAccessArgs {
    /**
     * The name of the disk access resource that is being created. The name can't be changed after the disk encryption set is created. Supported characters for the name are a-z, A-Z, 0-9, _ and -. The maximum name length is 80 characters.
     */
    diskAccessName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * disk access resource.
 */
export interface GetDiskAccessResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The extended location where the disk access will be created. Extended location cannot be changed.
     */
    readonly extendedLocation?: types.outputs.ExtendedLocationResponse;
    /**
     * Resource Id
     */
    readonly id: string;
    /**
     * Resource location
     */
    readonly location: string;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * A readonly collection of private endpoint connections created on the disk. Currently only one endpoint connection is supported.
     */
    readonly privateEndpointConnections: types.outputs.PrivateEndpointConnectionResponse[];
    /**
     * The disk access resource provisioning state.
     */
    readonly provisioningState: string;
    /**
     * Resource tags
     */
    readonly tags?: {[key: string]: string};
    /**
     * The time when the disk access was created.
     */
    readonly timeCreated: string;
    /**
     * Resource type
     */
    readonly type: string;
}
/**
 * Gets information about a disk access resource.
 *
 * Uses Azure REST API version 2024-03-02.
 *
 * Other available API versions: 2022-07-02, 2023-01-02, 2023-04-02, 2023-10-02. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native compute [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getDiskAccessOutput(args: GetDiskAccessOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDiskAccessResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:compute:getDiskAccess", {
        "diskAccessName": args.diskAccessName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDiskAccessOutputArgs {
    /**
     * The name of the disk access resource that is being created. The name can't be changed after the disk encryption set is created. Supported characters for the name are a-z, A-Z, 0-9, _ and -. The maximum name length is 80 characters.
     */
    diskAccessName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}