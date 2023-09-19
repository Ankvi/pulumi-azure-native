import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get information about a configuration profile assignment
 */
export function getConfigurationProfileHCRPAssignment(args: GetConfigurationProfileHCRPAssignmentArgs, opts?: pulumi.InvokeOptions): Promise<GetConfigurationProfileHCRPAssignmentResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:automanage/v20220504:getConfigurationProfileHCRPAssignment", {
        "configurationProfileAssignmentName": args.configurationProfileAssignmentName,
        "machineName": args.machineName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetConfigurationProfileHCRPAssignmentArgs {
    /**
     * The configuration profile assignment name.
     */
    configurationProfileAssignmentName: string;
    /**
     * The name of the Arc machine.
     */
    machineName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Configuration profile assignment is an association between a VM and automanage profile configuration.
 */
export interface GetConfigurationProfileHCRPAssignmentResult {
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
export function getConfigurationProfileHCRPAssignmentOutput(args: GetConfigurationProfileHCRPAssignmentOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetConfigurationProfileHCRPAssignmentResult> {
    return pulumi.output(args).apply((a: any) => getConfigurationProfileHCRPAssignment(a, opts))
}

export interface GetConfigurationProfileHCRPAssignmentOutputArgs {
    /**
     * The configuration profile assignment name.
     */
    configurationProfileAssignmentName: pulumi.Input<string>;
    /**
     * The name of the Arc machine.
     */
    machineName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
