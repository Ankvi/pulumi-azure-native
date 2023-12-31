import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a single workbook by its resourceName.
 */
export function getWorkbook(args: GetWorkbookArgs, opts?: pulumi.InvokeOptions): Promise<GetWorkbookResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:insights/v20210308:getWorkbook", {
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetWorkbookArgs {
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
 * An Application Insights workbook definition.
 */
export interface GetWorkbookResult {
    /**
     * Workbook category, as defined by the user at creation time.
     */
    readonly category: string;
    /**
     * The description of the workbook.
     */
    readonly description?: string;
    /**
     * The user-defined name (display name) of the workbook.
     */
    readonly displayName: string;
    /**
     * Resource etag
     */
    readonly etag?: {[key: string]: string};
    /**
     * Azure resource Id
     */
    readonly id?: string;
    /**
     * Identity used for BYOS
     */
    readonly identity?: types.outputs.WorkbookManagedIdentityResponse;
    /**
     * The kind of workbook. Choices are user and shared.
     */
    readonly kind?: string;
    /**
     * Resource location
     */
    readonly location?: string;
    /**
     * Azure resource name
     */
    readonly name?: string;
    /**
     * The unique revision id for this workbook definition
     */
    readonly revision?: string;
    /**
     * Configuration of this particular workbook. Configuration data is a string containing valid JSON
     */
    readonly serializedData: string;
    /**
     * ResourceId for a source resource.
     */
    readonly sourceId?: string;
    /**
     * BYOS Storage Account URI
     */
    readonly storageUri?: string;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags
     */
    readonly tags?: {[key: string]: string};
    /**
     * Date and time in UTC of the last modification that was made to this workbook definition.
     */
    readonly timeModified: string;
    /**
     * Azure resource type
     */
    readonly type?: string;
    /**
     * Unique user id of the specific user that owns this workbook.
     */
    readonly userId: string;
    /**
     * Workbook version
     */
    readonly version?: string;
}
/**
 * Get a single workbook by its resourceName.
 */
export function getWorkbookOutput(args: GetWorkbookOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetWorkbookResult> {
    return pulumi.output(args).apply((a: any) => getWorkbook(a, opts))
}

export interface GetWorkbookOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Application Insights component resource.
     */
    resourceName: pulumi.Input<string>;
}
