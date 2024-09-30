import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets Build details
 * Azure REST API version: 2024-07-01-preview.
 *
 * Other available API versions: 2024-08-01-preview.
 */
export function getProjectCatalogImageDefinitionBuildDetails(args: GetProjectCatalogImageDefinitionBuildDetailsArgs, opts?: pulumi.InvokeOptions): Promise<GetProjectCatalogImageDefinitionBuildDetailsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:devcenter:getProjectCatalogImageDefinitionBuildDetails", {
        "buildName": args.buildName,
        "catalogName": args.catalogName,
        "imageDefinitionName": args.imageDefinitionName,
        "projectName": args.projectName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetProjectCatalogImageDefinitionBuildDetailsArgs {
    /**
     * The ID of the Image Definition Build.
     */
    buildName: string;
    /**
     * The name of the Catalog.
     */
    catalogName: string;
    /**
     * The name of the Image Definition.
     */
    imageDefinitionName: string;
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
 * Represents a specific build of an Image Definition.
 */
export interface GetProjectCatalogImageDefinitionBuildDetailsResult {
    /**
     * End time of the task group.
     */
    readonly endTime: string;
    /**
     * Details for image creation error. Populated when the image creation is not successful.
     */
    readonly errorDetails: types.outputs.ImageCreationErrorDetailsResponse;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The specific image version used by the build.
     */
    readonly imageReference: types.outputs.ImageReferenceResponse;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Start time of the task group.
     */
    readonly startTime: string;
    /**
     * The status of the build.
     */
    readonly status: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The list of task groups executed during the image definition build.
     */
    readonly taskGroups: types.outputs.ImageDefinitionBuildTaskGroupResponse[];
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets Build details
 * Azure REST API version: 2024-07-01-preview.
 *
 * Other available API versions: 2024-08-01-preview.
 */
export function getProjectCatalogImageDefinitionBuildDetailsOutput(args: GetProjectCatalogImageDefinitionBuildDetailsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetProjectCatalogImageDefinitionBuildDetailsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:devcenter:getProjectCatalogImageDefinitionBuildDetails", {
        "buildName": args.buildName,
        "catalogName": args.catalogName,
        "imageDefinitionName": args.imageDefinitionName,
        "projectName": args.projectName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetProjectCatalogImageDefinitionBuildDetailsOutputArgs {
    /**
     * The ID of the Image Definition Build.
     */
    buildName: pulumi.Input<string>;
    /**
     * The name of the Catalog.
     */
    catalogName: pulumi.Input<string>;
    /**
     * The name of the Image Definition.
     */
    imageDefinitionName: pulumi.Input<string>;
    /**
     * The name of the project.
     */
    projectName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}