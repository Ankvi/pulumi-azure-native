import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A Synapse Workspace Sql Pool Table data set.
 * Azure REST API version: 2021-08-01. Prior API version in Azure Native 1.x: 2020-09-01
 */
export class SynapseWorkspaceSqlPoolTableDataSet extends pulumi.CustomResource {
    /**
     * Get an existing SynapseWorkspaceSqlPoolTableDataSet resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): SynapseWorkspaceSqlPoolTableDataSet {
        return new SynapseWorkspaceSqlPoolTableDataSet(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:datashare:SynapseWorkspaceSqlPoolTableDataSet';

    /**
     * Returns true if the given object is an instance of SynapseWorkspaceSqlPoolTableDataSet.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SynapseWorkspaceSqlPoolTableDataSet {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SynapseWorkspaceSqlPoolTableDataSet.__pulumiType;
    }

    /**
     * Unique id for identifying a data set resource
     */
    public /*out*/ readonly dataSetId!: pulumi.Output<string>;
    /**
     * Kind of data set.
     * Expected value is 'SynapseWorkspaceSqlPoolTable'.
     */
    public readonly kind!: pulumi.Output<"SynapseWorkspaceSqlPoolTable">;
    /**
     * Name of the azure resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Resource id of the Synapse Workspace SQL Pool Table
     */
    public readonly synapseWorkspaceSqlPoolTableResourceId!: pulumi.Output<string>;
    /**
     * System Data of the Azure resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Type of the azure resource
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a SynapseWorkspaceSqlPoolTableDataSet resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SynapseWorkspaceSqlPoolTableDataSetArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.accountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accountName'");
            }
            if ((!args || args.kind === undefined) && !opts.urn) {
                throw new Error("Missing required property 'kind'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.shareName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'shareName'");
            }
            if ((!args || args.synapseWorkspaceSqlPoolTableResourceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'synapseWorkspaceSqlPoolTableResourceId'");
            }
            resourceInputs["accountName"] = args ? args.accountName : undefined;
            resourceInputs["dataSetName"] = args ? args.dataSetName : undefined;
            resourceInputs["kind"] = "SynapseWorkspaceSqlPoolTable";
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["shareName"] = args ? args.shareName : undefined;
            resourceInputs["synapseWorkspaceSqlPoolTableResourceId"] = args ? args.synapseWorkspaceSqlPoolTableResourceId : undefined;
            resourceInputs["dataSetId"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["dataSetId"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["synapseWorkspaceSqlPoolTableResourceId"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:datashare/v20181101preview:SynapseWorkspaceSqlPoolTableDataSet" }, { type: "azure-native:datashare/v20191101:SynapseWorkspaceSqlPoolTableDataSet" }, { type: "azure-native:datashare/v20200901:SynapseWorkspaceSqlPoolTableDataSet" }, { type: "azure-native:datashare/v20201001preview:SynapseWorkspaceSqlPoolTableDataSet" }, { type: "azure-native:datashare/v20210801:SynapseWorkspaceSqlPoolTableDataSet" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(SynapseWorkspaceSqlPoolTableDataSet.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a SynapseWorkspaceSqlPoolTableDataSet resource.
 */
export interface SynapseWorkspaceSqlPoolTableDataSetArgs {
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
     * Expected value is 'SynapseWorkspaceSqlPoolTable'.
     */
    kind: pulumi.Input<"SynapseWorkspaceSqlPoolTable">;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the share to add the data set to.
     */
    shareName: pulumi.Input<string>;
    /**
     * Resource id of the Synapse Workspace SQL Pool Table
     */
    synapseWorkspaceSqlPoolTableResourceId: pulumi.Input<string>;
}
