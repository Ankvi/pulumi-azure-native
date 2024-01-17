import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A vulnerability assessments setting on Azure servers in the defined scope.
 * Azure REST API version: 2023-05-01.
 */
export class AzureServersSetting extends pulumi.CustomResource {
    /**
     * Get an existing AzureServersSetting resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): AzureServersSetting {
        return new AzureServersSetting(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:security:AzureServersSetting';

    /**
     * Returns true if the given object is an instance of AzureServersSetting.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AzureServersSetting {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AzureServersSetting.__pulumiType;
    }

    /**
     * The kind of the server vulnerability assessments setting
     * Expected value is 'AzureServersSetting'.
     */
    public readonly kind!: pulumi.Output<"AzureServersSetting">;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The selected vulnerability assessments provider on Azure servers in the defined scope.
     */
    public readonly selectedProvider!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a AzureServersSetting resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AzureServersSettingArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.kind === undefined) && !opts.urn) {
                throw new Error("Missing required property 'kind'");
            }
            if ((!args || args.selectedProvider === undefined) && !opts.urn) {
                throw new Error("Missing required property 'selectedProvider'");
            }
            resourceInputs["kind"] = "AzureServersSetting";
            resourceInputs["selectedProvider"] = args ? args.selectedProvider : undefined;
            resourceInputs["settingKind"] = args ? args.settingKind : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["selectedProvider"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:security/v20230501:AzureServersSetting" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(AzureServersSetting.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a AzureServersSetting resource.
 */
export interface AzureServersSettingArgs {
    /**
     * The kind of the server vulnerability assessments setting
     * Expected value is 'AzureServersSetting'.
     */
    kind: pulumi.Input<"AzureServersSetting">;
    /**
     * The selected vulnerability assessments provider on Azure servers in the defined scope.
     */
    selectedProvider: pulumi.Input<string | types.enums.ServerVulnerabilityAssessmentsAzureSettingSelectedProvider>;
    /**
     * The kind of the server vulnerability assessments setting
     */
    settingKind?: pulumi.Input<string>;
}