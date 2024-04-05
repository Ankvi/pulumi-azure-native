import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * PaloAltoNetworks GlobalRulestack
 */
export class GlobalRulestack extends pulumi.CustomResource {
    /**
     * Get an existing GlobalRulestack resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): GlobalRulestack {
        return new GlobalRulestack(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:cloudngfw/v20240119preview:GlobalRulestack';

    /**
     * Returns true if the given object is an instance of GlobalRulestack.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is GlobalRulestack {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === GlobalRulestack.__pulumiType;
    }

    /**
     * subscription scope of global rulestack
     */
    public readonly associatedSubscriptions!: pulumi.Output<string[] | undefined>;
    /**
     * Mode for default rules creation
     */
    public readonly defaultMode!: pulumi.Output<string | undefined>;
    /**
     * rulestack description
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The managed service identities assigned to this resource.
     */
    public readonly identity!: pulumi.Output<types.outputs.AzureResourceManagerManagedIdentityPropertiesResponse | undefined>;
    /**
     * Global Location
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * minimum version
     */
    public readonly minAppIdVersion!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * PanEtag info
     */
    public readonly panEtag!: pulumi.Output<string | undefined>;
    /**
     * Rulestack Location, Required for GlobalRulestacks, Not for LocalRulestacks
     */
    public readonly panLocation!: pulumi.Output<string | undefined>;
    /**
     * Provisioning state of the resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Rulestack Type
     */
    public readonly scope!: pulumi.Output<string | undefined>;
    /**
     * Security Profile
     */
    public readonly securityServices!: pulumi.Output<types.outputs.SecurityServicesResponse | undefined>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a GlobalRulestack resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: GlobalRulestackArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            resourceInputs["associatedSubscriptions"] = args ? args.associatedSubscriptions : undefined;
            resourceInputs["defaultMode"] = args ? args.defaultMode : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["globalRulestackName"] = args ? args.globalRulestackName : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["minAppIdVersion"] = args ? args.minAppIdVersion : undefined;
            resourceInputs["panEtag"] = args ? args.panEtag : undefined;
            resourceInputs["panLocation"] = args ? args.panLocation : undefined;
            resourceInputs["scope"] = args ? args.scope : undefined;
            resourceInputs["securityServices"] = args ? args.securityServices : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["associatedSubscriptions"] = undefined /*out*/;
            resourceInputs["defaultMode"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["minAppIdVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["panEtag"] = undefined /*out*/;
            resourceInputs["panLocation"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["scope"] = undefined /*out*/;
            resourceInputs["securityServices"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:cloudngfw:GlobalRulestack" }, { type: "azure-native:cloudngfw/v20220829:GlobalRulestack" }, { type: "azure-native:cloudngfw/v20220829preview:GlobalRulestack" }, { type: "azure-native:cloudngfw/v20230901:GlobalRulestack" }, { type: "azure-native:cloudngfw/v20230901preview:GlobalRulestack" }, { type: "azure-native:cloudngfw/v20231010preview:GlobalRulestack" }, { type: "azure-native:cloudngfw/v20240207preview:GlobalRulestack" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(GlobalRulestack.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a GlobalRulestack resource.
 */
export interface GlobalRulestackArgs {
    /**
     * subscription scope of global rulestack
     */
    associatedSubscriptions?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Mode for default rules creation
     */
    defaultMode?: pulumi.Input<string | types.enums.DefaultMode>;
    /**
     * rulestack description
     */
    description?: pulumi.Input<string>;
    /**
     * GlobalRulestack resource name
     */
    globalRulestackName?: pulumi.Input<string>;
    /**
     * The managed service identities assigned to this resource.
     */
    identity?: pulumi.Input<types.inputs.AzureResourceManagerManagedIdentityPropertiesArgs>;
    /**
     * Global Location
     */
    location?: pulumi.Input<string>;
    /**
     * minimum version
     */
    minAppIdVersion?: pulumi.Input<string>;
    /**
     * PanEtag info
     */
    panEtag?: pulumi.Input<string>;
    /**
     * Rulestack Location, Required for GlobalRulestacks, Not for LocalRulestacks
     */
    panLocation?: pulumi.Input<string>;
    /**
     * Rulestack Type
     */
    scope?: pulumi.Input<string | types.enums.ScopeType>;
    /**
     * Security Profile
     */
    securityServices?: pulumi.Input<types.inputs.SecurityServicesArgs>;
}