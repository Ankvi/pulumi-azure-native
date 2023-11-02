import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A reference data set provides metadata about the events in an environment. Metadata in the reference data set will be joined with events as they are read from event sources. The metadata that makes up the reference data set is uploaded or modified through the Time Series Insights data plane APIs.
 * Azure REST API version: 2020-05-15. Prior API version in Azure Native 1.x: 2020-05-15.
 *
 * Other available API versions: 2017-11-15, 2021-06-30-preview.
 */
export class ReferenceDataSet extends pulumi.CustomResource {
    /**
     * Get an existing ReferenceDataSet resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ReferenceDataSet {
        return new ReferenceDataSet(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:timeseriesinsights:ReferenceDataSet';

    /**
     * Returns true if the given object is an instance of ReferenceDataSet.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ReferenceDataSet {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ReferenceDataSet.__pulumiType;
    }

    /**
     * The time the resource was created.
     */
    public /*out*/ readonly creationTime!: pulumi.Output<string>;
    /**
     * The reference data set key comparison behavior can be set using this property. By default, the value is 'Ordinal' - which means case sensitive key comparison will be performed while joining reference data with events or while adding new reference data. When 'OrdinalIgnoreCase' is set, case insensitive comparison will be used.
     */
    public readonly dataStringComparisonBehavior!: pulumi.Output<string | undefined>;
    /**
     * The list of key properties for the reference data set.
     */
    public readonly keyProperties!: pulumi.Output<types.outputs.ReferenceDataSetKeyPropertyResponse[]>;
    /**
     * Resource location
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Resource name
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Provisioning state of the resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Resource tags
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ReferenceDataSet resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ReferenceDataSetArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.environmentName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'environmentName'");
            }
            if ((!args || args.keyProperties === undefined) && !opts.urn) {
                throw new Error("Missing required property 'keyProperties'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["dataStringComparisonBehavior"] = args ? args.dataStringComparisonBehavior : undefined;
            resourceInputs["environmentName"] = args ? args.environmentName : undefined;
            resourceInputs["keyProperties"] = args ? args.keyProperties : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["referenceDataSetName"] = args ? args.referenceDataSetName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["creationTime"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["creationTime"] = undefined /*out*/;
            resourceInputs["dataStringComparisonBehavior"] = undefined /*out*/;
            resourceInputs["keyProperties"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:timeseriesinsights/v20170228preview:ReferenceDataSet" }, { type: "azure-native:timeseriesinsights/v20171115:ReferenceDataSet" }, { type: "azure-native:timeseriesinsights/v20180815preview:ReferenceDataSet" }, { type: "azure-native:timeseriesinsights/v20200515:ReferenceDataSet" }, { type: "azure-native:timeseriesinsights/v20210331preview:ReferenceDataSet" }, { type: "azure-native:timeseriesinsights/v20210630preview:ReferenceDataSet" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ReferenceDataSet.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ReferenceDataSet resource.
 */
export interface ReferenceDataSetArgs {
    /**
     * The reference data set key comparison behavior can be set using this property. By default, the value is 'Ordinal' - which means case sensitive key comparison will be performed while joining reference data with events or while adding new reference data. When 'OrdinalIgnoreCase' is set, case insensitive comparison will be used.
     */
    dataStringComparisonBehavior?: pulumi.Input<string | types.enums.DataStringComparisonBehavior>;
    /**
     * The name of the Time Series Insights environment associated with the specified resource group.
     */
    environmentName: pulumi.Input<string>;
    /**
     * The list of key properties for the reference data set.
     */
    keyProperties: pulumi.Input<pulumi.Input<types.inputs.ReferenceDataSetKeyPropertyArgs>[]>;
    /**
     * The location of the resource.
     */
    location?: pulumi.Input<string>;
    /**
     * Name of the reference data set.
     */
    referenceDataSetName?: pulumi.Input<string>;
    /**
     * Name of an Azure Resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Key-value pairs of additional properties for the resource.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
