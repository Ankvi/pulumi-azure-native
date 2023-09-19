import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a single workbook template by its resourceName.
 * Azure REST API version: 2020-11-20.
 */
export function getWorkbookTemplate(args: GetWorkbookTemplateArgs, opts?: pulumi.InvokeOptions): Promise<GetWorkbookTemplateResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:insights:getWorkbookTemplate", {
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
 * Azure REST API version: 2020-11-20.
 */
export function getWorkbookTemplateOutput(args: GetWorkbookTemplateOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetWorkbookTemplateResult> {
    return pulumi.output(args).apply((a: any) => getWorkbookTemplate(a, opts))
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
