import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a Metadata.
 */
export function getMetadata(args: GetMetadataArgs, opts?: pulumi.InvokeOptions): Promise<GetMetadataResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:securityinsights/v20230201preview:getMetadata", {
        "metadataName": args.metadataName,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetMetadataArgs {
    /**
     * The Metadata name.
     */
    metadataName: string;
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
 * Metadata resource definition.
 */
export interface GetMetadataResult {
    /**
     * The creator of the content item.
     */
    readonly author?: types.outputs.MetadataAuthorResponse;
    /**
     * Categories for the solution content item
     */
    readonly categories?: types.outputs.MetadataCategoriesResponse;
    /**
     * Static ID for the content.  Used to identify dependencies and content from solutions or community.  Hard-coded/static for out of the box content and solutions. Dynamic for user-created.  This is the resource name
     */
    readonly contentId?: string;
    /**
     * Schema version of the content. Can be used to distinguish between different flow based on the schema version
     */
    readonly contentSchemaVersion?: string;
    /**
     * The custom version of the content. A optional free text
     */
    readonly customVersion?: string;
    /**
     * Dependencies for the content item, what other content items it requires to work.  Can describe more complex dependencies using a recursive/nested structure. For a single dependency an id/kind/version can be supplied or operator/criteria for complex formats.
     */
    readonly dependencies?: types.outputs.MetadataDependenciesResponse;
    /**
     * Etag of the azure resource
     */
    readonly etag?: string;
    /**
     * first publish date solution content item
     */
    readonly firstPublishDate?: string;
    /**
     * the icon identifier. this id can later be fetched from the solution template
     */
    readonly icon?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The kind of content the metadata is for.
     */
    readonly kind: string;
    /**
     * last publish date for the solution content item
     */
    readonly lastPublishDate?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Full parent resource ID of the content item the metadata is for.  This is the full resource ID including the scope (subscription and resource group)
     */
    readonly parentId: string;
    /**
     * preview image file names. These will be taken from the solution artifacts
     */
    readonly previewImages?: string[];
    /**
     * preview image file names. These will be taken from the solution artifacts. used for dark theme support
     */
    readonly previewImagesDark?: string[];
    /**
     * Providers for the solution content item
     */
    readonly providers?: string[];
    /**
     * Source of the content.  This is where/how it was created.
     */
    readonly source?: types.outputs.MetadataSourceResponse;
    /**
     * Support information for the metadata - type, name, contact information
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
     * Version of the content.  Default and recommended format is numeric (e.g. 1, 1.0, 1.0.0, 1.0.0.0), following ARM template best practices.  Can also be any string, but then we cannot guarantee any version checks
     */
    readonly version?: string;
}
/**
 * Get a Metadata.
 */
export function getMetadataOutput(args: GetMetadataOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetMetadataResult> {
    return pulumi.output(args).apply((a: any) => getMetadata(a, opts))
}

export interface GetMetadataOutputArgs {
    /**
     * The Metadata name.
     */
    metadataName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}