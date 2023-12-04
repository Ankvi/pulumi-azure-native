import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieve the module identified by module name.
 */
export function getModule(args: GetModuleArgs, opts?: pulumi.InvokeOptions): Promise<GetModuleResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:automation/v20231101:getModule", {
        "automationAccountName": args.automationAccountName,
        "moduleName": args.moduleName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetModuleArgs {
    /**
     * The name of the automation account.
     */
    automationAccountName: string;
    /**
     * The module name.
     */
    moduleName: string;
    /**
     * Name of an Azure Resource group.
     */
    resourceGroupName: string;
}

/**
 * Definition of the module type.
 */
export interface GetModuleResult {
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
 * Retrieve the module identified by module name.
 */
export function getModuleOutput(args: GetModuleOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetModuleResult> {
    return pulumi.output(args).apply((a: any) => getModule(a, opts))
}

export interface GetModuleOutputArgs {
    /**
     * The name of the automation account.
     */
    automationAccountName: pulumi.Input<string>;
    /**
     * The module name.
     */
    moduleName: pulumi.Input<string>;
    /**
     * Name of an Azure Resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}