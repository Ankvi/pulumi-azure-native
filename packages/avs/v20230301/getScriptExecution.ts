import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * An instance of a script executed by a user - custom or AVS
 */
export function getScriptExecution(args: GetScriptExecutionArgs, opts?: pulumi.InvokeOptions): Promise<GetScriptExecutionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:avs/v20230301:getScriptExecution", {
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
     * Name of the user-invoked script execution resource
     */
    scriptExecutionName: string;
}

/**
 * An instance of a script executed by a user - custom or AVS
 */
export interface GetScriptExecutionResult {
    /**
     * Standard error output stream from the powershell execution
     */
    readonly errors: string[];
    /**
     * Error message if the script was able to run, but if the script itself had errors or powershell threw an exception
     */
    readonly failureReason?: string;
    /**
     * Time the script execution was finished
     */
    readonly finishedAt: string;
    /**
     * Parameters that will be hidden/not visible to ARM, such as passwords and credentials
     */
    readonly hiddenParameters?: (types.outputs.PSCredentialExecutionParameterResponse | types.outputs.ScriptSecureStringExecutionParameterResponse | types.outputs.ScriptStringExecutionParameterResponse)[];
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Standard information out stream from the powershell execution
     */
    readonly information: string[];
    /**
     * Resource name.
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
     * Time limit for execution
     */
    readonly timeout: string;
    /**
     * Resource type.
     */
    readonly type: string;
    /**
     * Standard warning out stream from the powershell execution
     */
    readonly warnings: string[];
}
/**
 * An instance of a script executed by a user - custom or AVS
 */
export function getScriptExecutionOutput(args: GetScriptExecutionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetScriptExecutionResult> {
    return pulumi.output(args).apply((a: any) => getScriptExecution(a, opts))
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
     * Name of the user-invoked script execution resource
     */
    scriptExecutionName: pulumi.Input<string>;
}