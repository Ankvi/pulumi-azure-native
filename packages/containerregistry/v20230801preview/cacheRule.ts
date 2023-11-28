import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * An object that represents a cache rule for a container registry.
 */
export class CacheRule extends pulumi.CustomResource {
    /**
     * Get an existing CacheRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): CacheRule {
        return new CacheRule(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:containerregistry/v20230801preview:CacheRule';

    /**
     * Returns true if the given object is an instance of CacheRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CacheRule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CacheRule.__pulumiType;
    }

    /**
     * The creation date of the cache rule.
     */
    public /*out*/ readonly creationDate!: pulumi.Output<string>;
    /**
     * The ARM resource ID of the credential store which is associated with the cache rule.
     */
    public readonly credentialSetResourceId!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Provisioning state of the resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Source repository pulled from upstream.
     */
    public readonly sourceRepository!: pulumi.Output<string | undefined>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Target repository specified in docker pull command.
     * Eg: docker pull myregistry.azurecr.io/{targetRepository}:{tag}
     */
    public readonly targetRepository!: pulumi.Output<string | undefined>;
    /**
     * The type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a CacheRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CacheRuleArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.registryName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'registryName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["cacheRuleName"] = args ? args.cacheRuleName : undefined;
            resourceInputs["credentialSetResourceId"] = args ? args.credentialSetResourceId : undefined;
            resourceInputs["registryName"] = args ? args.registryName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sourceRepository"] = args ? args.sourceRepository : undefined;
            resourceInputs["targetRepository"] = args ? args.targetRepository : undefined;
            resourceInputs["creationDate"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["creationDate"] = undefined /*out*/;
            resourceInputs["credentialSetResourceId"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["sourceRepository"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["targetRepository"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:containerregistry:CacheRule" }, { type: "azure-native:containerregistry/v20230101preview:CacheRule" }, { type: "azure-native:containerregistry/v20230601preview:CacheRule" }, { type: "azure-native:containerregistry/v20230701:CacheRule" }, { type: "azure-native:containerregistry/v20231101preview:CacheRule" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(CacheRule.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a CacheRule resource.
 */
export interface CacheRuleArgs {
    /**
     * The name of the cache rule.
     */
    cacheRuleName?: pulumi.Input<string>;
    /**
     * The ARM resource ID of the credential store which is associated with the cache rule.
     */
    credentialSetResourceId?: pulumi.Input<string>;
    /**
     * The name of the container registry.
     */
    registryName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Source repository pulled from upstream.
     */
    sourceRepository?: pulumi.Input<string>;
    /**
     * Target repository specified in docker pull command.
     * Eg: docker pull myregistry.azurecr.io/{targetRepository}:{tag}
     */
    targetRepository?: pulumi.Input<string>;
}
