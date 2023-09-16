import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A formula for creating a VM, specifying an image base and other parameters
 * Azure REST API version: 2018-09-15. Prior API version in Azure Native 1.x: 2018-09-15
 */
export class Formula extends pulumi.CustomResource {
    /**
     * Get an existing Formula resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Formula {
        return new Formula(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:devtestlab:Formula';

    /**
     * Returns true if the given object is an instance of Formula.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Formula {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Formula.__pulumiType;
    }

    /**
     * The author of the formula.
     */
    public /*out*/ readonly author!: pulumi.Output<string>;
    /**
     * The creation date of the formula.
     */
    public /*out*/ readonly creationDate!: pulumi.Output<string>;
    /**
     * The description of the formula.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The content of the formula.
     */
    public readonly formulaContent!: pulumi.Output<types.outputs.devtestlab.LabVirtualMachineCreationParameterResponse | undefined>;
    /**
     * The location of the resource.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The OS type of the formula.
     */
    public readonly osType!: pulumi.Output<string | undefined>;
    /**
     * The provisioning status of the resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The tags of the resource.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The unique immutable identifier of a resource (Guid).
     */
    public /*out*/ readonly uniqueIdentifier!: pulumi.Output<string>;
    /**
     * Information about a VM from which a formula is to be created.
     */
    public readonly vm!: pulumi.Output<types.outputs.devtestlab.FormulaPropertiesFromVmResponse | undefined>;

    /**
     * Create a Formula resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FormulaArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.labName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'labName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["formulaContent"] = args ? (args.formulaContent ? pulumi.output(args.formulaContent).apply(types.inputs.devtestlab.labVirtualMachineCreationParameterArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["labName"] = args ? args.labName : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["osType"] = args ? args.osType : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["vm"] = args ? args.vm : undefined;
            resourceInputs["author"] = undefined /*out*/;
            resourceInputs["creationDate"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["uniqueIdentifier"] = undefined /*out*/;
        } else {
            resourceInputs["author"] = undefined /*out*/;
            resourceInputs["creationDate"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["formulaContent"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["osType"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["uniqueIdentifier"] = undefined /*out*/;
            resourceInputs["vm"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:devtestlab/v20150521preview:Formula" }, { type: "azure-native:devtestlab/v20160515:Formula" }, { type: "azure-native:devtestlab/v20180915:Formula" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Formula.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Formula resource.
 */
export interface FormulaArgs {
    /**
     * The description of the formula.
     */
    description?: pulumi.Input<string>;
    /**
     * The content of the formula.
     */
    formulaContent?: pulumi.Input<types.inputs.devtestlab.LabVirtualMachineCreationParameterArgs>;
    /**
     * The name of the lab.
     */
    labName: pulumi.Input<string>;
    /**
     * The location of the resource.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the formula.
     */
    name?: pulumi.Input<string>;
    /**
     * The OS type of the formula.
     */
    osType?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The tags of the resource.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Information about a VM from which a formula is to be created.
     */
    vm?: pulumi.Input<types.inputs.devtestlab.FormulaPropertiesFromVmArgs>;
}
