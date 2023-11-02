import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * An instance of a script executed by a user - custom or AVS
 * Azure REST API version: 2022-05-01. Prior API version in Azure Native 1.x: 2021-06-01.
 *
 * Other available API versions: 2023-03-01.
 */
export class ScriptExecution extends pulumi.CustomResource {
    /**
     * Get an existing ScriptExecution resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ScriptExecution {
        return new ScriptExecution(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:avs:ScriptExecution';

    /**
     * Returns true if the given object is an instance of ScriptExecution.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ScriptExecution {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ScriptExecution.__pulumiType;
    }

    /**
     * Standard error output stream from the powershell execution
     */
    public /*out*/ readonly errors!: pulumi.Output<string[]>;
    /**
     * Error message if the script was able to run, but if the script itself had errors or powershell threw an exception
     */
    public readonly failureReason!: pulumi.Output<string | undefined>;
    /**
     * Time the script execution was finished
     */
    public /*out*/ readonly finishedAt!: pulumi.Output<string>;
    /**
     * Parameters that will be hidden/not visible to ARM, such as passwords and credentials
     */
    public readonly hiddenParameters!: pulumi.Output<(types.outputs.PSCredentialExecutionParameterResponse | types.outputs.ScriptSecureStringExecutionParameterResponse | types.outputs.ScriptStringExecutionParameterResponse)[] | undefined>;
    /**
     * Standard information out stream from the powershell execution
     */
    public /*out*/ readonly information!: pulumi.Output<string[]>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * User-defined dictionary.
     */
    public readonly namedOutputs!: pulumi.Output<{[key: string]: any} | undefined>;
    /**
     * Standard output stream from the powershell execution
     */
    public readonly output!: pulumi.Output<string[] | undefined>;
    /**
     * Parameters the script will accept
     */
    public readonly parameters!: pulumi.Output<(types.outputs.PSCredentialExecutionParameterResponse | types.outputs.ScriptSecureStringExecutionParameterResponse | types.outputs.ScriptStringExecutionParameterResponse)[] | undefined>;
    /**
     * The state of the script execution resource
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Time to live for the resource. If not provided, will be available for 60 days
     */
    public readonly retention!: pulumi.Output<string | undefined>;
    /**
     * A reference to the script cmdlet resource if user is running a AVS script
     */
    public readonly scriptCmdletId!: pulumi.Output<string | undefined>;
    /**
     * Time the script execution was started
     */
    public /*out*/ readonly startedAt!: pulumi.Output<string>;
    /**
     * Time the script execution was submitted
     */
    public /*out*/ readonly submittedAt!: pulumi.Output<string>;
    /**
     * Time limit for execution
     */
    public readonly timeout!: pulumi.Output<string>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Standard warning out stream from the powershell execution
     */
    public /*out*/ readonly warnings!: pulumi.Output<string[]>;

    /**
     * Create a ScriptExecution resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ScriptExecutionArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.privateCloudName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'privateCloudName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.timeout === undefined) && !opts.urn) {
                throw new Error("Missing required property 'timeout'");
            }
            resourceInputs["failureReason"] = args ? args.failureReason : undefined;
            resourceInputs["hiddenParameters"] = args ? args.hiddenParameters : undefined;
            resourceInputs["namedOutputs"] = args ? args.namedOutputs : undefined;
            resourceInputs["output"] = args ? args.output : undefined;
            resourceInputs["parameters"] = args ? args.parameters : undefined;
            resourceInputs["privateCloudName"] = args ? args.privateCloudName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["retention"] = args ? args.retention : undefined;
            resourceInputs["scriptCmdletId"] = args ? args.scriptCmdletId : undefined;
            resourceInputs["scriptExecutionName"] = args ? args.scriptExecutionName : undefined;
            resourceInputs["timeout"] = args ? args.timeout : undefined;
            resourceInputs["errors"] = undefined /*out*/;
            resourceInputs["finishedAt"] = undefined /*out*/;
            resourceInputs["information"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["startedAt"] = undefined /*out*/;
            resourceInputs["submittedAt"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["warnings"] = undefined /*out*/;
        } else {
            resourceInputs["errors"] = undefined /*out*/;
            resourceInputs["failureReason"] = undefined /*out*/;
            resourceInputs["finishedAt"] = undefined /*out*/;
            resourceInputs["hiddenParameters"] = undefined /*out*/;
            resourceInputs["information"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["namedOutputs"] = undefined /*out*/;
            resourceInputs["output"] = undefined /*out*/;
            resourceInputs["parameters"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["retention"] = undefined /*out*/;
            resourceInputs["scriptCmdletId"] = undefined /*out*/;
            resourceInputs["startedAt"] = undefined /*out*/;
            resourceInputs["submittedAt"] = undefined /*out*/;
            resourceInputs["timeout"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["warnings"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:avs/v20210601:ScriptExecution" }, { type: "azure-native:avs/v20211201:ScriptExecution" }, { type: "azure-native:avs/v20220501:ScriptExecution" }, { type: "azure-native:avs/v20230301:ScriptExecution" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ScriptExecution.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ScriptExecution resource.
 */
export interface ScriptExecutionArgs {
    /**
     * Error message if the script was able to run, but if the script itself had errors or powershell threw an exception
     */
    failureReason?: pulumi.Input<string>;
    /**
     * Parameters that will be hidden/not visible to ARM, such as passwords and credentials
     */
    hiddenParameters?: pulumi.Input<pulumi.Input<types.inputs.PSCredentialExecutionParameterArgs | types.inputs.ScriptSecureStringExecutionParameterArgs | types.inputs.ScriptStringExecutionParameterArgs>[]>;
    /**
     * User-defined dictionary.
     */
    namedOutputs?: pulumi.Input<{[key: string]: any}>;
    /**
     * Standard output stream from the powershell execution
     */
    output?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Parameters the script will accept
     */
    parameters?: pulumi.Input<pulumi.Input<types.inputs.PSCredentialExecutionParameterArgs | types.inputs.ScriptSecureStringExecutionParameterArgs | types.inputs.ScriptStringExecutionParameterArgs>[]>;
    /**
     * The name of the private cloud.
     */
    privateCloudName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Time to live for the resource. If not provided, will be available for 60 days
     */
    retention?: pulumi.Input<string>;
    /**
     * A reference to the script cmdlet resource if user is running a AVS script
     */
    scriptCmdletId?: pulumi.Input<string>;
    /**
     * Name of the user-invoked script execution resource
     */
    scriptExecutionName?: pulumi.Input<string>;
    /**
     * Time limit for execution
     */
    timeout: pulumi.Input<string>;
}
