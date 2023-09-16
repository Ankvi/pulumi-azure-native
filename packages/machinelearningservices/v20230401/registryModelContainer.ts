import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Azure Resource Manager resource envelope.
 */
export class RegistryModelContainer extends pulumi.CustomResource {
    /**
     * Get an existing RegistryModelContainer resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): RegistryModelContainer {
        return new RegistryModelContainer(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:machinelearningservices/v20230401:RegistryModelContainer';

    /**
     * Returns true if the given object is an instance of RegistryModelContainer.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is RegistryModelContainer {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === RegistryModelContainer.__pulumiType;
    }

    /**
     * [Required] Additional attributes of the entity.
     */
    public readonly modelContainerProperties!: pulumi.Output<types.outputs.machinelearningservices.v20230401.ModelContainerResponse>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.machinelearningservices.v20230401.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a RegistryModelContainer resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RegistryModelContainerArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.modelContainerProperties === undefined) && !opts.urn) {
                throw new Error("Missing required property 'modelContainerProperties'");
            }
            if ((!args || args.registryName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'registryName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["modelContainerProperties"] = args ? (args.modelContainerProperties ? pulumi.output(args.modelContainerProperties).apply(types.inputs.machinelearningservices.v20230401.modelContainerArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["modelName"] = args ? args.modelName : undefined;
            resourceInputs["registryName"] = args ? args.registryName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["modelContainerProperties"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:machinelearningservices:RegistryModelContainer" }, { type: "azure-native:machinelearningservices/v20221001preview:RegistryModelContainer" }, { type: "azure-native:machinelearningservices/v20221201preview:RegistryModelContainer" }, { type: "azure-native:machinelearningservices/v20230201preview:RegistryModelContainer" }, { type: "azure-native:machinelearningservices/v20230401preview:RegistryModelContainer" }, { type: "azure-native:machinelearningservices/v20230601preview:RegistryModelContainer" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(RegistryModelContainer.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a RegistryModelContainer resource.
 */
export interface RegistryModelContainerArgs {
    /**
     * [Required] Additional attributes of the entity.
     */
    modelContainerProperties: pulumi.Input<types.inputs.machinelearningservices.v20230401.ModelContainerArgs>;
    /**
     * Container name.
     */
    modelName?: pulumi.Input<string>;
    /**
     * Name of Azure Machine Learning registry. This is case-insensitive
     */
    registryName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
