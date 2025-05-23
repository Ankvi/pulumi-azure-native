import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The operation to get the run command.
 *
 * Uses Azure REST API version 2024-11-01.
 *
 * Other available API versions: 2022-08-01, 2022-11-01, 2023-03-01, 2023-07-01, 2023-09-01, 2024-03-01, 2024-07-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native compute [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getVirtualMachineRunCommandByVirtualMachine(args: GetVirtualMachineRunCommandByVirtualMachineArgs, opts?: pulumi.InvokeOptions): Promise<GetVirtualMachineRunCommandByVirtualMachineResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:compute:getVirtualMachineRunCommandByVirtualMachine", {
        "expand": args.expand,
        "resourceGroupName": args.resourceGroupName,
        "runCommandName": args.runCommandName,
        "vmName": args.vmName,
    }, opts);
}

export interface GetVirtualMachineRunCommandByVirtualMachineArgs {
    /**
     * The expand expression to apply on the operation.
     */
    expand?: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
    /**
     * The name of the virtual machine run command.
     */
    runCommandName: string;
    /**
     * The name of the virtual machine containing the run command.
     */
    vmName: string;
}

/**
 * Describes a Virtual Machine run command.
 */
export interface GetVirtualMachineRunCommandByVirtualMachineResult {
    /**
     * Optional. If set to true, provisioning will complete as soon as the script starts and will not wait for script to complete.
     */
    readonly asyncExecution?: boolean;
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * User-assigned managed identity that has access to errorBlobUri storage blob. Use an empty object in case of system-assigned identity. Make sure managed identity has been given access to blob's container with 'Storage Blob Data Contributor' role assignment. In case of user-assigned identity, make sure you add it under VM's identity. For more info on managed identity and Run Command, refer https://aka.ms/ManagedIdentity and https://aka.ms/RunCommandManaged 
     */
    readonly errorBlobManagedIdentity?: types.outputs.RunCommandManagedIdentityResponse;
    /**
     * Specifies the Azure storage blob where script error stream will be uploaded. Use a SAS URI with read, append, create, write access OR use managed identity to provide the VM access to the blob. Refer errorBlobManagedIdentity parameter.
     */
    readonly errorBlobUri?: string;
    /**
     * Resource Id
     */
    readonly id: string;
    /**
     * The virtual machine run command instance view.
     */
    readonly instanceView: types.outputs.VirtualMachineRunCommandInstanceViewResponse;
    /**
     * Resource location
     */
    readonly location: string;
    /**
     * Resource name
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
     * The provisioning state, which only appears in the response. If treatFailureAsDeploymentFailure set to true, any failure in the script will fail the deployment and ProvisioningState will be marked as Failed. If treatFailureAsDeploymentFailure set to false, ProvisioningState would only reflect whether the run command was run or not by the extensions platform, it would not indicate whether script failed in case of script failures. See instance view of run command in case of script failures to see executionMessage, output, error: https://aka.ms/runcommandmanaged#get-execution-status-and-results 
     */
    readonly provisioningState: string;
    /**
     * Specifies the user account password on the VM when executing the run command.
     */
    readonly runAsPassword?: string;
    /**
     * Specifies the user account on the VM when executing the run command.
     */
    readonly runAsUser?: string;
    /**
     * The source of the run command script.
     */
    readonly source?: types.outputs.VirtualMachineRunCommandScriptSourceResponse;
    /**
     * Resource tags
     */
    readonly tags?: {[key: string]: string};
    /**
     * The timeout in seconds to execute the run command.
     */
    readonly timeoutInSeconds?: number;
    /**
     * Optional. If set to true, any failure in the script will fail the deployment and ProvisioningState will be marked as Failed. If set to false, ProvisioningState would only reflect whether the run command was run or not by the extensions platform, it would not indicate whether script failed in case of script failures. See instance view of run command in case of script failures to see executionMessage, output, error: https://aka.ms/runcommandmanaged#get-execution-status-and-results 
     */
    readonly treatFailureAsDeploymentFailure?: boolean;
    /**
     * Resource type
     */
    readonly type: string;
}
/**
 * The operation to get the run command.
 *
 * Uses Azure REST API version 2024-11-01.
 *
 * Other available API versions: 2022-08-01, 2022-11-01, 2023-03-01, 2023-07-01, 2023-09-01, 2024-03-01, 2024-07-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native compute [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getVirtualMachineRunCommandByVirtualMachineOutput(args: GetVirtualMachineRunCommandByVirtualMachineOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetVirtualMachineRunCommandByVirtualMachineResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:compute:getVirtualMachineRunCommandByVirtualMachine", {
        "expand": args.expand,
        "resourceGroupName": args.resourceGroupName,
        "runCommandName": args.runCommandName,
        "vmName": args.vmName,
    }, opts);
}

export interface GetVirtualMachineRunCommandByVirtualMachineOutputArgs {
    /**
     * The expand expression to apply on the operation.
     */
    expand?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the virtual machine run command.
     */
    runCommandName: pulumi.Input<string>;
    /**
     * The name of the virtual machine containing the run command.
     */
    vmName: pulumi.Input<string>;
}