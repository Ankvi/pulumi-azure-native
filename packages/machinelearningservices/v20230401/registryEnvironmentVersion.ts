import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Azure Resource Manager resource envelope.
 */
export class RegistryEnvironmentVersion extends pulumi.CustomResource {
    /**
     * Get an existing RegistryEnvironmentVersion resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): RegistryEnvironmentVersion {
        return new RegistryEnvironmentVersion(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:machinelearningservices/v20230401:RegistryEnvironmentVersion';

    /**
     * Returns true if the given object is an instance of RegistryEnvironmentVersion.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is RegistryEnvironmentVersion {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === RegistryEnvironmentVersion.__pulumiType;
    }

    /**
     * [Required] Additional attributes of the entity.
     */
    public readonly environmentVersionProperties!: pulumi.Output<types.outputs.EnvironmentVersionResponse>;
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
     * Create a RegistryEnvironmentVersion resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RegistryEnvironmentVersionArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.environmentName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'environmentName'");
            }
            if ((!args || args.environmentVersionProperties === undefined) && !opts.urn) {
                throw new Error("Missing required property 'environmentVersionProperties'");
            }
            if ((!args || args.registryName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'registryName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["environmentName"] = args ? args.environmentName : undefined;
            resourceInputs["environmentVersionProperties"] = args ? (args.environmentVersionProperties ? pulumi.output(args.environmentVersionProperties).apply(types.inputs.environmentVersionArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["registryName"] = args ? args.registryName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["version"] = args ? args.version : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["environmentVersionProperties"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:machinelearningservices:RegistryEnvironmentVersion" }, { type: "azure-native:machinelearningservices/v20221001preview:RegistryEnvironmentVersion" }, { type: "azure-native:machinelearningservices/v20221201preview:RegistryEnvironmentVersion" }, { type: "azure-native:machinelearningservices/v20230201preview:RegistryEnvironmentVersion" }, { type: "azure-native:machinelearningservices/v20230401preview:RegistryEnvironmentVersion" }, { type: "azure-native:machinelearningservices/v20230601preview:RegistryEnvironmentVersion" }, { type: "azure-native:machinelearningservices/v20230801preview:RegistryEnvironmentVersion" }, { type: "azure-native:machinelearningservices/v20231001:RegistryEnvironmentVersion" }, { type: "azure-native:machinelearningservices/v20240101preview:RegistryEnvironmentVersion" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(RegistryEnvironmentVersion.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a RegistryEnvironmentVersion resource.
 */
export interface RegistryEnvironmentVersionArgs {
    /**
     * Container name.
     */
    environmentName: pulumi.Input<string>;
    /**
     * [Required] Additional attributes of the entity.
     */
    environmentVersionProperties: pulumi.Input<types.inputs.EnvironmentVersionArgs>;
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