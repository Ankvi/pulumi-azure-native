import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get an app attach package.
 */
export function getAppAttachPackage(args: GetAppAttachPackageArgs, opts?: pulumi.InvokeOptions): Promise<GetAppAttachPackageResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:desktopvirtualization/v20231101preview:getAppAttachPackage", {
        "appAttachPackageName": args.appAttachPackageName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAppAttachPackageArgs {
    /**
     * The name of the App Attach package arm object
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
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
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
     * Metadata pertaining to creation and last modification of the resource.
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
 */
export function getAppAttachPackageOutput(args: GetAppAttachPackageOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAppAttachPackageResult> {
    return pulumi.output(args).apply((a: any) => getAppAttachPackage(a, opts))
}

export interface GetAppAttachPackageOutputArgs {
    /**
     * The name of the App Attach package arm object
     */
    appAttachPackageName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
