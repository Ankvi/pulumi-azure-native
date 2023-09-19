import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get information about a configuration profile assignment
 */
export function getConfigurationProfileHCIAssignment(args: GetConfigurationProfileHCIAssignmentArgs, opts?: pulumi.InvokeOptions): Promise<GetConfigurationProfileHCIAssignmentResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:automanage/v20220504:getConfigurationProfileHCIAssignment", {
        "clusterName": args.clusterName,
        "configurationProfileAssignmentName": args.configurationProfileAssignmentName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetConfigurationProfileHCIAssignmentArgs {
    /**
     * The name of the Arc machine.
     */
    clusterName: string;
    /**
     * The configuration profile assignment name.
     */
    configurationProfileAssignmentName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Configuration profile assignment is an association between a VM and automanage profile configuration.
 */
export interface GetConfigurationProfileHCIAssignmentResult {
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
 */
export function getConfigurationProfileHCIAssignmentOutput(args: GetConfigurationProfileHCIAssignmentOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetConfigurationProfileHCIAssignmentResult> {
    return pulumi.output(args).apply((a: any) => getConfigurationProfileHCIAssignment(a, opts))
}

export interface GetConfigurationProfileHCIAssignmentOutputArgs {
    /**
     * The name of the Arc machine.
     */
    clusterName: pulumi.Input<string>;
    /**
     * The configuration profile assignment name.
     */
    configurationProfileAssignmentName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
