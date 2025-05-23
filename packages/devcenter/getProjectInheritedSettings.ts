import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets applicable inherited settings for this project.
 *
 * Uses Azure REST API version 2024-10-01-preview.
 *
 * Other available API versions: 2024-05-01-preview, 2024-06-01-preview, 2024-07-01-preview, 2024-08-01-preview, 2025-02-01, 2025-04-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native devcenter [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getProjectInheritedSettings(args: GetProjectInheritedSettingsArgs, opts?: pulumi.InvokeOptions): Promise<GetProjectInheritedSettingsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:devcenter:getProjectInheritedSettings", {
        "projectName": args.projectName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetProjectInheritedSettingsArgs {
    /**
     * The name of the project.
     */
    projectName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Applicable inherited settings for a project.
 */
export interface GetProjectInheritedSettingsResult {
    /**
     * Network settings that will be enforced on this project.
     */
    readonly networkSettings: types.outputs.ProjectNetworkSettingsResponse;
    /**
     * Dev Center settings to be used when associating a project with a catalog.
     */
    readonly projectCatalogSettings: types.outputs.DevCenterProjectCatalogSettingsResponse;
}
/**
 * Gets applicable inherited settings for this project.
 *
 * Uses Azure REST API version 2024-10-01-preview.
 *
 * Other available API versions: 2024-05-01-preview, 2024-06-01-preview, 2024-07-01-preview, 2024-08-01-preview, 2025-02-01, 2025-04-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native devcenter [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getProjectInheritedSettingsOutput(args: GetProjectInheritedSettingsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetProjectInheritedSettingsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:devcenter:getProjectInheritedSettings", {
        "projectName": args.projectName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetProjectInheritedSettingsOutputArgs {
    /**
     * The name of the project.
     */
    projectName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}