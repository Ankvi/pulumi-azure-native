import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * ADP Data Pool
 * Azure REST API version: 2021-11-01-preview. Prior API version in Azure Native 1.x: 2021-02-01-preview.
 */
export class DataPool extends pulumi.CustomResource {
    /**
     * Get an existing DataPool resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): DataPool {
        return new DataPool(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:autonomousdevelopmentplatform:DataPool';

    /**
     * Returns true if the given object is an instance of DataPool.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DataPool {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DataPool.__pulumiType;
    }

    /**
     * The Data Pool's data-plane ID
     */
    public /*out*/ readonly dataPoolId!: pulumi.Output<string>;
    /**
     * Gets or sets the collection of locations where Data Pool resources should be created
     */
    public readonly locations!: pulumi.Output<types.outputs.DataPoolLocationResponse[]>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Gets the status of the data pool at the time the operation was called
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The system meta data relating to this resource
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a DataPool resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DataPoolArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.accountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accountName'");
            }
            if ((!args || args.locations === undefined) && !opts.urn) {
                throw new Error("Missing required property 'locations'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["accountName"] = args ? args.accountName : undefined;
            resourceInputs["dataPoolName"] = args ? args.dataPoolName : undefined;
            resourceInputs["locations"] = args ? args.locations : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["dataPoolId"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["dataPoolId"] = undefined /*out*/;
            resourceInputs["locations"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:autonomousdevelopmentplatform/v20200701preview:DataPool" }, { type: "azure-native:autonomousdevelopmentplatform/v20210201preview:DataPool" }, { type: "azure-native:autonomousdevelopmentplatform/v20211101preview:DataPool" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(DataPool.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a DataPool resource.
 */
export interface DataPoolArgs {
    /**
     * The name of the ADP account
     */
    accountName: pulumi.Input<string>;
    /**
     * The name of the Data Pool
     */
    dataPoolName?: pulumi.Input<string>;
    /**
     * Gets or sets the collection of locations where Data Pool resources should be created
     */
    locations: pulumi.Input<pulumi.Input<types.inputs.DataPoolLocationArgs>[]>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
