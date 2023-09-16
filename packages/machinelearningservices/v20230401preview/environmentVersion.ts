import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Azure Resource Manager resource envelope.
 */
export class EnvironmentVersion extends pulumi.CustomResource {
    /**
     * Get an existing EnvironmentVersion resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): EnvironmentVersion {
        return new EnvironmentVersion(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:machinelearningservices/v20230401preview:EnvironmentVersion';

    /**
     * Returns true if the given object is an instance of EnvironmentVersion.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is EnvironmentVersion {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === EnvironmentVersion.__pulumiType;
    }

    /**
     * [Required] Additional attributes of the entity.
     */
    public readonly environmentVersionProperties!: pulumi.Output<types.outputs.machinelearningservices.v20230401preview.EnvironmentVersionResponse>;
    /**
     * The name of the resource
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.machinelearningservices.v20230401preview.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a EnvironmentVersion resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: EnvironmentVersionArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.environmentVersionProperties === undefined) && !opts.urn) {
                throw new Error("Missing required property 'environmentVersionProperties'");
            }
            if ((!args || args.name === undefined) && !opts.urn) {
                throw new Error("Missing required property 'name'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.workspaceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'workspaceName'");
            }
            resourceInputs["environmentVersionProperties"] = args ? (args.environmentVersionProperties ? pulumi.output(args.environmentVersionProperties).apply(types.inputs.machinelearningservices.v20230401preview.environmentVersionArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["version"] = args ? args.version : undefined;
            resourceInputs["workspaceName"] = args ? args.workspaceName : undefined;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["environmentVersionProperties"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:machinelearningservices:EnvironmentVersion" }, { type: "azure-native:machinelearningservices/v20210301preview:EnvironmentVersion" }, { type: "azure-native:machinelearningservices/v20220201preview:EnvironmentVersion" }, { type: "azure-native:machinelearningservices/v20220501:EnvironmentVersion" }, { type: "azure-native:machinelearningservices/v20220601preview:EnvironmentVersion" }, { type: "azure-native:machinelearningservices/v20221001:EnvironmentVersion" }, { type: "azure-native:machinelearningservices/v20221001preview:EnvironmentVersion" }, { type: "azure-native:machinelearningservices/v20221201preview:EnvironmentVersion" }, { type: "azure-native:machinelearningservices/v20230201preview:EnvironmentVersion" }, { type: "azure-native:machinelearningservices/v20230401:EnvironmentVersion" }, { type: "azure-native:machinelearningservices/v20230601preview:EnvironmentVersion" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(EnvironmentVersion.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a EnvironmentVersion resource.
 */
export interface EnvironmentVersionArgs {
    /**
     * [Required] Additional attributes of the entity.
     */
    environmentVersionProperties: pulumi.Input<types.inputs.machinelearningservices.v20230401preview.EnvironmentVersionArgs>;
    /**
     * Name of EnvironmentVersion. This is case-sensitive.
     */
    name: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Version of EnvironmentVersion.
     */
    version?: pulumi.Input<string>;
    /**
     * Name of Azure Machine Learning workspace.
     */
    workspaceName: pulumi.Input<string>;
}
