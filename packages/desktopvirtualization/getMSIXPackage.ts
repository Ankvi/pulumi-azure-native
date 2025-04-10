import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a msixpackage.
 *
 * Uses Azure REST API version 2022-09-09.
 *
 * Other available API versions: 2022-10-14-preview, 2023-09-05, 2023-10-04-preview, 2023-11-01-preview, 2024-01-16-preview, 2024-03-06-preview, 2024-04-03, 2024-04-08-preview, 2024-08-08-preview, 2024-11-01-preview.
 */
export function getMSIXPackage(args: GetMSIXPackageArgs, opts?: pulumi.InvokeOptions): Promise<GetMSIXPackageResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:desktopvirtualization:getMSIXPackage", {
        "hostPoolName": args.hostPoolName,
        "msixPackageFullName": args.msixPackageFullName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetMSIXPackageArgs {
    /**
     * The name of the host pool within the specified resource group
     */
    hostPoolName: string;
    /**
     * The version specific package full name of the MSIX package within specified hostpool
     */
    msixPackageFullName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Schema for MSIX Package properties.
 */
export interface GetMSIXPackageResult {
    /**
     * User friendly Name to be displayed in the portal. 
     */
    readonly displayName?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * VHD/CIM image path on Network Share.
     */
    readonly imagePath?: string;
    /**
     * Make this version of the package the active one across the hostpool. 
     */
    readonly isActive?: boolean;
    /**
     * Specifies how to register Package in feed.
     */
    readonly isRegularRegistration?: boolean;
    /**
     * Date Package was last updated, found in the appxmanifest.xml. 
     */
    readonly lastUpdated?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * List of package applications. 
     */
    readonly packageApplications?: types.outputs.MsixPackageApplicationsResponse[];
    /**
     * List of package dependencies. 
     */
    readonly packageDependencies?: types.outputs.MsixPackageDependenciesResponse[];
    /**
     * Package Family Name from appxmanifest.xml. Contains Package Name and Publisher name. 
     */
    readonly packageFamilyName?: string;
    /**
     * Package Name from appxmanifest.xml. 
     */
    readonly packageName?: string;
    /**
     * Relative Path to the package inside the image. 
     */
    readonly packageRelativePath?: string;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * Package Version found in the appxmanifest.xml. 
     */
    readonly version?: string;
}
/**
 * Get a msixpackage.
 *
 * Uses Azure REST API version 2022-09-09.
 *
 * Other available API versions: 2022-10-14-preview, 2023-09-05, 2023-10-04-preview, 2023-11-01-preview, 2024-01-16-preview, 2024-03-06-preview, 2024-04-03, 2024-04-08-preview, 2024-08-08-preview, 2024-11-01-preview.
 */
export function getMSIXPackageOutput(args: GetMSIXPackageOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetMSIXPackageResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:desktopvirtualization:getMSIXPackage", {
        "hostPoolName": args.hostPoolName,
        "msixPackageFullName": args.msixPackageFullName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetMSIXPackageOutputArgs {
    /**
     * The name of the host pool within the specified resource group
     */
    hostPoolName: pulumi.Input<string>;
    /**
     * The version specific package full name of the MSIX package within specified hostpool
     */
    msixPackageFullName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}