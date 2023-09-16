import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * ExpressRoutePort Authorization resource definition.
 * Azure REST API version: 2023-02-01. Prior API version in Azure Native 1.x: 2022-01-01
 */
export class ExpressRoutePortAuthorization extends pulumi.CustomResource {
    /**
     * Get an existing ExpressRoutePortAuthorization resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ExpressRoutePortAuthorization {
        return new ExpressRoutePortAuthorization(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:network:ExpressRoutePortAuthorization';

    /**
     * Returns true if the given object is an instance of ExpressRoutePortAuthorization.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ExpressRoutePortAuthorization {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ExpressRoutePortAuthorization.__pulumiType;
    }

    /**
     * The authorization key.
     */
    public /*out*/ readonly authorizationKey!: pulumi.Output<string>;
    /**
     * The authorization use status.
     */
    public /*out*/ readonly authorizationUseStatus!: pulumi.Output<string>;
    /**
     * The reference to the ExpressRoute circuit resource using the authorization.
     */
    public /*out*/ readonly circuitResourceUri!: pulumi.Output<string>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    public readonly name!: pulumi.Output<string | undefined>;
    /**
     * The provisioning state of the authorization resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ExpressRoutePortAuthorization resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ExpressRoutePortAuthorizationArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.expressRoutePortName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'expressRoutePortName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["authorizationName"] = args ? args.authorizationName : undefined;
            resourceInputs["expressRoutePortName"] = args ? args.expressRoutePortName : undefined;
            resourceInputs["id"] = args ? args.id : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["authorizationKey"] = undefined /*out*/;
            resourceInputs["authorizationUseStatus"] = undefined /*out*/;
            resourceInputs["circuitResourceUri"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["authorizationKey"] = undefined /*out*/;
            resourceInputs["authorizationUseStatus"] = undefined /*out*/;
            resourceInputs["circuitResourceUri"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:network/v20210801:ExpressRoutePortAuthorization" }, { type: "azure-native:network/v20220101:ExpressRoutePortAuthorization" }, { type: "azure-native:network/v20220501:ExpressRoutePortAuthorization" }, { type: "azure-native:network/v20220701:ExpressRoutePortAuthorization" }, { type: "azure-native:network/v20220901:ExpressRoutePortAuthorization" }, { type: "azure-native:network/v20221101:ExpressRoutePortAuthorization" }, { type: "azure-native:network/v20230201:ExpressRoutePortAuthorization" }, { type: "azure-native:network/v20230401:ExpressRoutePortAuthorization" }, { type: "azure-native:network/v20230501:ExpressRoutePortAuthorization" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ExpressRoutePortAuthorization.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ExpressRoutePortAuthorization resource.
 */
export interface ExpressRoutePortAuthorizationArgs {
    /**
     * The name of the authorization.
     */
    authorizationName?: pulumi.Input<string>;
    /**
     * The name of the express route port.
     */
    expressRoutePortName: pulumi.Input<string>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}
