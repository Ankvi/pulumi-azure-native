import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Azure Resource Manager resource envelope.
 * Azure REST API version: 2023-04-01-preview.
 */
export class FeaturestoreEntityContainerEntity extends pulumi.CustomResource {
    /**
     * Get an existing FeaturestoreEntityContainerEntity resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): FeaturestoreEntityContainerEntity {
        return new FeaturestoreEntityContainerEntity(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:machinelearningservices:FeaturestoreEntityContainerEntity';

    /**
     * Returns true if the given object is an instance of FeaturestoreEntityContainerEntity.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is FeaturestoreEntityContainerEntity {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === FeaturestoreEntityContainerEntity.__pulumiType;
    }

    /**
     * [Required] Additional attributes of the entity.
     */
    public readonly featurestoreEntityContainerProperties!: pulumi.Output<types.outputs.machinelearningservices.FeaturestoreEntityContainerResponse>;
    /**
     * The name of the resource
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.machinelearningservices.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a FeaturestoreEntityContainerEntity resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FeaturestoreEntityContainerEntityArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.featurestoreEntityContainerProperties === undefined) && !opts.urn) {
                throw new Error("Missing required property 'featurestoreEntityContainerProperties'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.workspaceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'workspaceName'");
            }
            resourceInputs["featurestoreEntityContainerProperties"] = args ? (args.featurestoreEntityContainerProperties ? pulumi.output(args.featurestoreEntityContainerProperties).apply(types.inputs.machinelearningservices.featurestoreEntityContainerArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["workspaceName"] = args ? args.workspaceName : undefined;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["featurestoreEntityContainerProperties"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:machinelearningservices/v20230201preview:FeaturestoreEntityContainerEntity" }, { type: "azure-native:machinelearningservices/v20230401preview:FeaturestoreEntityContainerEntity" }, { type: "azure-native:machinelearningservices/v20230601preview:FeaturestoreEntityContainerEntity" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(FeaturestoreEntityContainerEntity.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a FeaturestoreEntityContainerEntity resource.
 */
export interface FeaturestoreEntityContainerEntityArgs {
    /**
     * [Required] Additional attributes of the entity.
     */
    featurestoreEntityContainerProperties: pulumi.Input<types.inputs.machinelearningservices.FeaturestoreEntityContainerArgs>;
    /**
     * Container name. This is case-sensitive.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of Azure Machine Learning workspace.
     */
    workspaceName: pulumi.Input<string>;
}
