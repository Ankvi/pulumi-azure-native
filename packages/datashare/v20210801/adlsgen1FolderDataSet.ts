import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * An ADLS Gen 1 folder data set.
 */
export class ADLSGen1FolderDataSet extends pulumi.CustomResource {
    /**
     * Get an existing ADLSGen1FolderDataSet resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ADLSGen1FolderDataSet {
        return new ADLSGen1FolderDataSet(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:datashare/v20210801:ADLSGen1FolderDataSet';

    /**
     * Returns true if the given object is an instance of ADLSGen1FolderDataSet.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ADLSGen1FolderDataSet {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ADLSGen1FolderDataSet.__pulumiType;
    }

    /**
     * The ADLS account name.
     */
    public readonly accountName!: pulumi.Output<string>;
    /**
     * Unique id for identifying a data set resource
     */
    public /*out*/ readonly dataSetId!: pulumi.Output<string>;
    /**
     * The folder path within the ADLS account.
     */
    public readonly folderPath!: pulumi.Output<string>;
    /**
     * Kind of data set.
     * Expected value is 'AdlsGen1Folder'.
     */
    public readonly kind!: pulumi.Output<"AdlsGen1Folder">;
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
     * Create a ADLSGen1FolderDataSet resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ADLSGen1FolderDataSetArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.accountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accountName'");
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
            resourceInputs["folderPath"] = args ? args.folderPath : undefined;
            resourceInputs["kind"] = "AdlsGen1Folder";
            resourceInputs["resourceGroup"] = args ? args.resourceGroup : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["shareName"] = args ? args.shareName : undefined;
            resourceInputs["subscriptionId"] = args ? args.subscriptionId : undefined;
            resourceInputs["dataSetId"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["accountName"] = undefined /*out*/;
            resourceInputs["dataSetId"] = undefined /*out*/;
            resourceInputs["folderPath"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["resourceGroup"] = undefined /*out*/;
            resourceInputs["subscriptionId"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:datashare:ADLSGen1FolderDataSet" }, { type: "azure-native:datashare/v20181101preview:ADLSGen1FolderDataSet" }, { type: "azure-native:datashare/v20191101:ADLSGen1FolderDataSet" }, { type: "azure-native:datashare/v20200901:ADLSGen1FolderDataSet" }, { type: "azure-native:datashare/v20201001preview:ADLSGen1FolderDataSet" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ADLSGen1FolderDataSet.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ADLSGen1FolderDataSet resource.
 */
export interface ADLSGen1FolderDataSetArgs {
    /**
     * The ADLS account name.
     */
    accountName: pulumi.Input<string>;
    /**
     * The name of the dataSet.
     */
    dataSetName?: pulumi.Input<string>;
    /**
     * The folder path within the ADLS account.
     */
    folderPath: pulumi.Input<string>;
    /**
     * Kind of data set.
     * Expected value is 'AdlsGen1Folder'.
     */
    kind: pulumi.Input<"AdlsGen1Folder">;
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