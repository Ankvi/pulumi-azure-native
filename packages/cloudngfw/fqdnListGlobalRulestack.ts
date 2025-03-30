import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * GlobalRulestack fqdnList
 *
 * Uses Azure REST API version 2023-09-01.
 *
 * Other available API versions: 2022-08-29, 2022-08-29-preview, 2023-09-01-preview, 2023-10-10-preview, 2024-01-19-preview, 2024-02-07-preview, 2025-02-06-preview.
 */
export class FqdnListGlobalRulestack extends pulumi.CustomResource {
    /**
     * Get an existing FqdnListGlobalRulestack resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): FqdnListGlobalRulestack {
        return new FqdnListGlobalRulestack(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:cloudngfw:FqdnListGlobalRulestack';

    /**
     * Returns true if the given object is an instance of FqdnListGlobalRulestack.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is FqdnListGlobalRulestack {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === FqdnListGlobalRulestack.__pulumiType;
    }

    /**
     * comment for this object
     */
    public readonly auditComment!: pulumi.Output<string | undefined>;
    /**
     * fqdn object description
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * etag info
     */
    public /*out*/ readonly etag!: pulumi.Output<string | undefined>;
    /**
     * fqdn list
     */
    public readonly fqdnList!: pulumi.Output<string[]>;
    /**
     * The name of the resource
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Provisioning state of the resource.
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
     * Create a FqdnListGlobalRulestack resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FqdnListGlobalRulestackArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.fqdnList === undefined) && !opts.urn) {
                throw new Error("Missing required property 'fqdnList'");
            }
            if ((!args || args.globalRulestackName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'globalRulestackName'");
            }
            resourceInputs["auditComment"] = args ? args.auditComment : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["fqdnList"] = args ? args.fqdnList : undefined;
            resourceInputs["globalRulestackName"] = args ? args.globalRulestackName : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["auditComment"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["fqdnList"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:cloudngfw/v20220829:FqdnListGlobalRulestack" }, { type: "azure-native:cloudngfw/v20220829preview:FqdnListGlobalRulestack" }, { type: "azure-native:cloudngfw/v20230901:FqdnListGlobalRulestack" }, { type: "azure-native:cloudngfw/v20230901preview:FqdnListGlobalRulestack" }, { type: "azure-native:cloudngfw/v20231010preview:FqdnListGlobalRulestack" }, { type: "azure-native:cloudngfw/v20240119preview:FqdnListGlobalRulestack" }, { type: "azure-native:cloudngfw/v20240207preview:FqdnListGlobalRulestack" }, { type: "azure-native:cloudngfw/v20250206preview:FqdnListGlobalRulestack" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(FqdnListGlobalRulestack.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a FqdnListGlobalRulestack resource.
 */
export interface FqdnListGlobalRulestackArgs {
    /**
     * comment for this object
     */
    auditComment?: pulumi.Input<string>;
    /**
     * fqdn object description
     */
    description?: pulumi.Input<string>;
    /**
     * fqdn list
     */
    fqdnList: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * GlobalRulestack resource name
     */
    globalRulestackName: pulumi.Input<string>;
    /**
     * fqdn list name
     */
    name?: pulumi.Input<string>;
}