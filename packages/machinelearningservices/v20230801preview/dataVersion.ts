import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Azure Resource Manager resource envelope.
 */
export class DataVersion extends pulumi.CustomResource {
    /**
     * Get an existing DataVersion resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): DataVersion {
        return new DataVersion(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:machinelearningservices/v20230801preview:DataVersion';

    /**
     * Returns true if the given object is an instance of DataVersion.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DataVersion {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DataVersion.__pulumiType;
    }

    /**
     * [Required] Additional attributes of the entity.
     */
    public readonly dataVersionBaseProperties!: pulumi.Output<types.outputs.DataImportResponse | types.outputs.MLTableDataResponse | types.outputs.UriFileDataVersionResponse | types.outputs.UriFolderDataVersionResponse>;
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
     * Create a DataVersion resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DataVersionArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.dataVersionBaseProperties === undefined) && !opts.urn) {
                throw new Error("Missing required property 'dataVersionBaseProperties'");
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
            resourceInputs["dataVersionBaseProperties"] = args ? args.dataVersionBaseProperties : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["version"] = args ? args.version : undefined;
            resourceInputs["workspaceName"] = args ? args.workspaceName : undefined;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["dataVersionBaseProperties"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:machinelearningservices:DataVersion" }, { type: "azure-native:machinelearningservices/v20210301preview:DataVersion" }, { type: "azure-native:machinelearningservices/v20220201preview:DataVersion" }, { type: "azure-native:machinelearningservices/v20220501:DataVersion" }, { type: "azure-native:machinelearningservices/v20220601preview:DataVersion" }, { type: "azure-native:machinelearningservices/v20221001:DataVersion" }, { type: "azure-native:machinelearningservices/v20221001preview:DataVersion" }, { type: "azure-native:machinelearningservices/v20221201preview:DataVersion" }, { type: "azure-native:machinelearningservices/v20230201preview:DataVersion" }, { type: "azure-native:machinelearningservices/v20230401:DataVersion" }, { type: "azure-native:machinelearningservices/v20230401preview:DataVersion" }, { type: "azure-native:machinelearningservices/v20230601preview:DataVersion" }, { type: "azure-native:machinelearningservices/v20231001:DataVersion" }, { type: "azure-native:machinelearningservices/v20240101preview:DataVersion" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(DataVersion.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a DataVersion resource.
 */
export interface DataVersionArgs {
    /**
     * [Required] Additional attributes of the entity.
     */
    dataVersionBaseProperties: pulumi.Input<types.inputs.DataImportArgs | types.inputs.MLTableDataArgs | types.inputs.UriFileDataVersionArgs | types.inputs.UriFolderDataVersionArgs>;
    /**
     * Container name.
     */
    name: pulumi.Input<string>;
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