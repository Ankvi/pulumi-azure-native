import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the specified network security group.
 * Azure REST API version: 2024-02-01-preview.
 *
 * Other available API versions: 2024-05-01-preview.
 */
export function getNetworkSecurityGroup(args: GetNetworkSecurityGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetNetworkSecurityGroupResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:azurestackhci:getNetworkSecurityGroup", {
        "networkSecurityGroupName": args.networkSecurityGroupName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetNetworkSecurityGroupArgs {
    /**
     * Name of the network security group
     */
    networkSecurityGroupName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * NetworkSecurityGroup resource.
 */
export interface GetNetworkSecurityGroupResult {
    /**
     * If eTag is provided in the response body, it may also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields.
     */
    readonly eTag: string;
    /**
     * The extendedLocation of the resource.
     */
    readonly extendedLocation?: types.outputs.ExtendedLocationResponse;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * A collection of references to network interfaces that are currently using this NSG.
     */
    readonly networkInterfaces: types.outputs.NetworkInterfaceArmReferenceResponse[];
    /**
     * The provisioning state of the network security group resource.
     */
    readonly provisioningState: string;
    /**
     * A collection of references to logical networks that are currently using this NSG
     */
    readonly subnets: types.outputs.LogicalNetworkArmReferenceResponse[];
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets the specified network security group.
 * Azure REST API version: 2024-02-01-preview.
 *
 * Other available API versions: 2024-05-01-preview.
 */
export function getNetworkSecurityGroupOutput(args: GetNetworkSecurityGroupOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetNetworkSecurityGroupResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:azurestackhci:getNetworkSecurityGroup", {
        "networkSecurityGroupName": args.networkSecurityGroupName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetNetworkSecurityGroupOutputArgs {
    /**
     * Name of the network security group
     */
    networkSecurityGroupName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}