import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a template byt its identifier.
 */
export function getContentTemplate(args: GetContentTemplateArgs, opts?: pulumi.InvokeOptions): Promise<GetContentTemplateResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:securityinsights/v20230801preview:getContentTemplate", {
        "resourceGroupName": args.resourceGroupName,
        "templateId": args.templateId,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetContentTemplateArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * template Id
     */
    templateId: string;
    /**
     * The name of the workspace.
     */
    workspaceName: string;
}

/**
 * Template resource definition.
 */
export interface GetContentTemplateResult {
    /**
     * The creator of the content item.
     */
    readonly author?: types.outputs.MetadataAuthorResponse;
    /**
     * Categories for the item
     */
    readonly categories?: types.outputs.MetadataCategoriesResponse;
    /**
     * Static ID for the content.  Used to identify dependencies and content from solutions or community.  Hard-coded/static for out of the box content and solutions. Dynamic for user-created.  This is the resource name
     */
    readonly contentId: string;
    /**
     * The kind of content the template is for.
     */
    readonly contentKind: string;
    /**
     * Unique ID for the content. It should be generated based on the contentId of the package, contentId of the template, contentKind of the template and the contentVersion of the template
     */
    readonly contentProductId: string;
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
     * The display name of the template
     */
    readonly displayName: string;
    /**
     * Etag of the azure resource
     */
    readonly etag?: string;
    /**
     * first publish date content item
     */
    readonly firstPublishDate?: string;
    /**
     * the icon identifier. this id can later be fetched from the content metadata
     */
    readonly icon?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * last publish date for the content item
     */
    readonly lastPublishDate?: string;
    /**
     * The JSON of the ARM template to deploy active content
     */
    readonly mainTemplate?: any;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * the package Id contains this template
     */
    readonly packageId: string;
    /**
     * the packageKind of the package contains this template
     */
    readonly packageKind?: string;
    /**
     * the name of the package contains this template
     */
    readonly packageName?: string;
    /**
     * Version of the package.  Default and recommended format is numeric (e.g. 1, 1.0, 1.0.0, 1.0.0.0), following ARM metadata best practices.  Can also be any string, but then we cannot guarantee any version checks
     */
    readonly packageVersion: string;
    /**
     * preview image file names. These will be taken from the solution artifacts
     */
    readonly previewImages?: string[];
    /**
     * preview image file names. These will be taken from the solution artifacts. used for dark theme support
     */
    readonly previewImagesDark?: string[];
    /**
     * Providers for the content item
     */
    readonly providers?: string[];
    /**
     * Source of the content.  This is where/how it was created.
     */
    readonly source: types.outputs.MetadataSourceResponse;
    /**
     * Support information for the template - type, name, contact information
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
     * Version of the content.  Default and recommended format is numeric (e.g. 1, 1.0, 1.0.0, 1.0.0.0), following ARM metadata best practices.  Can also be any string, but then we cannot guarantee any version checks
     */
    readonly version: string;
}
/**
 * Gets a template byt its identifier.
 */
export function getContentTemplateOutput(args: GetContentTemplateOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetContentTemplateResult> {
    return pulumi.output(args).apply((a: any) => getContentTemplate(a, opts))
}

export interface GetContentTemplateOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * template Id
     */
    templateId: pulumi.Input<string>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}