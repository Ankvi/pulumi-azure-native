import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Get a single workbook by its resourceName.
 */
export function getWorkbook(args: GetWorkbookArgs, opts?: pulumi.InvokeOptions): Promise<GetWorkbookResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:insights/v20150501:getWorkbook", {
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
     * Azure resource Id
     */
    readonly id: string;
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
    readonly name: string;
    /**
     * Configuration of this particular workbook. Configuration data is a string containing valid JSON
     */
    readonly serializedData: string;
    /**
     * Enum indicating if this workbook definition is owned by a specific user or is shared between all users with access to the Application Insights component.
     */
    readonly sharedTypeKind: string;
    /**
     * Optional resourceId for a source resource.
     */
    readonly sourceResourceId?: string;
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
    readonly type: string;
    /**
     * Unique user id of the specific user that owns this workbook.
     */
    readonly userId: string;
    /**
     * This instance's version of the data model. This can change as new features are added that can be marked workbook.
     */
    readonly version?: string;
    /**
     * Internally assigned unique id of the workbook definition.
     */
    readonly workbookId: string;
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