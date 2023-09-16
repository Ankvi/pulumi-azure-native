import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * A blob storage account data set mapping.
 */
export class BlobStorageAccountDataSetMapping extends pulumi.CustomResource {
    /**
     * Get an existing BlobStorageAccountDataSetMapping resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): BlobStorageAccountDataSetMapping {
        return new BlobStorageAccountDataSetMapping(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:datashare/v20201001preview:BlobStorageAccountDataSetMapping';

    /**
     * Returns true if the given object is an instance of BlobStorageAccountDataSetMapping.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is BlobStorageAccountDataSetMapping {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === BlobStorageAccountDataSetMapping.__pulumiType;
    }

    /**
     * Gets or sets the container name.
     */
    public readonly containerName!: pulumi.Output<string>;
    /**
     * The id of the source data set.
     */
    public readonly dataSetId!: pulumi.Output<string>;
    /**
     * Gets the status of the data set mapping.
     */
    public /*out*/ readonly dataSetMappingStatus!: pulumi.Output<string>;
    /**
     * Gets or sets the path to folder within the container.
     */
    public readonly folder!: pulumi.Output<string>;
    /**
     * Kind of data set mapping.
     * Expected value is 'BlobStorageAccount'.
     */
    public readonly kind!: pulumi.Output<"BlobStorageAccount">;
    /**
     * Location of the sink storage account.
     */
    public /*out*/ readonly location!: pulumi.Output<string>;
    /**
     * Gets or sets the mount path on the consumer side where the dataset is to be mapped.
     */
    public readonly mountPath!: pulumi.Output<string | undefined>;
    /**
     * Name of the azure resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Provisioning state of the data set mapping.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Resource id of the sink storage account
     */
    public readonly storageAccountResourceId!: pulumi.Output<string>;
    /**
     * System Data of the Azure resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.datashare.v20201001preview.SystemDataResponse>;
    /**
     * Type of the azure resource
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a BlobStorageAccountDataSetMapping resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BlobStorageAccountDataSetMappingArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.accountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accountName'");
            }
            if ((!args || args.containerName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'containerName'");
            }
            if ((!args || args.dataSetId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'dataSetId'");
            }
            if ((!args || args.folder === undefined) && !opts.urn) {
                throw new Error("Missing required property 'folder'");
            }
            if ((!args || args.kind === undefined) && !opts.urn) {
                throw new Error("Missing required property 'kind'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.shareSubscriptionName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'shareSubscriptionName'");
            }
            if ((!args || args.storageAccountResourceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'storageAccountResourceId'");
            }
            resourceInputs["accountName"] = args ? args.accountName : undefined;
            resourceInputs["containerName"] = args ? args.containerName : undefined;
            resourceInputs["dataSetId"] = args ? args.dataSetId : undefined;
            resourceInputs["dataSetMappingName"] = args ? args.dataSetMappingName : undefined;
            resourceInputs["folder"] = args ? args.folder : undefined;
            resourceInputs["kind"] = "BlobStorageAccount";
            resourceInputs["mountPath"] = args ? args.mountPath : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["shareSubscriptionName"] = args ? args.shareSubscriptionName : undefined;
            resourceInputs["storageAccountResourceId"] = args ? args.storageAccountResourceId : undefined;
            resourceInputs["dataSetMappingStatus"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["containerName"] = undefined /*out*/;
            resourceInputs["dataSetId"] = undefined /*out*/;
            resourceInputs["dataSetMappingStatus"] = undefined /*out*/;
            resourceInputs["folder"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["mountPath"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["storageAccountResourceId"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:datashare:BlobStorageAccountDataSetMapping" }, { type: "azure-native:datashare/v20181101preview:BlobStorageAccountDataSetMapping" }, { type: "azure-native:datashare/v20191101:BlobStorageAccountDataSetMapping" }, { type: "azure-native:datashare/v20200901:BlobStorageAccountDataSetMapping" }, { type: "azure-native:datashare/v20210801:BlobStorageAccountDataSetMapping" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(BlobStorageAccountDataSetMapping.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a BlobStorageAccountDataSetMapping resource.
 */
export interface BlobStorageAccountDataSetMappingArgs {
    /**
     * The name of the share account.
     */
    accountName: pulumi.Input<string>;
    /**
     * Gets or sets the container name.
     */
    containerName: pulumi.Input<string>;
    /**
     * The id of the source data set.
     */
    dataSetId: pulumi.Input<string>;
    /**
     * The name of the data set mapping to be created.
     */
    dataSetMappingName?: pulumi.Input<string>;
    /**
     * Gets or sets the path to folder within the container.
     */
    folder: pulumi.Input<string>;
    /**
     * Kind of data set mapping.
     * Expected value is 'BlobStorageAccount'.
     */
    kind: pulumi.Input<"BlobStorageAccount">;
    /**
     * Gets or sets the mount path on the consumer side where the dataset is to be mapped.
     */
    mountPath?: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the share subscription which will hold the data set sink.
     */
    shareSubscriptionName: pulumi.Input<string>;
    /**
     * Resource id of the sink storage account
     */
    storageAccountResourceId: pulumi.Input<string>;
}
