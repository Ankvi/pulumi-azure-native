import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get configuration assignment for resource..
 */
export function getConfigurationAssignmentParent(args: GetConfigurationAssignmentParentArgs, opts?: pulumi.InvokeOptions): Promise<GetConfigurationAssignmentParentResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:maintenance/v20230401:getConfigurationAssignmentParent", {
        "configurationAssignmentName": args.configurationAssignmentName,
        "providerName": args.providerName,
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
        "resourceParentName": args.resourceParentName,
        "resourceParentType": args.resourceParentType,
        "resourceType": args.resourceType,
    }, opts);
}

export interface GetConfigurationAssignmentParentArgs {
    /**
     * Configuration assignment name
     */
    configurationAssignmentName: string;
    /**
     * Resource provider name
     */
    providerName: string;
    /**
     * Resource group name
     */
    resourceGroupName: string;
    /**
     * Resource identifier
     */
    resourceName: string;
    /**
     * Resource parent identifier
     */
    resourceParentName: string;
    /**
     * Resource parent type
     */
    resourceParentType: string;
    /**
     * Resource type
     */
    resourceType: string;
}

/**
 * Configuration Assignment
 */
export interface GetConfigurationAssignmentParentResult {
    /**
     * Properties of the configuration assignment
     */
    readonly filter?: types.outputs.ConfigurationAssignmentFilterPropertiesResponse;
    /**
     * Fully qualified identifier of the resource
     */
    readonly id: string;
    /**
     * Location of the resource
     */
    readonly location?: string;
    /**
     * The maintenance configuration Id
     */
    readonly maintenanceConfigurationId?: string;
    /**
     * Name of the resource
     */
    readonly name: string;
    /**
     * The unique resourceId
     */
    readonly resourceId?: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Type of the resource
     */
    readonly type: string;
}
/**
 * Get configuration assignment for resource..
 */
export function getConfigurationAssignmentParentOutput(args: GetConfigurationAssignmentParentOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetConfigurationAssignmentParentResult> {
    return pulumi.output(args).apply((a: any) => getConfigurationAssignmentParent(a, opts))
}

export interface GetConfigurationAssignmentParentOutputArgs {
    /**
     * Configuration assignment name
     */
    configurationAssignmentName: pulumi.Input<string>;
    /**
     * Resource provider name
     */
    providerName: pulumi.Input<string>;
    /**
     * Resource group name
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource identifier
     */
    resourceName: pulumi.Input<string>;
    /**
     * Resource parent identifier
     */
    resourceParentName: pulumi.Input<string>;
    /**
     * Resource parent type
     */
    resourceParentType: pulumi.Input<string>;
    /**
     * Resource type
     */
    resourceType: pulumi.Input<string>;
}