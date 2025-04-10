import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Confidential Ledger. Contains the properties of Confidential Ledger Resource.
 *
 * Uses Azure REST API version 2022-05-13. In version 1.x of the Azure Native provider, it used API version 2020-12-01-preview.
 *
 * Other available API versions: 2023-01-26-preview, 2023-06-28-preview, 2024-07-09-preview, 2024-09-19-preview.
 */
export class Ledger extends pulumi.CustomResource {
    /**
     * Get an existing Ledger resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Ledger {
        return new Ledger(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:confidentialledger:Ledger';

    /**
     * Returns true if the given object is an instance of Ledger.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Ledger {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Ledger.__pulumiType;
    }

    /**
     * The Azure location where the Confidential Ledger is running.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * Name of the Resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Properties of Confidential Ledger Resource.
     */
    public readonly properties!: pulumi.Output<types.outputs.LedgerPropertiesResponse>;
    /**
     * Metadata pertaining to creation and last modification of the resource
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Additional tags for Confidential Ledger
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Ledger resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LedgerArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["ledgerName"] = args ? args.ledgerName : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:confidentialledger/v20201201preview:Ledger" }, { type: "azure-native:confidentialledger/v20210513preview:Ledger" }, { type: "azure-native:confidentialledger/v20220513:Ledger" }, { type: "azure-native:confidentialledger/v20220908preview:Ledger" }, { type: "azure-native:confidentialledger/v20230126preview:Ledger" }, { type: "azure-native:confidentialledger/v20230628preview:Ledger" }, { type: "azure-native:confidentialledger/v20240709preview:Ledger" }, { type: "azure-native:confidentialledger/v20240919preview:Ledger" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Ledger.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Ledger resource.
 */
export interface LedgerArgs {
    /**
     * Name of the Confidential Ledger
     */
    ledgerName?: pulumi.Input<string>;
    /**
     * The Azure location where the Confidential Ledger is running.
     */
    location?: pulumi.Input<string>;
    /**
     * Properties of Confidential Ledger Resource.
     */
    properties?: pulumi.Input<types.inputs.LedgerPropertiesArgs>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Additional tags for Confidential Ledger
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}