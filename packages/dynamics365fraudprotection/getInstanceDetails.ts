import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets details about the specified instances.
 *
 * Uses Azure REST API version 2021-02-01-preview.
 */
export function getInstanceDetails(args: GetInstanceDetailsArgs, opts?: pulumi.InvokeOptions): Promise<GetInstanceDetailsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:dynamics365fraudprotection:getInstanceDetails", {
        "instanceName": args.instanceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetInstanceDetailsArgs {
    /**
     * The name of the instance. It must be a minimum of 3 characters, and a maximum of 63.
     */
    instanceName: string;
    /**
     * The name of the Azure Resource group of which a given DFP instance is part. This name must be at least 1 character in length, and no more than 90.
     */
    resourceGroupName: string;
}

/**
 * Represents an instance of a DFP instance resource.
 */
export interface GetInstanceDetailsResult {
    /**
     * A collection of DFP instance administrators
     */
    readonly administration?: types.outputs.DFPInstanceAdministratorsResponse;
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Location of the DFP resource.
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The current deployment state of DFP resource. The provisioningState is to indicate states for resource provisioning.
     */
    readonly provisioningState: string;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Key-value pairs of additional resource provisioning properties.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets details about the specified instances.
 *
 * Uses Azure REST API version 2021-02-01-preview.
 */
export function getInstanceDetailsOutput(args: GetInstanceDetailsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetInstanceDetailsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:dynamics365fraudprotection:getInstanceDetails", {
        "instanceName": args.instanceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetInstanceDetailsOutputArgs {
    /**
     * The name of the instance. It must be a minimum of 3 characters, and a maximum of 63.
     */
    instanceName: pulumi.Input<string>;
    /**
     * The name of the Azure Resource group of which a given DFP instance is part. This name must be at least 1 character in length, and no more than 90.
     */
    resourceGroupName: pulumi.Input<string>;
}