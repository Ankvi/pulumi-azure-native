import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Represents a share on the  Data Box Edge/Gateway device.
 */
export function getShare(args: GetShareArgs, opts?: pulumi.InvokeOptions): Promise<GetShareResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:databoxedge/v20230101preview:getShare", {
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
     * Azure container mapping for the share.
     */
    readonly azureContainerInfo?: types.outputs.databoxedge.v20230101preview.AzureContainerInfoResponse;
    /**
     * List of IP addresses and corresponding access rights on the share(required for NFS protocol).
     */
    readonly clientAccessRights?: types.outputs.databoxedge.v20230101preview.ClientAccessRightResponse[];
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
    readonly refreshDetails?: types.outputs.databoxedge.v20230101preview.RefreshDetailsResponse;
    /**
     * Share mount point to the role.
     */
    readonly shareMappings: types.outputs.databoxedge.v20230101preview.MountPointMapResponse[];
    /**
     * Current status of the share.
     */
    readonly shareStatus: string;
    /**
     * Metadata pertaining to creation and last modification of Share
     */
    readonly systemData: types.outputs.databoxedge.v20230101preview.SystemDataResponse;
    /**
     * The hierarchical type of the object.
     */
    readonly type: string;
    /**
     * Mapping of users and corresponding access rights on the share (required for SMB protocol).
     */
    readonly userAccessRights?: types.outputs.databoxedge.v20230101preview.UserAccessRightResponse[];
}
/**
 * Represents a share on the  Data Box Edge/Gateway device.
 */
export function getShareOutput(args: GetShareOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetShareResult> {
    return pulumi.output(args).apply((a: any) => getShare(a, opts))
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
