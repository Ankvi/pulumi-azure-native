import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a Ec2NetworkInterface
 *
 * Uses Azure REST API version 2024-12-01.
 */
export function getEc2NetworkInterface(args: GetEc2NetworkInterfaceArgs, opts?: pulumi.InvokeOptions): Promise<GetEc2NetworkInterfaceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:awsconnector:getEc2NetworkInterface", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetEc2NetworkInterfaceArgs {
    /**
     * Name of Ec2NetworkInterface
     */
    name: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * A Microsoft.AwsConnector resource
 */
export interface GetEc2NetworkInterfaceResult {
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
     * The resource-specific properties for this resource.
     */
    readonly properties: types.outputs.Ec2NetworkInterfacePropertiesResponse;
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
 * Get a Ec2NetworkInterface
 *
 * Uses Azure REST API version 2024-12-01.
 */
export function getEc2NetworkInterfaceOutput(args: GetEc2NetworkInterfaceOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetEc2NetworkInterfaceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:awsconnector:getEc2NetworkInterface", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetEc2NetworkInterfaceOutputArgs {
    /**
     * Name of Ec2NetworkInterface
     */
    name: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}