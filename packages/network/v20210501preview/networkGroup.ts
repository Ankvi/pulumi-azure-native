import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The network group resource
 */
export class NetworkGroup extends pulumi.CustomResource {
    /**
     * Get an existing NetworkGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): NetworkGroup {
        return new NetworkGroup(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:network/v20210501preview:NetworkGroup';

    /**
     * Returns true if the given object is an instance of NetworkGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NetworkGroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NetworkGroup.__pulumiType;
    }

    /**
     * A description of the network group.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * A friendly name for the network group.
     */
    public readonly displayName!: pulumi.Output<string | undefined>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * Group member type.
     */
    public readonly memberType!: pulumi.Output<string>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The provisioning state of the scope assignment resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The system metadata related to this resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a NetworkGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NetworkGroupArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.memberType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'memberType'");
            }
            if ((!args || args.networkManagerName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'networkManagerName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["memberType"] = args ? args.memberType : undefined;
            resourceInputs["networkGroupName"] = args ? args.networkGroupName : undefined;
            resourceInputs["networkManagerName"] = args ? args.networkManagerName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["memberType"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:network:NetworkGroup" }, { type: "azure-native:network/v20210201preview:NetworkGroup" }, { type: "azure-native:network/v20220101:NetworkGroup" }, { type: "azure-native:network/v20220201preview:NetworkGroup" }, { type: "azure-native:network/v20220401preview:NetworkGroup" }, { type: "azure-native:network/v20220501:NetworkGroup" }, { type: "azure-native:network/v20220701:NetworkGroup" }, { type: "azure-native:network/v20220901:NetworkGroup" }, { type: "azure-native:network/v20221101:NetworkGroup" }, { type: "azure-native:network/v20230201:NetworkGroup" }, { type: "azure-native:network/v20230401:NetworkGroup" }, { type: "azure-native:network/v20230501:NetworkGroup" }, { type: "azure-native:network/v20230601:NetworkGroup" }, { type: "azure-native:network/v20230901:NetworkGroup" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(NetworkGroup.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a NetworkGroup resource.
 */
export interface NetworkGroupArgs {
    /**
     * A description of the network group.
     */
    description?: pulumi.Input<string>;
    /**
     * A friendly name for the network group.
     */
    displayName?: pulumi.Input<string>;
    /**
     * Group member type.
     */
    memberType: pulumi.Input<string>;
    /**
     * The name of the network group.
     */
    networkGroupName?: pulumi.Input<string>;
    /**
     * The name of the network manager.
     */
    networkManagerName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}