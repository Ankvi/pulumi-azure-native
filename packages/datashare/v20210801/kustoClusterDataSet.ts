import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A kusto cluster data set.
 */
export class KustoClusterDataSet extends pulumi.CustomResource {
    /**
     * Get an existing KustoClusterDataSet resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): KustoClusterDataSet {
        return new KustoClusterDataSet(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:datashare/v20210801:KustoClusterDataSet';

    /**
     * Returns true if the given object is an instance of KustoClusterDataSet.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is KustoClusterDataSet {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === KustoClusterDataSet.__pulumiType;
    }

    /**
     * Unique id for identifying a data set resource
     */
    public /*out*/ readonly dataSetId!: pulumi.Output<string>;
    /**
     * Kind of data set.
     * Expected value is 'KustoCluster'.
     */
    public readonly kind!: pulumi.Output<"KustoCluster">;
    /**
     * Resource id of the kusto cluster.
     */
    public readonly kustoClusterResourceId!: pulumi.Output<string>;
    /**
     * Location of the kusto cluster.
     */
    public /*out*/ readonly location!: pulumi.Output<string>;
    /**
     * Name of the azure resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Provisioning state of the kusto cluster data set.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * System Data of the Azure resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Type of the azure resource
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a KustoClusterDataSet resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: KustoClusterDataSetArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.accountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accountName'");
            }
            if ((!args || args.kind === undefined) && !opts.urn) {
                throw new Error("Missing required property 'kind'");
            }
            if ((!args || args.kustoClusterResourceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'kustoClusterResourceId'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.shareName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'shareName'");
            }
            resourceInputs["accountName"] = args ? args.accountName : undefined;
            resourceInputs["dataSetName"] = args ? args.dataSetName : undefined;
            resourceInputs["kind"] = "KustoCluster";
            resourceInputs["kustoClusterResourceId"] = args ? args.kustoClusterResourceId : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["shareName"] = args ? args.shareName : undefined;
            resourceInputs["dataSetId"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["dataSetId"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["kustoClusterResourceId"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:datashare:KustoClusterDataSet" }, { type: "azure-native:datashare/v20181101preview:KustoClusterDataSet" }, { type: "azure-native:datashare/v20191101:KustoClusterDataSet" }, { type: "azure-native:datashare/v20200901:KustoClusterDataSet" }, { type: "azure-native:datashare/v20201001preview:KustoClusterDataSet" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(KustoClusterDataSet.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a KustoClusterDataSet resource.
 */
export interface KustoClusterDataSetArgs {
    /**
     * The name of the share account.
     */
    accountName: pulumi.Input<string>;
    /**
     * The name of the dataSet.
     */
    dataSetName?: pulumi.Input<string>;
    /**
     * Kind of data set.
     * Expected value is 'KustoCluster'.
     */
    kind: pulumi.Input<"KustoCluster">;
    /**
     * Resource id of the kusto cluster.
     */
    kustoClusterResourceId: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the share to add the data set to.
     */
    shareName: pulumi.Input<string>;
}
