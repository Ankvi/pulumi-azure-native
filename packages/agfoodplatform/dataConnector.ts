import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * DataConnector Model.
 *
 * Uses Azure REST API version 2023-06-01-preview.
 */
export class DataConnector extends pulumi.CustomResource {
    /**
     * Get an existing DataConnector resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): DataConnector {
        return new DataConnector(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:agfoodplatform:DataConnector';

    /**
     * Returns true if the given object is an instance of DataConnector.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DataConnector {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DataConnector.__pulumiType;
    }

    /**
     * The ETag value to implement optimistic concurrency.
     */
    public /*out*/ readonly eTag!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * DataConnector Properties.
     */
    public readonly properties!: pulumi.Output<types.outputs.DataConnectorPropertiesResponse>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a DataConnector resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DataConnectorArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.dataManagerForAgricultureResourceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'dataManagerForAgricultureResourceName'");
            }
            if ((!args || args.properties === undefined) && !opts.urn) {
                throw new Error("Missing required property 'properties'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["dataConnectorName"] = args ? args.dataConnectorName : undefined;
            resourceInputs["dataManagerForAgricultureResourceName"] = args ? args.dataManagerForAgricultureResourceName : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["eTag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["eTag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:agfoodplatform/v20230601preview:DataConnector" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(DataConnector.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a DataConnector resource.
 */
export interface DataConnectorArgs {
    /**
     * Connector name.
     */
    dataConnectorName?: pulumi.Input<string>;
    /**
     * DataManagerForAgriculture resource name.
     */
    dataManagerForAgricultureResourceName: pulumi.Input<string>;
    /**
     * DataConnector Properties.
     */
    properties: pulumi.Input<types.inputs.DataConnectorPropertiesArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}