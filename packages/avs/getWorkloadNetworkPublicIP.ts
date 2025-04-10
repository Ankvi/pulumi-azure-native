import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * NSX Public IP Block
 *
 * Uses Azure REST API version 2022-05-01.
 *
 * Other available API versions: 2023-03-01, 2023-09-01.
 */
export function getWorkloadNetworkPublicIP(args: GetWorkloadNetworkPublicIPArgs, opts?: pulumi.InvokeOptions): Promise<GetWorkloadNetworkPublicIPResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:avs:getWorkloadNetworkPublicIP", {
        "privateCloudName": args.privateCloudName,
        "publicIPId": args.publicIPId,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetWorkloadNetworkPublicIPArgs {
    /**
     * Name of the private cloud
     */
    privateCloudName: string;
    /**
     * NSX Public IP Block identifier. Generally the same as the Public IP Block's display name
     */
    publicIPId: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * NSX Public IP Block
 */
export interface GetWorkloadNetworkPublicIPResult {
    /**
     * Display name of the Public IP Block.
     */
    readonly displayName?: string;
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Number of Public IPs requested.
     */
    readonly numberOfPublicIPs?: number;
    /**
     * The provisioning state
     */
    readonly provisioningState: string;
    /**
     * CIDR Block of the Public IP Block.
     */
    readonly publicIPBlock: string;
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * NSX Public IP Block
 *
 * Uses Azure REST API version 2022-05-01.
 *
 * Other available API versions: 2023-03-01, 2023-09-01.
 */
export function getWorkloadNetworkPublicIPOutput(args: GetWorkloadNetworkPublicIPOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetWorkloadNetworkPublicIPResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:avs:getWorkloadNetworkPublicIP", {
        "privateCloudName": args.privateCloudName,
        "publicIPId": args.publicIPId,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetWorkloadNetworkPublicIPOutputArgs {
    /**
     * Name of the private cloud
     */
    privateCloudName: pulumi.Input<string>;
    /**
     * NSX Public IP Block identifier. Generally the same as the Public IP Block's display name
     */
    publicIPId: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}