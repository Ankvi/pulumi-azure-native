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
    public static readonly __pulumiType = 'azure-native:hybridcompute/v20230620preview:MachineExtension';

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
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Describes Machine Extension Properties.
     */
    public readonly properties!: pulumi.Output<types.outputs.hybridcompute.v20230620preview.MachineExtensionPropertiesResponse>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.hybridcompute.v20230620preview.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

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
            if ((!args || args.machineName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'machineName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["extensionName"] = args ? args.extensionName : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["machineName"] = args ? args.machineName : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:hybridcompute:MachineExtension" }, { type: "azure-native:hybridcompute/v20190802preview:MachineExtension" }, { type: "azure-native:hybridcompute/v20191212:MachineExtension" }, { type: "azure-native:hybridcompute/v20200730preview:MachineExtension" }, { type: "azure-native:hybridcompute/v20200802:MachineExtension" }, { type: "azure-native:hybridcompute/v20200815preview:MachineExtension" }, { type: "azure-native:hybridcompute/v20210128preview:MachineExtension" }, { type: "azure-native:hybridcompute/v20210325preview:MachineExtension" }, { type: "azure-native:hybridcompute/v20210422preview:MachineExtension" }, { type: "azure-native:hybridcompute/v20210517preview:MachineExtension" }, { type: "azure-native:hybridcompute/v20210520:MachineExtension" }, { type: "azure-native:hybridcompute/v20210610preview:MachineExtension" }, { type: "azure-native:hybridcompute/v20211210preview:MachineExtension" }, { type: "azure-native:hybridcompute/v20220310:MachineExtension" }, { type: "azure-native:hybridcompute/v20220510preview:MachineExtension" }, { type: "azure-native:hybridcompute/v20220811preview:MachineExtension" }, { type: "azure-native:hybridcompute/v20221110:MachineExtension" }, { type: "azure-native:hybridcompute/v20221227:MachineExtension" }, { type: "azure-native:hybridcompute/v20221227preview:MachineExtension" }, { type: "azure-native:hybridcompute/v20230315preview:MachineExtension" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(MachineExtension.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a MachineExtension resource.
 */
export interface MachineExtensionArgs {
    /**
     * The name of the machine extension.
     */
    extensionName?: pulumi.Input<string>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the machine where the extension should be created or updated.
     */
    machineName: pulumi.Input<string>;
    /**
     * Describes Machine Extension Properties.
     */
    properties?: pulumi.Input<types.inputs.hybridcompute.v20230620preview.MachineExtensionPropertiesArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
