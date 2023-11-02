import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Azure Resource Manager resource envelope.
 */
export class ModelContainer extends pulumi.CustomResource {
    /**
     * Get an existing ModelContainer resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ModelContainer {
        return new ModelContainer(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:machinelearningservices/v20220201preview:ModelContainer';

    /**
     * Returns true if the given object is an instance of ModelContainer.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ModelContainer {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ModelContainer.__pulumiType;
    }

    /**
     * [Required] Additional attributes of the entity.
     */
    public readonly modelContainerDetails!: pulumi.Output<types.outputs.ModelContainerResponse>;
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
     * Create a ModelContainer resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ModelContainerArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.modelContainerDetails === undefined) && !opts.urn) {
                throw new Error("Missing required property 'modelContainerDetails'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.workspaceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'workspaceName'");
            }
            resourceInputs["modelContainerDetails"] = args ? (args.modelContainerDetails ? pulumi.output(args.modelContainerDetails).apply(types.inputs.modelContainerArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["workspaceName"] = args ? args.workspaceName : undefined;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["modelContainerDetails"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:machinelearningservices:ModelContainer" }, { type: "azure-native:machinelearningservices/v20210301preview:ModelContainer" }, { type: "azure-native:machinelearningservices/v20220501:ModelContainer" }, { type: "azure-native:machinelearningservices/v20220601preview:ModelContainer" }, { type: "azure-native:machinelearningservices/v20221001:ModelContainer" }, { type: "azure-native:machinelearningservices/v20221001preview:ModelContainer" }, { type: "azure-native:machinelearningservices/v20221201preview:ModelContainer" }, { type: "azure-native:machinelearningservices/v20230201preview:ModelContainer" }, { type: "azure-native:machinelearningservices/v20230401:ModelContainer" }, { type: "azure-native:machinelearningservices/v20230401preview:ModelContainer" }, { type: "azure-native:machinelearningservices/v20230601preview:ModelContainer" }, { type: "azure-native:machinelearningservices/v20230801preview:ModelContainer" }, { type: "azure-native:machinelearningservices/v20231001:ModelContainer" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ModelContainer.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ModelContainer resource.
 */
export interface ModelContainerArgs {
    /**
     * [Required] Additional attributes of the entity.
     */
    modelContainerDetails: pulumi.Input<types.inputs.ModelContainerArgs>;
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
