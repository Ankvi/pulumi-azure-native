import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A Blob container data set mapping.
 *
 * Uses Azure REST API version 2021-08-01. In version 2.x of the Azure Native provider, it used API version 2021-08-01.
 */
export class BlobContainerDataSetMapping extends pulumi.CustomResource {
    /**
     * Get an existing BlobContainerDataSetMapping resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): BlobContainerDataSetMapping {
        return new BlobContainerDataSetMapping(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:datashare:BlobContainerDataSetMapping';

    /**
     * Returns true if the given object is an instance of BlobContainerDataSetMapping.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is BlobContainerDataSetMapping {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === BlobContainerDataSetMapping.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * BLOB Container name.
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
     * Kind of data set mapping.
     * Expected value is 'Container'.
     */
    public readonly kind!: pulumi.Output<"Container">;
    /**
     * Name of the azure resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Provisioning state of the data set mapping.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Resource group of storage account.
     */
    public readonly resourceGroup!: pulumi.Output<string>;
    /**
     * Storage account name of the source data set.
     */
    public readonly storageAccountName!: pulumi.Output<string>;
    /**
     * Subscription id of storage account.
     */
    public readonly subscriptionId!: pulumi.Output<string>;
    /**
     * System Data of the Azure resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Type of the azure resource
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a BlobContainerDataSetMapping resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BlobContainerDataSetMappingArgs, opts?: pulumi.CustomResourceOptions) {
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
            if ((!args || args.kind === undefined) && !opts.urn) {
                throw new Error("Missing required property 'kind'");
            }
            if ((!args || args.resourceGroup === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroup'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.shareSubscriptionName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'shareSubscriptionName'");
            }
            if ((!args || args.storageAccountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'storageAccountName'");
            }
            if ((!args || args.subscriptionId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'subscriptionId'");
            }
            resourceInputs["accountName"] = args ? args.accountName : undefined;
            resourceInputs["containerName"] = args ? args.containerName : undefined;
            resourceInputs["dataSetId"] = args ? args.dataSetId : undefined;
            resourceInputs["dataSetMappingName"] = args ? args.dataSetMappingName : undefined;
            resourceInputs["kind"] = "Container";
            resourceInputs["resourceGroup"] = args ? args.resourceGroup : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["shareSubscriptionName"] = args ? args.shareSubscriptionName : undefined;
            resourceInputs["storageAccountName"] = args ? args.storageAccountName : undefined;
            resourceInputs["subscriptionId"] = args ? args.subscriptionId : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["dataSetMappingStatus"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["containerName"] = undefined /*out*/;
            resourceInputs["dataSetId"] = undefined /*out*/;
            resourceInputs["dataSetMappingStatus"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["resourceGroup"] = undefined /*out*/;
            resourceInputs["storageAccountName"] = undefined /*out*/;
            resourceInputs["subscriptionId"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:datashare/v20181101preview:BlobContainerDataSetMapping" }, { type: "azure-native:datashare/v20191101:BlobContainerDataSetMapping" }, { type: "azure-native:datashare/v20200901:BlobContainerDataSetMapping" }, { type: "azure-native:datashare/v20201001preview:ADLSGen2StorageAccountDataSetMapping" }, { type: "azure-native:datashare/v20201001preview:BlobContainerDataSetMapping" }, { type: "azure-native:datashare/v20201001preview:BlobStorageAccountDataSetMapping" }, { type: "azure-native:datashare/v20210801:ADLSGen2FileDataSetMapping" }, { type: "azure-native:datashare/v20210801:ADLSGen2FileSystemDataSetMapping" }, { type: "azure-native:datashare/v20210801:ADLSGen2FolderDataSetMapping" }, { type: "azure-native:datashare/v20210801:BlobContainerDataSetMapping" }, { type: "azure-native:datashare/v20210801:BlobDataSetMapping" }, { type: "azure-native:datashare/v20210801:BlobFolderDataSetMapping" }, { type: "azure-native:datashare/v20210801:KustoClusterDataSetMapping" }, { type: "azure-native:datashare/v20210801:KustoDatabaseDataSetMapping" }, { type: "azure-native:datashare/v20210801:KustoTableDataSetMapping" }, { type: "azure-native:datashare/v20210801:SqlDBTableDataSetMapping" }, { type: "azure-native:datashare/v20210801:SqlDWTableDataSetMapping" }, { type: "azure-native:datashare/v20210801:SynapseWorkspaceSqlPoolTableDataSetMapping" }, { type: "azure-native:datashare:ADLSGen2FileDataSetMapping" }, { type: "azure-native:datashare:ADLSGen2FileSystemDataSetMapping" }, { type: "azure-native:datashare:ADLSGen2FolderDataSetMapping" }, { type: "azure-native:datashare:BlobDataSetMapping" }, { type: "azure-native:datashare:BlobFolderDataSetMapping" }, { type: "azure-native:datashare:KustoClusterDataSetMapping" }, { type: "azure-native:datashare:KustoDatabaseDataSetMapping" }, { type: "azure-native:datashare:KustoTableDataSetMapping" }, { type: "azure-native:datashare:SqlDBTableDataSetMapping" }, { type: "azure-native:datashare:SqlDWTableDataSetMapping" }, { type: "azure-native:datashare:SynapseWorkspaceSqlPoolTableDataSetMapping" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(BlobContainerDataSetMapping.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a BlobContainerDataSetMapping resource.
 */
export interface BlobContainerDataSetMappingArgs {
    /**
     * The name of the share account.
     */
    accountName: pulumi.Input<string>;
    /**
     * BLOB Container name.
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
     * Kind of data set mapping.
     * Expected value is 'Container'.
     */
    kind: pulumi.Input<"Container">;
    /**
     * Resource group of storage account.
     */
    resourceGroup: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the share subscription which will hold the data set sink.
     */
    shareSubscriptionName: pulumi.Input<string>;
    /**
     * Storage account name of the source data set.
     */
    storageAccountName: pulumi.Input<string>;
    /**
     * Subscription id of storage account.
     */
    subscriptionId: pulumi.Input<string>;
}