import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Azure Resource Manager resource envelope.
 */
export class DataContainer extends pulumi.CustomResource {
    /**
     * Get an existing DataContainer resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): DataContainer {
        return new DataContainer(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:machinelearningservices/v20210301preview:DataContainer';

    /**
     * Returns true if the given object is an instance of DataContainer.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DataContainer {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DataContainer.__pulumiType;
    }

    /**
     * The name of the resource
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * [Required] Additional attributes of the entity.
     */
    public readonly properties!: pulumi.Output<types.outputs.machinelearningservices.v20210301preview.DataContainerResponse>;
    /**
     * System data associated with resource provider
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.machinelearningservices.v20210301preview.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a DataContainer resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DataContainerArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
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
        const aliasOpts = { aliases: [{ type: "azure-native:machinelearningservices:DataContainer" }, { type: "azure-native:machinelearningservices/v20220201preview:DataContainer" }, { type: "azure-native:machinelearningservices/v20220501:DataContainer" }, { type: "azure-native:machinelearningservices/v20220601preview:DataContainer" }, { type: "azure-native:machinelearningservices/v20221001:DataContainer" }, { type: "azure-native:machinelearningservices/v20221001preview:DataContainer" }, { type: "azure-native:machinelearningservices/v20221201preview:DataContainer" }, { type: "azure-native:machinelearningservices/v20230201preview:DataContainer" }, { type: "azure-native:machinelearningservices/v20230401:DataContainer" }, { type: "azure-native:machinelearningservices/v20230401preview:DataContainer" }, { type: "azure-native:machinelearningservices/v20230601preview:DataContainer" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(DataContainer.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a DataContainer resource.
 */
export interface DataContainerArgs {
    /**
     * Container name.
     */
    name?: pulumi.Input<string>;
    /**
     * [Required] Additional attributes of the entity.
     */
    properties: pulumi.Input<types.inputs.machinelearningservices.v20210301preview.DataContainerArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of Azure Machine Learning workspace.
     */
    workspaceName: pulumi.Input<string>;
}
