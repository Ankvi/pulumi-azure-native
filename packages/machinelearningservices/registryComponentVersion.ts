import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Azure Resource Manager resource envelope.
 * Azure REST API version: 2023-04-01.
 */
export class RegistryComponentVersion extends pulumi.CustomResource {
    /**
     * Get an existing RegistryComponentVersion resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): RegistryComponentVersion {
        return new RegistryComponentVersion(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:machinelearningservices:RegistryComponentVersion';

    /**
     * Returns true if the given object is an instance of RegistryComponentVersion.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is RegistryComponentVersion {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === RegistryComponentVersion.__pulumiType;
    }

    /**
     * [Required] Additional attributes of the entity.
     */
    public readonly componentVersionProperties!: pulumi.Output<types.outputs.ComponentVersionResponse>;
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
     * Create a RegistryComponentVersion resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RegistryComponentVersionArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.componentName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'componentName'");
            }
            if ((!args || args.componentVersionProperties === undefined) && !opts.urn) {
                throw new Error("Missing required property 'componentVersionProperties'");
            }
            if ((!args || args.registryName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'registryName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["componentName"] = args ? args.componentName : undefined;
            resourceInputs["componentVersionProperties"] = args ? (args.componentVersionProperties ? pulumi.output(args.componentVersionProperties).apply(types.inputs.componentVersionArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["registryName"] = args ? args.registryName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["version"] = args ? args.version : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["componentVersionProperties"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:machinelearningservices/v20221001preview:RegistryComponentVersion" }, { type: "azure-native:machinelearningservices/v20221201preview:RegistryComponentVersion" }, { type: "azure-native:machinelearningservices/v20230201preview:RegistryComponentVersion" }, { type: "azure-native:machinelearningservices/v20230401:RegistryComponentVersion" }, { type: "azure-native:machinelearningservices/v20230401preview:RegistryComponentVersion" }, { type: "azure-native:machinelearningservices/v20230601preview:RegistryComponentVersion" }, { type: "azure-native:machinelearningservices/v20230801preview:RegistryComponentVersion" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(RegistryComponentVersion.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a RegistryComponentVersion resource.
 */
export interface RegistryComponentVersionArgs {
    /**
     * Container name.
     */
    componentName: pulumi.Input<string>;
    /**
     * [Required] Additional attributes of the entity.
     */
    componentVersionProperties: pulumi.Input<types.inputs.ComponentVersionArgs>;
    /**
     * Name of Azure Machine Learning registry. This is case-insensitive
     */
    registryName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Version identifier.
     */
    version?: pulumi.Input<string>;
}
