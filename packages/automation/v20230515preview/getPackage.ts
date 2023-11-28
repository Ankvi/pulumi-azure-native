import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieve the Package identified by Package name.
 */
export function getPackage(args: GetPackageArgs, opts?: pulumi.InvokeOptions): Promise<GetPackageResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:automation/v20230515preview:getPackage", {
        "automationAccountName": args.automationAccountName,
        "packageName": args.packageName,
        "resourceGroupName": args.resourceGroupName,
        "runtimeEnvironmentName": args.runtimeEnvironmentName,
    }, opts);
}

export interface GetPackageArgs {
    /**
     * The name of the automation account.
     */
    automationAccountName: string;
    /**
     * The Package name.
     */
    packageName: string;
    /**
     * Name of an Azure Resource group.
     */
    resourceGroupName: string;
    /**
     * The name of the Runtime Environment.
     */
    runtimeEnvironmentName: string;
}

/**
 * Definition of the Package type.
 */
export interface GetPackageResult {
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly allOf: types.outputs.SystemDataResponse;
    /**
     * Gets or sets the contentLink of the Package.
     */
    readonly contentLink?: types.outputs.ContentLinkResponse;
    /**
     * Gets or sets the isGlobal flag of the package.
     */
    readonly default?: boolean;
    /**
     * Gets or sets the error info of the Package.
     */
    readonly error?: types.outputs.PackageErrorInfoResponse;
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
     * Gets or sets the provisioning state of the Package.
     */
    readonly provisioningState: string;
    /**
     * Gets or sets the size in bytes of the Package.
     */
    readonly sizeInBytes?: number;
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
    /**
     * Gets or sets the version of the Package.
     */
    readonly version?: string;
}
/**
 * Retrieve the Package identified by Package name.
 */
export function getPackageOutput(args: GetPackageOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPackageResult> {
    return pulumi.output(args).apply((a: any) => getPackage(a, opts))
}

export interface GetPackageOutputArgs {
    /**
     * The name of the automation account.
     */
    automationAccountName: pulumi.Input<string>;
    /**
     * The Package name.
     */
    packageName: pulumi.Input<string>;
    /**
     * Name of an Azure Resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Runtime Environment.
     */
    runtimeEnvironmentName: pulumi.Input<string>;
}
