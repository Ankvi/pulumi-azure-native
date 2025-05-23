import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieve the module identified by module name.
 *
 * Uses Azure REST API version 2023-11-01.
 */
export function getPowerShell72Module(args: GetPowerShell72ModuleArgs, opts?: pulumi.InvokeOptions): Promise<GetPowerShell72ModuleResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:automation:getPowerShell72Module", {
        "automationAccountName": args.automationAccountName,
        "moduleName": args.moduleName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetPowerShell72ModuleArgs {
    /**
     * The name of the automation account.
     */
    automationAccountName: string;
    /**
     * The name of module.
     */
    moduleName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Definition of the module type.
 */
export interface GetPowerShell72ModuleResult {
    /**
     * Gets the activity count of the module.
     */
    readonly activityCount?: number;
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
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
 * Retrieve the module identified by module name.
 *
 * Uses Azure REST API version 2023-11-01.
 */
export function getPowerShell72ModuleOutput(args: GetPowerShell72ModuleOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetPowerShell72ModuleResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:automation:getPowerShell72Module", {
        "automationAccountName": args.automationAccountName,
        "moduleName": args.moduleName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetPowerShell72ModuleOutputArgs {
    /**
     * The name of the automation account.
     */
    automationAccountName: pulumi.Input<string>;
    /**
     * The name of module.
     */
    moduleName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}