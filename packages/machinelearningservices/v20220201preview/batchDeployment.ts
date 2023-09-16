import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
export class BatchDeployment extends pulumi.CustomResource {
    /**
     * Get an existing BatchDeployment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): BatchDeployment {
        return new BatchDeployment(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:machinelearningservices/v20220201preview:BatchDeployment';

    /**
     * Returns true if the given object is an instance of BatchDeployment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is BatchDeployment {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === BatchDeployment.__pulumiType;
    }

    /**
     * [Required] Additional attributes of the entity.
     */
    public readonly batchDeploymentDetails!: pulumi.Output<types.outputs.machinelearningservices.v20220201preview.BatchDeploymentResponse>;
    /**
     * Managed service identity (system assigned and/or user assigned identities)
     */
    public readonly identity!: pulumi.Output<types.outputs.machinelearningservices.v20220201preview.ManagedServiceIdentityResponse | undefined>;
    /**
     * Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type.
     */
    public readonly kind!: pulumi.Output<string | undefined>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Sku details required for ARM contract for Autoscaling.
     */
    public readonly sku!: pulumi.Output<types.outputs.machinelearningservices.v20220201preview.SkuResponse | undefined>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.machinelearningservices.v20220201preview.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a BatchDeployment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BatchDeploymentArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.batchDeploymentDetails === undefined) && !opts.urn) {
                throw new Error("Missing required property 'batchDeploymentDetails'");
            }
            if ((!args || args.endpointName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'endpointName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.workspaceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'workspaceName'");
            }
            resourceInputs["batchDeploymentDetails"] = args ? (args.batchDeploymentDetails ? pulumi.output(args.batchDeploymentDetails).apply(types.inputs.machinelearningservices.v20220201preview.batchDeploymentArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["deploymentName"] = args ? args.deploymentName : undefined;
            resourceInputs["endpointName"] = args ? args.endpointName : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["kind"] = args ? args.kind : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["workspaceName"] = args ? args.workspaceName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["batchDeploymentDetails"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:machinelearningservices:BatchDeployment" }, { type: "azure-native:machinelearningservices/v20210301preview:BatchDeployment" }, { type: "azure-native:machinelearningservices/v20220501:BatchDeployment" }, { type: "azure-native:machinelearningservices/v20220601preview:BatchDeployment" }, { type: "azure-native:machinelearningservices/v20221001:BatchDeployment" }, { type: "azure-native:machinelearningservices/v20221001preview:BatchDeployment" }, { type: "azure-native:machinelearningservices/v20221201preview:BatchDeployment" }, { type: "azure-native:machinelearningservices/v20230201preview:BatchDeployment" }, { type: "azure-native:machinelearningservices/v20230401:BatchDeployment" }, { type: "azure-native:machinelearningservices/v20230401preview:BatchDeployment" }, { type: "azure-native:machinelearningservices/v20230601preview:BatchDeployment" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(BatchDeployment.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a BatchDeployment resource.
 */
export interface BatchDeploymentArgs {
    /**
     * [Required] Additional attributes of the entity.
     */
    batchDeploymentDetails: pulumi.Input<types.inputs.machinelearningservices.v20220201preview.BatchDeploymentArgs>;
    /**
     * The identifier for the Batch inference deployment.
     */
    deploymentName?: pulumi.Input<string>;
    /**
     * Inference endpoint name
     */
    endpointName: pulumi.Input<string>;
    /**
     * Managed service identity (system assigned and/or user assigned identities)
     */
    identity?: pulumi.Input<types.inputs.machinelearningservices.v20220201preview.ManagedServiceIdentityArgs>;
    /**
     * Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type.
     */
    kind?: pulumi.Input<string>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Sku details required for ARM contract for Autoscaling.
     */
    sku?: pulumi.Input<types.inputs.machinelearningservices.v20220201preview.SkuArgs>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Name of Azure Machine Learning workspace.
     */
    workspaceName: pulumi.Input<string>;
}
