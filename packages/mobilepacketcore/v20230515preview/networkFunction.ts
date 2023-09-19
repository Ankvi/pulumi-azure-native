import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * AO5GC Network Function Resource
 */
export class NetworkFunction extends pulumi.CustomResource {
    /**
     * Get an existing NetworkFunction resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): NetworkFunction {
        return new NetworkFunction(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:mobilepacketcore/v20230515preview:NetworkFunction';

    /**
     * Returns true if the given object is an instance of NetworkFunction.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NetworkFunction {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NetworkFunction.__pulumiType;
    }

    /**
     * Capacity of the network function in units of 10000.  This represents the session count or the Simultaneously Attached Users (SAU) count as applicable
     */
    public readonly capacity!: pulumi.Output<number | undefined>;
    /**
     * User provided deployment notes.  This is used to optionally provide details about the NF deployment
     */
    public readonly deploymentNotes!: pulumi.Output<string | undefined>;
    /**
     * Count of infrastructure elements used by this network function (vCPUs, in units of 8)
     */
    public /*out*/ readonly infrastructureElementCount!: pulumi.Output<number>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Administrative state of the network function
     */
    public readonly networkFunctionAdministrativeState!: pulumi.Output<string>;
    /**
     * Operational state of the network function
     */
    public /*out*/ readonly networkFunctionOperationalStatus!: pulumi.Output<string>;
    /**
     * Type of network function
     */
    public readonly networkFunctionType!: pulumi.Output<string>;
    /**
     * The status of the last operation.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Provisioned SKU Value.
     */
    public readonly sku!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * User provided description
     */
    public readonly userDescription!: pulumi.Output<string | undefined>;

    /**
     * Create a NetworkFunction resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NetworkFunctionArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.networkFunctionAdministrativeState === undefined) && !opts.urn) {
                throw new Error("Missing required property 'networkFunctionAdministrativeState'");
            }
            if ((!args || args.networkFunctionType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'networkFunctionType'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.sku === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sku'");
            }
            resourceInputs["capacity"] = args ? args.capacity : undefined;
            resourceInputs["deploymentNotes"] = args ? args.deploymentNotes : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["networkFunctionAdministrativeState"] = args ? args.networkFunctionAdministrativeState : undefined;
            resourceInputs["networkFunctionName"] = args ? args.networkFunctionName : undefined;
            resourceInputs["networkFunctionType"] = args ? args.networkFunctionType : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["userDescription"] = args ? args.userDescription : undefined;
            resourceInputs["infrastructureElementCount"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["networkFunctionOperationalStatus"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["capacity"] = undefined /*out*/;
            resourceInputs["deploymentNotes"] = undefined /*out*/;
            resourceInputs["infrastructureElementCount"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["networkFunctionAdministrativeState"] = undefined /*out*/;
            resourceInputs["networkFunctionOperationalStatus"] = undefined /*out*/;
            resourceInputs["networkFunctionType"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["userDescription"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:mobilepacketcore:NetworkFunction" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(NetworkFunction.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a NetworkFunction resource.
 */
export interface NetworkFunctionArgs {
    /**
     * Capacity of the network function in units of 10000.  This represents the session count or the Simultaneously Attached Users (SAU) count as applicable
     */
    capacity?: pulumi.Input<number>;
    /**
     * User provided deployment notes.  This is used to optionally provide details about the NF deployment
     */
    deploymentNotes?: pulumi.Input<string>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * Administrative state of the network function
     */
    networkFunctionAdministrativeState: pulumi.Input<string | types.enums.NetworkFunctionAdministrativeState>;
    /**
     * The name of the network function
     */
    networkFunctionName?: pulumi.Input<string>;
    /**
     * Type of network function
     */
    networkFunctionType: pulumi.Input<string | types.enums.NetworkFunctionType>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Provisioned SKU Value.
     */
    sku: pulumi.Input<string | types.enums.SkuDefinitions>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * User provided description
     */
    userDescription?: pulumi.Input<string>;
}
