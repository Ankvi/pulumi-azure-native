import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * An ADLS Gen 2 folder data set.
 * Azure REST API version: 2021-08-01. Prior API version in Azure Native 1.x: 2020-09-01.
 */
export class ADLSGen2FolderDataSet extends pulumi.CustomResource {
    /**
     * Get an existing ADLSGen2FolderDataSet resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ADLSGen2FolderDataSet {
        return new ADLSGen2FolderDataSet(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:datashare:ADLSGen2FolderDataSet';

    /**
     * Returns true if the given object is an instance of ADLSGen2FolderDataSet.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ADLSGen2FolderDataSet {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ADLSGen2FolderDataSet.__pulumiType;
    }

    /**
     * Unique id for identifying a data set resource
     */
    public /*out*/ readonly dataSetId!: pulumi.Output<string>;
    /**
     * File system to which the folder belongs.
     */
    public readonly fileSystem!: pulumi.Output<string>;
    /**
     * Folder path within the file system.
     */
    public readonly folderPath!: pulumi.Output<string>;
    /**
     * Kind of data set.
     * Expected value is 'AdlsGen2Folder'.
     */
    public readonly kind!: pulumi.Output<"AdlsGen2Folder">;
    /**
     * Name of the azure resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Resource group of storage account
     */
    public readonly resourceGroup!: pulumi.Output<string>;
    /**
     * Storage account name of the source data set
     */
    public readonly storageAccountName!: pulumi.Output<string>;
    /**
     * Subscription id of storage account
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
     * Create a ADLSGen2FolderDataSet resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ADLSGen2FolderDataSetArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.accountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accountName'");
            }
            if ((!args || args.fileSystem === undefined) && !opts.urn) {
                throw new Error("Missing required property 'fileSystem'");
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
            if ((!args || args.storageAccountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'storageAccountName'");
            }
            if ((!args || args.subscriptionId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'subscriptionId'");
            }
            resourceInputs["accountName"] = args ? args.accountName : undefined;
            resourceInputs["dataSetName"] = args ? args.dataSetName : undefined;
            resourceInputs["fileSystem"] = args ? args.fileSystem : undefined;
            resourceInputs["folderPath"] = args ? args.folderPath : undefined;
            resourceInputs["kind"] = "AdlsGen2Folder";
            resourceInputs["resourceGroup"] = args ? args.resourceGroup : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["shareName"] = args ? args.shareName : undefined;
            resourceInputs["storageAccountName"] = args ? args.storageAccountName : undefined;
            resourceInputs["subscriptionId"] = args ? args.subscriptionId : undefined;
            resourceInputs["dataSetId"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["dataSetId"] = undefined /*out*/;
            resourceInputs["fileSystem"] = undefined /*out*/;
            resourceInputs["folderPath"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["resourceGroup"] = undefined /*out*/;
            resourceInputs["storageAccountName"] = undefined /*out*/;
            resourceInputs["subscriptionId"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:datashare/v20181101preview:ADLSGen2FolderDataSet" }, { type: "azure-native:datashare/v20191101:ADLSGen2FolderDataSet" }, { type: "azure-native:datashare/v20200901:ADLSGen2FolderDataSet" }, { type: "azure-native:datashare/v20201001preview:ADLSGen2FolderDataSet" }, { type: "azure-native:datashare/v20210801:ADLSGen2FolderDataSet" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ADLSGen2FolderDataSet.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ADLSGen2FolderDataSet resource.
 */
export interface ADLSGen2FolderDataSetArgs {
    /**
     * The name of the share account.
     */
    accountName: pulumi.Input<string>;
    /**
     * The name of the dataSet.
     */
    dataSetName?: pulumi.Input<string>;
    /**
     * File system to which the folder belongs.
     */
    fileSystem: pulumi.Input<string>;
    /**
     * Folder path within the file system.
     */
    folderPath: pulumi.Input<string>;
    /**
     * Kind of data set.
     * Expected value is 'AdlsGen2Folder'.
     */
    kind: pulumi.Input<"AdlsGen2Folder">;
    /**
     * Resource group of storage account
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
     * Storage account name of the source data set
     */
    storageAccountName: pulumi.Input<string>;
    /**
     * Subscription id of storage account
     */
    subscriptionId: pulumi.Input<string>;
}