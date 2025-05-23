import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a single private workbook by its resourceName.
 *
 * Uses Azure REST API version 2021-03-08.
 *
 * Other available API versions: 2015-05-01, 2020-10-20. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native applicationinsights [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getMyWorkbook(args: GetMyWorkbookArgs, opts?: pulumi.InvokeOptions): Promise<GetMyWorkbookResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:applicationinsights:getMyWorkbook", {
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetMyWorkbookArgs {
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
 * An Application Insights private workbook definition.
 */
export interface GetMyWorkbookResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Workbook category, as defined by the user at creation time.
     */
    readonly category: string;
    /**
     * The user-defined name of the private workbook.
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
    readonly identity?: types.outputs.MyWorkbookManagedIdentityResponse;
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
     * Configuration of this particular private workbook. Configuration data is a string containing valid JSON
     */
    readonly serializedData: string;
    /**
     * Optional resourceId for a source resource.
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
     * Date and time in UTC of the last modification that was made to this private workbook definition.
     */
    readonly timeModified: string;
    /**
     * Azure resource type
     */
    readonly type?: string;
    /**
     * Unique user id of the specific user that owns this private workbook.
     */
    readonly userId: string;
    /**
     * This instance's version of the data model. This can change as new features are added that can be marked private workbook.
     */
    readonly version?: string;
}
/**
 * Get a single private workbook by its resourceName.
 *
 * Uses Azure REST API version 2021-03-08.
 *
 * Other available API versions: 2015-05-01, 2020-10-20. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native applicationinsights [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getMyWorkbookOutput(args: GetMyWorkbookOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetMyWorkbookResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:applicationinsights:getMyWorkbook", {
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetMyWorkbookOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Application Insights component resource.
     */
    resourceName: pulumi.Input<string>;
}