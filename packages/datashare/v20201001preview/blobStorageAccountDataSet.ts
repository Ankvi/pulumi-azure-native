import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * An Azure blob storage account data set.
 */
export class BlobStorageAccountDataSet extends pulumi.CustomResource {
    /**
     * Get an existing BlobStorageAccountDataSet resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): BlobStorageAccountDataSet {
        return new BlobStorageAccountDataSet(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:datashare/v20201001preview:BlobStorageAccountDataSet';

    /**
     * Returns true if the given object is an instance of BlobStorageAccountDataSet.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is BlobStorageAccountDataSet {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === BlobStorageAccountDataSet.__pulumiType;
    }

    /**
     * Unique id for identifying a data set resource
     */
    public /*out*/ readonly dataSetId!: pulumi.Output<string>;
    /**
     * Kind of data set.
     * Expected value is 'BlobStorageAccount'.
     */
    public readonly kind!: pulumi.Output<"BlobStorageAccount">;
    /**
     * Location of the storage account.
     */
    public /*out*/ readonly location!: pulumi.Output<string>;
    /**
     * Name of the azure resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * A list of storage account paths.
     */
    public readonly paths!: pulumi.Output<types.outputs.BlobStorageAccountPathResponse[]>;
    /**
     * Resource id of the storage account.
     */
    public readonly storageAccountResourceId!: pulumi.Output<string>;
    /**
     * System Data of the Azure resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Type of the azure resource
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a BlobStorageAccountDataSet resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BlobStorageAccountDataSetArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.accountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accountName'");
            }
            if ((!args || args.kind === undefined) && !opts.urn) {
                throw new Error("Missing required property 'kind'");
            }
            if ((!args || args.paths === undefined) && !opts.urn) {
                throw new Error("Missing required property 'paths'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.shareName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'shareName'");
            }
            if ((!args || args.storageAccountResourceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'storageAccountResourceId'");
            }
            resourceInputs["accountName"] = args ? args.accountName : undefined;
            resourceInputs["dataSetName"] = args ? args.dataSetName : undefined;
            resourceInputs["kind"] = "BlobStorageAccount";
            resourceInputs["paths"] = args ? args.paths : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["shareName"] = args ? args.shareName : undefined;
            resourceInputs["storageAccountResourceId"] = args ? args.storageAccountResourceId : undefined;
            resourceInputs["dataSetId"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["dataSetId"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["paths"] = undefined /*out*/;
            resourceInputs["storageAccountResourceId"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:datashare:BlobStorageAccountDataSet" }, { type: "azure-native:datashare/v20181101preview:BlobStorageAccountDataSet" }, { type: "azure-native:datashare/v20191101:BlobStorageAccountDataSet" }, { type: "azure-native:datashare/v20200901:BlobStorageAccountDataSet" }, { type: "azure-native:datashare/v20210801:BlobStorageAccountDataSet" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(BlobStorageAccountDataSet.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a BlobStorageAccountDataSet resource.
 */
export interface BlobStorageAccountDataSetArgs {
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
     * Expected value is 'BlobStorageAccount'.
     */
    kind: pulumi.Input<"BlobStorageAccount">;
    /**
     * A list of storage account paths.
     */
    paths: pulumi.Input<pulumi.Input<types.inputs.BlobStorageAccountPathArgs>[]>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the share to add the data set to.
     */
    shareName: pulumi.Input<string>;
    /**
     * Resource id of the storage account.
     */
    storageAccountResourceId: pulumi.Input<string>;
}