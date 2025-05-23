import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Represents a share on the  Data Box Edge/Gateway device.
 *
 * Uses Azure REST API version 2023-07-01.
 *
 * Other available API versions: 2022-03-01, 2022-04-01-preview, 2022-12-01-preview, 2023-01-01-preview, 2023-12-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native databoxedge [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getShare(args: GetShareArgs, opts?: pulumi.InvokeOptions): Promise<GetShareResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:databoxedge:getShare", {
        "deviceName": args.deviceName,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetShareArgs {
    /**
     * The device name.
     */
    deviceName: string;
    /**
     * The share name.
     */
    name: string;
    /**
     * The resource group name.
     */
    resourceGroupName: string;
}

/**
 * Represents a share on the  Data Box Edge/Gateway device.
 */
export interface GetShareResult {
    /**
     * Access protocol to be used by the share.
     */
    readonly accessProtocol: string;
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Azure container mapping for the share.
     */
    readonly azureContainerInfo?: types.outputs.AzureContainerInfoResponse;
    /**
     * List of IP addresses and corresponding access rights on the share(required for NFS protocol).
     */
    readonly clientAccessRights?: types.outputs.ClientAccessRightResponse[];
    /**
     * Data policy of the share.
     */
    readonly dataPolicy?: string;
    /**
     * Description for the share.
     */
    readonly description?: string;
    /**
     * The path ID that uniquely identifies the object.
     */
    readonly id: string;
    /**
     * Current monitoring status of the share.
     */
    readonly monitoringStatus: string;
    /**
     * The object name.
     */
    readonly name: string;
    /**
     * Details of the refresh job on this share.
     */
    readonly refreshDetails?: types.outputs.RefreshDetailsResponse;
    /**
     * Share mount point to the role.
     */
    readonly shareMappings: types.outputs.MountPointMapResponse[];
    /**
     * Current status of the share.
     */
    readonly shareStatus: string;
    /**
     * Metadata pertaining to creation and last modification of Share
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The hierarchical type of the object.
     */
    readonly type: string;
    /**
     * Mapping of users and corresponding access rights on the share (required for SMB protocol).
     */
    readonly userAccessRights?: types.outputs.UserAccessRightResponse[];
}
/**
 * Represents a share on the  Data Box Edge/Gateway device.
 *
 * Uses Azure REST API version 2023-07-01.
 *
 * Other available API versions: 2022-03-01, 2022-04-01-preview, 2022-12-01-preview, 2023-01-01-preview, 2023-12-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native databoxedge [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getShareOutput(args: GetShareOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetShareResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:databoxedge:getShare", {
        "deviceName": args.deviceName,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetShareOutputArgs {
    /**
     * The device name.
     */
    deviceName: pulumi.Input<string>;
    /**
     * The share name.
     */
    name: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
}