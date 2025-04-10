import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * ExpressRoute Circuit Authorization
 *
 * Uses Azure REST API version 2022-05-01. In version 1.x of the Azure Native provider, it used API version 2020-03-20.
 *
 * Other available API versions: 2023-03-01, 2023-09-01.
 */
export class Authorization extends pulumi.CustomResource {
    /**
     * Get an existing Authorization resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Authorization {
        return new Authorization(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:avs:Authorization';

    /**
     * Returns true if the given object is an instance of Authorization.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Authorization {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Authorization.__pulumiType;
    }

    /**
     * The ID of the ExpressRoute Circuit Authorization
     */
    public /*out*/ readonly expressRouteAuthorizationId!: pulumi.Output<string>;
    /**
     * The key of the ExpressRoute Circuit Authorization
     */
    public /*out*/ readonly expressRouteAuthorizationKey!: pulumi.Output<string>;
    /**
     * The ID of the ExpressRoute Circuit
     */
    public readonly expressRouteId!: pulumi.Output<string | undefined>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The state of the  ExpressRoute Circuit Authorization provisioning
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Authorization resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AuthorizationArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.privateCloudName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'privateCloudName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["authorizationName"] = args ? args.authorizationName : undefined;
            resourceInputs["expressRouteId"] = args ? args.expressRouteId : undefined;
            resourceInputs["privateCloudName"] = args ? args.privateCloudName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["expressRouteAuthorizationId"] = undefined /*out*/;
            resourceInputs["expressRouteAuthorizationKey"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["expressRouteAuthorizationId"] = undefined /*out*/;
            resourceInputs["expressRouteAuthorizationKey"] = undefined /*out*/;
            resourceInputs["expressRouteId"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:avs/v20200320:Authorization" }, { type: "azure-native:avs/v20200717preview:Authorization" }, { type: "azure-native:avs/v20210101preview:Authorization" }, { type: "azure-native:avs/v20210601:Authorization" }, { type: "azure-native:avs/v20211201:Authorization" }, { type: "azure-native:avs/v20220501:Authorization" }, { type: "azure-native:avs/v20230301:Authorization" }, { type: "azure-native:avs/v20230901:Authorization" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Authorization.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Authorization resource.
 */
export interface AuthorizationArgs {
    /**
     * Name of the ExpressRoute Circuit Authorization in the private cloud
     */
    authorizationName?: pulumi.Input<string>;
    /**
     * The ID of the ExpressRoute Circuit
     */
    expressRouteId?: pulumi.Input<string>;
    /**
     * The name of the private cloud.
     */
    privateCloudName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}