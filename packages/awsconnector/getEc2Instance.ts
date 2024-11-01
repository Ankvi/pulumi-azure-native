import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a Ec2Instance
 * Azure REST API version: 2024-12-01.
 */
export function getEc2Instance(args: GetEc2InstanceArgs, opts?: pulumi.InvokeOptions): Promise<GetEc2InstanceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:awsconnector:getEc2Instance", {
        "resourceUri": args.resourceUri,
    }, opts);
}

export interface GetEc2InstanceArgs {
    /**
     * The fully qualified Azure Resource manager identifier of the resource.
     */
    resourceUri: string;
}

/**
 * A Microsoft.AwsConnector resource
 */
export interface GetEc2InstanceResult {
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The resource-specific properties for this resource.
     */
    readonly properties: types.outputs.Ec2InstancePropertiesResponse;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Get a Ec2Instance
 * Azure REST API version: 2024-12-01.
 */
export function getEc2InstanceOutput(args: GetEc2InstanceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetEc2InstanceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:awsconnector:getEc2Instance", {
        "resourceUri": args.resourceUri,
    }, opts);
}

export interface GetEc2InstanceOutputArgs {
    /**
     * The fully qualified Azure Resource manager identifier of the resource.
     */
    resourceUri: pulumi.Input<string>;
}