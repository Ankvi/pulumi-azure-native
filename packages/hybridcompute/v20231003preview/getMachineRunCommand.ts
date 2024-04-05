import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The operation to get a run command.
 */
export function getMachineRunCommand(args: GetMachineRunCommandArgs, opts?: pulumi.InvokeOptions): Promise<GetMachineRunCommandResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:hybridcompute/v20231003preview:getMachineRunCommand", {
        "machineName": args.machineName,
        "resourceGroupName": args.resourceGroupName,
        "runCommandName": args.runCommandName,
    }, opts);
}

export interface GetMachineRunCommandArgs {
    /**
     * The name of the hybrid machine.
     */
    machineName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the run command.
     */
    runCommandName: string;
}

/**
 * Describes a Run Command
 */
export interface GetMachineRunCommandResult {
    /**
     * Optional. If set to true, provisioning will complete as soon as script starts and will not wait for script to complete.
     */
    readonly asyncExecution?: boolean;
    /**
     * User-assigned managed identity that has access to errorBlobUri storage blob. Use an empty object in case of system-assigned identity. Make sure managed identity has been given access to blob's container with 'Storage Blob Data Contributor' role assignment. In case of user-assigned identity, make sure you add it under VM's identity. For more info on managed identity and Run Command, refer https://aka.ms/ManagedIdentity and https://aka.ms/RunCommandManaged 
     */
    readonly errorBlobManagedIdentity?: types.outputs.RunCommandManagedIdentityResponse;
    /**
     * Specifies the Azure storage blob where script error stream will be uploaded. Use a SAS URI with read, append, create, write access OR use managed identity to provide the VM access to the blob. Refer errorBlobManagedIdentity parameter.
     */
    readonly errorBlobUri?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The machine run command instance view.
     */
    readonly instanceView: types.outputs.MachineRunCommandInstanceViewResponse;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * User-assigned managed identity that has access to outputBlobUri storage blob. Use an empty object in case of system-assigned identity. Make sure managed identity has been given access to blob's container with 'Storage Blob Data Contributor' role assignment. In case of user-assigned identity, make sure you add it under VM's identity. For more info on managed identity and Run Command, refer https://aka.ms/ManagedIdentity and https://aka.ms/RunCommandManaged 
     */
    readonly outputBlobManagedIdentity?: types.outputs.RunCommandManagedIdentityResponse;
    /**
     * Specifies the Azure storage blob where script output stream will be uploaded. Use a SAS URI with read, append, create, write access OR use managed identity to provide the VM access to the blob. Refer outputBlobManagedIdentity parameter. 
     */
    readonly outputBlobUri?: string;
    /**
     * The parameters used by the script.
     */
    readonly parameters?: types.outputs.RunCommandInputParameterResponse[];
    /**
     * The parameters used by the script.
     */
    readonly protectedParameters?: types.outputs.RunCommandInputParameterResponse[];
    /**
     * The provisioning state, which only appears in the response.
     */
    readonly provisioningState: string;
    /**
     * Specifies the user account password on the machine when executing the run command.
     */
    readonly runAsPassword?: string;
    /**
     * Specifies the user account on the machine when executing the run command.
     */
    readonly runAsUser?: string;
    /**
     * The source of the run command script.
     */
    readonly source?: types.outputs.MachineRunCommandScriptSourceResponse;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The timeout in seconds to execute the run command.
     */
    readonly timeoutInSeconds?: number;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * The operation to get a run command.
 */
export function getMachineRunCommandOutput(args: GetMachineRunCommandOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetMachineRunCommandResult> {
    return pulumi.output(args).apply((a: any) => getMachineRunCommand(a, opts))
}

export interface GetMachineRunCommandOutputArgs {
    /**
     * The name of the hybrid machine.
     */
    machineName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the run command.
     */
    runCommandName: pulumi.Input<string>;
}