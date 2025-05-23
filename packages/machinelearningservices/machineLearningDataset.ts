import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Machine Learning dataset object wrapped into ARM resource envelope.
 *
 * Uses Azure REST API version 2020-05-01-preview. In version 2.x of the Azure Native provider, it used API version 2020-05-01-preview.
 */
export class MachineLearningDataset extends pulumi.CustomResource {
    /**
     * Get an existing MachineLearningDataset resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): MachineLearningDataset {
        return new MachineLearningDataset(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:machinelearningservices:MachineLearningDataset';

    /**
     * Returns true if the given object is an instance of MachineLearningDataset.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MachineLearningDataset {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MachineLearningDataset.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The identity of the resource.
     */
    public /*out*/ readonly identity!: pulumi.Output<types.outputs.IdentityResponse | undefined>;
    /**
     * Specifies the location of the resource.
     */
    public /*out*/ readonly location!: pulumi.Output<string | undefined>;
    /**
     * Specifies the name of the resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Dataset properties
     */
    public /*out*/ readonly properties!: pulumi.Output<types.outputs.DatasetResponse>;
    /**
     * The sku of the workspace.
     */
    public /*out*/ readonly sku!: pulumi.Output<types.outputs.SkuResponse | undefined>;
    /**
     * Contains resource tags defined as key/value pairs.
     */
    public /*out*/ readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Specifies the type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a MachineLearningDataset resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MachineLearningDatasetArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.datasetType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'datasetType'");
            }
            if ((!args || args.parameters === undefined) && !opts.urn) {
                throw new Error("Missing required property 'parameters'");
            }
            if ((!args || args.registration === undefined) && !opts.urn) {
                throw new Error("Missing required property 'registration'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.workspaceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'workspaceName'");
            }
            resourceInputs["datasetName"] = args ? args.datasetName : undefined;
            resourceInputs["datasetType"] = args ? args.datasetType : undefined;
            resourceInputs["parameters"] = args ? (args.parameters ? pulumi.output(args.parameters).apply(types.inputs.datasetCreateRequestParametersArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["registration"] = args ? args.registration : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["skipValidation"] = (args ? args.skipValidation : undefined) ?? false;
            resourceInputs["timeSeries"] = args ? args.timeSeries : undefined;
            resourceInputs["workspaceName"] = args ? args.workspaceName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:machinelearningservices/v20200501preview:MachineLearningDataset" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(MachineLearningDataset.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a MachineLearningDataset resource.
 */
export interface MachineLearningDatasetArgs {
    /**
     * The Dataset name.
     */
    datasetName?: pulumi.Input<string>;
    /**
     * Specifies dataset type.
     */
    datasetType: pulumi.Input<string | types.enums.DatasetType>;
    parameters: pulumi.Input<types.inputs.DatasetCreateRequestParametersArgs>;
    registration: pulumi.Input<types.inputs.DatasetCreateRequestRegistrationArgs>;
    /**
     * Name of the resource group in which workspace is located.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Skip validation that ensures data can be loaded from the dataset before registration.
     */
    skipValidation?: pulumi.Input<boolean>;
    timeSeries?: pulumi.Input<types.inputs.DatasetCreateRequestTimeSeriesArgs>;
    /**
     * Name of Azure Machine Learning workspace.
     */
    workspaceName: pulumi.Input<string>;
}