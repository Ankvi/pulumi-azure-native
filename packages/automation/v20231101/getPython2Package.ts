import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieve the python 2 package identified by package name.
 */
export function getPython2Package(args: GetPython2PackageArgs, opts?: pulumi.InvokeOptions): Promise<GetPython2PackageResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:automation/v20231101:getPython2Package", {
        "automationAccountName": args.automationAccountName,
        "packageName": args.packageName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetPython2PackageArgs {
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
export interface GetPython2PackageResult {
    /**
     * Gets the activity count of the module.
     */
    readonly activityCount?: number;
    /**
     * Gets the creation time.
     */
    readonly creationTime?: string;
    /**
     * Gets or sets the description.
     */
    readonly description?: string;
    /**
     * Gets the error info of the module.
     */
    readonly error?: types.outputs.ModuleErrorInfoResponse;
    /**
     * Gets the etag of the resource.
     */
    readonly etag?: string;
    /**
     * Fully qualified resource Id for the resource
     */
    readonly id: string;
    /**
     * Gets type of module, if its composite or not.
     */
    readonly isComposite?: boolean;
    /**
     * Gets the isGlobal flag of the module.
     */
    readonly isGlobal?: boolean;
    /**
     * Gets the last modified time.
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
     * Gets the provisioning state of the module.
     */
    readonly provisioningState?: string;
    /**
     * Gets the size in bytes of the module.
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
     * Gets the version of the module.
     */
    readonly version?: string;
}
/**
 * Retrieve the python 2 package identified by package name.
 */
export function getPython2PackageOutput(args: GetPython2PackageOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPython2PackageResult> {
    return pulumi.output(args).apply((a: any) => getPython2Package(a, opts))
}

export interface GetPython2PackageOutputArgs {
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