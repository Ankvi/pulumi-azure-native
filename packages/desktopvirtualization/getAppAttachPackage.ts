import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get an app attach package.
 *
 * Uses Azure REST API version 2024-04-03.
 *
 * Other available API versions: 2023-10-04-preview, 2023-11-01-preview, 2024-01-16-preview, 2024-03-06-preview, 2024-04-08-preview, 2024-08-08-preview, 2024-11-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native desktopvirtualization [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getAppAttachPackage(args: GetAppAttachPackageArgs, opts?: pulumi.InvokeOptions): Promise<GetAppAttachPackageResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:desktopvirtualization:getAppAttachPackage", {
        "appAttachPackageName": args.appAttachPackageName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAppAttachPackageArgs {
    /**
     * The name of the App Attach package
     */
    appAttachPackageName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Schema for App Attach Package properties.
 */
export interface GetAppAttachPackageResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Detailed properties for App Attach Package
     */
    readonly properties: types.outputs.AppAttachPackagePropertiesResponse;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Get an app attach package.
 *
 * Uses Azure REST API version 2024-04-03.
 *
 * Other available API versions: 2023-10-04-preview, 2023-11-01-preview, 2024-01-16-preview, 2024-03-06-preview, 2024-04-08-preview, 2024-08-08-preview, 2024-11-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native desktopvirtualization [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getAppAttachPackageOutput(args: GetAppAttachPackageOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetAppAttachPackageResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:desktopvirtualization:getAppAttachPackage", {
        "appAttachPackageName": args.appAttachPackageName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAppAttachPackageOutputArgs {
    /**
     * The name of the App Attach package
     */
    appAttachPackageName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}