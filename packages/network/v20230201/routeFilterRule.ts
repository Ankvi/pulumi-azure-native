import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Route Filter Rule Resource.
 */
export class RouteFilterRule extends pulumi.CustomResource {
    /**
     * Get an existing RouteFilterRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): RouteFilterRule {
        return new RouteFilterRule(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:network/v20230201:RouteFilterRule';

    /**
     * Returns true if the given object is an instance of RouteFilterRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is RouteFilterRule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === RouteFilterRule.__pulumiType;
    }

    /**
     * The access type of the rule.
     */
    public readonly access!: pulumi.Output<string>;
    /**
     * The collection for bgp community values to filter on. e.g. ['12076:5010','12076:5020'].
     */
    public readonly communities!: pulumi.Output<string[]>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * Resource location.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    public readonly name!: pulumi.Output<string | undefined>;
    /**
     * The provisioning state of the route filter rule resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The rule type of the rule.
     */
    public readonly routeFilterRuleType!: pulumi.Output<string>;

    /**
     * Create a RouteFilterRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RouteFilterRuleArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.access === undefined) && !opts.urn) {
                throw new Error("Missing required property 'access'");
            }
            if ((!args || args.communities === undefined) && !opts.urn) {
                throw new Error("Missing required property 'communities'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.routeFilterName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'routeFilterName'");
            }
            if ((!args || args.routeFilterRuleType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'routeFilterRuleType'");
            }
            resourceInputs["access"] = args ? args.access : undefined;
            resourceInputs["communities"] = args ? args.communities : undefined;
            resourceInputs["id"] = args ? args.id : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["routeFilterName"] = args ? args.routeFilterName : undefined;
            resourceInputs["routeFilterRuleType"] = args ? args.routeFilterRuleType : undefined;
            resourceInputs["ruleName"] = args ? args.ruleName : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
        } else {
            resourceInputs["access"] = undefined /*out*/;
            resourceInputs["communities"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["routeFilterRuleType"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:network:RouteFilterRule" }, { type: "azure-native:network/v20161201:RouteFilterRule" }, { type: "azure-native:network/v20170301:RouteFilterRule" }, { type: "azure-native:network/v20170601:RouteFilterRule" }, { type: "azure-native:network/v20170801:RouteFilterRule" }, { type: "azure-native:network/v20170901:RouteFilterRule" }, { type: "azure-native:network/v20171001:RouteFilterRule" }, { type: "azure-native:network/v20171101:RouteFilterRule" }, { type: "azure-native:network/v20180101:RouteFilterRule" }, { type: "azure-native:network/v20180201:RouteFilterRule" }, { type: "azure-native:network/v20180401:RouteFilterRule" }, { type: "azure-native:network/v20180601:RouteFilterRule" }, { type: "azure-native:network/v20180701:RouteFilterRule" }, { type: "azure-native:network/v20180801:RouteFilterRule" }, { type: "azure-native:network/v20181001:RouteFilterRule" }, { type: "azure-native:network/v20181101:RouteFilterRule" }, { type: "azure-native:network/v20181201:RouteFilterRule" }, { type: "azure-native:network/v20190201:RouteFilterRule" }, { type: "azure-native:network/v20190401:RouteFilterRule" }, { type: "azure-native:network/v20190601:RouteFilterRule" }, { type: "azure-native:network/v20190701:RouteFilterRule" }, { type: "azure-native:network/v20190801:RouteFilterRule" }, { type: "azure-native:network/v20190901:RouteFilterRule" }, { type: "azure-native:network/v20191101:RouteFilterRule" }, { type: "azure-native:network/v20191201:RouteFilterRule" }, { type: "azure-native:network/v20200301:RouteFilterRule" }, { type: "azure-native:network/v20200401:RouteFilterRule" }, { type: "azure-native:network/v20200501:RouteFilterRule" }, { type: "azure-native:network/v20200601:RouteFilterRule" }, { type: "azure-native:network/v20200701:RouteFilterRule" }, { type: "azure-native:network/v20200801:RouteFilterRule" }, { type: "azure-native:network/v20201101:RouteFilterRule" }, { type: "azure-native:network/v20210201:RouteFilterRule" }, { type: "azure-native:network/v20210301:RouteFilterRule" }, { type: "azure-native:network/v20210501:RouteFilterRule" }, { type: "azure-native:network/v20210801:RouteFilterRule" }, { type: "azure-native:network/v20220101:RouteFilterRule" }, { type: "azure-native:network/v20220501:RouteFilterRule" }, { type: "azure-native:network/v20220701:RouteFilterRule" }, { type: "azure-native:network/v20220901:RouteFilterRule" }, { type: "azure-native:network/v20221101:RouteFilterRule" }, { type: "azure-native:network/v20230401:RouteFilterRule" }, { type: "azure-native:network/v20230501:RouteFilterRule" }, { type: "azure-native:network/v20230601:RouteFilterRule" }, { type: "azure-native:network/v20230901:RouteFilterRule" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(RouteFilterRule.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a RouteFilterRule resource.
 */
export interface RouteFilterRuleArgs {
    /**
     * The access type of the rule.
     */
    access: pulumi.Input<string | types.enums.Access>;
    /**
     * The collection for bgp community values to filter on. e.g. ['12076:5010','12076:5020'].
     */
    communities: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * Resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the route filter.
     */
    routeFilterName: pulumi.Input<string>;
    /**
     * The rule type of the rule.
     */
    routeFilterRuleType: pulumi.Input<string | types.enums.RouteFilterRuleType>;
    /**
     * The name of the route filter rule.
     */
    ruleName?: pulumi.Input<string>;
}