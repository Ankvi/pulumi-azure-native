import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get information about a configuration profile assignment
 *
 * Uses Azure REST API version 2022-05-04.
 */
export function getConfigurationProfileAssignment(args: GetConfigurationProfileAssignmentArgs, opts?: pulumi.InvokeOptions): Promise<GetConfigurationProfileAssignmentResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:automanage:getConfigurationProfileAssignment", {
        "configurationProfileAssignmentName": args.configurationProfileAssignmentName,
        "resourceGroupName": args.resourceGroupName,
        "vmName": args.vmName,
    }, opts);
}

export interface GetConfigurationProfileAssignmentArgs {
    /**
     * The configuration profile assignment name.
     */
    configurationProfileAssignmentName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the virtual machine.
     */
    vmName: string;
}

/**
 * Configuration profile assignment is an association between a VM and automanage profile configuration.
 */
export interface GetConfigurationProfileAssignmentResult {
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Azure resource id. Indicates if this resource is managed by another Azure resource.
     */
    readonly managedBy: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Properties of the configuration profile assignment.
     */
    readonly properties: types.outputs.ConfigurationProfileAssignmentPropertiesResponse;
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
 * Get information about a configuration profile assignment
 *
 * Uses Azure REST API version 2022-05-04.
 */
export function getConfigurationProfileAssignmentOutput(args: GetConfigurationProfileAssignmentOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetConfigurationProfileAssignmentResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:automanage:getConfigurationProfileAssignment", {
        "configurationProfileAssignmentName": args.configurationProfileAssignmentName,
        "resourceGroupName": args.resourceGroupName,
        "vmName": args.vmName,
    }, opts);
}

export interface GetConfigurationProfileAssignmentOutputArgs {
    /**
     * The configuration profile assignment name.
     */
    configurationProfileAssignmentName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the virtual machine.
     */
    vmName: pulumi.Input<string>;
}