import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * An ADLS Gen 2 file data set.
 * Azure REST API version: 2021-08-01. Prior API version in Azure Native 1.x: 2020-09-01
 */
export class ADLSGen2FileDataSet extends pulumi.CustomResource {
    /**
     * Get an existing ADLSGen2FileDataSet resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ADLSGen2FileDataSet {
        return new ADLSGen2FileDataSet(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:datashare:ADLSGen2FileDataSet';

    /**
     * Returns true if the given object is an instance of ADLSGen2FileDataSet.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ADLSGen2FileDataSet {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ADLSGen2FileDataSet.__pulumiType;
    }

    /**
     * Unique id for identifying a data set resource
     */
    public /*out*/ readonly dataSetId!: pulumi.Output<string>;
    /**
     * File path within the file system.
     */
    public readonly filePath!: pulumi.Output<string>;
    /**
     * File system to which the file belongs.
     */
    public readonly fileSystem!: pulumi.Output<string>;
    /**
     * Kind of data set.
     * Expected value is 'AdlsGen2File'.
     */
    public readonly kind!: pulumi.Output<"AdlsGen2File">;
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
     * Create a ADLSGen2FileDataSet resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ADLSGen2FileDataSetArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.accountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accountName'");
            }
            if ((!args || args.filePath === undefined) && !opts.urn) {
                throw new Error("Missing required property 'filePath'");
            }
            if ((!args || args.fileSystem === undefined) && !opts.urn) {
                throw new Error("Missing required property 'fileSystem'");
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
            resourceInputs["filePath"] = args ? args.filePath : undefined;
            resourceInputs["fileSystem"] = args ? args.fileSystem : undefined;
            resourceInputs["kind"] = "AdlsGen2File";
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
            resourceInputs["filePath"] = undefined /*out*/;
            resourceInputs["fileSystem"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["resourceGroup"] = undefined /*out*/;
            resourceInputs["storageAccountName"] = undefined /*out*/;
            resourceInputs["subscriptionId"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:datashare/v20181101preview:ADLSGen2FileDataSet" }, { type: "azure-native:datashare/v20191101:ADLSGen2FileDataSet" }, { type: "azure-native:datashare/v20200901:ADLSGen2FileDataSet" }, { type: "azure-native:datashare/v20201001preview:ADLSGen2FileDataSet" }, { type: "azure-native:datashare/v20210801:ADLSGen2FileDataSet" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ADLSGen2FileDataSet.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ADLSGen2FileDataSet resource.
 */
export interface ADLSGen2FileDataSetArgs {
    /**
     * The name of the share account.
     */
    accountName: pulumi.Input<string>;
    /**
     * The name of the dataSet.
     */
    dataSetName?: pulumi.Input<string>;
    /**
     * File path within the file system.
     */
    filePath: pulumi.Input<string>;
    /**
     * File system to which the file belongs.
     */
    fileSystem: pulumi.Input<string>;
    /**
     * Kind of data set.
     * Expected value is 'AdlsGen2File'.
     */
    kind: pulumi.Input<"AdlsGen2File">;
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
