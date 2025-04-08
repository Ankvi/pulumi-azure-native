import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get configuration assignment for resource..
 *
 * Uses Azure REST API version 2023-10-01-preview.
 *
 * Other available API versions: 2022-11-01-preview, 2023-04-01, 2023-09-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native maintenance [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getConfigurationAssignment(args: GetConfigurationAssignmentArgs, opts?: pulumi.InvokeOptions): Promise<GetConfigurationAssignmentResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:maintenance:getConfigurationAssignment", {
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
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
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
 *
 * Uses Azure REST API version 2023-10-01-preview.
 *
 * Other available API versions: 2022-11-01-preview, 2023-04-01, 2023-09-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native maintenance [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getConfigurationAssignmentOutput(args: GetConfigurationAssignmentOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetConfigurationAssignmentResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:maintenance:getConfigurationAssignment", {
        "configurationAssignmentName": args.configurationAssignmentName,
        "providerName": args.providerName,
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
        "resourceType": args.resourceType,
    }, opts);
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