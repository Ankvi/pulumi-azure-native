import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * PostRulestack rule list
 */
export class PostRule extends pulumi.CustomResource {
    /**
     * Get an existing PostRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): PostRule {
        return new PostRule(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:cloudngfw/v20220829preview:PostRule';

    /**
     * Returns true if the given object is an instance of PostRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PostRule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PostRule.__pulumiType;
    }

    /**
     * rule action
     */
    public readonly actionType!: pulumi.Output<string | undefined>;
    /**
     * array of rule applications
     */
    public readonly applications!: pulumi.Output<string[] | undefined>;
    /**
     * rule comment
     */
    public readonly auditComment!: pulumi.Output<string | undefined>;
    /**
     * rule category
     */
    public readonly category!: pulumi.Output<types.outputs.CategoryResponse | undefined>;
    /**
     * enable or disable decryption
     */
    public readonly decryptionRuleType!: pulumi.Output<string | undefined>;
    /**
     * rule description
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * destination address
     */
    public readonly destination!: pulumi.Output<types.outputs.DestinationAddrResponse | undefined>;
    /**
     * enable or disable logging
     */
    public readonly enableLogging!: pulumi.Output<string | undefined>;
    /**
     * etag info
     */
    public /*out*/ readonly etag!: pulumi.Output<string | undefined>;
    /**
     * inbound Inspection Certificate
     */
    public readonly inboundInspectionCertificate!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * cidr should not be 'any'
     */
    public readonly negateDestination!: pulumi.Output<string | undefined>;
    /**
     * cidr should not be 'any'
     */
    public readonly negateSource!: pulumi.Output<string | undefined>;
    public readonly priority!: pulumi.Output<number>;
    /**
     * any, application-default, TCP:number, UDP:number
     */
    public readonly protocol!: pulumi.Output<string | undefined>;
    /**
     * prot port list
     */
    public readonly protocolPortList!: pulumi.Output<string[] | undefined>;
    /**
     * Provisioning state of the resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * rule name
     */
    public readonly ruleName!: pulumi.Output<string>;
    /**
     * state of this rule
     */
    public readonly ruleState!: pulumi.Output<string | undefined>;
    /**
     * source address
     */
    public readonly source!: pulumi.Output<types.outputs.SourceAddrResponse | undefined>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * tag for rule
     */
    public readonly tags!: pulumi.Output<types.outputs.TagInfoResponse[] | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a PostRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PostRuleArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.globalRulestackName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'globalRulestackName'");
            }
            if ((!args || args.ruleName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'ruleName'");
            }
            resourceInputs["actionType"] = args ? args.actionType : undefined;
            resourceInputs["applications"] = args ? args.applications : undefined;
            resourceInputs["auditComment"] = args ? args.auditComment : undefined;
            resourceInputs["category"] = args ? args.category : undefined;
            resourceInputs["decryptionRuleType"] = args ? args.decryptionRuleType : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["destination"] = args ? args.destination : undefined;
            resourceInputs["enableLogging"] = args ? args.enableLogging : undefined;
            resourceInputs["globalRulestackName"] = args ? args.globalRulestackName : undefined;
            resourceInputs["inboundInspectionCertificate"] = args ? args.inboundInspectionCertificate : undefined;
            resourceInputs["negateDestination"] = args ? args.negateDestination : undefined;
            resourceInputs["negateSource"] = args ? args.negateSource : undefined;
            resourceInputs["priority"] = args ? args.priority : undefined;
            resourceInputs["protocol"] = (args ? args.protocol : undefined) ?? "application-default";
            resourceInputs["protocolPortList"] = args ? args.protocolPortList : undefined;
            resourceInputs["ruleName"] = args ? args.ruleName : undefined;
            resourceInputs["ruleState"] = args ? args.ruleState : undefined;
            resourceInputs["source"] = args ? args.source : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["actionType"] = undefined /*out*/;
            resourceInputs["applications"] = undefined /*out*/;
            resourceInputs["auditComment"] = undefined /*out*/;
            resourceInputs["category"] = undefined /*out*/;
            resourceInputs["decryptionRuleType"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["destination"] = undefined /*out*/;
            resourceInputs["enableLogging"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["inboundInspectionCertificate"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["negateDestination"] = undefined /*out*/;
            resourceInputs["negateSource"] = undefined /*out*/;
            resourceInputs["priority"] = undefined /*out*/;
            resourceInputs["protocol"] = undefined /*out*/;
            resourceInputs["protocolPortList"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["ruleName"] = undefined /*out*/;
            resourceInputs["ruleState"] = undefined /*out*/;
            resourceInputs["source"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:cloudngfw:PostRule" }, { type: "azure-native:cloudngfw/v20220829:PostRule" }, { type: "azure-native:cloudngfw/v20230901:PostRule" }, { type: "azure-native:cloudngfw/v20230901preview:PostRule" }, { type: "azure-native:cloudngfw/v20231010preview:PostRule" }, { type: "azure-native:cloudngfw/v20240119preview:PostRule" }, { type: "azure-native:cloudngfw/v20240207preview:PostRule" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(PostRule.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a PostRule resource.
 */
export interface PostRuleArgs {
    /**
     * rule action
     */
    actionType?: pulumi.Input<string | types.enums.ActionEnum>;
    /**
     * array of rule applications
     */
    applications?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * rule comment
     */
    auditComment?: pulumi.Input<string>;
    /**
     * rule category
     */
    category?: pulumi.Input<types.inputs.CategoryArgs>;
    /**
     * enable or disable decryption
     */
    decryptionRuleType?: pulumi.Input<string | types.enums.DecryptionRuleTypeEnum>;
    /**
     * rule description
     */
    description?: pulumi.Input<string>;
    /**
     * destination address
     */
    destination?: pulumi.Input<types.inputs.DestinationAddrArgs>;
    /**
     * enable or disable logging
     */
    enableLogging?: pulumi.Input<string | types.enums.StateEnum>;
    /**
     * GlobalRulestack resource name
     */
    globalRulestackName: pulumi.Input<string>;
    /**
     * inbound Inspection Certificate
     */
    inboundInspectionCertificate?: pulumi.Input<string>;
    /**
     * cidr should not be 'any'
     */
    negateDestination?: pulumi.Input<string | types.enums.BooleanEnum>;
    /**
     * cidr should not be 'any'
     */
    negateSource?: pulumi.Input<string | types.enums.BooleanEnum>;
    /**
     * Post Rule priority
     */
    priority?: pulumi.Input<string>;
    /**
     * any, application-default, TCP:number, UDP:number
     */
    protocol?: pulumi.Input<string>;
    /**
     * prot port list
     */
    protocolPortList?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * rule name
     */
    ruleName: pulumi.Input<string>;
    /**
     * state of this rule
     */
    ruleState?: pulumi.Input<string | types.enums.StateEnum>;
    /**
     * source address
     */
    source?: pulumi.Input<types.inputs.SourceAddrArgs>;
    /**
     * tag for rule
     */
    tags?: pulumi.Input<pulumi.Input<types.inputs.TagInfoArgs>[]>;
}