import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Object model for the Azure CLI script.
 *
 * Uses Azure REST API version 2023-08-01. In version 2.x of the Azure Native provider, it used API version 2020-10-01.
 */
export class AzureCliScript extends pulumi.CustomResource {
    /**
     * Get an existing AzureCliScript resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): AzureCliScript {
        return new AzureCliScript(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:resources:AzureCliScript';

    /**
     * Returns true if the given object is an instance of AzureCliScript.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AzureCliScript {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AzureCliScript.__pulumiType;
    }

    /**
     * Command line arguments to pass to the script. Arguments are separated by spaces. ex: -Name blue* -Location 'West US 2' 
     */
    public readonly arguments!: pulumi.Output<string | undefined>;
    /**
     * Azure CLI module version to be used.
     */
    public readonly azCliVersion!: pulumi.Output<string>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The clean up preference when the script execution gets in a terminal state. Default setting is 'Always'.
     */
    public readonly cleanupPreference!: pulumi.Output<string | undefined>;
    /**
     * Container settings.
     */
    public readonly containerSettings!: pulumi.Output<types.outputs.ContainerConfigurationResponse | undefined>;
    /**
     * The environment variables to pass over to the script.
     */
    public readonly environmentVariables!: pulumi.Output<types.outputs.EnvironmentVariableResponse[] | undefined>;
    /**
     * Gets or sets how the deployment script should be forced to execute even if the script resource has not changed. Can be current time stamp or a GUID.
     */
    public readonly forceUpdateTag!: pulumi.Output<string | undefined>;
    /**
     * Optional property. Managed identity to be used for this deployment script. Currently, only user-assigned MSI is supported.
     */
    public readonly identity!: pulumi.Output<types.outputs.ManagedServiceIdentityResponse | undefined>;
    /**
     * Type of the script.
     * Expected value is 'AzureCLI'.
     */
    public readonly kind!: pulumi.Output<"AzureCLI">;
    /**
     * The location of the ACI and the storage account for the deployment script.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Name of this resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * List of script outputs.
     */
    public /*out*/ readonly outputs!: pulumi.Output<{[key: string]: any}>;
    /**
     * Uri for the script. This is the entry point for the external script.
     */
    public readonly primaryScriptUri!: pulumi.Output<string | undefined>;
    /**
     * State of the script execution. This only appears in the response.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Interval for which the service retains the script resource after it reaches a terminal state. Resource will be deleted when this duration expires. Duration is based on ISO 8601 pattern (for example P1D means one day).
     */
    public readonly retentionInterval!: pulumi.Output<string>;
    /**
     * Script body.
     */
    public readonly scriptContent!: pulumi.Output<string | undefined>;
    /**
     * Contains the results of script execution.
     */
    public /*out*/ readonly status!: pulumi.Output<types.outputs.ScriptStatusResponse>;
    /**
     * Storage Account settings.
     */
    public readonly storageAccountSettings!: pulumi.Output<types.outputs.StorageAccountConfigurationResponse | undefined>;
    /**
     * Supporting files for the external script.
     */
    public readonly supportingScriptUris!: pulumi.Output<string[] | undefined>;
    /**
     * The system metadata related to this resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Maximum allowed script execution time specified in ISO 8601 format. Default value is P1D
     */
    public readonly timeout!: pulumi.Output<string | undefined>;
    /**
     * Type of this resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a AzureCliScript resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AzureCliScriptArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.azCliVersion === undefined) && !opts.urn) {
                throw new Error("Missing required property 'azCliVersion'");
            }
            if ((!args || args.kind === undefined) && !opts.urn) {
                throw new Error("Missing required property 'kind'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.retentionInterval === undefined) && !opts.urn) {
                throw new Error("Missing required property 'retentionInterval'");
            }
            resourceInputs["arguments"] = args ? args.arguments : undefined;
            resourceInputs["azCliVersion"] = args ? args.azCliVersion : undefined;
            resourceInputs["cleanupPreference"] = (args ? args.cleanupPreference : undefined) ?? "Always";
            resourceInputs["containerSettings"] = args ? args.containerSettings : undefined;
            resourceInputs["environmentVariables"] = args ? args.environmentVariables : undefined;
            resourceInputs["forceUpdateTag"] = args ? args.forceUpdateTag : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["kind"] = "AzureCLI";
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["primaryScriptUri"] = args ? args.primaryScriptUri : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["retentionInterval"] = args ? args.retentionInterval : undefined;
            resourceInputs["scriptContent"] = args ? args.scriptContent : undefined;
            resourceInputs["scriptName"] = args ? args.scriptName : undefined;
            resourceInputs["storageAccountSettings"] = args ? args.storageAccountSettings : undefined;
            resourceInputs["supportingScriptUris"] = args ? args.supportingScriptUris : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["timeout"] = (args ? args.timeout : undefined) ?? "P1D";
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["outputs"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["arguments"] = undefined /*out*/;
            resourceInputs["azCliVersion"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["cleanupPreference"] = undefined /*out*/;
            resourceInputs["containerSettings"] = undefined /*out*/;
            resourceInputs["environmentVariables"] = undefined /*out*/;
            resourceInputs["forceUpdateTag"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["outputs"] = undefined /*out*/;
            resourceInputs["primaryScriptUri"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["retentionInterval"] = undefined /*out*/;
            resourceInputs["scriptContent"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["storageAccountSettings"] = undefined /*out*/;
            resourceInputs["supportingScriptUris"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["timeout"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:resources/v20191001preview:AzureCliScript" }, { type: "azure-native:resources/v20191001preview:AzurePowerShellScript" }, { type: "azure-native:resources/v20201001:AzureCliScript" }, { type: "azure-native:resources/v20201001:AzurePowerShellScript" }, { type: "azure-native:resources/v20230801:AzureCliScript" }, { type: "azure-native:resources/v20230801:AzurePowerShellScript" }, { type: "azure-native:resources:AzurePowerShellScript" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(AzureCliScript.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a AzureCliScript resource.
 */
export interface AzureCliScriptArgs {
    /**
     * Command line arguments to pass to the script. Arguments are separated by spaces. ex: -Name blue* -Location 'West US 2' 
     */
    arguments?: pulumi.Input<string>;
    /**
     * Azure CLI module version to be used.
     */
    azCliVersion: pulumi.Input<string>;
    /**
     * The clean up preference when the script execution gets in a terminal state. Default setting is 'Always'.
     */
    cleanupPreference?: pulumi.Input<string | types.enums.CleanupOptions>;
    /**
     * Container settings.
     */
    containerSettings?: pulumi.Input<types.inputs.ContainerConfigurationArgs>;
    /**
     * The environment variables to pass over to the script.
     */
    environmentVariables?: pulumi.Input<pulumi.Input<types.inputs.EnvironmentVariableArgs>[]>;
    /**
     * Gets or sets how the deployment script should be forced to execute even if the script resource has not changed. Can be current time stamp or a GUID.
     */
    forceUpdateTag?: pulumi.Input<string>;
    /**
     * Optional property. Managed identity to be used for this deployment script. Currently, only user-assigned MSI is supported.
     */
    identity?: pulumi.Input<types.inputs.ManagedServiceIdentityArgs>;
    /**
     * Type of the script.
     * Expected value is 'AzureCLI'.
     */
    kind: pulumi.Input<"AzureCLI">;
    /**
     * The location of the ACI and the storage account for the deployment script.
     */
    location?: pulumi.Input<string>;
    /**
     * Uri for the script. This is the entry point for the external script.
     */
    primaryScriptUri?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Interval for which the service retains the script resource after it reaches a terminal state. Resource will be deleted when this duration expires. Duration is based on ISO 8601 pattern (for example P1D means one day).
     */
    retentionInterval: pulumi.Input<string>;
    /**
     * Script body.
     */
    scriptContent?: pulumi.Input<string>;
    /**
     * Name of the deployment script.
     */
    scriptName?: pulumi.Input<string>;
    /**
     * Storage Account settings.
     */
    storageAccountSettings?: pulumi.Input<types.inputs.StorageAccountConfigurationArgs>;
    /**
     * Supporting files for the external script.
     */
    supportingScriptUris?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Maximum allowed script execution time specified in ISO 8601 format. Default value is P1D
     */
    timeout?: pulumi.Input<string>;
}