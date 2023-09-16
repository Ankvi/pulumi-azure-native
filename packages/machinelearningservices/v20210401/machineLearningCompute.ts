import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Machine Learning compute object wrapped into ARM resource envelope.
 */
export class MachineLearningCompute extends pulumi.CustomResource {
    /**
     * Get an existing MachineLearningCompute resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): MachineLearningCompute {
        return new MachineLearningCompute(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:machinelearningservices/v20210401:MachineLearningCompute';

    /**
     * Returns true if the given object is an instance of MachineLearningCompute.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MachineLearningCompute {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MachineLearningCompute.__pulumiType;
    }

    /**
     * The identity of the resource.
     */
    public readonly identity!: pulumi.Output<types.outputs.machinelearningservices.v20210401.IdentityResponse | undefined>;
    /**
     * Specifies the location of the resource.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * Specifies the name of the resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Compute properties
     */
    public readonly properties!: pulumi.Output<types.outputs.machinelearningservices.v20210401.AKSResponse | types.outputs.machinelearningservices.v20210401.AmlComputeResponse | types.outputs.machinelearningservices.v20210401.ComputeInstanceResponse | types.outputs.machinelearningservices.v20210401.DataFactoryResponse | types.outputs.machinelearningservices.v20210401.DataLakeAnalyticsResponse | types.outputs.machinelearningservices.v20210401.DatabricksResponse | types.outputs.machinelearningservices.v20210401.HDInsightResponse | types.outputs.machinelearningservices.v20210401.SynapseSparkResponse | types.outputs.machinelearningservices.v20210401.VirtualMachineResponse>;
    /**
     * The sku of the workspace.
     */
    public readonly sku!: pulumi.Output<types.outputs.machinelearningservices.v20210401.SkuResponse | undefined>;
    /**
     * Read only system data
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.machinelearningservices.v20210401.SystemDataResponse>;
    /**
     * Contains resource tags defined as key/value pairs.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Specifies the type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a MachineLearningCompute resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MachineLearningComputeArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.workspaceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'workspaceName'");
            }
            resourceInputs["computeName"] = args ? args.computeName : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["workspaceName"] = args ? args.workspaceName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:machinelearningservices:MachineLearningCompute" }, { type: "azure-native:machinelearningservices/v20180301preview:MachineLearningCompute" }, { type: "azure-native:machinelearningservices/v20181119:MachineLearningCompute" }, { type: "azure-native:machinelearningservices/v20190501:MachineLearningCompute" }, { type: "azure-native:machinelearningservices/v20190601:MachineLearningCompute" }, { type: "azure-native:machinelearningservices/v20191101:MachineLearningCompute" }, { type: "azure-native:machinelearningservices/v20200101:MachineLearningCompute" }, { type: "azure-native:machinelearningservices/v20200218preview:MachineLearningCompute" }, { type: "azure-native:machinelearningservices/v20200301:MachineLearningCompute" }, { type: "azure-native:machinelearningservices/v20200401:MachineLearningCompute" }, { type: "azure-native:machinelearningservices/v20200501preview:MachineLearningCompute" }, { type: "azure-native:machinelearningservices/v20200515preview:MachineLearningCompute" }, { type: "azure-native:machinelearningservices/v20200601:MachineLearningCompute" }, { type: "azure-native:machinelearningservices/v20200801:MachineLearningCompute" }, { type: "azure-native:machinelearningservices/v20200901preview:MachineLearningCompute" }, { type: "azure-native:machinelearningservices/v20210101:MachineLearningCompute" }, { type: "azure-native:machinelearningservices/v20210301preview:MachineLearningCompute" }, { type: "azure-native:machinelearningservices/v20210701:MachineLearningCompute" }, { type: "azure-native:machinelearningservices/v20220101preview:MachineLearningCompute" }, { type: "azure-native:machinelearningservices/v20220201preview:MachineLearningCompute" }, { type: "azure-native:machinelearningservices/v20220501:MachineLearningCompute" }, { type: "azure-native:machinelearningservices/v20220601preview:MachineLearningCompute" }, { type: "azure-native:machinelearningservices/v20221001:MachineLearningCompute" }, { type: "azure-native:machinelearningservices/v20221001preview:MachineLearningCompute" }, { type: "azure-native:machinelearningservices/v20221201preview:MachineLearningCompute" }, { type: "azure-native:machinelearningservices/v20230201preview:MachineLearningCompute" }, { type: "azure-native:machinelearningservices/v20230401:MachineLearningCompute" }, { type: "azure-native:machinelearningservices/v20230401preview:MachineLearningCompute" }, { type: "azure-native:machinelearningservices/v20230601preview:MachineLearningCompute" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(MachineLearningCompute.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a MachineLearningCompute resource.
 */
export interface MachineLearningComputeArgs {
    /**
     * Name of the Azure Machine Learning compute.
     */
    computeName?: pulumi.Input<string>;
    /**
     * The identity of the resource.
     */
    identity?: pulumi.Input<types.inputs.machinelearningservices.v20210401.IdentityArgs>;
    /**
     * Specifies the location of the resource.
     */
    location?: pulumi.Input<string>;
    /**
     * Compute properties
     */
    properties?: pulumi.Input<types.inputs.machinelearningservices.v20210401.AKSArgs | types.inputs.machinelearningservices.v20210401.AmlComputeArgs | types.inputs.machinelearningservices.v20210401.ComputeInstanceArgs | types.inputs.machinelearningservices.v20210401.DataFactoryArgs | types.inputs.machinelearningservices.v20210401.DataLakeAnalyticsArgs | types.inputs.machinelearningservices.v20210401.DatabricksArgs | types.inputs.machinelearningservices.v20210401.HDInsightArgs | types.inputs.machinelearningservices.v20210401.SynapseSparkArgs | types.inputs.machinelearningservices.v20210401.VirtualMachineArgs>;
    /**
     * Name of the resource group in which workspace is located.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The sku of the workspace.
     */
    sku?: pulumi.Input<types.inputs.machinelearningservices.v20210401.SkuArgs>;
    /**
     * Contains resource tags defined as key/value pairs.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Name of Azure Machine Learning workspace.
     */
    workspaceName: pulumi.Input<string>;
}
