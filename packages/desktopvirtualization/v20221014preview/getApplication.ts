import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get an application.
 */
export function getApplication(args: GetApplicationArgs, opts?: pulumi.InvokeOptions): Promise<GetApplicationResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:desktopvirtualization/v20221014preview:getApplication", {
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
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
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
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Get an application.
 */
export function getApplicationOutput(args: GetApplicationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetApplicationResult> {
    return pulumi.output(args).apply((a: any) => getApplication(a, opts))
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
