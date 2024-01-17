import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Machine Learning compute object wrapped into ARM resource envelope.
 * Azure REST API version: 2023-04-01.
 *
 * Other available API versions: 2022-01-01-preview, 2023-04-01-preview, 2023-06-01-preview, 2023-08-01-preview, 2023-10-01.
 */
export class Compute extends pulumi.CustomResource {
    /**
     * Get an existing Compute resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Compute {
        return new Compute(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:machinelearningservices:Compute';

    /**
     * Returns true if the given object is an instance of Compute.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Compute {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Compute.__pulumiType;
    }

    /**
     * The identity of the resource.
     */
    public readonly identity!: pulumi.Output<types.outputs.ManagedServiceIdentityResponse | undefined>;
    /**
     * Specifies the location of the resource.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Compute properties
     */
    public readonly properties!: pulumi.Output<types.outputs.AKSResponse | types.outputs.AmlComputeResponse | types.outputs.ComputeInstanceResponse | types.outputs.DataFactoryResponse | types.outputs.DataLakeAnalyticsResponse | types.outputs.DatabricksResponse | types.outputs.HDInsightResponse | types.outputs.KubernetesResponse | types.outputs.SynapseSparkResponse | types.outputs.VirtualMachineResponse>;
    /**
     * The sku of the workspace.
     */
    public readonly sku!: pulumi.Output<types.outputs.SkuResponse | undefined>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Contains resource tags defined as key/value pairs.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Compute resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ComputeArgs, opts?: pulumi.CustomResourceOptions) {
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
        const aliasOpts = { aliases: [{ type: "azure-native:machinelearningservices/v20180301preview:Compute" }, { type: "azure-native:machinelearningservices/v20181119:Compute" }, { type: "azure-native:machinelearningservices/v20190501:Compute" }, { type: "azure-native:machinelearningservices/v20190601:Compute" }, { type: "azure-native:machinelearningservices/v20191101:Compute" }, { type: "azure-native:machinelearningservices/v20200101:Compute" }, { type: "azure-native:machinelearningservices/v20200218preview:Compute" }, { type: "azure-native:machinelearningservices/v20200301:Compute" }, { type: "azure-native:machinelearningservices/v20200401:Compute" }, { type: "azure-native:machinelearningservices/v20200501preview:Compute" }, { type: "azure-native:machinelearningservices/v20200515preview:Compute" }, { type: "azure-native:machinelearningservices/v20200601:Compute" }, { type: "azure-native:machinelearningservices/v20200801:Compute" }, { type: "azure-native:machinelearningservices/v20200901preview:Compute" }, { type: "azure-native:machinelearningservices/v20210101:Compute" }, { type: "azure-native:machinelearningservices/v20210301preview:Compute" }, { type: "azure-native:machinelearningservices/v20210401:Compute" }, { type: "azure-native:machinelearningservices/v20210701:Compute" }, { type: "azure-native:machinelearningservices/v20220101preview:Compute" }, { type: "azure-native:machinelearningservices/v20220201preview:Compute" }, { type: "azure-native:machinelearningservices/v20220501:Compute" }, { type: "azure-native:machinelearningservices/v20220601preview:Compute" }, { type: "azure-native:machinelearningservices/v20221001:Compute" }, { type: "azure-native:machinelearningservices/v20221001preview:Compute" }, { type: "azure-native:machinelearningservices/v20221201preview:Compute" }, { type: "azure-native:machinelearningservices/v20230201preview:Compute" }, { type: "azure-native:machinelearningservices/v20230401:Compute" }, { type: "azure-native:machinelearningservices/v20230401preview:Compute" }, { type: "azure-native:machinelearningservices/v20230601preview:Compute" }, { type: "azure-native:machinelearningservices/v20230801preview:Compute" }, { type: "azure-native:machinelearningservices/v20231001:Compute" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Compute.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Compute resource.
 */
export interface ComputeArgs {
    /**
     * Name of the Azure Machine Learning compute.
     */
    computeName?: pulumi.Input<string>;
    /**
     * The identity of the resource.
     */
    identity?: pulumi.Input<types.inputs.ManagedServiceIdentityArgs>;
    /**
     * Specifies the location of the resource.
     */
    location?: pulumi.Input<string>;
    /**
     * Compute properties
     */
    properties?: pulumi.Input<types.inputs.AKSArgs | types.inputs.AmlComputeArgs | types.inputs.ComputeInstanceArgs | types.inputs.DataFactoryArgs | types.inputs.DataLakeAnalyticsArgs | types.inputs.DatabricksArgs | types.inputs.HDInsightArgs | types.inputs.KubernetesArgs | types.inputs.SynapseSparkArgs | types.inputs.VirtualMachineArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The sku of the workspace.
     */
    sku?: pulumi.Input<types.inputs.SkuArgs>;
    /**
     * Contains resource tags defined as key/value pairs.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Name of Azure Machine Learning workspace.
     */
    workspaceName: pulumi.Input<string>;
}