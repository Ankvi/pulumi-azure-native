import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get configuration for resource.
 */
export function getConfigurationAssignment(args: GetConfigurationAssignmentArgs, opts?: pulumi.InvokeOptions): Promise<GetConfigurationAssignmentResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:maintenance/v20221101preview:getConfigurationAssignment", {
        "configurationAssignmentName": args.configurationAssignmentName,
        "providerName": args.providerName,
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
        "resourceType": args.resourceType,
    }, opts);
}

export interface GetConfigurationAssignmentArgs {
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
     * Resource type
     */
    resourceType: string;
}

/**
 * Configuration Assignment
 */
export interface GetConfigurationAssignmentResult {
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
 * Get configuration for resource.
 */
export function getConfigurationAssignmentOutput(args: GetConfigurationAssignmentOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetConfigurationAssignmentResult> {
    return pulumi.output(args).apply((a: any) => getConfigurationAssignment(a, opts))
}

export interface GetConfigurationAssignmentOutputArgs {
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
     * Resource type
     */
    resourceType: pulumi.Input<string>;
}
