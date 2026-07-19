import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The inbound rule resource definition.
 *
 * Uses Azure REST API version 2026-04-01-preview.
 */
export class InboundRule extends pulumi.CustomResource {
    /**
     * Get an existing InboundRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): InboundRule {
        return new InboundRule(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:azurestackhci:InboundRule';

    /**
     * Returns true if the given object is an instance of InboundRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is InboundRule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === InboundRule.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    declare public /*out*/ readonly azureApiVersion: pulumi.Output<string>;
    /**
     * The extendedLocation of the resource.
     */
    declare public readonly extendedLocation: pulumi.Output<types.outputs.ExtendedLocationResponse | undefined>;
    /**
     * The name of the resource
     */
    declare public /*out*/ readonly name: pulumi.Output<string>;
    /**
     * The resource-specific properties for this resource.
     */
    declare public readonly properties: pulumi.Output<types.outputs.InboundRulePropertiesResponse>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    declare public /*out*/ readonly systemData: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    declare public /*out*/ readonly type: pulumi.Output<string>;

    /**
     * Create a InboundRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: InboundRuleArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if (args?.natGatewayName === undefined && !opts.urn) {
                throw new Error("Missing required property 'natGatewayName'");
            }
            if (args?.resourceGroupName === undefined && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["extendedLocation"] = args?.extendedLocation;
            resourceInputs["inboundRuleName"] = args?.inboundRuleName;
            resourceInputs["natGatewayName"] = args?.natGatewayName;
            resourceInputs["properties"] = args?.properties;
            resourceInputs["resourceGroupName"] = args?.resourceGroupName;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["extendedLocation"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:azurestackhci/v20260401preview:InboundRule" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(InboundRule.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a InboundRule resource.
 */
export interface InboundRuleArgs {
    /**
     * The extendedLocation of the resource.
     */
    extendedLocation?: pulumi.Input<types.inputs.ExtendedLocationArgs>;
    /**
     * Name of the inbound rule
     */
    inboundRuleName?: pulumi.Input<string>;
    /**
     * Name of the nat gateway
     */
    natGatewayName: pulumi.Input<string>;
    /**
     * The resource-specific properties for this resource.
     */
    properties?: pulumi.Input<types.inputs.InboundRulePropertiesArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}