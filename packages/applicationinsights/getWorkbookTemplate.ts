import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a single workbook template by its resourceName.
 *
 * Uses Azure REST API version 2020-11-20.
 *
 * Other available API versions: 2019-10-17-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native applicationinsights [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getWorkbookTemplate(args: GetWorkbookTemplateArgs, opts?: pulumi.InvokeOptions): Promise<GetWorkbookTemplateResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:applicationinsights:getWorkbookTemplate", {
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetWorkbookTemplateArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the Application Insights component resource.
     */
    resourceName: string;
}

/**
 * An Application Insights workbook template definition.
 */
export interface GetWorkbookTemplateResult {
    /**
     * Information about the author of the workbook template.
     */
    readonly author?: string;
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Workbook galleries supported by the template.
     */
    readonly galleries: types.outputs.WorkbookTemplateGalleryResponse[];
    /**
     * Azure resource Id
     */
    readonly id: string;
    /**
     * Key value pair of localized gallery. Each key is the locale code of languages supported by the Azure portal.
     */
    readonly localized?: {[key: string]: types.outputs.WorkbookTemplateLocalizedGalleryResponse[]};
    /**
     * Resource location
     */
    readonly location: string;
    /**
     * Azure resource name.
     */
    readonly name: string;
    /**
     * Priority of the template. Determines which template to open when a workbook gallery is opened in viewer mode.
     */
    readonly priority?: number;
    /**
     * Resource tags
     */
    readonly tags?: {[key: string]: string};
    /**
     * Valid JSON object containing workbook template payload.
     */
    readonly templateData: any;
    /**
     * Azure resource type
     */
    readonly type: string;
}
/**
 * Get a single workbook template by its resourceName.
 *
 * Uses Azure REST API version 2020-11-20.
 *
 * Other available API versions: 2019-10-17-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native applicationinsights [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getWorkbookTemplateOutput(args: GetWorkbookTemplateOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetWorkbookTemplateResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:applicationinsights:getWorkbookTemplate", {
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetWorkbookTemplateOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Application Insights component resource.
     */
    resourceName: pulumi.Input<string>;
}