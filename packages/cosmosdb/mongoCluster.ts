import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Represents a mongo cluster resource.
 *
 * Uses Azure REST API version 2024-02-15-preview.
 *
 * Other available API versions: 2023-03-01-preview, 2023-03-15-preview, 2023-09-15-preview, 2023-11-15-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native cosmosdb [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class MongoCluster extends pulumi.CustomResource {
    /**
     * Get an existing MongoCluster resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): MongoCluster {
        return new MongoCluster(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:cosmosdb:MongoCluster';

    /**
     * Returns true if the given object is an instance of MongoCluster.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MongoCluster {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MongoCluster.__pulumiType;
    }

    /**
     * The administrator's login for the mongo cluster.
     */
    public readonly administratorLogin!: pulumi.Output<string | undefined>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * A status of the mongo cluster.
     */
    public /*out*/ readonly clusterStatus!: pulumi.Output<string>;
    /**
     * The default mongo connection string for the cluster.
     */
    public /*out*/ readonly connectionString!: pulumi.Output<string>;
    /**
     * Earliest restore timestamp in UTC ISO8601 format.
     */
    public /*out*/ readonly earliestRestoreTime!: pulumi.Output<string>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The list of node group specs in the cluster.
     */
    public readonly nodeGroupSpecs!: pulumi.Output<types.outputs.NodeGroupSpecResponse[] | undefined>;
    /**
     * A provisioning state of the mongo cluster.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The Mongo DB server version. Defaults to the latest available version if not specified.
     */
    public readonly serverVersion!: pulumi.Output<string | undefined>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a MongoCluster resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MongoClusterArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["administratorLogin"] = args ? args.administratorLogin : undefined;
            resourceInputs["administratorLoginPassword"] = args ? args.administratorLoginPassword : undefined;
            resourceInputs["createMode"] = (args ? args.createMode : undefined) ?? "Default";
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["mongoClusterName"] = args ? args.mongoClusterName : undefined;
            resourceInputs["nodeGroupSpecs"] = args ? args.nodeGroupSpecs : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["restoreParameters"] = args ? args.restoreParameters : undefined;
            resourceInputs["serverVersion"] = args ? args.serverVersion : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["clusterStatus"] = undefined /*out*/;
            resourceInputs["connectionString"] = undefined /*out*/;
            resourceInputs["earliestRestoreTime"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["administratorLogin"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["clusterStatus"] = undefined /*out*/;
            resourceInputs["connectionString"] = undefined /*out*/;
            resourceInputs["earliestRestoreTime"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["nodeGroupSpecs"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["serverVersion"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:cosmosdb/v20230301preview:MongoCluster" }, { type: "azure-native:cosmosdb/v20230315preview:MongoCluster" }, { type: "azure-native:cosmosdb/v20230915preview:MongoCluster" }, { type: "azure-native:cosmosdb/v20231115preview:MongoCluster" }, { type: "azure-native:cosmosdb/v20240215preview:MongoCluster" }, { type: "azure-native:documentdb/v20230315preview:MongoCluster" }, { type: "azure-native:documentdb/v20230915preview:MongoCluster" }, { type: "azure-native:documentdb/v20231115preview:MongoCluster" }, { type: "azure-native:documentdb/v20240215preview:MongoCluster" }, { type: "azure-native:documentdb/v20240301preview:MongoCluster" }, { type: "azure-native:documentdb/v20240601preview:MongoCluster" }, { type: "azure-native:documentdb/v20240701:MongoCluster" }, { type: "azure-native:documentdb/v20241001preview:MongoCluster" }, { type: "azure-native:documentdb:MongoCluster" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(MongoCluster.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a MongoCluster resource.
 */
export interface MongoClusterArgs {
    /**
     * The administrator's login for the mongo cluster.
     */
    administratorLogin?: pulumi.Input<string>;
    /**
     * The password of the administrator login.
     */
    administratorLoginPassword?: pulumi.Input<string>;
    /**
     * The mode to create a mongo cluster.
     */
    createMode?: pulumi.Input<string | types.enums.MongoClusterCreateMode>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the mongo cluster.
     */
    mongoClusterName?: pulumi.Input<string>;
    /**
     * The list of node group specs in the cluster.
     */
    nodeGroupSpecs?: pulumi.Input<pulumi.Input<types.inputs.NodeGroupSpecArgs>[]>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Parameters used for restore operations
     */
    restoreParameters?: pulumi.Input<types.inputs.MongoClusterRestoreParametersArgs>;
    /**
     * The Mongo DB server version. Defaults to the latest available version if not specified.
     */
    serverVersion?: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}