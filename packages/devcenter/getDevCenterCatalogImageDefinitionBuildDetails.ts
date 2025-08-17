import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets Build details
 *
 * Uses Azure REST API version 2025-04-01-preview.
 *
 * Other available API versions: 2025-07-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native devcenter [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getDevCenterCatalogImageDefinitionBuildDetails(args: GetDevCenterCatalogImageDefinitionBuildDetailsArgs, opts?: pulumi.InvokeOptions): Promise<GetDevCenterCatalogImageDefinitionBuildDetailsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:devcenter:getDevCenterCatalogImageDefinitionBuildDetails", {
        "buildName": args.buildName,
        "catalogName": args.catalogName,
        "devCenterName": args.devCenterName,
        "imageDefinitionName": args.imageDefinitionName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDevCenterCatalogImageDefinitionBuildDetailsArgs {
    /**
     * The ID of the Image Definition Build.
     */
    buildName: string;
    /**
     * The name of the Catalog.
     */
    catalogName: string;
    /**
     * The name of the devcenter.
     */
    devCenterName: string;
    /**
     * The name of the Image Definition.
     */
    imageDefinitionName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Represents a specific build of an Image Definition.
 */
export interface GetDevCenterCatalogImageDefinitionBuildDetailsResult {
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
 *
 * Uses Azure REST API version 2025-04-01-preview.
 *
 * Other available API versions: 2025-07-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native devcenter [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getDevCenterCatalogImageDefinitionBuildDetailsOutput(args: GetDevCenterCatalogImageDefinitionBuildDetailsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDevCenterCatalogImageDefinitionBuildDetailsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:devcenter:getDevCenterCatalogImageDefinitionBuildDetails", {
        "buildName": args.buildName,
        "catalogName": args.catalogName,
        "devCenterName": args.devCenterName,
        "imageDefinitionName": args.imageDefinitionName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDevCenterCatalogImageDefinitionBuildDetailsOutputArgs {
    /**
     * The ID of the Image Definition Build.
     */
    buildName: pulumi.Input<string>;
    /**
     * The name of the Catalog.
     */
    catalogName: pulumi.Input<string>;
    /**
     * The name of the devcenter.
     */
    devCenterName: pulumi.Input<string>;
    /**
     * The name of the Image Definition.
     */
    imageDefinitionName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}