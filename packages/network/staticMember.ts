import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * StaticMember Item.
 * Azure REST API version: 2023-02-01. Prior API version in Azure Native 1.x: 2022-02-01-preview
 */
export class StaticMember extends pulumi.CustomResource {
    /**
     * Get an existing StaticMember resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): StaticMember {
        return new StaticMember(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:network:StaticMember';

    /**
     * Returns true if the given object is an instance of StaticMember.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is StaticMember {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === StaticMember.__pulumiType;
    }

    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The provisioning state of the scope assignment resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Resource region.
     */
    public /*out*/ readonly region!: pulumi.Output<string>;
    /**
     * Resource Id.
     */
    public readonly resourceId!: pulumi.Output<string | undefined>;
    /**
     * The system metadata related to this resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a StaticMember resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: StaticMemberArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.networkGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'networkGroupName'");
            }
            if ((!args || args.networkManagerName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'networkManagerName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["networkGroupName"] = args ? args.networkGroupName : undefined;
            resourceInputs["networkManagerName"] = args ? args.networkManagerName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["resourceId"] = args ? args.resourceId : undefined;
            resourceInputs["staticMemberName"] = args ? args.staticMemberName : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["region"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["region"] = undefined /*out*/;
            resourceInputs["resourceId"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:network/v20210501preview:StaticMember" }, { type: "azure-native:network/v20220101:StaticMember" }, { type: "azure-native:network/v20220201preview:StaticMember" }, { type: "azure-native:network/v20220401preview:StaticMember" }, { type: "azure-native:network/v20220501:StaticMember" }, { type: "azure-native:network/v20220701:StaticMember" }, { type: "azure-native:network/v20220901:StaticMember" }, { type: "azure-native:network/v20221101:StaticMember" }, { type: "azure-native:network/v20230201:StaticMember" }, { type: "azure-native:network/v20230401:StaticMember" }, { type: "azure-native:network/v20230501:StaticMember" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(StaticMember.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a StaticMember resource.
 */
export interface StaticMemberArgs {
    /**
     * The name of the network group.
     */
    networkGroupName: pulumi.Input<string>;
    /**
     * The name of the network manager.
     */
    networkManagerName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource Id.
     */
    resourceId?: pulumi.Input<string>;
    /**
     * The name of the static member.
     */
    staticMemberName?: pulumi.Input<string>;
}
