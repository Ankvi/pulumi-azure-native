import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Azure Resource Manager resource envelope.
 */
export class LabelingJob extends pulumi.CustomResource {
    /**
     * Get an existing LabelingJob resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): LabelingJob {
        return new LabelingJob(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:machinelearningservices/v20230401preview:LabelingJob';

    /**
     * Returns true if the given object is an instance of LabelingJob.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is LabelingJob {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === LabelingJob.__pulumiType;
    }

    /**
     * [Required] Additional attributes of the entity.
     */
    public readonly labelingJobProperties!: pulumi.Output<types.outputs.machinelearningservices.v20230401preview.LabelingJobResponse>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.machinelearningservices.v20230401preview.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a LabelingJob resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LabelingJobArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.labelingJobProperties === undefined) && !opts.urn) {
                throw new Error("Missing required property 'labelingJobProperties'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.workspaceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'workspaceName'");
            }
            resourceInputs["id"] = args ? args.id : undefined;
            resourceInputs["labelingJobProperties"] = args ? (args.labelingJobProperties ? pulumi.output(args.labelingJobProperties).apply(types.inputs.machinelearningservices.v20230401preview.labelingJobArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["workspaceName"] = args ? args.workspaceName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["labelingJobProperties"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:machinelearningservices:LabelingJob" }, { type: "azure-native:machinelearningservices/v20200901preview:LabelingJob" }, { type: "azure-native:machinelearningservices/v20210301preview:LabelingJob" }, { type: "azure-native:machinelearningservices/v20220601preview:LabelingJob" }, { type: "azure-native:machinelearningservices/v20221001preview:LabelingJob" }, { type: "azure-native:machinelearningservices/v20221201preview:LabelingJob" }, { type: "azure-native:machinelearningservices/v20230201preview:LabelingJob" }, { type: "azure-native:machinelearningservices/v20230601preview:LabelingJob" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(LabelingJob.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a LabelingJob resource.
 */
export interface LabelingJobArgs {
    /**
     * The name and identifier for the LabelingJob.
     */
    id?: pulumi.Input<string>;
    /**
     * [Required] Additional attributes of the entity.
     */
    labelingJobProperties: pulumi.Input<types.inputs.machinelearningservices.v20230401preview.LabelingJobArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of Azure Machine Learning workspace.
     */
    workspaceName: pulumi.Input<string>;
}
