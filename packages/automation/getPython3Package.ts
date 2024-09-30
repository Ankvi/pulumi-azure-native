import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieve the python 3 package identified by package name.
 * Azure REST API version: 2022-08-08.
 *
 * Other available API versions: 2023-05-15-preview, 2023-11-01.
 */
export function getPython3Package(args: GetPython3PackageArgs, opts?: pulumi.InvokeOptions): Promise<GetPython3PackageResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:automation:getPython3Package", {
        "automationAccountName": args.automationAccountName,
        "packageName": args.packageName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetPython3PackageArgs {
    /**
     * The name of the automation account.
     */
    automationAccountName: string;
    /**
     * The python package name.
     */
    packageName: string;
    /**
     * Name of an Azure Resource group.
     */
    resourceGroupName: string;
}

/**
 * Definition of the module type.
 */
export interface GetPython3PackageResult {
    /**
     * Gets or sets the activity count of the module.
     */
    readonly activityCount?: number;
    /**
     * Gets or sets the contentLink of the module.
     */
    readonly contentLink?: types.outputs.ContentLinkResponse;
    /**
     * Gets or sets the creation time.
     */
    readonly creationTime?: string;
    /**
     * Gets or sets the description.
     */
    readonly description?: string;
    /**
     * Gets or sets the error info of the module.
     */
    readonly error?: types.outputs.ModuleErrorInfoResponse;
    /**
     * Gets or sets the etag of the resource.
     */
    readonly etag?: string;
    /**
     * Fully qualified resource Id for the resource
     */
    readonly id: string;
    /**
     * Gets or sets type of module, if its composite or not.
     */
    readonly isComposite?: boolean;
    /**
     * Gets or sets the isGlobal flag of the module.
     */
    readonly isGlobal?: boolean;
    /**
     * Gets or sets the last modified time.
     */
    readonly lastModifiedTime?: string;
    /**
     * The Azure Region where the resource lives
     */
    readonly location?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Gets or sets the provisioning state of the module.
     */
    readonly provisioningState?: string;
    /**
     * Gets or sets the size in bytes of the module.
     */
    readonly sizeInBytes?: number;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource.
     */
    readonly type: string;
    /**
     * Gets or sets the version of the module.
     */
    readonly version?: string;
}
/**
 * Retrieve the python 3 package identified by package name.
 * Azure REST API version: 2022-08-08.
 *
 * Other available API versions: 2023-05-15-preview, 2023-11-01.
 */
export function getPython3PackageOutput(args: GetPython3PackageOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPython3PackageResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:automation:getPython3Package", {
        "automationAccountName": args.automationAccountName,
        "packageName": args.packageName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetPython3PackageOutputArgs {
    /**
     * The name of the automation account.
     */
    automationAccountName: pulumi.Input<string>;
    /**
     * The python package name.
     */
    packageName: pulumi.Input<string>;
    /**
     * Name of an Azure Resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}