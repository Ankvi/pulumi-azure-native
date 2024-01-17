import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * An Account Filter.
 * Azure REST API version: 2023-01-01. Prior API version in Azure Native 1.x: 2020-05-01.
 */
export class AccountFilter extends pulumi.CustomResource {
    /**
     * Get an existing AccountFilter resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): AccountFilter {
        return new AccountFilter(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:media:AccountFilter';

    /**
     * Returns true if the given object is an instance of AccountFilter.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AccountFilter {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AccountFilter.__pulumiType;
    }

    /**
     * The first quality.
     */
    public readonly firstQuality!: pulumi.Output<types.outputs.FirstQualityResponse | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The presentation time range.
     */
    public readonly presentationTimeRange!: pulumi.Output<types.outputs.PresentationTimeRangeResponse | undefined>;
    /**
     * The system metadata relating to this resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The tracks selection conditions.
     */
    public readonly tracks!: pulumi.Output<types.outputs.FilterTrackSelectionResponse[] | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a AccountFilter resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AccountFilterArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.accountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accountName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["accountName"] = args ? args.accountName : undefined;
            resourceInputs["filterName"] = args ? args.filterName : undefined;
            resourceInputs["firstQuality"] = args ? args.firstQuality : undefined;
            resourceInputs["presentationTimeRange"] = args ? args.presentationTimeRange : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tracks"] = args ? args.tracks : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["firstQuality"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["presentationTimeRange"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tracks"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:media/v20180701:AccountFilter" }, { type: "azure-native:media/v20200501:AccountFilter" }, { type: "azure-native:media/v20210601:AccountFilter" }, { type: "azure-native:media/v20211101:AccountFilter" }, { type: "azure-native:media/v20220801:AccountFilter" }, { type: "azure-native:media/v20230101:AccountFilter" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(AccountFilter.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a AccountFilter resource.
 */
export interface AccountFilterArgs {
    /**
     * The Media Services account name.
     */
    accountName: pulumi.Input<string>;
    /**
     * The Account Filter name
     */
    filterName?: pulumi.Input<string>;
    /**
     * The first quality.
     */
    firstQuality?: pulumi.Input<types.inputs.FirstQualityArgs>;
    /**
     * The presentation time range.
     */
    presentationTimeRange?: pulumi.Input<types.inputs.PresentationTimeRangeArgs>;
    /**
     * The name of the resource group within the Azure subscription.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The tracks selection conditions.
     */
    tracks?: pulumi.Input<pulumi.Input<types.inputs.FilterTrackSelectionArgs>[]>;
}