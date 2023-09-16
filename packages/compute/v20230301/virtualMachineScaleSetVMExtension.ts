import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Describes a VMSS VM Extension.
 */
export class VirtualMachineScaleSetVMExtension extends pulumi.CustomResource {
    /**
     * Get an existing VirtualMachineScaleSetVMExtension resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): VirtualMachineScaleSetVMExtension {
        return new VirtualMachineScaleSetVMExtension(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:compute/v20230301:VirtualMachineScaleSetVMExtension';

    /**
     * Returns true if the given object is an instance of VirtualMachineScaleSetVMExtension.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VirtualMachineScaleSetVMExtension {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VirtualMachineScaleSetVMExtension.__pulumiType;
    }

    /**
     * Indicates whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true.
     */
    public readonly autoUpgradeMinorVersion!: pulumi.Output<boolean | undefined>;
    /**
     * Indicates whether the extension should be automatically upgraded by the platform if there is a newer version of the extension available.
     */
    public readonly enableAutomaticUpgrade!: pulumi.Output<boolean | undefined>;
    /**
     * How the extension handler should be forced to update even if the extension configuration has not changed.
     */
    public readonly forceUpdateTag!: pulumi.Output<string | undefined>;
    /**
     * The virtual machine extension instance view.
     */
    public readonly instanceView!: pulumi.Output<types.outputs.compute.v20230301.VirtualMachineExtensionInstanceViewResponse | undefined>;
    /**
     * The location of the extension.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * The name of the extension.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The extension can contain either protectedSettings or protectedSettingsFromKeyVault or no protected settings at all.
     */
    public readonly protectedSettings!: pulumi.Output<any | undefined>;
    /**
     * The extensions protected settings that are passed by reference, and consumed from key vault
     */
    public readonly protectedSettingsFromKeyVault!: pulumi.Output<types.outputs.compute.v20230301.KeyVaultSecretReferenceResponse | undefined>;
    /**
     * Collection of extension names after which this extension needs to be provisioned.
     */
    public readonly provisionAfterExtensions!: pulumi.Output<string[] | undefined>;
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
     * Indicates whether failures stemming from the extension will be suppressed (Operational failures such as not connecting to the VM will not be suppressed regardless of this value). The default is false.
     */
    public readonly suppressFailures!: pulumi.Output<boolean | undefined>;
    /**
     * Resource type
     */
    public readonly type!: pulumi.Output<string>;
    /**
     * Specifies the version of the script handler.
     */
    public readonly typeHandlerVersion!: pulumi.Output<string | undefined>;

    /**
     * Create a VirtualMachineScaleSetVMExtension resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VirtualMachineScaleSetVMExtensionArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.instanceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'instanceId'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.vmScaleSetName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'vmScaleSetName'");
            }
            resourceInputs["autoUpgradeMinorVersion"] = args ? args.autoUpgradeMinorVersion : undefined;
            resourceInputs["enableAutomaticUpgrade"] = args ? args.enableAutomaticUpgrade : undefined;
            resourceInputs["forceUpdateTag"] = args ? args.forceUpdateTag : undefined;
            resourceInputs["instanceId"] = args ? args.instanceId : undefined;
            resourceInputs["instanceView"] = args ? args.instanceView : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["protectedSettings"] = args ? args.protectedSettings : undefined;
            resourceInputs["protectedSettingsFromKeyVault"] = args ? args.protectedSettingsFromKeyVault : undefined;
            resourceInputs["provisionAfterExtensions"] = args ? args.provisionAfterExtensions : undefined;
            resourceInputs["publisher"] = args ? args.publisher : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["settings"] = args ? args.settings : undefined;
            resourceInputs["suppressFailures"] = args ? args.suppressFailures : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["typeHandlerVersion"] = args ? args.typeHandlerVersion : undefined;
            resourceInputs["vmExtensionName"] = args ? args.vmExtensionName : undefined;
            resourceInputs["vmScaleSetName"] = args ? args.vmScaleSetName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
        } else {
            resourceInputs["autoUpgradeMinorVersion"] = undefined /*out*/;
            resourceInputs["enableAutomaticUpgrade"] = undefined /*out*/;
            resourceInputs["forceUpdateTag"] = undefined /*out*/;
            resourceInputs["instanceView"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["protectedSettings"] = undefined /*out*/;
            resourceInputs["protectedSettingsFromKeyVault"] = undefined /*out*/;
            resourceInputs["provisionAfterExtensions"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["publisher"] = undefined /*out*/;
            resourceInputs["settings"] = undefined /*out*/;
            resourceInputs["suppressFailures"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["typeHandlerVersion"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:compute:VirtualMachineScaleSetVMExtension" }, { type: "azure-native:compute/v20190701:VirtualMachineScaleSetVMExtension" }, { type: "azure-native:compute/v20191201:VirtualMachineScaleSetVMExtension" }, { type: "azure-native:compute/v20200601:VirtualMachineScaleSetVMExtension" }, { type: "azure-native:compute/v20201201:VirtualMachineScaleSetVMExtension" }, { type: "azure-native:compute/v20210301:VirtualMachineScaleSetVMExtension" }, { type: "azure-native:compute/v20210401:VirtualMachineScaleSetVMExtension" }, { type: "azure-native:compute/v20210701:VirtualMachineScaleSetVMExtension" }, { type: "azure-native:compute/v20211101:VirtualMachineScaleSetVMExtension" }, { type: "azure-native:compute/v20220301:VirtualMachineScaleSetVMExtension" }, { type: "azure-native:compute/v20220801:VirtualMachineScaleSetVMExtension" }, { type: "azure-native:compute/v20221101:VirtualMachineScaleSetVMExtension" }, { type: "azure-native:compute/v20230701:VirtualMachineScaleSetVMExtension" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(VirtualMachineScaleSetVMExtension.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a VirtualMachineScaleSetVMExtension resource.
 */
export interface VirtualMachineScaleSetVMExtensionArgs {
    /**
     * Indicates whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true.
     */
    autoUpgradeMinorVersion?: pulumi.Input<boolean>;
    /**
     * Indicates whether the extension should be automatically upgraded by the platform if there is a newer version of the extension available.
     */
    enableAutomaticUpgrade?: pulumi.Input<boolean>;
    /**
     * How the extension handler should be forced to update even if the extension configuration has not changed.
     */
    forceUpdateTag?: pulumi.Input<string>;
    /**
     * The instance ID of the virtual machine.
     */
    instanceId: pulumi.Input<string>;
    /**
     * The virtual machine extension instance view.
     */
    instanceView?: pulumi.Input<types.inputs.compute.v20230301.VirtualMachineExtensionInstanceViewArgs>;
    /**
     * The location of the extension.
     */
    location?: pulumi.Input<string>;
    /**
     * The extension can contain either protectedSettings or protectedSettingsFromKeyVault or no protected settings at all.
     */
    protectedSettings?: any;
    /**
     * The extensions protected settings that are passed by reference, and consumed from key vault
     */
    protectedSettingsFromKeyVault?: pulumi.Input<types.inputs.compute.v20230301.KeyVaultSecretReferenceArgs>;
    /**
     * Collection of extension names after which this extension needs to be provisioned.
     */
    provisionAfterExtensions?: pulumi.Input<pulumi.Input<string>[]>;
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
     * Indicates whether failures stemming from the extension will be suppressed (Operational failures such as not connecting to the VM will not be suppressed regardless of this value). The default is false.
     */
    suppressFailures?: pulumi.Input<boolean>;
    /**
     * Specifies the type of the extension; an example is "CustomScriptExtension".
     */
    type?: pulumi.Input<string>;
    /**
     * Specifies the version of the script handler.
     */
    typeHandlerVersion?: pulumi.Input<string>;
    /**
     * The name of the virtual machine extension.
     */
    vmExtensionName?: pulumi.Input<string>;
    /**
     * The name of the VM scale set.
     */
    vmScaleSetName: pulumi.Input<string>;
}
