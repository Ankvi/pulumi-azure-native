import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Describes a Machine Extension.
 */
export class MachineExtension extends pulumi.CustomResource {
    /**
     * Get an existing MachineExtension resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): MachineExtension {
        return new MachineExtension(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:scvmm/v20230401preview:MachineExtension';

    /**
     * Returns true if the given object is an instance of MachineExtension.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MachineExtension {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MachineExtension.__pulumiType;
    }

    /**
     * Indicates whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true.
     */
    public readonly autoUpgradeMinorVersion!: pulumi.Output<boolean | undefined>;
    /**
     * Indicates whether the extension should be automatically upgraded by the platform if there is a newer version available.
     */
    public readonly enableAutomaticUpgrade!: pulumi.Output<boolean | undefined>;
    /**
     * How the extension handler should be forced to update even if the extension configuration has not changed.
     */
    public readonly forceUpdateTag!: pulumi.Output<string | undefined>;
    /**
     * The machine extension instance view.
     */
    public /*out*/ readonly instanceView!: pulumi.Output<types.outputs.scvmm.v20230401preview.MachineExtensionPropertiesResponseInstanceView | undefined>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The extension can contain either protectedSettings or protectedSettingsFromKeyVault or no protected settings at all.
     */
    public readonly protectedSettings!: pulumi.Output<any | undefined>;
    /**
     * The provisioning state, which only appears in the response.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The name of the extension handler publisher.
     */
    public readonly publisher!: pulumi.Output<string | undefined>;
    /**
     * Json formatted public settings for the extension.
     */
    public readonly settings!: pulumi.Output<any | undefined>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.scvmm.v20230401preview.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public readonly type!: pulumi.Output<string>;
    /**
     * Specifies the version of the script handler.
     */
    public readonly typeHandlerVersion!: pulumi.Output<string | undefined>;

    /**
     * Create a MachineExtension resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MachineExtensionArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.virtualMachineName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'virtualMachineName'");
            }
            resourceInputs["autoUpgradeMinorVersion"] = args ? args.autoUpgradeMinorVersion : undefined;
            resourceInputs["enableAutomaticUpgrade"] = args ? args.enableAutomaticUpgrade : undefined;
            resourceInputs["extensionName"] = args ? args.extensionName : undefined;
            resourceInputs["forceUpdateTag"] = args ? args.forceUpdateTag : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["protectedSettings"] = args ? args.protectedSettings : undefined;
            resourceInputs["publisher"] = args ? args.publisher : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["settings"] = args ? args.settings : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["typeHandlerVersion"] = args ? args.typeHandlerVersion : undefined;
            resourceInputs["virtualMachineName"] = args ? args.virtualMachineName : undefined;
            resourceInputs["instanceView"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
        } else {
            resourceInputs["autoUpgradeMinorVersion"] = undefined /*out*/;
            resourceInputs["enableAutomaticUpgrade"] = undefined /*out*/;
            resourceInputs["forceUpdateTag"] = undefined /*out*/;
            resourceInputs["instanceView"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["protectedSettings"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["publisher"] = undefined /*out*/;
            resourceInputs["settings"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["typeHandlerVersion"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:scvmm:MachineExtension" }, { type: "azure-native:scvmm/v20220521preview:MachineExtension" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(MachineExtension.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a MachineExtension resource.
 */
export interface MachineExtensionArgs {
    /**
     * Indicates whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true.
     */
    autoUpgradeMinorVersion?: pulumi.Input<boolean>;
    /**
     * Indicates whether the extension should be automatically upgraded by the platform if there is a newer version available.
     */
    enableAutomaticUpgrade?: pulumi.Input<boolean>;
    /**
     * The name of the machine extension.
     */
    extensionName?: pulumi.Input<string>;
    /**
     * How the extension handler should be forced to update even if the extension configuration has not changed.
     */
    forceUpdateTag?: pulumi.Input<string>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * The extension can contain either protectedSettings or protectedSettingsFromKeyVault or no protected settings at all.
     */
    protectedSettings?: any;
    /**
     * The name of the extension handler publisher.
     */
    publisher?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Json formatted public settings for the extension.
     */
    settings?: any;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Specifies the type of the extension; an example is "CustomScriptExtension".
     */
    type?: pulumi.Input<string>;
    /**
     * Specifies the version of the script handler.
     */
    typeHandlerVersion?: pulumi.Input<string>;
    /**
     * The name of the machine where the extension should be created or updated.
     */
    virtualMachineName: pulumi.Input<string>;
}
