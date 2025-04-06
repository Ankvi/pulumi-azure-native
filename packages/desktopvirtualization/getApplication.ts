import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get an application.
 *
 * Uses Azure REST API version 2024-04-03.
 *
 * Other available API versions: 2022-09-09, 2022-10-14-preview, 2023-09-05, 2023-10-04-preview, 2023-11-01-preview, 2024-01-16-preview, 2024-03-06-preview, 2024-04-08-preview, 2024-08-08-preview, 2024-11-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native desktopvirtualization [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getApplication(args: GetApplicationArgs, opts?: pulumi.InvokeOptions): Promise<GetApplicationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:desktopvirtualization:getApplication", {
        "applicationGroupName": args.applicationGroupName,
        "applicationName": args.applicationName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetApplicationArgs {
    /**
     * The name of the application group
     */
    applicationGroupName: string;
    /**
     * The name of the application within the specified application group
     */
    applicationName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Schema for Application properties.
 */
export interface GetApplicationResult {
    /**
     * Resource Type of Application.
     */
    readonly applicationType?: string;
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Command Line Arguments for Application.
     */
    readonly commandLineArguments?: string;
    /**
     * Specifies whether this published application can be launched with command line arguments provided by the client, command line arguments specified at publish time, or no command line arguments at all.
     */
    readonly commandLineSetting: string;
    /**
     * Description of Application.
     */
    readonly description?: string;
    /**
     * Specifies a path for the executable file for the application.
     */
    readonly filePath?: string;
    /**
     * Friendly name of Application.
     */
    readonly friendlyName?: string;
    /**
     * the icon a 64 bit string as a byte array.
     */
    readonly iconContent: string;
    /**
     * Hash of the icon.
     */
    readonly iconHash: string;
    /**
     * Index of the icon.
     */
    readonly iconIndex?: number;
    /**
     * Path to icon.
     */
    readonly iconPath?: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * Specifies the package application Id for MSIX applications
     */
    readonly msixPackageApplicationId?: string;
    /**
     * Specifies the package family name for MSIX applications
     */
    readonly msixPackageFamilyName?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * ObjectId of Application. (internal use)
     */
    readonly objectId: string;
    /**
     * Specifies whether to show the RemoteApp program in the RD Web Access server.
     */
    readonly showInPortal?: boolean;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Get an application.
 *
 * Uses Azure REST API version 2024-04-03.
 *
 * Other available API versions: 2022-09-09, 2022-10-14-preview, 2023-09-05, 2023-10-04-preview, 2023-11-01-preview, 2024-01-16-preview, 2024-03-06-preview, 2024-04-08-preview, 2024-08-08-preview, 2024-11-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native desktopvirtualization [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getApplicationOutput(args: GetApplicationOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetApplicationResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:desktopvirtualization:getApplication", {
        "applicationGroupName": args.applicationGroupName,
        "applicationName": args.applicationName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetApplicationOutputArgs {
    /**
     * The name of the application group
     */
    applicationGroupName: pulumi.Input<string>;
    /**
     * The name of the application within the specified application group
     */
    applicationName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}