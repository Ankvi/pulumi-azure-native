import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a single workbook by its resourceName.
 */
export function getWorkbook(args: GetWorkbookArgs, opts?: pulumi.InvokeOptions): Promise<GetWorkbookResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:insights/v20220401:getWorkbook", {
        "canFetchContent": args.canFetchContent,
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetWorkbookArgs {
    /**
     * Flag indicating whether or not to return the full content for each applicable workbook. If false, only return summary content for workbooks.
     */
    canFetchContent?: boolean;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the resource.
     */
    resourceName: string;
}

/**
 * A workbook definition.
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
    readonly etag?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Identity used for BYOS
     */
    readonly identity?: types.outputs.WorkbookResourceResponseIdentity;
    /**
     * The kind of workbook. Only valid value is shared.
     */
    readonly kind?: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The unique revision id for this workbook definition
     */
    readonly revision: string;
    /**
     * Configuration of this particular workbook. Configuration data is a string containing valid JSON
     */
    readonly serializedData: string;
    /**
     * ResourceId for a source resource.
     */
    readonly sourceId?: string;
    /**
     * The resourceId to the storage account when bring your own storage is used
     */
    readonly storageUri?: string;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Date and time in UTC of the last modification that was made to this workbook definition.
     */
    readonly timeModified: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * Unique user id of the specific user that owns this workbook.
     */
    readonly userId: string;
    /**
     * Workbook schema version format, like 'Notebook/1.0', which should match the workbook in serializedData
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
     * Flag indicating whether or not to return the full content for each applicable workbook. If false, only return summary content for workbooks.
     */
    canFetchContent?: pulumi.Input<boolean>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the resource.
     */
    resourceName: pulumi.Input<string>;
}
