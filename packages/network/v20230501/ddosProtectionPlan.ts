import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * A DDoS protection plan in a resource group.
 */
export class DdosProtectionPlan extends pulumi.CustomResource {
    /**
     * Get an existing DdosProtectionPlan resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): DdosProtectionPlan {
        return new DdosProtectionPlan(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:network/v20230501:DdosProtectionPlan';

    /**
     * Returns true if the given object is an instance of DdosProtectionPlan.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DdosProtectionPlan {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DdosProtectionPlan.__pulumiType;
    }

    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * Resource location.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The provisioning state of the DDoS protection plan resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The list of public IPs associated with the DDoS protection plan resource. This list is read-only.
     */
    public /*out*/ readonly publicIPAddresses!: pulumi.Output<types.outputs.network.v20230501.SubResourceResponse[]>;
    /**
     * The resource GUID property of the DDoS protection plan resource. It uniquely identifies the resource, even if the user changes its name or migrate the resource across subscriptions or resource groups.
     */
    public /*out*/ readonly resourceGuid!: pulumi.Output<string>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The list of virtual networks associated with the DDoS protection plan resource. This list is read-only.
     */
    public /*out*/ readonly virtualNetworks!: pulumi.Output<types.outputs.network.v20230501.SubResourceResponse[]>;

    /**
     * Create a DdosProtectionPlan resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DdosProtectionPlanArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["ddosProtectionPlanName"] = args ? args.ddosProtectionPlanName : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["publicIPAddresses"] = undefined /*out*/;
            resourceInputs["resourceGuid"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["virtualNetworks"] = undefined /*out*/;
        } else {
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["publicIPAddresses"] = undefined /*out*/;
            resourceInputs["resourceGuid"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["virtualNetworks"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:network:DdosProtectionPlan" }, { type: "azure-native:network/v20180201:DdosProtectionPlan" }, { type: "azure-native:network/v20180401:DdosProtectionPlan" }, { type: "azure-native:network/v20180601:DdosProtectionPlan" }, { type: "azure-native:network/v20180701:DdosProtectionPlan" }, { type: "azure-native:network/v20180801:DdosProtectionPlan" }, { type: "azure-native:network/v20181001:DdosProtectionPlan" }, { type: "azure-native:network/v20181101:DdosProtectionPlan" }, { type: "azure-native:network/v20181201:DdosProtectionPlan" }, { type: "azure-native:network/v20190201:DdosProtectionPlan" }, { type: "azure-native:network/v20190401:DdosProtectionPlan" }, { type: "azure-native:network/v20190601:DdosProtectionPlan" }, { type: "azure-native:network/v20190701:DdosProtectionPlan" }, { type: "azure-native:network/v20190801:DdosProtectionPlan" }, { type: "azure-native:network/v20190901:DdosProtectionPlan" }, { type: "azure-native:network/v20191101:DdosProtectionPlan" }, { type: "azure-native:network/v20191201:DdosProtectionPlan" }, { type: "azure-native:network/v20200301:DdosProtectionPlan" }, { type: "azure-native:network/v20200401:DdosProtectionPlan" }, { type: "azure-native:network/v20200501:DdosProtectionPlan" }, { type: "azure-native:network/v20200601:DdosProtectionPlan" }, { type: "azure-native:network/v20200701:DdosProtectionPlan" }, { type: "azure-native:network/v20200801:DdosProtectionPlan" }, { type: "azure-native:network/v20201101:DdosProtectionPlan" }, { type: "azure-native:network/v20210201:DdosProtectionPlan" }, { type: "azure-native:network/v20210301:DdosProtectionPlan" }, { type: "azure-native:network/v20210501:DdosProtectionPlan" }, { type: "azure-native:network/v20210801:DdosProtectionPlan" }, { type: "azure-native:network/v20220101:DdosProtectionPlan" }, { type: "azure-native:network/v20220501:DdosProtectionPlan" }, { type: "azure-native:network/v20220701:DdosProtectionPlan" }, { type: "azure-native:network/v20220901:DdosProtectionPlan" }, { type: "azure-native:network/v20221101:DdosProtectionPlan" }, { type: "azure-native:network/v20230201:DdosProtectionPlan" }, { type: "azure-native:network/v20230401:DdosProtectionPlan" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(DdosProtectionPlan.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a DdosProtectionPlan resource.
 */
export interface DdosProtectionPlanArgs {
    /**
     * The name of the DDoS protection plan.
     */
    ddosProtectionPlanName?: pulumi.Input<string>;
    /**
     * Resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
