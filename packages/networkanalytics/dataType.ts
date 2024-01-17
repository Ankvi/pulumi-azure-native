import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The data type resource.
 * Azure REST API version: 2023-11-15.
 */
export class DataType extends pulumi.CustomResource {
    /**
     * Get an existing DataType resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): DataType {
        return new DataType(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:networkanalytics:DataType';

    /**
     * Returns true if the given object is an instance of DataType.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DataType {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DataType.__pulumiType;
    }

    /**
     * Field for database cache retention in days.
     */
    public readonly databaseCacheRetention!: pulumi.Output<number | undefined>;
    /**
     * Field for database data retention in days.
     */
    public readonly databaseRetention!: pulumi.Output<number | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Latest provisioning state  of data product.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * State of data type.
     */
    public readonly state!: pulumi.Output<string | undefined>;
    /**
     * Reason for the state of data type.
     */
    public /*out*/ readonly stateReason!: pulumi.Output<string>;
    /**
     * Field for storage output retention in days.
     */
    public readonly storageOutputRetention!: pulumi.Output<number | undefined>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Url for data visualization.
     */
    public /*out*/ readonly visualizationUrl!: pulumi.Output<string>;

    /**
     * Create a DataType resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DataTypeArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.dataProductName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'dataProductName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["dataProductName"] = args ? args.dataProductName : undefined;
            resourceInputs["dataTypeName"] = args ? args.dataTypeName : undefined;
            resourceInputs["databaseCacheRetention"] = args ? args.databaseCacheRetention : undefined;
            resourceInputs["databaseRetention"] = args ? args.databaseRetention : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["state"] = args ? args.state : undefined;
            resourceInputs["storageOutputRetention"] = args ? args.storageOutputRetention : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["stateReason"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["visualizationUrl"] = undefined /*out*/;
        } else {
            resourceInputs["databaseCacheRetention"] = undefined /*out*/;
            resourceInputs["databaseRetention"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["stateReason"] = undefined /*out*/;
            resourceInputs["storageOutputRetention"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["visualizationUrl"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:networkanalytics/v20231115:DataType" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(DataType.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a DataType resource.
 */
export interface DataTypeArgs {
    /**
     * The data product resource name
     */
    dataProductName: pulumi.Input<string>;
    /**
     * The data type name.
     */
    dataTypeName?: pulumi.Input<string>;
    /**
     * Field for database cache retention in days.
     */
    databaseCacheRetention?: pulumi.Input<number>;
    /**
     * Field for database data retention in days.
     */
    databaseRetention?: pulumi.Input<number>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * State of data type.
     */
    state?: pulumi.Input<string | types.enums.DataTypeState>;
    /**
     * Field for storage output retention in days.
     */
    storageOutputRetention?: pulumi.Input<number>;
}