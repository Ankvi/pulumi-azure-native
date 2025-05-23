import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a single software update configuration by name.
 *
 * Uses Azure REST API version 2023-05-15-preview.
 *
 * Other available API versions: 2017-05-15-preview, 2019-06-01, 2024-10-23. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native automation [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getSoftwareUpdateConfigurationByName(args: GetSoftwareUpdateConfigurationByNameArgs, opts?: pulumi.InvokeOptions): Promise<GetSoftwareUpdateConfigurationByNameResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:automation:getSoftwareUpdateConfigurationByName", {
        "automationAccountName": args.automationAccountName,
        "resourceGroupName": args.resourceGroupName,
        "softwareUpdateConfigurationName": args.softwareUpdateConfigurationName,
    }, opts);
}

export interface GetSoftwareUpdateConfigurationByNameArgs {
    /**
     * The name of the automation account.
     */
    automationAccountName: string;
    /**
     * Name of an Azure Resource group.
     */
    resourceGroupName: string;
    /**
     * The name of the software update configuration to be created.
     */
    softwareUpdateConfigurationName: string;
}

/**
 * Software update configuration properties.
 */
export interface GetSoftwareUpdateConfigurationByNameResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * CreatedBy property, which only appears in the response.
     */
    readonly createdBy: string;
    /**
     * Creation time of the resource, which only appears in the response.
     */
    readonly creationTime: string;
    /**
     * Details of provisioning error
     */
    readonly error?: types.outputs.ErrorResponseResponse;
    /**
     * Resource Id.
     */
    readonly id: string;
    /**
     * LastModifiedBy property, which only appears in the response.
     */
    readonly lastModifiedBy: string;
    /**
     * Last time resource was modified, which only appears in the response.
     */
    readonly lastModifiedTime: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Provisioning state for the software update configuration, which only appears in the response.
     */
    readonly provisioningState: string;
    /**
     * Schedule information for the Software update configuration
     */
    readonly scheduleInfo: types.outputs.SUCSchedulePropertiesResponse;
    /**
     * Tasks information for the Software update configuration.
     */
    readonly tasks?: types.outputs.SoftwareUpdateConfigurationTasksResponse;
    /**
     * Resource type
     */
    readonly type: string;
    /**
     * update specific properties for the Software update configuration
     */
    readonly updateConfiguration: types.outputs.UpdateConfigurationResponse;
}
/**
 * Get a single software update configuration by name.
 *
 * Uses Azure REST API version 2023-05-15-preview.
 *
 * Other available API versions: 2017-05-15-preview, 2019-06-01, 2024-10-23. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native automation [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getSoftwareUpdateConfigurationByNameOutput(args: GetSoftwareUpdateConfigurationByNameOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSoftwareUpdateConfigurationByNameResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:automation:getSoftwareUpdateConfigurationByName", {
        "automationAccountName": args.automationAccountName,
        "resourceGroupName": args.resourceGroupName,
        "softwareUpdateConfigurationName": args.softwareUpdateConfigurationName,
    }, opts);
}

export interface GetSoftwareUpdateConfigurationByNameOutputArgs {
    /**
     * The name of the automation account.
     */
    automationAccountName: pulumi.Input<string>;
    /**
     * Name of an Azure Resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the software update configuration to be created.
     */
    softwareUpdateConfigurationName: pulumi.Input<string>;
}