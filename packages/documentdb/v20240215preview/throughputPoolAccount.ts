import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * An Azure Cosmos DB Throughputpool Account
 */
export class ThroughputPoolAccount extends pulumi.CustomResource {
    /**
     * Get an existing ThroughputPoolAccount resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ThroughputPoolAccount {
        return new ThroughputPoolAccount(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:documentdb/v20240215preview:ThroughputPoolAccount';

    /**
     * Returns true if the given object is an instance of ThroughputPoolAccount.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ThroughputPoolAccount {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ThroughputPoolAccount.__pulumiType;
    }

    /**
     * The instance id of global database account in the throughputPool.
     */
    public /*out*/ readonly accountInstanceId!: pulumi.Output<string>;
    /**
     * The location of  global database account in the throughputPool.
     */
    public readonly accountLocation!: pulumi.Output<string | undefined>;
    /**
     * The resource identifier of global database account in the throughputPool.
     */
    public readonly accountResourceIdentifier!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * A provisioning state of the ThroughputPool Account.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ThroughputPoolAccount resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ThroughputPoolAccountArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.throughputPoolName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'throughputPoolName'");
            }
            resourceInputs["accountLocation"] = args ? args.accountLocation : undefined;
            resourceInputs["accountResourceIdentifier"] = args ? args.accountResourceIdentifier : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["throughputPoolAccountName"] = args ? args.throughputPoolAccountName : undefined;
            resourceInputs["throughputPoolName"] = args ? args.throughputPoolName : undefined;
            resourceInputs["accountInstanceId"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["accountInstanceId"] = undefined /*out*/;
            resourceInputs["accountLocation"] = undefined /*out*/;
            resourceInputs["accountResourceIdentifier"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:documentdb:ThroughputPoolAccount" }, { type: "azure-native:documentdb/v20231115preview:ThroughputPoolAccount" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ThroughputPoolAccount.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ThroughputPoolAccount resource.
 */
export interface ThroughputPoolAccountArgs {
    /**
     * The location of  global database account in the throughputPool.
     */
    accountLocation?: pulumi.Input<string>;
    /**
     * The resource identifier of global database account in the throughputPool.
     */
    accountResourceIdentifier?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Cosmos DB global database account in a Throughput Pool
     */
    throughputPoolAccountName?: pulumi.Input<string>;
    /**
     * Cosmos DB Throughput Pool name.
     */
    throughputPoolName: pulumi.Input<string>;
}