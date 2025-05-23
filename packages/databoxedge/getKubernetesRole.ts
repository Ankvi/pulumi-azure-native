import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a specific role by name.
 *
 * Uses Azure REST API version 2023-07-01.
 */
export function getKubernetesRole(args: GetKubernetesRoleArgs, opts?: pulumi.InvokeOptions): Promise<GetKubernetesRoleResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:databoxedge:getKubernetesRole", {
        "deviceName": args.deviceName,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetKubernetesRoleArgs {
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
 * The limited preview of Kubernetes Cluster Management from the Azure supports:
 * 1. Using a simple turn-key option in Azure Portal, deploy a Kubernetes cluster on your Azure Stack Edge device. 
 * 2. Configure Kubernetes cluster running on your device with Arc enabled Kubernetes with a click of a button in the Azure Portal. 
 *  Azure Arc enables organizations to view, manage, and govern their on-premises Kubernetes clusters using the Azure Portal, command line tools, and APIs.
 * 3. Easily configure Persistent Volumes using SMB and NFS shares for storing container data. 
 *  For more information, refer to the document here: https://databoxupdatepackages.blob.core.windows.net/documentation/Microsoft-Azure-Stack-Edge-K8-Cloud-Management-20210323.pdf 
 *  Or Demo: https://databoxupdatepackages.blob.core.windows.net/documentation/Microsoft-Azure-Stack-Edge-K8S-Cloud-Management-20210323.mp4
 *  By using this feature, you agree to the preview legal terms. See the https://azure.microsoft.com/en-us/support/legal/preview-supplemental-terms/
 */
export interface GetKubernetesRoleResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Host OS supported by the Kubernetes role.
     */
    readonly hostPlatform: string;
    /**
     * Platform where the runtime is hosted.
     */
    readonly hostPlatformType: string;
    /**
     * The path ID that uniquely identifies the object.
     */
    readonly id: string;
    /**
     * Role type.
     * Expected value is 'Kubernetes'.
     */
    readonly kind: "Kubernetes";
    /**
     * Kubernetes cluster configuration
     */
    readonly kubernetesClusterInfo: types.outputs.KubernetesClusterInfoResponse;
    /**
     * Kubernetes role resources
     */
    readonly kubernetesRoleResources: types.outputs.KubernetesRoleResourcesResponse;
    /**
     * The object name.
     */
    readonly name: string;
    /**
     * State of Kubernetes deployment
     */
    readonly provisioningState: string;
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
export function getKubernetesRoleOutput(args: GetKubernetesRoleOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetKubernetesRoleResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:databoxedge:getKubernetesRole", {
        "deviceName": args.deviceName,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetKubernetesRoleOutputArgs {
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