import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A server trust group.
 * Azure REST API version: 2021-11-01. Prior API version in Azure Native 1.x: 2020-11-01-preview.
 *
 * Other available API versions: 2022-11-01-preview, 2023-02-01-preview, 2023-05-01-preview.
 */
export class ServerTrustGroup extends pulumi.CustomResource {
    /**
     * Get an existing ServerTrustGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ServerTrustGroup {
        return new ServerTrustGroup(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:sql:ServerTrustGroup';

    /**
     * Returns true if the given object is an instance of ServerTrustGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ServerTrustGroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ServerTrustGroup.__pulumiType;
    }

    /**
     * Group members information for the server trust group.
     */
    public readonly groupMembers!: pulumi.Output<types.outputs.ServerInfoResponse[]>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Trust scope of the server trust group.
     */
    public readonly trustScopes!: pulumi.Output<string[]>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ServerTrustGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ServerTrustGroupArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.groupMembers === undefined) && !opts.urn) {
                throw new Error("Missing required property 'groupMembers'");
            }
            if ((!args || args.locationName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'locationName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.trustScopes === undefined) && !opts.urn) {
                throw new Error("Missing required property 'trustScopes'");
            }
            resourceInputs["groupMembers"] = args ? args.groupMembers : undefined;
            resourceInputs["locationName"] = args ? args.locationName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serverTrustGroupName"] = args ? args.serverTrustGroupName : undefined;
            resourceInputs["trustScopes"] = args ? args.trustScopes : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["groupMembers"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["trustScopes"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:sql/v20200202preview:ServerTrustGroup" }, { type: "azure-native:sql/v20200801preview:ServerTrustGroup" }, { type: "azure-native:sql/v20201101preview:ServerTrustGroup" }, { type: "azure-native:sql/v20210201preview:ServerTrustGroup" }, { type: "azure-native:sql/v20210501preview:ServerTrustGroup" }, { type: "azure-native:sql/v20210801preview:ServerTrustGroup" }, { type: "azure-native:sql/v20211101:ServerTrustGroup" }, { type: "azure-native:sql/v20211101preview:ServerTrustGroup" }, { type: "azure-native:sql/v20220201preview:ServerTrustGroup" }, { type: "azure-native:sql/v20220501preview:ServerTrustGroup" }, { type: "azure-native:sql/v20220801preview:ServerTrustGroup" }, { type: "azure-native:sql/v20221101preview:ServerTrustGroup" }, { type: "azure-native:sql/v20230201preview:ServerTrustGroup" }, { type: "azure-native:sql/v20230501preview:ServerTrustGroup" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ServerTrustGroup.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ServerTrustGroup resource.
 */
export interface ServerTrustGroupArgs {
    /**
     * Group members information for the server trust group.
     */
    groupMembers: pulumi.Input<pulumi.Input<types.inputs.ServerInfoArgs>[]>;
    /**
     * The name of the region where the resource is located.
     */
    locationName: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the server trust group.
     */
    serverTrustGroupName?: pulumi.Input<string>;
    /**
     * Trust scope of the server trust group.
     */
    trustScopes: pulumi.Input<pulumi.Input<string>[]>;
}
