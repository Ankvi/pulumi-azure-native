import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a ScriptExecution
 *
 * Uses Azure REST API version 2023-09-01.
 *
 * Other available API versions: 2022-05-01, 2023-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native avs [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getScriptExecution(args: GetScriptExecutionArgs, opts?: pulumi.InvokeOptions): Promise<GetScriptExecutionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:avs:getScriptExecution", {
        "privateCloudName": args.privateCloudName,
        "resourceGroupName": args.resourceGroupName,
        "scriptExecutionName": args.scriptExecutionName,
    }, opts);
}

export interface GetScriptExecutionArgs {
    /**
     * Name of the private cloud
     */
    privateCloudName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * Name of the script cmdlet.
     */
    scriptExecutionName: string;
}

/**
 * An instance of a script executed by a user - custom or AVS
 */
export interface GetScriptExecutionResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Standard error output stream from the powershell execution
     */
    readonly errors: string[];
    /**
     * Error message if the script was able to run, but if the script itself had
     * errors or powershell threw an exception
     */
    readonly failureReason?: string;
    /**
     * Time the script execution was finished
     */
    readonly finishedAt: string;
    /**
     * Parameters that will be hidden/not visible to ARM, such as passwords and
     * credentials
     */
    readonly hiddenParameters?: (types.outputs.PSCredentialExecutionParameterResponse | types.outputs.ScriptSecureStringExecutionParameterResponse | types.outputs.ScriptStringExecutionParameterResponse)[];
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * Standard information out stream from the powershell execution
     */
    readonly information: string[];
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * User-defined dictionary.
     */
    readonly namedOutputs?: {[key: string]: any};
    /**
     * Standard output stream from the powershell execution
     */
    readonly output?: string[];
    /**
     * Parameters the script will accept
     */
    readonly parameters?: (types.outputs.PSCredentialExecutionParameterResponse | types.outputs.ScriptSecureStringExecutionParameterResponse | types.outputs.ScriptStringExecutionParameterResponse)[];
    /**
     * The state of the script execution resource
     */
    readonly provisioningState: string;
    /**
     * Time to live for the resource. If not provided, will be available for 60 days
     */
    readonly retention?: string;
    /**
     * A reference to the script cmdlet resource if user is running a AVS script
     */
    readonly scriptCmdletId?: string;
    /**
     * Time the script execution was started
     */
    readonly startedAt: string;
    /**
     * Time the script execution was submitted
     */
    readonly submittedAt: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Time limit for execution
     */
    readonly timeout: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * Standard warning out stream from the powershell execution
     */
    readonly warnings: string[];
}
/**
 * Get a ScriptExecution
 *
 * Uses Azure REST API version 2023-09-01.
 *
 * Other available API versions: 2022-05-01, 2023-03-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native avs [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getScriptExecutionOutput(args: GetScriptExecutionOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetScriptExecutionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:avs:getScriptExecution", {
        "privateCloudName": args.privateCloudName,
        "resourceGroupName": args.resourceGroupName,
        "scriptExecutionName": args.scriptExecutionName,
    }, opts);
}

export interface GetScriptExecutionOutputArgs {
    /**
     * Name of the private cloud
     */
    privateCloudName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the script cmdlet.
     */
    scriptExecutionName: pulumi.Input<string>;
}