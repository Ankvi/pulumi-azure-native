import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The details of the snoozed or dismissed rule; for example, the duration, name, and GUID associated with the rule.
 */
export class Suppression extends pulumi.CustomResource {
    /**
     * Get an existing Suppression resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Suppression {
        return new Suppression(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:advisor/v20230101:Suppression';

    /**
     * Returns true if the given object is an instance of Suppression.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Suppression {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Suppression.__pulumiType;
    }

    /**
     * Gets or sets the expiration time stamp.
     */
    public /*out*/ readonly expirationTimeStamp!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The GUID of the suppression.
     */
    public readonly suppressionId!: pulumi.Output<string | undefined>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The duration for which the suppression is valid.
     */
    public readonly ttl!: pulumi.Output<string | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Suppression resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SuppressionArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.recommendationId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'recommendationId'");
            }
            if ((!args || args.resourceUri === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceUri'");
            }
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["recommendationId"] = args ? args.recommendationId : undefined;
            resourceInputs["resourceUri"] = args ? args.resourceUri : undefined;
            resourceInputs["suppressionId"] = args ? args.suppressionId : undefined;
            resourceInputs["ttl"] = args ? args.ttl : undefined;
            resourceInputs["expirationTimeStamp"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["expirationTimeStamp"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["suppressionId"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["ttl"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:advisor:Suppression" }, { type: "azure-native:advisor/v20160712preview:Suppression" }, { type: "azure-native:advisor/v20170331:Suppression" }, { type: "azure-native:advisor/v20170419:Suppression" }, { type: "azure-native:advisor/v20200101:Suppression" }, { type: "azure-native:advisor/v20220901:Suppression" }, { type: "azure-native:advisor/v20221001:Suppression" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Suppression.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Suppression resource.
 */
export interface SuppressionArgs {
    /**
     * The name of the suppression.
     */
    name?: pulumi.Input<string>;
    /**
     * The recommendation ID.
     */
    recommendationId: pulumi.Input<string>;
    /**
     * The fully qualified Azure Resource Manager identifier of the resource to which the recommendation applies.
     */
    resourceUri: pulumi.Input<string>;
    /**
     * The GUID of the suppression.
     */
    suppressionId?: pulumi.Input<string>;
    /**
     * The duration for which the suppression is valid.
     */
    ttl?: pulumi.Input<string>;
}
