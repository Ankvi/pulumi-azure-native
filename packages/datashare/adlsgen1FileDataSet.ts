import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * An ADLS Gen 1 file data set.
 *
 * Uses Azure REST API version 2021-08-01. In version 2.x of the Azure Native provider, it used API version 2021-08-01.
 */
export class ADLSGen1FileDataSet extends pulumi.CustomResource {
    /**
     * Get an existing ADLSGen1FileDataSet resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ADLSGen1FileDataSet {
        return new ADLSGen1FileDataSet(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:datashare:ADLSGen1FileDataSet';

    /**
     * Returns true if the given object is an instance of ADLSGen1FileDataSet.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ADLSGen1FileDataSet {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ADLSGen1FileDataSet.__pulumiType;
    }

    /**
     * The ADLS account name.
     */
    public readonly accountName!: pulumi.Output<string>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Unique id for identifying a data set resource
     */
    public /*out*/ readonly dataSetId!: pulumi.Output<string>;
    /**
     * The file name in the ADLS account.
     */
    public readonly fileName!: pulumi.Output<string>;
    /**
     * The folder path within the ADLS account.
     */
    public readonly folderPath!: pulumi.Output<string>;
    /**
     * Kind of data set.
     * Expected value is 'AdlsGen1File'.
     */
    public readonly kind!: pulumi.Output<"AdlsGen1File">;
    /**
     * Name of the azure resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Resource group of ADLS account.
     */
    public readonly resourceGroup!: pulumi.Output<string>;
    /**
     * Subscription id of ADLS account.
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
     * Create a ADLSGen1FileDataSet resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ADLSGen1FileDataSetArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.accountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accountName'");
            }
            if ((!args || args.fileName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'fileName'");
            }
            if ((!args || args.folderPath === undefined) && !opts.urn) {
                throw new Error("Missing required property 'folderPath'");
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
            if ((!args || args.shareName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'shareName'");
            }
            if ((!args || args.subscriptionId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'subscriptionId'");
            }
            resourceInputs["accountName"] = args ? args.accountName : undefined;
            resourceInputs["dataSetName"] = args ? args.dataSetName : undefined;
            resourceInputs["fileName"] = args ? args.fileName : undefined;
            resourceInputs["folderPath"] = args ? args.folderPath : undefined;
            resourceInputs["kind"] = "AdlsGen1File";
            resourceInputs["resourceGroup"] = args ? args.resourceGroup : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["shareName"] = args ? args.shareName : undefined;
            resourceInputs["subscriptionId"] = args ? args.subscriptionId : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["dataSetId"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["accountName"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["dataSetId"] = undefined /*out*/;
            resourceInputs["fileName"] = undefined /*out*/;
            resourceInputs["folderPath"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["resourceGroup"] = undefined /*out*/;
            resourceInputs["subscriptionId"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:datashare/v20181101preview:ADLSGen1FileDataSet" }, { type: "azure-native:datashare/v20191101:ADLSGen1FileDataSet" }, { type: "azure-native:datashare/v20200901:ADLSGen1FileDataSet" }, { type: "azure-native:datashare/v20201001preview:ADLSGen1FileDataSet" }, { type: "azure-native:datashare/v20201001preview:ADLSGen2StorageAccountDataSet" }, { type: "azure-native:datashare/v20201001preview:BlobStorageAccountDataSet" }, { type: "azure-native:datashare/v20210801:ADLSGen1FileDataSet" }, { type: "azure-native:datashare/v20210801:ADLSGen1FolderDataSet" }, { type: "azure-native:datashare/v20210801:ADLSGen2FileDataSet" }, { type: "azure-native:datashare/v20210801:ADLSGen2FileSystemDataSet" }, { type: "azure-native:datashare/v20210801:ADLSGen2FolderDataSet" }, { type: "azure-native:datashare/v20210801:BlobContainerDataSet" }, { type: "azure-native:datashare/v20210801:BlobDataSet" }, { type: "azure-native:datashare/v20210801:BlobFolderDataSet" }, { type: "azure-native:datashare/v20210801:KustoClusterDataSet" }, { type: "azure-native:datashare/v20210801:KustoDatabaseDataSet" }, { type: "azure-native:datashare/v20210801:KustoTableDataSet" }, { type: "azure-native:datashare/v20210801:SqlDBTableDataSet" }, { type: "azure-native:datashare/v20210801:SqlDWTableDataSet" }, { type: "azure-native:datashare/v20210801:SynapseWorkspaceSqlPoolTableDataSet" }, { type: "azure-native:datashare:ADLSGen1FolderDataSet" }, { type: "azure-native:datashare:ADLSGen2FileDataSet" }, { type: "azure-native:datashare:ADLSGen2FileSystemDataSet" }, { type: "azure-native:datashare:ADLSGen2FolderDataSet" }, { type: "azure-native:datashare:BlobContainerDataSet" }, { type: "azure-native:datashare:BlobDataSet" }, { type: "azure-native:datashare:BlobFolderDataSet" }, { type: "azure-native:datashare:KustoClusterDataSet" }, { type: "azure-native:datashare:KustoDatabaseDataSet" }, { type: "azure-native:datashare:KustoTableDataSet" }, { type: "azure-native:datashare:SqlDBTableDataSet" }, { type: "azure-native:datashare:SqlDWTableDataSet" }, { type: "azure-native:datashare:SynapseWorkspaceSqlPoolTableDataSet" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ADLSGen1FileDataSet.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ADLSGen1FileDataSet resource.
 */
export interface ADLSGen1FileDataSetArgs {
    /**
     * The ADLS account name.
     */
    accountName: pulumi.Input<string>;
    /**
     * The name of the dataSet.
     */
    dataSetName?: pulumi.Input<string>;
    /**
     * The file name in the ADLS account.
     */
    fileName: pulumi.Input<string>;
    /**
     * The folder path within the ADLS account.
     */
    folderPath: pulumi.Input<string>;
    /**
     * Kind of data set.
     * Expected value is 'AdlsGen1File'.
     */
    kind: pulumi.Input<"AdlsGen1File">;
    /**
     * Resource group of ADLS account.
     */
    resourceGroup: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the share to add the data set to.
     */
    shareName: pulumi.Input<string>;
    /**
     * Subscription id of ADLS account.
     */
    subscriptionId: pulumi.Input<string>;
}