import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Azure Resource Manager resource envelope.
 */
export class ModelVersion extends pulumi.CustomResource {
    /**
     * Get an existing ModelVersion resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ModelVersion {
        return new ModelVersion(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:machinelearningservices/v20210301preview:ModelVersion';

    /**
     * Returns true if the given object is an instance of ModelVersion.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ModelVersion {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ModelVersion.__pulumiType;
    }

    /**
     * The name of the resource
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * [Required] Additional attributes of the entity.
     */
    public readonly properties!: pulumi.Output<types.outputs.ModelVersionResponse>;
    /**
     * System data associated with resource provider
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ModelVersion resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ModelVersionArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.name === undefined) && !opts.urn) {
                throw new Error("Missing required property 'name'");
            }
            if ((!args || args.properties === undefined) && !opts.urn) {
                throw new Error("Missing required property 'properties'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.workspaceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'workspaceName'");
            }
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["version"] = args ? args.version : undefined;
            resourceInputs["workspaceName"] = args ? args.workspaceName : undefined;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:machinelearningservices:ModelVersion" }, { type: "azure-native:machinelearningservices/v20220201preview:ModelVersion" }, { type: "azure-native:machinelearningservices/v20220501:ModelVersion" }, { type: "azure-native:machinelearningservices/v20220601preview:ModelVersion" }, { type: "azure-native:machinelearningservices/v20221001:ModelVersion" }, { type: "azure-native:machinelearningservices/v20221001preview:ModelVersion" }, { type: "azure-native:machinelearningservices/v20221201preview:ModelVersion" }, { type: "azure-native:machinelearningservices/v20230201preview:ModelVersion" }, { type: "azure-native:machinelearningservices/v20230401:ModelVersion" }, { type: "azure-native:machinelearningservices/v20230401preview:ModelVersion" }, { type: "azure-native:machinelearningservices/v20230601preview:ModelVersion" }, { type: "azure-native:machinelearningservices/v20230801preview:ModelVersion" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ModelVersion.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ModelVersion resource.
 */
export interface ModelVersionArgs {
    /**
     * Container name.
     */
    name: pulumi.Input<string>;
    /**
     * [Required] Additional attributes of the entity.
     */
    properties: pulumi.Input<types.inputs.ModelVersionArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Version identifier.
     */
    version?: pulumi.Input<string>;
    /**
     * Name of Azure Machine Learning workspace.
     */
    workspaceName: pulumi.Input<string>;
}
