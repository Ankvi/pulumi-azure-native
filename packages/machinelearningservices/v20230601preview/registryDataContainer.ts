import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Azure Resource Manager resource envelope.
 */
export class RegistryDataContainer extends pulumi.CustomResource {
    /**
     * Get an existing RegistryDataContainer resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): RegistryDataContainer {
        return new RegistryDataContainer(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:machinelearningservices/v20230601preview:RegistryDataContainer';

    /**
     * Returns true if the given object is an instance of RegistryDataContainer.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is RegistryDataContainer {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === RegistryDataContainer.__pulumiType;
    }

    /**
     * [Required] Additional attributes of the entity.
     */
    public readonly dataContainerProperties!: pulumi.Output<types.outputs.DataContainerResponse>;
    /**
     * The name of the resource
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a RegistryDataContainer resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RegistryDataContainerArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.dataContainerProperties === undefined) && !opts.urn) {
                throw new Error("Missing required property 'dataContainerProperties'");
            }
            if ((!args || args.registryName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'registryName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["dataContainerProperties"] = args ? (args.dataContainerProperties ? pulumi.output(args.dataContainerProperties).apply(types.inputs.dataContainerArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["registryName"] = args ? args.registryName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["dataContainerProperties"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:machinelearningservices:RegistryDataContainer" }, { type: "azure-native:machinelearningservices/v20230201preview:RegistryDataContainer" }, { type: "azure-native:machinelearningservices/v20230401:RegistryDataContainer" }, { type: "azure-native:machinelearningservices/v20230401preview:RegistryDataContainer" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(RegistryDataContainer.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a RegistryDataContainer resource.
 */
export interface RegistryDataContainerArgs {
    /**
     * [Required] Additional attributes of the entity.
     */
    dataContainerProperties: pulumi.Input<types.inputs.DataContainerArgs>;
    /**
     * Container name.
     */
    name?: pulumi.Input<string>;
    /**
     * Name of Azure Machine Learning registry. This is case-insensitive
     */
    registryName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
