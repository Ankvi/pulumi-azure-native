import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Azure Resource Manager resource envelope.
 */
export class RegistryComponentContainer extends pulumi.CustomResource {
    /**
     * Get an existing RegistryComponentContainer resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): RegistryComponentContainer {
        return new RegistryComponentContainer(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:machinelearningservices/v20230801preview:RegistryComponentContainer';

    /**
     * Returns true if the given object is an instance of RegistryComponentContainer.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is RegistryComponentContainer {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === RegistryComponentContainer.__pulumiType;
    }

    /**
     * [Required] Additional attributes of the entity.
     */
    public readonly componentContainerProperties!: pulumi.Output<types.outputs.ComponentContainerResponse>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a RegistryComponentContainer resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RegistryComponentContainerArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.componentContainerProperties === undefined) && !opts.urn) {
                throw new Error("Missing required property 'componentContainerProperties'");
            }
            if ((!args || args.registryName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'registryName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["componentContainerProperties"] = args ? (args.componentContainerProperties ? pulumi.output(args.componentContainerProperties).apply(types.inputs.componentContainerArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["componentName"] = args ? args.componentName : undefined;
            resourceInputs["registryName"] = args ? args.registryName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["componentContainerProperties"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:machinelearningservices:RegistryComponentContainer" }, { type: "azure-native:machinelearningservices/v20221001preview:RegistryComponentContainer" }, { type: "azure-native:machinelearningservices/v20221201preview:RegistryComponentContainer" }, { type: "azure-native:machinelearningservices/v20230201preview:RegistryComponentContainer" }, { type: "azure-native:machinelearningservices/v20230401:RegistryComponentContainer" }, { type: "azure-native:machinelearningservices/v20230401preview:RegistryComponentContainer" }, { type: "azure-native:machinelearningservices/v20230601preview:RegistryComponentContainer" }, { type: "azure-native:machinelearningservices/v20231001:RegistryComponentContainer" }, { type: "azure-native:machinelearningservices/v20240101preview:RegistryComponentContainer" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(RegistryComponentContainer.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a RegistryComponentContainer resource.
 */
export interface RegistryComponentContainerArgs {
    /**
     * [Required] Additional attributes of the entity.
     */
    componentContainerProperties: pulumi.Input<types.inputs.ComponentContainerArgs>;
    /**
     * Container name.
     */
    componentName?: pulumi.Input<string>;
    /**
     * Name of Azure Machine Learning registry. This is case-insensitive
     */
    registryName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}