import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a specific role by name.
 *
 * Uses Azure REST API version 2023-07-01.
 */
export function getCloudEdgeManagementRole(args: GetCloudEdgeManagementRoleArgs, opts?: pulumi.InvokeOptions): Promise<GetCloudEdgeManagementRoleResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:databoxedge:getCloudEdgeManagementRole", {
        "deviceName": args.deviceName,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetCloudEdgeManagementRoleArgs {
    /**
     * The device name.
     */
    deviceName: string;
    /**
     * The role name.
     */
    name: string;
    /**
     * The resource group name.
     */
    resourceGroupName: string;
}

/**
 * The preview of Virtual Machine Cloud Management from the Azure supports deploying and managing VMs on your Azure Stack Edge device from Azure Portal. 
 * For more information, refer to: https://docs.microsoft.com/en-us/azure/databox-online/azure-stack-edge-gpu-virtual-machine-overview
 * By using this feature, you agree to the preview legal terms. See the https://azure.microsoft.com/en-us/support/legal/preview-supplemental-terms/ for additional details.
 */
export interface GetCloudEdgeManagementRoleResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Edge Profile of the resource
     */
    readonly edgeProfile: types.outputs.EdgeProfileResponse;
    /**
     * The path ID that uniquely identifies the object.
     */
    readonly id: string;
    /**
     * Role type.
     * Expected value is 'CloudEdgeManagement'.
     */
    readonly kind: "CloudEdgeManagement";
    /**
     * Local Edge Management Status
     */
    readonly localManagementStatus: string;
    /**
     * The object name.
     */
    readonly name: string;
    /**
     * Role status.
     */
    readonly roleStatus: string;
    /**
     * Metadata pertaining to creation and last modification of Role
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The hierarchical type of the object.
     */
    readonly type: string;
}
/**
 * Gets a specific role by name.
 *
 * Uses Azure REST API version 2023-07-01.
 */
export function getCloudEdgeManagementRoleOutput(args: GetCloudEdgeManagementRoleOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetCloudEdgeManagementRoleResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:databoxedge:getCloudEdgeManagementRole", {
        "deviceName": args.deviceName,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetCloudEdgeManagementRoleOutputArgs {
    /**
     * The device name.
     */
    deviceName: pulumi.Input<string>;
    /**
     * The role name.
     */
    name: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
}