import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Gets a deployment script with a given name.
 */
export function getAzurePowerShellScript(args: GetAzurePowerShellScriptArgs, opts?: pulumi.InvokeOptions): Promise<GetAzurePowerShellScriptResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:resources/v20201001:getAzurePowerShellScript", {
        "resourceGroupName": args.resourceGroupName,
        "scriptName": args.scriptName,
    }, opts);
}

export interface GetAzurePowerShellScriptArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * Name of the deployment script.
     */
    scriptName: string;
}

/**
 * Object model for the Azure PowerShell script.
 */
export interface GetAzurePowerShellScriptResult {
    /**
     * Command line arguments to pass to the script. Arguments are separated by spaces. ex: -Name blue* -Location 'West US 2' 
     */
    readonly arguments?: string;
    /**
     * Azure PowerShell module version to be used.
     */
    readonly azPowerShellVersion: string;
    /**
     * The clean up preference when the script execution gets in a terminal state. Default setting is 'Always'.
     */
    readonly cleanupPreference?: string;
    /**
     * Container settings.
     */
    readonly containerSettings?: types.outputs.resources.v20201001.ContainerConfigurationResponse;
    /**
     * The environment variables to pass over to the script.
     */
    readonly environmentVariables?: types.outputs.resources.v20201001.EnvironmentVariableResponse[];
    /**
     * Gets or sets how the deployment script should be forced to execute even if the script resource has not changed. Can be current time stamp or a GUID.
     */
    readonly forceUpdateTag?: string;
    /**
     * String Id used to locate any resource on Azure.
     */
    readonly id: string;
    /**
     * Optional property. Managed identity to be used for this deployment script. Currently, only user-assigned MSI is supported.
     */
    readonly identity?: types.outputs.resources.v20201001.ManagedServiceIdentityResponse;
    /**
     * Type of the script.
     * Expected value is 'AzurePowerShell'.
     */
    readonly kind: "AzurePowerShell";
    /**
     * The location of the ACI and the storage account for the deployment script.
     */
    readonly location: string;
    /**
     * Name of this resource.
     */
    readonly name: string;
    /**
     * List of script outputs.
     */
    readonly outputs: {[key: string]: any};
    /**
     * Uri for the script. This is the entry point for the external script.
     */
    readonly primaryScriptUri?: string;
    /**
     * State of the script execution. This only appears in the response.
     */
    readonly provisioningState: string;
    /**
     * Interval for which the service retains the script resource after it reaches a terminal state. Resource will be deleted when this duration expires. Duration is based on ISO 8601 pattern (for example P1D means one day).
     */
    readonly retentionInterval: string;
    /**
     * Script body.
     */
    readonly scriptContent?: string;
    /**
     * Contains the results of script execution.
     */
    readonly status: types.outputs.resources.v20201001.ScriptStatusResponse;
    /**
     * Storage Account settings.
     */
    readonly storageAccountSettings?: types.outputs.resources.v20201001.StorageAccountConfigurationResponse;
    /**
     * Supporting files for the external script.
     */
    readonly supportingScriptUris?: string[];
    /**
     * The system metadata related to this resource.
     */
    readonly systemData: types.outputs.resources.v20201001.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Maximum allowed script execution time specified in ISO 8601 format. Default value is P1D
     */
    readonly timeout?: string;
    /**
     * Type of this resource.
     */
    readonly type: string;
}
/**
 * Gets a deployment script with a given name.
 */
export function getAzurePowerShellScriptOutput(args: GetAzurePowerShellScriptOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAzurePowerShellScriptResult> {
    return pulumi.output(args).apply((a: any) => getAzurePowerShellScript(a, opts))
}

export interface GetAzurePowerShellScriptOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the deployment script.
     */
    scriptName: pulumi.Input<string>;
}
