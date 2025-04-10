import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets an installed packages by its id.
 *
 * Uses Azure REST API version 2023-06-01-preview.
 *
 * Other available API versions: 2023-07-01-preview, 2023-08-01-preview, 2023-09-01-preview, 2023-10-01-preview, 2023-11-01, 2023-12-01-preview, 2024-01-01-preview, 2024-03-01, 2024-04-01-preview, 2024-09-01, 2024-10-01-preview, 2025-01-01-preview, 2025-03-01.
 */
export function getContentPackage(args: GetContentPackageArgs, opts?: pulumi.InvokeOptions): Promise<GetContentPackageResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:securityinsights:getContentPackage", {
        "packageId": args.packageId,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetContentPackageArgs {
    /**
     * package Id
     */
    packageId: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the workspace.
     */
    workspaceName: string;
}

/**
 * Represents a Package in Azure Security Insights.
 */
export interface GetContentPackageResult {
    /**
     * The author of the package
     */
    readonly author?: types.outputs.MetadataAuthorResponse;
    /**
     * The categories of the package
     */
    readonly categories?: types.outputs.MetadataCategoriesResponse;
    /**
     * The package id
     */
    readonly contentId: string;
    /**
     * The package kind
     */
    readonly contentKind: string;
    /**
     * The version of the content schema.
     */
    readonly contentSchemaVersion?: string;
    /**
     * The support tier of the package
     */
    readonly dependencies?: types.outputs.MetadataDependenciesResponse;
    /**
     * The description of the package
     */
    readonly description?: string;
    /**
     * The display name of the package
     */
    readonly displayName: string;
    /**
     * Etag of the azure resource
     */
    readonly etag?: string;
    /**
     * first publish date package item
     */
    readonly firstPublishDate?: string;
    /**
     * the icon identifier. this id can later be fetched from the content metadata
     */
    readonly icon?: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * Flag indicates if this package is among the featured list.
     */
    readonly isFeatured?: string;
    /**
     * Flag indicates if this is a newly published package.
     */
    readonly isNew?: string;
    /**
     * Flag indicates if this package is in preview.
     */
    readonly isPreview?: string;
    /**
     * last publish date for the package item
     */
    readonly lastPublishDate?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Providers for the package item
     */
    readonly providers?: string[];
    /**
     * The publisher display name of the package
     */
    readonly publisherDisplayName?: string;
    /**
     * The source of the package
     */
    readonly source?: types.outputs.MetadataSourceResponse;
    /**
     * The support tier of the package
     */
    readonly support?: types.outputs.MetadataSupportResponse;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * the tactics the resource covers
     */
    readonly threatAnalysisTactics?: string[];
    /**
     * the techniques the resource covers, these have to be aligned with the tactics being used
     */
    readonly threatAnalysisTechniques?: string[];
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * the latest version number of the package
     */
    readonly version: string;
}
/**
 * Gets an installed packages by its id.
 *
 * Uses Azure REST API version 2023-06-01-preview.
 *
 * Other available API versions: 2023-07-01-preview, 2023-08-01-preview, 2023-09-01-preview, 2023-10-01-preview, 2023-11-01, 2023-12-01-preview, 2024-01-01-preview, 2024-03-01, 2024-04-01-preview, 2024-09-01, 2024-10-01-preview, 2025-01-01-preview, 2025-03-01.
 */
export function getContentPackageOutput(args: GetContentPackageOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetContentPackageResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:securityinsights:getContentPackage", {
        "packageId": args.packageId,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetContentPackageOutputArgs {
    /**
     * package Id
     */
    packageId: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}